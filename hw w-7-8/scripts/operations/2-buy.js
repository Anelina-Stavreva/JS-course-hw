var productBuyCollection = [];

const isTradingCodeValid = function(inputTradingCode){
    return currentSecretTradingCode == inputTradingCode;
};

const isSellPriceValid = function(buyPrice, sellPrice){
    return (sellPrice > buyPrice) && (sellPrice <= (buyPrice*1.5))
}

const selectProductDetailToCorrect = function(productObject){
    var correctionChoice = prompt("Въведи индекса на характеристиката, която искаш да коригираш (от 1 до 5)");
    
    if(correctionChoice == 1){
        var category = prompt("Моля въведете категория на стоката");
        productObject.correctProductCategory(category);
        console.warn("Коригирана категория!");
        productObject.render();
        return productObject;
    }

    if(correctionChoice == 2){
        var title = prompt("Моля въведете име на стоката");
        productObject.correctProductTitle(title);
        console.warn("Коригирано име на стоката!");
        productObject.render();
        return productObject;
    }

    if(correctionChoice == 3){
        var count = prompt("Моля въведете количество от закупената стока");
        productObject.correctProductCount(count);
        console.warn("Коригирано количество!");
        productObject.render();
        return productObject;
    }

    if(correctionChoice == 4){
        var buyPrice   = prompt("Моля въведете покупна цена");
        productObject.correctProductBuyPrice(buyPrice);
        console.warn("Коригирана покупна цена!");
        productObject.render();
        return productObject;
    }

    if(correctionChoice == 5){
        var sellPrice  = prompt("Моля въведете продажна цена");
        productObject.correctProductSellPrice(sellPrice);
        console.warn("Коригирана продажна цена!");
        productObject.render();
        return productObject;
    }

    return console.error("Няма характеристика с такъв индекс");
}

const operationBuy = function(){

    if(!isDayStarted){
        return console.error("Не може да извършите тази операция! Първо трябва да стартирате деня!");
    }

    console.warn("Покупка");
    const inputTradingCode = prompt("Въведете тайния си търговски код");

    if(!isTradingCodeValid(inputTradingCode)){
        return console.error("Въведохте грешен код! Моля опитайте отново по-късно");
    }

    var category   = prompt("Моля въведете категория на стоката");
    category = category.toLowerCase();
    var title      = prompt("Моля въведете име на стоката");
    title = title.toLowerCase();
    var count      = prompt("Моля въведете количество от закупената стока");
    var buyPrice   = prompt("Моля въведете покупна цена");
    var sellPrice  = prompt("Моля въведете продажна цена");

    if(!isSellPriceValid(buyPrice,sellPrice)){
        return console.error("Въведохте невалидна цена! Моля опитайте отново по-късно");
    }

    var productObject = new ProductClass({category, title, count, buyPrice, sellPrice});
    productObject.render();

    var isProductInputConfirmed = confirm("Да запазя ли продукта и характеристиките му в системата?");

    while(!isProductInputConfirmed){
        selectProductDetailToCorrect(productObject);
        isProductInputConfirmed = confirm("Да запазя ли продукта и характеристиките му в системата?");
    }; 

    if(isProductInputConfirmed){
        productBuyCollection.push(productObject);
        var currentBuyExpense = productObject.getBuyExpenseWithTaxes();
        buyExpensesCurrentDay += currentBuyExpense;
        console.warn(`Успешно заприходихте продукта. Общият разход с данъците е ${currentBuyExpense}`)
    };

    numberOfOperationsCurrentDay++;
}