Lyte.Component.register( "lyte-video", {
_template:"<template tag-name=\"lyte-video\"> <div class=\"lyteVideoContainer lyteVideoControlsShow\" onpointerenter=\"{{action('mouseEnter',event)}}\" onpointerleave=\"{{action('mouseLeave',event)}}\" onpointermove=\"{{action('mouseMove',event)}}\"> <div class=\"lyteVideoAnimateWrapper lyteVideoAnimateBackward\"> <span class=\"lyteVideoAnimateBackArrow lyteVideoAnimateArrow3\"></span> <span class=\"lyteVideoAnimateBackArrow lyteVideoAnimateArrow2\"></span> <span class=\"lyteVideoAnimateBackArrow lyteVideoAnimateArrow1\"></span> </div> <div class=\"lyteVideoAnimateWrapper lyteVideoAnimatePlay\"> <span class=\"lyteVideoAnimatePauseIcon\"></span> </div> <div class=\"lyteVideoAnimateWrapper lyteVideoAnimateForward\"> <span class=\"lyteVideoAnimateForwardArrow lyteVideoAnimateArrow1\"></span> <span class=\"lyteVideoAnimateForwardArrow lyteVideoAnimateArrow2\"></span> <span class=\"lyteVideoAnimateForwardArrow lyteVideoAnimateArrow3\"></span> </div> <canvas class=\"lyteVideoPoster\" onclick=\"{{action('clickOnVideo')}}\"></canvas> <video class=\"lyteVideo\" onvolumechange=\"{{action('changeVolume',event)}}\" preload=\"{{ltPropPreLoad}}\" crossorigin=\"{{ltPropCrossOrigin}}\" ontimeupdate=\"{{action('update',event)}}\" onloadeddata=\"{{action('progress',event)}}\" onprogress=\"{{action('progress',event)}}\" onloadedmetadata=\"{{action('meta',event)}}\" onpause=\"{{action('pause',event)}}\" onplay=\"{{action('play',event)}}\" onclick=\"{{action('clickOnVideo')}}\" ondblclick=\"{{action('toggleFullScreen')}}\"> <source src=\"{{ltPropSource[0].src}}\" type=\"{{ltPropSource[0].type}}\" label=\"{{ltPropSource[0].label}}\" size=\"{{ltPropSource[0].size}}\"> <template is=\"if\" value=\"{{ltPropTracks}}\"><template case=\"true\"> <track> </template></template> </video> <template is=\"if\" value=\"{{subtitles}}\"><template case=\"true\"> <div class=\"lyteVideoSubtitleWrapper\"> <p class=\"lyteVideoSubtitle\">{{subText}}</p> </div> </template></template> <div class=\"lyteVideoControls hoverControls\"> <div class=\"lyteVideoProgressWrapper\"> <div class=\"lyteVideoProgressBar\" onclick=\"{{action('progressClick',event)}}\" onmousemove=\"{{action('updateToolTip',event)}}\"> <div class=\"lyteVideoToolTip\"> <div> <p class=\"lyteVideoTooltipChapterName\">{{toolTip.name}}</p> <p class=\"lyteVideoTooltipCurrentTime\">{{toolTip.time}}</p> </div> </div> <template is=\"if\" value=\"{{chaptersData}}\"><template case=\"true\"> <div class=\"lyteVideoChapterWrapper\"> <template is=\"for\" items=\"{{chaptersData}}\" item=\"item\" index=\"index\"> <div class=\"lyteVideoChapter\" data-start=\"{{item.startTime}}\" data-end=\"{{item.endTime}}\" data-label=\"{{item.title}}\" style=\"width: {{item.width}}%;\"> <span class=\"lyteVideoProgressed\" style=\"width: {{item.time}}%;\"></span> <span class=\"lyteVideoProgressLoad\" style=\" width : {{item.loadedTime}}%\"></span> </div> </template> </div> </template><template case=\"false\"> <span class=\"lyteVideoProgressed\" style=\"width: {{elapsedTime}}%;\"></span> <span class=\"lyteVideoProgressLoad\" style=\" width : {{loadedTime}}%\"></span> </template></template> <span class=\"lyteVideoProgressHandler\" ontouchstart=\"{{action('progressMouseDown',event)}}\" onmousedown=\"{{action('progressMouseDown',event)}}\"></span> </div> <div class=\"lyteVideoTimer\"> <time class=\"duration\">{{currentDuration}}</time> <span class=\"lyteVideoTimerSeparator\">/</span> <time>{{duration}}</time> </div> </div> <div class=\"lyteVideoIconsWrap\"> <div class=\"lyteVideoPlayPauseIconWrap\"> <button class=\"lyteVideoIcons lyteVideoPlayIcon lyteVideoPaused\" onclick=\"{{action('togglePlayPause',this)}}\"></button> </div> <div class=\"lyteVideoRewind\"> <button class=\"lyteVideoIcons lyteVideoRewindIcon\" lt-prop-title=\"Backward\" onclick=\"{{action('skipVideo','rewind')}}\"></button> </div> <div class=\"lyteVideoForward\"> <button class=\"lyteVideoIcons lyteVideoForwardIcon\" lt-prop-title=\"Forward\" onclick=\"{{action('skipVideo','forward')}}\"></button> </div> <div class=\"lyteVideoVolumeControls\"> <span class=\"lyteVideoVolumeIcon\" onclick=\"{{action('mute',this)}}\"></span> <div class=\"lyteVideoVolumeSlider\"> <lyte-multislider lt-prop-max=\"1\" lt-prop-yield=\"true\" lt-prop-handler=\"lyteCircle\" lt-prop-value=\"[ { &quot;value&quot; : {{volume}}, &quot;min&quot; : 0, &quot;max&quot; : 1 } ]\" on-change=\"{{method('setVolume')}}\"></lyte-multislider> </div> </div> <div class=\"lyteVideoSettings\"> <button class=\"lyteVideoIcons lyteVideoSettingsIcon\" lt-prop-title=\"Settings\" onclick=\"{{action('toggleSettings',event)}}\"></button> </div> <template is=\"if\" value=\"{{isNotFirefox}}\"><template case=\"true\"> <div class=\"lyteVideoPip\"> <button class=\"lyteVideoIcons lyteVideoPipIcon\" lt-prop-title=\"Play Picture in Picture\" onclick=\"{{action('togglePip')}}\"></button> </div> </template></template> <div class=\"lyteVideoFullScreenControl\"> <button class=\"lyteVideoIcons lyteVideoFullScreen\" lt-prop-title=\"Full Screen\" onclick=\"{{action('toggleFullScreen',this)}}\"></button> </div> </div> </div> <div class=\"lyteVideoSettingsWrapper lyteVideoSettingsItemHover lyteVideoMenuHide\" onmouseover=\"{{action('mouseOver')}}\"> <template is=\"if\" value=\"{{subMenuOpened}}\"><template case=\"true\"> <div data-value=\"back\" class=\"lyteVideoSettingsDropdownHead\" onclick=\"{{action('settingsMenuClick',this)}}\"> <div class=\"lyteVideoSettingsBackIcon\"></div> <span class=\"lyteVideoSettingsLabel\">{{selectedOption}} </span> </div> </template></template> <template is=\"switch\" value=\"{{selectedOption}}\"><template case=\"speed\"><template is=\"for\" items=\"{{speedData}}\" item=\"item\" index=\"index\"> <div data-value=\"{{item.label}}\" class=\"lyteVideoSettingDropItem lyteVideoPl-40 {{lyteUiSetSelectedClass(item.label,ltPropPlayRate)}}\" onclick=\"{{action('settingsMenuClick',this)}}\"> <span class=\"lyteVideoSettingsLabel\">{{item.label}} </span> </div> </template></template><template case=\"quality\"> <div data-value=\"auto\" class=\"lyteVideoSettingDropItem lyteVideoPl-40 {{lyteUiSetSelectedClass('auto',ltPropQuality)}}\" onclick=\"{{action('settingsMenuClick',this)}}\"> <span class=\"lyteVideoSettingsLabel\">auto</span> </div> <template is=\"for\" items=\"{{ltPropSource}}\" item=\"item\" index=\"index\"> <div data-value=\"{{item.size}}\" class=\"lyteVideoSettingDropItem lyteVideoPl-40 {{lyteUiSetSelectedClass(item.size,ltPropQuality)}}\" onclick=\"{{action('settingsMenuClick',this)}}\"> <span class=\"lyteVideoSettingsLabel\">{{item.size}} </span> </div> </template></template><template case=\"captions\"> <div data-value=\"off\" class=\"lyteVideoSettingDropItem lyteVideoPl-40 {{lyteUiSetSelectedClass('off',ltPropCaption)}}\" onclick=\"{{action('settingsMenuClick',this)}}\"> <span class=\"lyteVideoSettingsLabel\">off</span> </div> <template is=\"for\" items=\"{{ltPropTracks}}\" item=\"item\" index=\"index\"> <div data-value=\"{{item.label}}\" class=\"lyteVideoSettingDropItem lyteVideoPl-40 {{lyteUiSetSelectedClass(item.label,ltPropCaption)}}\" onclick=\"{{action('settingsMenuClick',this)}}\"> <span class=\"lyteVideoSettingsLabel\">{{item.label}} </span> </div> </template></template><template default=\"\"> <div data-value=\"Subtitles/CC\" class=\"lyteVideoSettingsItem \" onclick=\"{{action('settingsMenuClick',this)}}\"> <span class=\"lyteVideoSettingsLabel\">Subtitles/CC </span> <span class=\"lyteVideoSettingsKey\">{{ltPropCaption}}</span> </div> <div data-value=\"Playback Speed\" class=\"lyteVideoSettingsItem\" onclick=\"{{action('settingsMenuClick',this)}}\"> <span class=\"lyteVideoSettingsLabel\">Playback Speed </span> <span class=\"lyteVideoSettingsKey\">{{ltPropPlayRate}}</span> </div> <div data-value=\"Quality\" class=\"lyteVideoSettingsItem\" onclick=\"{{action('settingsMenuClick',this)}}\"> <span class=\"lyteVideoSettingsLabel\">Quality </span> <span class=\"lyteVideoSettingsKey\">{{ltPropQuality}}</span> </div> </template></template> </div> </div> <div> </div> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"attr","position":[1,7]},{"type":"attr","position":[1,9]},{"type":"attr","position":[1,9,1]},{"type":"attr","position":[1,9,3]},{"type":"if","position":[1,9,3],"cases":{"true":{"dynamicNodes":[]}},"default":{}},{"type":"attr","position":[1,11]},{"type":"if","position":[1,11],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1,0]}]}},"default":{}},{"type":"attr","position":[1,13,1,1]},{"type":"text","position":[1,13,1,1,1,1,1,0]},{"type":"text","position":[1,13,1,1,1,1,3,0]},{"type":"attr","position":[1,13,1,1,3]},{"type":"if","position":[1,13,1,1,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"for","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'width: '","item.width","'%;'"]}}}},{"type":"attr","position":[1,1],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'width: '","item.time","'%;'"]}}}},{"type":"attr","position":[1,3],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["' width : '","item.loadedTime","'%'"]}}}}]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'width: '","elapsedTime","'%;'"]}}}},{"type":"attr","position":[3],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["' width : '","loadedTime","'%'"]}}}}]}},"default":{}},{"type":"attr","position":[1,13,1,1,5]},{"type":"text","position":[1,13,1,3,1,0]},{"type":"text","position":[1,13,1,3,5,0]},{"type":"attr","position":[1,13,3,1,1]},{"type":"attr","position":[1,13,3,3,1]},{"type":"attr","position":[1,13,3,5,1]},{"type":"attr","position":[1,13,3,7,1]},{"type":"attr","position":[1,13,3,7,3,1]},{"type":"componentDynamic","position":[1,13,3,7,3,1]},{"type":"attr","position":[1,13,3,9,1]},{"type":"attr","position":[1,13,3,11]},{"type":"if","position":[1,13,3,11],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1]}]}},"default":{}},{"type":"attr","position":[1,13,3,13,1]},{"type":"attr","position":[1,15]},{"type":"attr","position":[1,15,1]},{"type":"if","position":[1,15,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,3,0]}]}},"default":{}},{"type":"attr","position":[1,15,3]},{"type":"switch","position":[1,15,3],"cases":{"speed":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"for","position":[0],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1,0]}]}]},"quality":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[3]},{"type":"for","position":[3],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1,0]}]}]},"captions":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[3]},{"type":"for","position":[3],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1,0]}]}]}},"default":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,3,0]},{"type":"attr","position":[3]},{"type":"text","position":[3,3,0]},{"type":"attr","position":[5]},{"type":"text","position":[5,3,0]}]}}],
_observedAttributes :["ltPropSource","ltPropTracks","ltPropVolume","ltPropPlayRate","ltPropCrossOrigin","ltPropCurrentTime","ltPropChapters","ltPropWidth","ltPropHeight","ltPropLoop","ltPropPreLoad","ltPropAutoPlay","ltPropPoster","ltPropCaption","ltPropQuality","isNotFirefox","volume","selectedOption","elapsedTime","loadedTime","toolTip","currentDuration","duration","subMenuOpened","speedData","captionsData","qualityData","chaptersData","subtitles","subText"],

	data : function(){
		return{
			ltPropSource : Lyte.attr( 'array' ),
			ltPropTracks : Lyte.attr( 'array' ),
			ltPropVolume : Lyte.attr( 'number', { default : 1 }),
			ltPropPlayRate : Lyte.attr( 'number', { default : 1 }),
			ltPropCrossOrigin : Lyte.attr('string', { default : ''}),
			ltPropCurrentTime : Lyte.attr( 'string',{ default : '0'} ),
			ltPropChapters : Lyte.attr( 'array' ),
			ltPropWidth : Lyte.attr( 'string',{ default : '900px'} ),
			ltPropHeight : Lyte.attr( 'string',{ default : '500px'} ),
			ltPropLoop : Lyte.attr( 'boolean'),
            ltPropPreLoad : Lyte.attr( 'string', { default : 'metadata'} ),
            ltPropAutoPlay : Lyte.attr( 'boolean' ),
            ltPropPoster : Lyte.attr( 'string' ),
            ltPropCaption : Lyte.attr( 'string', { default : 'off'} ),
            ltPropQuality : Lyte.attr( 'string' , { default : 'auto'} ),
            
			//system data
            isNotFirefox : Lyte.attr( 'boolean', { default :  
                _lyteUiUtils.getBrowser() != "firefox" } ),
			volume :  Lyte.attr( 'number'),
			selectedOption : Lyte.attr( 'string', { default : 'settings'}),
			elapsedTime : Lyte.attr( 'number', { default : 0}),
			loadedTime : Lyte.attr( 'number', { default : 0}),
			toolTip : Lyte.attr( 'object', { default : { 'name' : '', 'time' : '00:00' }}),
			currentDuration : Lyte.attr( 'string', { default : '00:00'}),
			duration : Lyte.attr( 'string', { default : '00:00'}),
			subMenuOpened : Lyte.attr( 'boolean', { default : false }),
			speedData : Lyte.attr( 'array', { default : [
				{ "label" : "0.25" },
				{ "label" : "0.5" },
				{ "label" : "1" },
				{ "label" : "1.25" },
				{ "label" : "1.5" },
				{ "label" : "1.75" },
				{ "label" : "2" }
			]}),
			captionsData : Lyte.attr( 'array', { default : [
				{ "label" : "off"}
			]}),
			qualityData : Lyte.attr( 'array', { default : [
				{ "label" : "auto" }
			]}),
			chaptersData : Lyte.attr( 'array' ),
            subtitles : Lyte.attr( 'array'),
            subText : Lyte.attr( 'string', { default : ''})
		}
	},

	init : function(){
		this.setData('volume',this.getData('ltPropVolume'));
	},

	didConnect : function(){
		this._video = this.$node.querySelector( "video" );
		this._animationWrapper = this.$node.querySelectorAll('.lyteVideoAnimateWrapper');
		this._controls = this.$node.querySelector('.lyteVideoControls');
		this._menu = this.$node.querySelector('.lyteVideoSettingsWrapper');
		this._handler = this.$node.querySelector('.lyteVideoProgressHandler');
		this._playIcon = this.$node.querySelector('.lyteVideoPlayIcon');

		this._timerIdx;
		this._keyDown = this.keyDown.bind(this);
		this._menuIdx = 0;
        this._focused = false;
        this._subIdx = 0;


		document.body.addEventListener('keydown',this._keyDown);

		this.$node.screenShot = this.screenShot.bind( this );
        this.$node.play = this.play.bind( this );
        this.$node.pause = this.pause.bind( this );
	},

	didDestroy : function(){
		document.body.removeEventListener('keydown', this._keyDown);
		
		delete this._video,
		this._playIcon,
		this._handler,
		this._controls,
		this._menu,
		this._progressBar,
		this._menuListener,
		this._keyDown,
        this._focused,
        this._menuIdx;
	},

    formatTime : function( timeInSeconds ){
        if( timeInSeconds ){
		    var result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
            time = result.substr( 0, 2) != '00' ? result.substr( 0, 2) + ':' + result.substr(3, 2) + ':' + result.substr(6, 2) : result.substr(3, 2) + ':' + result.substr(6, 2);
            return time;
        }else{
            return "00:00";
        }
	},

    convertToSeconds : function( time ){
        var sec = 0;
        sec = parseInt( time.substr( 0, 2) * 3600 ) + parseInt( time.substr( 3, 2) * 60 ) + parseInt( time.substr( 6, 2) );

        return sec; 
    },

    screenShot : function(){
        var that = this,
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        video = this._video;

        ctx.canvas.width = video.videoWidth;
        ctx.canvas.height = video.videoHeight;

        createImageBitmap(video).then(function(frame) {
            ctx.drawImage(frame, 0, 0);
        }).then(  function(){
            var url =  canvas.toDataURL();
            that.getMethods('onScreenShot') && that.executeMethod( 'onScreenShot', url, that.$node); 
        });
    },
    
    setDefault : function(){
        var video = this._video,
        tracks = video.textTracks,
        playbackRate = this.getData('ltPropPlayRate'),
        startTime = this.getData( 'ltPropCurrentTime'),
        loop = this.getData( 'ltPropLoop' ),
        autoPlay = this.getData( 'ltPropAutoPlay'),
        chapters = this.getData( 'ltPropChapters')
        
        if( this.getData( 'ltPropPoster' ) ){
            var poster = this.getData( 'ltPropPoster' );
            if( !isNaN( poster ) ){
                this.drawImage( poster, true );
            }else{
                this.getImage( poster )
            }
        }

        if( startTime ){
            video.currentTime = startTime;
        }

        if( autoPlay ){
            video.setAttribute( 'autoplay', '');
        }

        if( playbackRate ){
            video.playbackRate = playbackRate;
        }

        if( !navigator.maxTouchPoints ){
           var tooltip = this.$node.querySelector(".lyteVideoToolTip");
           tooltip.classList.add('lyteVideoToolTipHover');
        }

        if( loop ){
            video.setAttribute( 'loop', '');
        }

        if( chapters ){
            chaptersData = [],
            totalLoadedTime = video.buffered.length ? video.buffered.end( video.buffered.length - 1 ) : 0;

            for( i = 0; i < chapters.length; i++){
                let width = ( ( this.convertToSeconds( chapters[ i ].endTime ) - this.convertToSeconds( chapters[ i ].startTime )  ) / video.duration * 100 ).toFixed(2),
                loadedTime;

                if( totalLoadedTime > chapters[ i ].endTime ){
                    loadedTime = 100;
                }else if( totalLoadedTime <  chapters[ i ].startTime ){
                    loadedTime = 0;
                }
                else{  
                    loadedTime =  ( totalLoadedTime - chapters[i].startTime ) / (chapters[i].endTime - chapters[i].startTime )* 100;
                    loadedTime = loadedTime > 100 ? 100 : loadedTime;                       
                }

                chaptersData.push( { title :  chapters[ i ].title, startTime : this.convertToSeconds( chapters[ i ].startTime ) , endTime : this.convertToSeconds( chapters[ i ].endTime ), width : width, time : 0, loadedTime : loadedTime } )    
            }
            if( chaptersData.length > 0 ){
                this.$node.querySelector(".lyteVideoProgressBar").classList.add('lyteVideoBgTransparent');
            }
            this.setData('chaptersData',chaptersData)
        }
        
        this._menu.style[ _lyteUiUtils.getRTL() ? "left" : "right" ] = "70px";
    },

    playBackRate : function( change ){
        var video = this._video;

        video.playbackRate = change.newValue;
    }.observes( 'ltPropPlayRate' ),

    qualityChange :  function( change ){
        var video = this._video,
        source = video.querySelector('source'),
        curTime = video.currentTime,
        isPaused = video.paused,
        sources = this.data.ltPropSource,
        newValue = change ? change.newValue : this.data.ltPropQuality,
        i;

        for( i = 0; i < sources.length; i++){
            if( sources[i].size == newValue ){
                break;
            }
        }
        for( attr in sources[i] ){
            source.setAttribute(attr, sources[i][attr] );
        }

        video.load();

        var fn = function(){ 
            video.currentTime = curTime;
            if( isPaused ){
                this.pause();
            }else{
                this.play();
            }
            video.removeEventListener('canplay',fn);
        }.bind(this);

        video.addEventListener('canplay', fn );

    }.observes( 'ltPropQuality' ).on( 'didConnect' ),

    setSubtitle : function( change ){
        var video = this._video,
        tracks = this.data.ltPropTracks,
        source = video.querySelector('track'),
        capDiv = this.$node.querySelector( '.lyteVideoSubtitleWrapper'),
        subtitles = [],
        newValue = change ? change.newValue : this.data.ltPropCaption,
        track, i;
        
        if( newValue == 'off' && capDiv){
            capDiv.classList.add('lyteVideoMenuHide');
            return;
        }else if( newValue == 'off'){
            return;
        }
        else if( capDiv ){
            capDiv.classList.remove('lyteVideoMenuHide');
        }

        for( i = 0; i < tracks.length; i++){
            if( tracks[i].label == newValue  || tracks[i].lang == newValue){
                break;
            }
        }
        
        for( attr in tracks[i] ){
            source.setAttribute( attr, tracks[i][ attr ]);
        }
        track = video.textTracks[ 0 ];
        track.mode = "hidden";
        
        if(  tracks && !('src' in tracks[ i ] ) ){
            subtitles = tracks [ i ].texts.slice();
            this.setData( 'subtitles', subtitles );
            return;
        }
        setTimeout( function(){
            for( j = 0; j < track.cues.length;j++){
                subtitles.push({ 'startTime' : track.cues[ j ].startTime, 'endTime' : track.cues[ j ].endTime, 'text' : track.cues[ j ].text } )
            }
            this.setData( 'subtitles', subtitles );
        }.bind( this ),500);
        
    }.observes( 'ltPropCaption' ).on( 'didConnect' ),

    setVolume : function( change ){
        if( this._video == undefined){
            return
        }
        var video = this._video,
        slider = this.$node.querySelector('lyte-multislider');
        if( slider.ltProp('value')[0].value != change.newValue ){
            this.setData('volume',change.newValue );
        }
        video.volume = change.newValue;
    }.observes( 'ltPropVolume' ),

    loop : function( change ){
        var video = this._video;
        if( change.newValue ){
            video.setAttribute('loop','');
        }else{
            video.removeAttribute( 'loop' );
        }
    }.observes( 'ltPropLoop'),

    source : async function( change ){
        var video = this._video,
        source = video.querySelector('source');
        for( key in change.newValue[0]){
            source.setAttribute(key,change.newValue[0][key]);
        }
        video.load();
    }.observes( 'ltPropSource'),

    // time : function( change ){
    //     console.log( change )
    //     var video = this._video;
    //     if( change.newValue ){
    //         video.currentTime = change.newValue;
    //     }
    // }.observes( 'ltPropCurrentTime'),

    autoPlay : function( change ){
        var video = this._video;

        if( change.newValue ){
            video.setAttribute( 'autoplay', '');
        }else{
            video.removeAttribute( 'autoplay');
        }
    }.observes( 'ltPropAutoPlay'),

    menuListener : function( evt, fl ){
        if( this._menu == undefined){
            return
        }
        let flag = true,
        classList = ['lyteVideoSettingsWrapper', 'lyteVideoSettingsItem','lyteVideoSettingsIcon', 'lyteVideoSettingsLabel','lyteVideoSettingsKey','lyteVideoSettings', 'lyteVideoSettingsDropdownHead', 'lyteVideoSettingsBackIcon' ],
        menu = this._menu;

        if( evt ){
            for( i = 0; i < classList.length; i++){
                if( evt.target.classList.contains( classList[ i ] )){
                    flag = false;
                }
            }
        }
        if( flag  || fl ) {
            menu.classList.add('lyteVideoMenuHide');
            menu.classList.add('lyteVideoSettingsItemHover');
            menu.style = ''
            // menu.style.bottom = '70px';
            menu.style[ _lyteUiUtils.getRTL() ? "left" : "right" ] = "70px";
            this.setData({'subMenuOpened' : false, 'selectedOption' : 'settings'});
            this._menuIdx = 0;
            document.removeEventListener('scroll',this._onScroll);
            document.removeEventListener('click', this._menuListener);
            window.removeEventListener('resize',this._onResize);
            delete this._menuListener, this._onScroll, this._onResize;
        }
    },

    onScroll : function( evt ){
        var menu = this._menu,
        bcr = menu.getBoundingClientRect();
        if( bcr.top < 0){
            menu.style.bottom = null;
            menu.style.top = this.$node.clientHeight + 'px';
        }else if(bcr.top - 70 > bcr.height ){
            menu.style.bottom = '70px';
            menu.style.top = null;
        }
    },

    onResize : function(){
        this.onScroll();
    },

    left : function(){
        return _lyteUiUtils.getRTL() ? "right" : "left";
    },

    keyDown : function( evt ){
        if( this._video == undefined){
            return
        }
        var video = this._video,
        wrapperEle,
        i = 0;
        if( evt.target == video || this._focused ){  
            switch( evt.keyCode ){
                case 32 : 
                    evt.preventDefault();
                    wrapperEle = this._animationWrapper[1];
                    iconEle = wrapperEle.children[0];
                    if( video.paused ){
                        iconEle.classList.remove('lyteVideoAnimatePauseIcon');
                        iconEle.classList.add('lyteVideoAnimatePlayIcon');
                        this.play();
                    }else{
                        iconEle.classList.add('lyteVideoAnimatePauseIcon');
                        iconEle.classList.remove('lyteVideoAnimatePlayIcon');
                        this.pause();
                    }
                    // wrapperEle.classList.add('lyteVideoAnimate');
                    // setTimeout( function(){ wrapperEle.classList.remove('lyteVideoAnimate')}.bind(this),500);
                    break;
                case 39 :
                    evt.preventDefault();
                    wrapperEle = this._animationWrapper[2];
                    video.currentTime += 10;
                    break;
                case 37 :
                    evt.preventDefault();
                    wrapperEle = this._animationWrapper[0];
                    video.currentTime -= 10;
                    break;
                case 38 :
                    var menu = this._menu;
                    if( !menu.classList.contains('lyteVideoMenuHide')){
                        menu.classList.remove('lyteVideoSettingsItemHover');
                        evt.preventDefault();
                        var options = menu.children;
                        this._menuIdx = this._menuIdx == 0 ? options.length  : this._menuIdx;
                        
                        prev =  Math.abs( this._menuIdx % options.length ),
                        idx =  Math.abs( --this._menuIdx % options.length );

                        options[ prev ].classList.remove('lyteVideoSettingsItemSelected');
                        menu.scrollTop =  options[ idx ].offsetTop;
                        options[ idx ].classList.add('lyteVideoSettingsItemSelected');
                    }
                    break;
                case 40 :
                    var menu = this._menu;
                    if( !menu.classList.contains('lyteVideoMenuHide')){
                        evt.preventDefault();
                        menu.classList.remove('lyteVideoSettingsItemHover');
                        var options = menu.children,
                        prev = Math.abs( this._menuIdx % options.length ),
                        idx = Math.abs( ++this._menuIdx % options.length );

                        options[ prev ].classList.remove('lyteVideoSettingsItemSelected');
                        menu.scrollTop =  options[ idx ].offsetTop;
                        // options[ idx ].scrollIntoView({ block: 'nearest'});
                        options[ idx ].classList.add('lyteVideoSettingsItemSelected');

                    }
                    break;
                case 13 :
                    var menu = this._menu;
                    if( !menu.classList.contains('lyteVideoMenuHide')){
                        evt.preventDefault();
                        var options = menu.children,
                        idx = Math.abs( this._menuIdx % options.length );
                        
                        options[ idx ].click();
                    }
            }
            if( wrapperEle ){
                wrapperEle.classList.add('lyteVideoAnimate');
                setTimeout( function(){ wrapperEle.classList.remove('lyteVideoAnimate')}.bind(this),500);
            }
        }
    },

    bind_evt : function( fn, isTch ){
        document[ fn ]( isTch ? 'touchmove' : 'mousemove', this._move, true );
        document[ fn ]( isTch ? 'touchend' : 'mouseup', this._up, true );
    },

    updateTime : function( evt, flag){

        var ele = this.$node.querySelector(".lyteVideoProgressBar"),
        video = this._video,
        bcr = ele.getBoundingClientRect(),
        width = bcr.width,
        x = Math.abs( evt.clientX - bcr[ this.left()] ),
		duration = video.duration,
        time = ( x / width ) * duration,
        hanlder = this._handler;
        
        if( flag ){
            return time;
        }

        video.currentTime = time;
        
        if( this._mouseDown ){
           let left = ( time / duration * 100) ;
           left = left > 100 ? 100 : left ;
           hanlder.style[ this.left() ] = left + '%';
        }

    },

    progressMouseMove : function( evt ){
        var touches = evt.touches || [],
		length = touches.length,
		ev = touches[ 0 ] || evt;

		if( length > 1 ){
			return;
		}

        this.updateTime( ev );
		if( length ){
			evt.preventDefault();
		}
    },

    progressMouseUp : function( evt ){
        var isTch = evt.touches ? true : false;

        this.bind_evt( 'removeEventListener', isTch );
        if( this._paused ){
            this.play();
        }

        delete this._move;
		delete this._up;
        delete this._paused;
        delete this._mouseDown;
    },

    play : function(){
        if( this._video == undefined){
            return
        }

        var video = this._video,
        _this = this,
        fn = function(){
            delete _this._happening;
            var final = _this._final;

            if( final ){
                delete _this._final;
                _this[ final ]();
            }
        },
        poster = this.$node.querySelector('.lyteVideoPoster');

        if( poster.style.display == '' ){
            poster.style.display = 'none';
        }

        if( this._happening ){
            this._final = 'play';
        }else if( video.paused ){
            this._happening = true;
            video.play().then( fn ).catch( fn );
        }
    },

    pause : function(){
        if( this._video == undefined){
            return
        }
        var video = this._video;

        if( this._happening ){
			this._final = 'pause';
		} else {
			video.pause();
		}
    },

    getImage : function( url ){
        var img = new Image(),
        canvas = this.$node.querySelector( '.lyteVideoPoster' ),
        ctx = canvas.getContext( "2d" ),
        video = this._video;
        
        ctx.canvas.width = video.videoWidth;
        ctx.canvas.height = video.videoHeight;
        
        img.onload = function( ){
            ctx.drawImage( img , 0, 0, video.videoWidth, video.videoHeight)
        }

        img.src = url;
    },

    drawImage : function( time, fl ){
        var that = this,
        canvas =  fl ? this.$node.querySelector( '.lyteVideoPoster' ) : '',
        ctx = canvas.getContext( '2d' ),
        video = this._video.cloneNode( true );

        video.currentTime = time;

        video.oncanplaythrough =  function(){
            ctx.canvas.width = video.videoWidth;
            ctx.canvas.height = video.videoHeight;


            createImageBitmap(video).then(function(frame) {
                ctx.drawImage(frame, 0, 0, video.videoWidth, video.videoHeight );
            }).catch( function( error ){
                // console.log( error );
            });
        }
    },

    actions : {
        play : function( evt ){
            this._playIcon.classList.remove( 'lyteVideoPaused' );
            this.getMethods('onPlay') && this.executeMethod( 'onPlay', this._video, evt, this.$node);
        },

        pause : function( evt ){
            this._playIcon.classList.add( 'lyteVideoPaused' );
            this.getMethods('onPause') && this.executeMethod( 'onPause', this._video, evt, this.$node);
        },

        togglePlayPause : function( ){
            var video = this._video,
            fn = "pause";

            if( video.paused ){
                fn = "play"
            }

            this[ fn ]();
            
        },

        clickOnVideo : function(){
            var video = this._video,
            iconEle = this._animationWrapper[1].children[0];
            
            if( document.pictureInPictureElement == video){
                document.exitPictureInPicture();
            }else if( video.paused ){
                iconEle.classList.remove('lyteVideoAnimatePauseIcon');
                iconEle.classList.add('lyteVideoAnimatePlayIcon');
                this.play();
            }else{
                iconEle.classList.add('lyteVideoAnimatePauseIcon');
                iconEle.classList.remove('lyteVideoAnimatePlayIcon');
                this.pause();
            }
            this._animationWrapper[1].classList.add('lyteVideoAnimate');
            setTimeout( function(){ this._animationWrapper[1].classList.remove('lyteVideoAnimate')}.bind(this),500);
        },

        skipVideo : function( type ){
            var video = this._video,
            currrentTime = video.currentTime;

            video.currentTime = currrentTime + ( type == 'forward' ? 10 : -10 );
        },

        mute : function(){
            var video = this._video;
            
            video.muted = !video.muted;
        },

        changeVolume : function(){
            if( this._video == undefined){
                return
            }
            var video = this._video,
            volIcon = this.$node.querySelector(".lyteVideoVolumeIcon");

            if(video.volume < 0.5) {
                volIcon.classList.add('lyteVideoLow');
            }else{
                volIcon.classList.remove('lyteVideoLow');
            }

            if( video.volume > 0 && volIcon.classList.contains('lyteVideoMuted')){
                volIcon.classList.remove('lyteVideoMuted');
                video.muted = false;
                this.setData("volume", video.volume);
            }else if( !video.muted && video.volume == 0){
                this.setData({"volume" : 1, 'ltPropVolume' : 1});
            }else if( video.muted ){
                volIcon.classList.remove('lyteVideoLow')
                volIcon.classList.add('lyteVideoMuted');
                this.setData('volume', 0);
            }
        },

        update : function( evt ){
            if( this._video == undefined){
                return
            }
            var video = this._video,
            time = video.currentTime,
            duration = video.duration,
            chaptersData = this.getData( 'chaptersData' ),
            subtitles = this.getData( 'subtitles' ),
            subEle = this.$node.querySelector( '.lyteVideoSubtitle'),
            curTime;
            
            
            if( subtitles ){
                for( i = 0; i < subtitles.length; i++){
                    if( time >= subtitles[ i ].startTime && time <= subtitles[ i ].endTime && subEle.innerHTML == ''){
                        this.setData('subText', subtitles[ i ].text);
                        this._subIdx = i;
                    }
                }
                if( time <= subtitles[ this._subIdx ].startTime  || time >= subtitles[ this._subIdx ].endTime) {
                    this.setData('subText', '');
                }
            }

            

            if( subtitles ){
                for( i = 0; i < subtitles.length; i++){
                    if( time >= subtitles[ i ].startTime && time <= subtitles[ i ].endTime && subEle.innerHTML == ''){
                        this.setData('subText', subtitles[ i ].text);
                        this._subIdx = i;
                    }
                }
                if( time <= subtitles[ this._subIdx ].startTime  || time >= subtitles[ this._subIdx ].endTime) {
                    this.setData('subText', '');
                }
            }

            if( chaptersData ){
                for( i = 0; i < chaptersData.length; i++){
                    if( time > chaptersData[i].endTime){
                        curTime = 100;
                    }else if( time <  chaptersData[i].startTime ){
                        curTime = 0;
                    }
                    else{  
                        curTime =  ( time - chaptersData[i].startTime) / (chaptersData[i].endTime - chaptersData[i].startTime )* 100;

                        curTime = curTime > 100 ? 100 : curTime;
                        this._curChapter = chaptersData[i].title;
                    }     
                    Lyte.objectUtils( chaptersData[i] , "add" , "time", curTime );
                }
            }
            
            this.setData( { 'currentDuration' : this.formatTime( time ), 'ltPropCurrentTime' :  time, 'elapsedTime' : ( time / duration * 100) });
            // if( this._mouseDown == undefined){
                this._handler.style[ this.left() ] = ( time / duration * 100) + '%';
                // this.setData('elapsedTime', ( time / duration * 100));
                // }

            this.getMethods('onProgress') && this.executeMethod( 'onProgress', this._video, time, evt, this.$node);               
        },

        meta : function(){
            if( this._video == undefined){
                return
            }

            var video = this._video,
            duration = video.duration;
            this.setDefault();
            this.setData('duration', this.formatTime( duration ));
        },

        togglePip : function(){
			if (!('pictureInPictureEnabled' in document)) {
			    console.warn("Picture-in-picture is not supported");
			    return;
			}
            var video = this._video;
            if( video !== document.pictureInPictureElement ){

                video.requestPictureInPicture().then( function(){
                    this._controls.classList.remove('lyteVideoControlsShow');
                }.bind(this)).catch(function(error){ 
                    console.log(error);
                });
            }else{
                document.exitPictureInPicture();
            }

		},

        toggleFullScreen : function( ele ){
            var videoContainer = this.$node.querySelector('.lyteVideoContainer'),
            ele = ele ? ele : this.$node.querySelector('.lyteVideoFullScreen');
            if( document.fullscreenElement || document.webkitFullscreenElement){               
                document.fullscreenElement ? document.exitFullscreen() : document.webkitExitFullscreen();
                ele.classList.remove('lyteVideoFullScreenExit');
            }else{
                var fn = videoContainer.requestFullscreen ? 'requestFullscreen' : 'webkitRequestFullscreen' ;
                videoContainer[ fn ]().then( function(){
                    ele.classList.add('lyteVideoFullScreenExit');
                    if( navigator.maxTouchPoints ){
                        screen.orientation.lock('landscape').catch( function( error ){ });
                    }
                }).catch( function(error){
                    console.log( error)
                });
               
            }
        },

        toggleSettings : function(){
            var menu = this._menu,
            diff,bcr;

            if( menu.classList.contains('lyteVideoMenuHide')){
                
                menu.classList.remove('lyteVideoMenuHide');

                this._menuListener = this.menuListener.bind( this );

                document.addEventListener('click', this._menuListener);

            }else{
                this.menuListener(null, true);
            }
        },

        mouseMove : function( evt ){
            if( evt.pointerType != 'touch' && document.pictureInPictureElement == null ){
                clearTimeout( this._timerIdx );
                this.$node.querySelector('.lyteVideoContainer').classList.add('lyteVideoControlsShow')
                if( this._menu.classList.contains('lyteVideoMenuHide')  && !this._video.paused){
                    this._timerIdx =  setTimeout(  function(){ this.$node.querySelector('.lyteVideoContainer').classList.remove('lyteVideoControlsShow'); }.bind(this), 3000 );
                }
            }
        },

        mouseEnter : function( evt ){
            this._focused = true;
            var container = this.$node.querySelector('.lyteVideoContainer');
            if( document.pictureInPictureElement == null ){
               container.classList.add('lyteVideoControlsShow');
            }
            if( evt.pointerType == 'touch' && this._menu.classList.contains('lyteVideoMenuHide')){
                clearTimeout( this._timerIdx );
                this._timerIdx =  setTimeout(  function(){ container.classList.remove('lyteVideoControlsShow'); }.bind(this), 3000 );
            }
        },

        mouseLeave : function( evt ){
            this._focused = false;
            if( evt.pointerType != 'touch' && this._menu.classList.contains('lyteVideoMenuHide') && !this._video.paused){
                this.$node.querySelector('.lyteVideoContainer').classList.remove('lyteVideoControlsShow');
            }
        },

        mouseOver : function(){
            var menu = this._menu;
            if( !menu.classList.contains('lyteVideoSettingsItemHover')){
                var options = menu.children,
                idx = Math.abs( this._menuIdx % options.length);
                options[ idx ].classList.remove('lyteVideoSettingsItemSelected'); 
                this._menu.classList.add('lyteVideoSettingsItemHover');
            }
        },

        settingsMenuClick : function( ele ){
            var value = ele.getAttribute('data-value'),
            menu = this._menu,
            bck = this.getMethods('onMenuClick') && this.executeMethod( 'onMenuClick', value, menu );
            bck = ( bck == undefined ) ? true : bck;
            
            if( !bck ){
                menu.classList.add('lyteVideoMenuHide');
                this.setData({'subMenuOpened' : false, 'selectedOption' : 'settings'});
                return;
            }

            if( value == "back" ){
                menu.classList.add('lyteVideoMenuHide');
                this.setData({'subMenuOpened' : false, 'selectedOption' : 'settings'});
                menu.classList.remove('lyteVideoMenuHide');
            }else if( this.data.selectedOption == "settings"){
                switch( value ){
                    case 'Playback Speed' : 
                        this.setData({'subMenuOpened' : true, 'selectedOption' : 'speed'});
                        menu.classList.remove('lyteVideoMenuHide');
                        break;
                    case 'Subtitles/CC':
                        this.setData({'subMenuOpened' : true, 'selectedOption' : 'captions'});
                        menu.classList.remove('lyteVideoMenuHide');
                        break;
                    case 'Quality' :
                        this.setData({'subMenuOpened' : true, 'selectedOption' : 'quality'});
                        menu.classList.remove('lyteVideoMenuHide');
                        break;
                }
            }else {
                if( this.data.selectedOption == "speed" ){
                    this.setData( 'ltPropPlayRate', value );
                }else if( this.data.selectedOption == "quality" ){
                    this.setData('ltPropQuality', value );
                }else if( this.data.selectedOption == "captions" ){
                    this.setData( 'ltPropCaption', value );
                }
                menu.classList.add( 'lyteVideoMenuHide' );
                this.setData({'subMenuOpened' : false, 'selectedOption' : 'settings'});
            }
        },

        progress : function( evt ){
            if( this._video == undefined){
                return
            }
            var video = this._video,
            buffer = video.buffered,
            duration = video.duration,
            chaptersData = this.getData( 'chaptersData' ),
            totalLoadedTime, width, loadedTime;

            if( buffer.length ){ 
                totalLoadedTime = buffer.end( buffer.length - 1 );    
                width = totalLoadedTime / duration * 100;
            } 

            if( chaptersData  && totalLoadedTime ){

                for( i = 0; i < chaptersData.length; i++){
                    if( totalLoadedTime > chaptersData[i].endTime){
                        loadedTime = 100;
                    }else if( totalLoadedTime <  chaptersData[i].startTime ){
                        loadedTime = 0;
                    }
                    else{  
                        loadedTime =  ( totalLoadedTime - chaptersData[i].startTime ) / (chaptersData[i].endTime - chaptersData[i].startTime )* 100;
                        loadedTime = loadedTime > 100 ? 100 : loadedTime;                       
                    }    

                    Lyte.objectUtils( chaptersData[i] , "add" , "loadedTime", loadedTime );
                }
            }

            this.setData( 'loadedTime', width)
        },

        progressClick : function( evt ){
            var ele = evt.target;

            if( ele.classList.contains('.lyteVideoProgressHandler') ){
                return;
            }

            this.updateTime( evt );
        },

        progressMouseDown : function( evt ){
            var touches = evt.touches || [],
			length = touches.length,
			isTch = length != 0;

            if( length > 1 ){
				return;
			}

            if( !this._video.paused){
                this.pause();
                this._paused = true;
            }
            this._mouseDown = true;
            this._move = this.progressMouseMove.bind( this );
            this._up = this.progressMouseUp.bind( this );
            this.bind_evt( "addEventListener", isTch );
            evt.preventDefault();
        },

        chapterSelect : function( ele ){
            var video = this._video;
            
            video.currentTime = ele.getAttribute('data-start')
        },

        updateToolTip : function( evt ){
            var time = this.updateTime( evt, true ),
            curChapter = this._curChapter ? this._curChapter : '',
            tooltip = this.$node.querySelector(".lyteVideoToolTip"),
            title = $L(evt.target).closest('.lyteVideoChapter').attr('data-label'),
            ele = this.$node.querySelector(".lyteVideoProgressBar"),
            bcr = ele.getBoundingClientRect(),
            op = {};
            
            title = title ? title : curChapter;
            tooltip.style.left = evt.clientX - bcr.left -  15  + "px";
            op.name = title;
            op.time = this.formatTime( time );

            this.setData('toolTip', op);
        }
    },

    methods : {
        setVolume : function( handlerIndex , currentValue ){
            var video = this._video;
            if( this._video == undefined){
                return
            }
            if( currentValue.value == 0){
                video.muted = true;
            }
            
            this.setData('ltPropVolume',currentValue.value)
        }
        
    }
});

Lyte.Component.registerHelper( "lyteUiSetSelectedClass" , function( value, selectedVal ){
	if(value == selectedVal){
		return "lyteVideoOptionselected";
	}
	return "";
});