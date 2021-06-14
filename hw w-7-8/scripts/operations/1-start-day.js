var isDayStarted = false;

var currentSecretTradingCode = null;

const getCashBallanceNewDay = function(){
    
    while(cashBallanceCurrentDay != cashBallancePreviousDay){
        cashBallanceCurrentDay = prompt("Въведете валиден начален капитал в касата");
    }
    return cashBallanceCurrentDay;
}

const operationStartDay = function(){

    if(isDayStarted){
        return console.error("Денят вече е стартиран!");
    }

    cashBallanceCurrentDay = getCashBallanceNewDay();
    currentSecretTradingCode = getSecretTradingCode();
    console.warn(`Успешно стартира деня с капитал ${cashBallanceCurrentDay} парички. Тайният ти код е: ${currentSecretTradingCode}`);

    isDayStarted = true;
    numberOfOperationsCurrentDay++;
    
}