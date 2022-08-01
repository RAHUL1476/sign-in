_led.addApi('restrictedEditor', (function () {//No I18n
  const modelsWithRestrictions = {};
  const type = _led.checkType;
  const sortRangesInAscendingOrder = function (rangeObject1, rangeObject2) {
    const rangeA = rangeObject1.range;
    const rangeB = rangeObject2.range;
    if (
      rangeA[0] < rangeB[0] ||
      (rangeA[0] === rangeB[0] && rangeA[3] < rangeB[1])
    ) {
      return 1;
    }
  }
  const normalizeRange = function (range, content) {
    const lines = content.split('\n');
    const noOfLines = lines.length;
    const normalizedRange = [];
    range.forEach(function (value, index) {
      if (value === 0) {
        _led.throw.error('Range values cannot be zero');//No I18n
      }
      switch (index) {
        case 0: {
          if (value < 0) {
            _led.throw.error('Start Line of Range cannot be negative');//No I18n
          } else if (value > noOfLines) {
            _led.throw.error('Provided Start Line(' + value + ') is out of bounds. Max Lines in content is ' + noOfLines);//No I18n
          }
          normalizedRange[index] = value;
        }
          break;
        case 1: {
          let actualStartCol = value;
          const startLineNo = normalizedRange[0];
          const maxCols = lines[startLineNo - 1].length
          if (actualStartCol < 0) {
            actualStartCol = maxCols - Math.abs(actualStartCol);
            if (actualStartCol < 0) {
              _led.throw.error('Provided Start Column(' + value + ') is out of bounds. Max Column in line ' + startLineNo + ' is ' + maxCols);//No I18n
            }
          } else if (actualStartCol > (maxCols + 1)) {
            _led.throw.error('Provided Start Column(' + value + ') is out of bounds. Max Column in line ' + startLineNo + ' is ' + maxCols);//No I18n
          }
          normalizedRange[index] = actualStartCol;
        }
          break;
        case 2: {
          let actualEndLine = value;
          if (actualEndLine < 0) {
            actualEndLine = noOfLines - Math.abs(value);
            if (actualEndLine < 0) {
              _led.throw.error('Provided End Line(' + value + ') is out of bounds. Max Lines in content is ' + noOfLines);//No I18n
            }
            if (actualEndLine < normalizedRange[0]) {
              _led.throw.warning('Provided End Line(' + value + ') is less than the start Line, the Restriction may not behave as expected');//No I18n
            }
          } else if (value > noOfLines) {
            _led.throw.error('Provided End Line(' + value + ') is out of bounds. Max Lines in content is ' + noOfLines);//No I18n
          }
          normalizedRange[index] = actualEndLine;
        }
          break;
        case 3: {
          let actualEndCol = value;
          const endLineNo = normalizedRange[2];
          const maxCols = lines[endLineNo - 1].length
          if (actualEndCol < 0) {
            actualEndCol = maxCols - Math.abs(actualEndCol);
            if (actualEndCol < 0) {
              _led.throw.error('Provided End Column(' + value + ') is out of bounds. Max Column in line ' + endLineNo + ' is ' + maxCols);//No I18n
            }
          } else if (actualEndCol > (maxCols + 1)) {
            _led.throw.error('Provided Start Column(' + value + ') is out of bounds. Max Column in line ' + endLineNo + ' is ' + maxCols);//No I18n
          }
          normalizedRange[index] = actualEndCol;
        }
          break;
      }
    })
    return normalizedRange;
  }
  const addRangeRestrictionsTo = function (model, ranges, rangeConstructor) {
    let restrictions = _led.deepClone(ranges).sort(sortRangesInAscendingOrder);
    const prepareRestrictions = function (restrictions) {
      const content = model.getValue();
      restrictions.forEach(function (restriction, index) {
        const range = normalizeRange(restriction.range, content);
        const startLine = range[0];
        const startCol = range[1];
        const endLine = range[2];
        const endCol = range[3];
        restriction._originalRange = range.slice();
        restriction.range = new rangeConstructor(startLine, startCol, endLine, endCol);
        restriction.index = index;
        if (!restriction.allowMultiline) {
          restriction.allowMultiline = rangeConstructor.spansMultipleLines(restriction.range)
        }
        if (!restriction.label) {
          restriction.label = `[${startLine},${startCol} -> ${endLine}${endCol}]`;
        }
      });
    }
    const getCurrentEditableRanges = function () {
      return restrictions.reduce(function (acc, restriction) {
        acc[restriction.label] = {
          allowMultiline: restriction.allowMultiline || false,
          index: restriction.index,
          range: Object.assign({}, restriction.range),
          originalRange: restriction._originalRange.slice()
        };
        return acc;
      }, {});
    }
    const getValueInEditableRanges = function () {
      return restrictions.reduce(function (acc, restriction) {
        acc[restriction.label] = model.getValueInRange(restriction.range);
        return acc;
      }, {});
    }
    const disposeRestrictions = function () {
      model._restrictionChangeListener.dispose();
      delete model.editInRestrictedArea;
      delete model.disposeRestrictions;
      delete model.getValueInEditableRanges;
      delete model.updateRestrictions;
      delete model.getCurrentEditableRanges;
      delete model._isLyteRestrictedModel;
      delete model._isCursorAtCheckPoint;
      delete model._currentCursorPositions;
      delete model._editableRangeChangeListener;
      delete model._restrictionChangeListener;
      return model;
    }
    const isCursorAtCheckPoint = function (positions) {
      positions.some(function (position) {
        const posLineNumber = position.lineNumber;
        const posCol = position.column;
        const length = restrictions.length;
        for (let i = 0; i < length; i++) {
          const range = restrictions[i].range;
          if (
            (range.startLineNumber === posLineNumber && range.startColumn === posCol) ||
            (range.endLineNumber === posLineNumber && range.endColumn === posCol)
          ) {
            model.pushStackElement();
            return true;
          }
        }
      });
    }
    const addEditableRangeListener = function (callback) {
      if (type.function(callback)) {
        model._editableRangeChangeListener.push(callback);
      }
    }
    const triggerChangeListenersWith = function (currentChanges, allChanges) {
      const currentRanges = getCurrentEditableRanges();
      model._editableRangeChangeListener.forEach(function (callback) {
        callback.call(model, currentChanges, allChanges, currentRanges);
      });
    }
    const doUndo = function () {
      return Promise.resolve().then(function () {
        model.editInRestrictedArea = true;
        model.undo();
        model.editInRestrictedArea = false;
      });
    };
    const updateRange = function (restriction, range, finalLine, finalColumn, changes, changeIndex) {
      let oldRangeEndLineNumber = range.endLineNumber;
      let oldRangeEndColumn = range.endColumn;
      restriction.range = range.setEndPosition(finalLine, finalColumn);
      const length = restrictions.length;
      let changesLength = changes.length;
      const diffInCol = finalColumn - oldRangeEndColumn;
      const diffInRow = finalLine - oldRangeEndLineNumber;

      const cursorPositions = model._currentCursorPositions || [];
      const noOfCursorPositions = cursorPositions.length;
      // if (noOfCursorPositions > 0) {
      if (changesLength !== noOfCursorPositions) {
        changes = changes.filter(function (change) {
          const range = change.range;
          for (let i = 0; i < noOfCursorPositions; i++) {
            const cursorPosition = cursorPositions[i];
            if (
              (range.startLineNumber === cursorPosition.startLineNumber) &&
              (range.endLineNumber === cursorPosition.endLineNumber) &&
              (range.startColumn === cursorPosition.startColumn) &&
              (range.endColumn === cursorPosition.endColumn)
            ) {
              return true;
            }
          }
          return false;
        });
        changesLength = changes.length;
      }
      if (diffInRow !== 0) {
        for (let i = restriction.index + 1; i < length; i++) {
          const nextRestriction = restrictions[i];
          const nextRange = nextRestriction.range;
          if (oldRangeEndLineNumber === nextRange.startLineNumber) {
            nextRange.startColumn += diffInCol;
          }
          if (oldRangeEndLineNumber === nextRange.endLineNumber) {
            nextRange.endColumn += diffInCol;
          }
          nextRange.startLineNumber += diffInRow;
          nextRange.endLineNumber += diffInRow;
          nextRestriction.range = nextRange;
        }
        for (let i = changeIndex + 1; i < changesLength; i++) {
          const nextChange = changes[i];
          const rangeInChange = nextChange.range;
          const rangeAsString = rangeInChange.toString();
          const rangeMapValue = rangeMap[rangeAsString];
          delete rangeMap[rangeAsString];
          if (oldRangeEndLineNumber === rangeInChange.startLineNumber) {
            rangeInChange.startColumn += diffInCol;
          }
          if (oldRangeEndLineNumber === rangeInChange.endLineNumber) {
            rangeInChange.endColumn += diffInCol;
          }
          rangeInChange.startLineNumber += diffInRow;
          rangeInChange.endLineNumber += diffInRow;
          nextChange.range = rangeInChange;
          rangeMap[rangeInChange.toString()] = rangeMapValue;
        }
      } else {
        // Only Column might have changed
        for (let i = restriction.index + 1; i < length; i++) {
          const nextRestriction = restrictions[i];
          const nextRange = nextRestriction.range;
          if (nextRange.startLineNumber > oldRangeEndLineNumber) {
            break;
          } else {
            nextRange.startColumn += diffInCol;
            nextRange.endColumn += diffInCol;
            nextRestriction.range = nextRange;
          }
        }
        for (let i = changeIndex + 1; i < changesLength; i++) {
          // rangeMap
          const nextChange = changes[i];
          const rangeInChange = nextChange.range;
          const rangeAsString = rangeInChange.toString();
          const rangeMapValue = rangeMap[rangeAsString];
          delete rangeMap[rangeAsString];
          if (rangeInChange.startLineNumber > oldRangeEndLineNumber) {
            rangeMap[rangeInChange.toString()] = rangeMapValue;
            break;
          } else {
            rangeInChange.startColumn += diffInCol;
            rangeInChange.endColumn += diffInCol;
            nextChange.range = rangeInChange;
            rangeMap[rangeInChange.toString()] = rangeMapValue;
          }
        }
      }
      // }
    };
    const getInfoFrom = function (change, editableRange) {
      const info = {};
      const range = change.range;
      // Get State
      if (change.text === '') {
        info.isDeletion = true;
      } else if (
        (range.startLineNumber === range.endLineNumber) &&
        (range.startColumn === range.endColumn)
      ) {
        info.isAddition = true;
      } else {
        info.isReplacement = true;
      }
      // Get Position Of Range
      info.startLineOfRange = range.startLineNumber === editableRange.startLineNumber;
      info.startColumnOfRange = range.startColumn === editableRange.startColumn;

      info.endLineOfRange = range.endLineNumber === editableRange.endLineNumber;
      info.endColumnOfRange = range.endColumn === editableRange.endColumn;

      info.middleLineOfRange = !info.startLineOfRange && !info.endLineOfRange;

      // Editable Range Span
      if (editableRange.startLineNumber === editableRange.endLineNumber) {
        info.rangeIsSingleLine = true;
      } else {
        info.rangeIsMultiLine = true;
      }
      return info;
    };
    const updateRestrictions = function (ranges) {
      restrictions = _led.deepClone(ranges).sort(sortRangesInAscendingOrder);
      prepareRestrictions(restrictions);
    }

    const manipulatorApi = {
      _isLyteRestrictedModel: true,
      _isRestrictedValueValid: true,
      _editableRangeChangeListener: [],
      _isCursorAtCheckPoint: isCursorAtCheckPoint
    }

    prepareRestrictions(restrictions);
    manipulatorApi._restrictionChangeListener = model.onDidChangeContentFast(function (contentChangedEvent) {
      const isUndoing = contentChangedEvent.isUndoing;
      model._isRestrictedValueValid = true;
      if (!(isUndoing && model.editInRestrictedArea)) {
        const changes = contentChangedEvent.changes.sort(sortRangesInAscendingOrder);
        const rangeMap = {};
        const length = restrictions.length;
        const isAllChangesValid = changes.every(function (change) {
          const editedRange = change.range;
          const rangeAsString = editedRange.toString();
          rangeMap[rangeAsString] = null;
          for (let i = 0; i < length; i++) {
            const restriction = restrictions[i];
            const range = restriction.range;
            if (range.containsRange(editedRange)) {
              if (!restriction.allowMultiline && change.text.includes('\n')) {
                return false;
              }
              rangeMap[rangeAsString] = restriction;
              return true;
            }
          }
          return false;
        })
        if (isAllChangesValid) {
          changes.forEach(function (change, changeIndex) {
            const changedRange = change.range;
            const restriction = rangeMap[changedRange.toString()];
            const editableRange = restriction.range;
            const text = change.text || '';
            /**
             * Things to check before implementing the change
             * - A | D | R => Addition | Deletion | Replacement
             * - MC | SC => MultiLineChange | SingleLineChange
             * - SOR | MOR | EOR => Change Occured in - Start Of Range | Middle Of Range | End Of Range
             * - SSL | SML => Editable Range - Spans Single Line | Spans Multiple Line
             */
            const noOfLinesAdded = (text.match(/\n/g) || []).length;
            const noOfColsAddedAtLastLine = text.split(/\n/g).pop().length;

            const lineDiffInRange = changedRange.endLineNumber - changedRange.startLineNumber;
            const colDiffInRange = changedRange.endColumn - changedRange.startColumn;

            let finalLine = editableRange.endLineNumber;
            let finalColumn = editableRange.endColumn;

            let columnsCarriedToEnd = 0;
            if (
              (editableRange.endLineNumber === changedRange.startLineNumber) ||
              (editableRange.endLineNumber === changedRange.endLineNumber)
            ) {
              columnsCarriedToEnd += (editableRange.endColumn - changedRange.startColumn) + 1;
            }

            const info = getInfoFrom(change, editableRange);
            if (info.isAddition || info.isReplacement) {
              if (info.rangeIsSingleLine) {
                /**
                 * Only Column Change has occurred , so regardless of the position of the change
                 * Addition of noOfCols is enough
                 */
                if (noOfLinesAdded === 0) {
                  finalColumn += noOfColsAddedAtLastLine;
                } else {
                  finalLine += noOfLinesAdded;
                  if (info.startColumnOfRange) {
                    finalColumn += noOfColsAddedAtLastLine
                  } else if (info.endColumnOfRange) {
                    finalColumn = (noOfColsAddedAtLastLine + 1)
                  } else {
                    finalColumn = (noOfColsAddedAtLastLine + columnsCarriedToEnd)
                  }
                }
              }
              if (info.rangeIsMultiLine) {
                // Handling for Start Of Range is not required
                finalLine += noOfLinesAdded;
                if (info.endLineOfRange) {
                  if (noOfLinesAdded === 0) {
                    finalColumn += noOfColsAddedAtLastLine;
                  } else {
                    finalColumn = (columnsCarriedToEnd + noOfColsAddedAtLastLine);
                  }
                }
              }
            }
            if (info.isDeletion || info.isReplacement) {
              if (info.rangeIsSingleLine) {
                finalColumn -= colDiffInRange;
              }
              if (info.rangeIsMultiLine) {
                if (info.endLineOfRange) {
                  finalLine -= lineDiffInRange;
                  finalColumn -= colDiffInRange;
                } else {
                  finalLine -= lineDiffInRange;
                }
              }
            }
            updateRange(restriction, editableRange, finalLine, finalColumn, changes, changeIndex);
          });
          const values = model.getValueInEditableRanges();
          const currentlyEditedRanges = {};
          for (let key in rangeMap) {
            const restriction = rangeMap[key];
            const range = restriction.range;
            const rangeString = restriction.label || range.toString();
            currentlyEditedRanges[rangeString] = values[rangeString];
          }
          triggerChangeListenersWith(currentlyEditedRanges, values);
        } else {
          doUndo();
        }
      } else if (model.editInRestrictedArea) {
        model._isRestrictedValueValid = false;
      }
    });
    const exposedApi = {
      editInRestrictedArea: false,
      getCurrentEditableRanges: getCurrentEditableRanges,
      getValueInEditableRanges: getValueInEditableRanges,
      disposeRestrictions: disposeRestrictions,
      onDidChangeContentInEditableRange: addEditableRangeListener,
      updateRestrictions: updateRestrictions
    }
    _led.defineProp.call(model, _led.DESCRIPTOR_CODES[5], manipulatorApi);
    _led.defineProp.call(model, _led.DESCRIPTOR_CODES[7], exposedApi);
    return model;
  }
  const disposeModel = function (model) {
    if (model._isLyteRestrictedModel) {
      model.disposeRestrictions();
      const uri = model.uri.toString();
      delete modelsWithRestrictions[uri];
      return true;
    }
    return false;
  }
  const disposeAllRestrictedModels = function () {
    const listOfModelUris = Object.keys(modelsWithRestrictions);
    for (let i = 0; i < listOfModelUris.length; i++) {
      const model = modelsWithRestrictions[listOfModelUris[i]];
      disposeModel(model);
    }
  }
  const updateRangeRestrictionsTo = function (model, restrictions) {
    if (model._isLyteRestrictedModel) {
      model.updateRestrictions(restrictions);
      return true;
    }
    return null;
  }

  const manipulator = {
    sortRangesInAscendingOrder: sortRangesInAscendingOrder,
    normalizeRange: normalizeRange
  }
  const API = Object.create(manipulator);
  const methods = {
    addRangeRestrictionsTo: addRangeRestrictionsTo,
    updateRangeRestrictionsTo: updateRangeRestrictionsTo,
    disposeModel: disposeModel,
    disposeAllRestrictedModels: disposeAllRestrictedModels
  }
  return _led.defineProp.call(API, _led.DESCRIPTOR_CODES[4], methods);
})());