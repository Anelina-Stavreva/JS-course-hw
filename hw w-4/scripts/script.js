var welcomeMessage = "Добре дошли в крипто борса Джунгла, искате ли да си купите малко кинти ?";
var isConfirmPurchase = confirm(welcomeMessage);

if(!isConfirmPurchase){
    alert("Благодаря че НЕпазарувахте при нас, хайде чупката.");
}

if(isConfirmPurchase){

    var currencyPrice;
    var customerPromoBudget = 100;
    var availableCurrencies = "На вашето внимание актуални валути: Criptomaza, Sharo, Bitcat, eTorium, Tiger";
    alert(availableCurrencies);

    var clientCurrencyChoicе = prompt("Разполагате с бонус бюджет на стойност 100$. Въведете валута, която искате да закупите");
    var isCurrencyAvailable =   (clientCurrencyChoicе == "Criptomaza")  ||
                                (clientCurrencyChoicе == "Sharo")       ||
                                (clientCurrencyChoicе == "Bitcat")      ||
                                (clientCurrencyChoicе == "eTorium")     ||
                                (clientCurrencyChoicе == "Tiger");

    
    if(!isCurrencyAvailable){
        alert("Няма такава валута! Купете си Sharo на промоционална цена през този месец");
        clientCurrencyChoicе = "Sharo";
        currencyPrice = 0.5;
    }
    
    if(isCurrencyAvailable){

        if(clientCurrencyChoicе == "Criptomaza"){
            currencyPrice = 10;
        }
        else if(clientCurrencyChoicе == "Sharo"){
            currencyPrice = 0.5;
        }
        else if(clientCurrencyChoicе == "Bitcat"){
            currencyPrice = 100000;
        }
        else if(clientCurrencyChoicе == "eTorium"){
            currencyPrice = 2;
        }
        else if(clientCurrencyChoicе == "Tiger"){
            currencyPrice = 50;
        }
    }
    
    var clientCurrencyQuantity = prompt("Колко единици валута искате да закупите?");
    if(clientCurrencyQuantity <= 0){
        alert("Въведете положително число!");
        clientCurrencyQuantity = prompt("Колко единици валута искате да закупите?");
    }

    var clientTotalPurchaseSum = currencyPrice * clientCurrencyQuantity;
    var clientPurchaseChange = customerPromoBudget - clientTotalPurchaseSum;
    
    if(clientTotalPurchaseSum <= customerPromoBudget){

        alert("Вие станахте горд собственик на "+ clientCurrencyQuantity +
              " eдиници от валутата " +clientCurrencyChoicе +
              ". Покупката Ви струваше " + clientTotalPurchaseSum +
              "$. Рестото Ви е " + clientPurchaseChange +"$.");

        var isClientCheckBallance = confirm("Ти си вече по-богат! Искаш ли да ти покажа колко много парички имаш?");

        if(isClientCheckBallance){
            alert("Ти имаш точно "+ clientCurrencyQuantity +
              " eдиници от валутата " +clientCurrencyChoicе +
              " на стойност " + clientTotalPurchaseSum + "$.");
              
            alert("За мен беше удоволствие че избрахте нашия магазин, до нови срещи!");
        }
        else{
            alert("Ти губиш, хайде да си ходиш");
        }

    }
    else{
        alert("Много си алчен, няма място за теб в моя магазин. Сбогом")
    }

}
