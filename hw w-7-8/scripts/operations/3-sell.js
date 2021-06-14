const SELL_METHOD__MANUAL       = 1;
const SELL_METHOD__AUTO         = 2;

const MANUAL_SELL__BY_CATEGORY  = 1;
const MANUAL_SELL__BY_PRODUCT   = 2;

var sellMethodOption="";
var productObjectToSell="";

const getSellMethod = function(){
    console.warn("Продажба. Опции за продажба");
    console.log("1. Ръчна продажба");
    console.log("2. Продажба с бар код");

    var sellMethodChoice = prompt ("Избери как ще извършиш продажбата?");

    if(sellMethodChoice == SELL_METHOD__MANUAL)   return SELL_METHOD__MANUAL;
    if(sellMethodChoice == SELL_METHOD__AUTO)     return SELL_METHOD__AUTO;
    return console.error("Няма опции с такъв индекс. Опитай отново по-късно");
};

const listAllProductCategories = function(){

    console.warn("Категории продукт:");
    
    for(var i = 0; i < productBuyCollection.length; i++){

        var productForSell = productBuyCollection[i];
        console.log(productForSell.category);
    }
}

const listAllProductTitles = function(){

    console.warn("Налични продукти:");
    
    for(var i = 0; i < productBuyCollection.length; i++){
        
        var productForSell = productBuyCollection[i];
        console.log(productForSell.title);
    }
}

const getProductForSell = function(){
    var productChoiceForSell = prompt("Въведи име на продукта за продажба");

    for(var i = 0; i < productBuyCollection.length; i++){
        var productForSell = productBuyCollection[i];
        if (productForSell.title == productChoiceForSell){
            return productForSell;
        }
    }

    return console.error("Няма такъв продукт!");
}

const isProductQuantityAvailable = function(productObjectToSell, quantityForSell){
    return productObjectToSell.count >= quantityForSell;
}

const getProductById = function(productIdTocheck){
    for(var i = 0; i < productBuyCollection.length; i++){

        if(productIdTocheck == productBuyCollection[i].id){
            return productBuyCollection[i];
        };
    };
};

const getSellPriceWithTax = function(totalSellPrice){
    return (totalSellPrice - (totalSellPrice * currentSellTax / 100));
}

const operationSell = function(){

    if(!isDayStarted){
        return console.error("Не може да извършите тази операция! Първо трябва да стартирате деня!");
    }

    sellMethodOption = getSellMethod();

    //ръчна продажба
    if(sellMethodOption == SELL_METHOD__MANUAL){
        var choiceForManualSell = prompt("Въведете 1 за списък с налични категории или 2 за списък с налични продукти");

        //листване по категории
        if(choiceForManualSell == MANUAL_SELL__BY_CATEGORY){

            listAllProductCategories();
            var categoryChoiceForSell = prompt("Въведи категория за продажба");
            categoryChoiceForSell = categoryChoiceForSell.toLowerCase();
            console.warn(`Продукти в категория: ${categoryChoiceForSell}`);

            for(var i = 0; i < productBuyCollection.length; i++){
                var products = productBuyCollection[i];
                if (products.category == categoryChoiceForSell){
                    console.log(products.title);
                };
            };

            productObjectToSell = getProductForSell();

            var quantityForSell = prompt("Въведете количество за продажба");
            quantityForSell = parseInt(quantityForSell);
            var isSellPossible = isProductQuantityAvailable(productObjectToSell, quantityForSell);

            if(!isSellPossible) {return console.error("Няма достатъчна наличност от продукта");};

            if(isSellPossible){
                alert(`Единичната цена на продукт ${productObjectToSell.title} е ${productObjectToSell.sellPrice}`);
                var totalSellPrice = productObjectToSell.sellPrice * quantityForSell;
                var isSellConfirmed = confirm(`Дължите общо: ${totalSellPrice} Потвърждвате ли продажбата?`);

                if(!isSellConfirmed) return console.log("Отказахте продажбата. Довиждане!");

                if(isSellConfirmed){

                    productObjectToSell.count = productObjectToSell.count - quantityForSell;
                    var sellProfitNet = getSellPriceWithTax(totalSellPrice);
                    profitCurrentDay += sellProfitNet;
                    numberOfOperationsCurrentDay++;
                    numberOfSellsCurrentDay++;
                    return console.log(`Продажбата е успешна! Чистата ти печалба е ${sellProfitNet}`);
                };
            };
        };

        //листване по име на продукт
        if(choiceForManualSell == MANUAL_SELL__BY_PRODUCT){
            listAllProductTitles();
            productObjectToSell = getProductForSell();

            var quantityForSell = prompt("Въведете количество за продажба");
            quantityForSell = parseInt(quantityForSell);
            var isSellPossible = isProductQuantityAvailable(productObjectToSell, quantityForSell);

            if(!isSellPossible) {return console.error("Няма достатъчна наличност от продукта");};

            if(isSellPossible){
                alert(`Единичната цена на продукт ${productObjectToSell.title} е ${productObjectToSell.sellPrice}`);
                var totalSellPrice = productObjectToSell.sellPrice * quantityForSell;
                var isSellConfirmed = confirm(`Дължите общо: ${totalSellPrice} Потвърждвате ли продажбата?`);

                if(!isSellConfirmed) return console.log("Отказахте продажбата. Довиждане!");

                if(isSellConfirmed){

                    productObjectToSell.count = productObjectToSell.count - quantityForSell;
                    var sellProfitNet = getSellPriceWithTax(totalSellPrice);
                    profitCurrentDay += sellProfitNet;
                    numberOfOperationsCurrentDay++;
                    numberOfSellsCurrentDay++;
                    return console.log(`Продажбата е успешна! Чистата ти печалба е ${sellProfitNet}`);
                };
            };
        };

        if(choiceForManualSell != MANUAL_SELL__BY_CATEGORY && choiceForManualSell != MANUAL_SELL__BY_PRODUCT){
            return console.error("Няма такава опция");
        };
    };

    //продажба с бар код
    if(sellMethodOption == SELL_METHOD__AUTO){

        var productIdInput = prompt("Въведи бар код на продукта");
        productObjectToSell = getProductById(productIdInput);

        if(productObjectToSell == "") return console.error("Няма такъв бар код!");

        var quantityForSell = prompt("Въведете количество за продажба");
        quantityForSell = parseInt(quantityForSell);
        var isSellPossible = isProductQuantityAvailable(productObjectToSell, quantityForSell);

        if(!isSellPossible) {return console.error("Няма достатъчна наличност от продукта");};

        if(isSellPossible){
                alert(`Единичната цена на продукт ${productObjectToSell.title} е ${productObjectToSell.sellPrice}`);
                var totalSellPrice = productObjectToSell.sellPrice * quantityForSell;
                var isSellConfirmed = confirm(`Дължите общо: ${totalSellPrice} Потвърждвате ли продажбата?`);

                if(!isSellConfirmed) return console.log("Отказахте продажбата. Довиждане!");

                if(isSellConfirmed){

                    productObjectToSell.count = productObjectToSell.count - quantityForSell;
                    var sellProfitNet = getSellPriceWithTax(totalSellPrice);
                    profitCurrentDay += sellProfitNet;
                    numberOfOperationsCurrentDay++;
                    numberOfSellsCurrentDay++;
                    return console.log(`Продажбата е успешна! Чистата ти печалба е ${sellProfitNet}`);;
            };
        };
    };    
};