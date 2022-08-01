store.registerModel("user",{
    id:Lyte.attr("number"),
    brand: Lyte.attr("string"),
    type:Lyte.attr("string"),
    color:Lyte.attr("string"),
    description:Lyte.attr("string"),
    sleeve:Lyte.attr("string"),
    size:Lyte.attr("array"),
    price:Lyte.attr("string"),
    iswish:Lyte.attr("boolean"),
    cartlist:Lyte.hasMany("cartlist-product"),
    // productcategory:Lyte.belongsTo("product-category")
    });