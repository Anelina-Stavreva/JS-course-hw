const OPERATION__START_DAY = 1;
const OPERATION__BUY = 2;
const OPERATION__SELL = 3;
const OPERATION__REPORT = 4;
const OPERATION__BRIBE = 5;
const OPERATION__END_DAY = 6;

const listAllOperations = function(){
    console.log("===========================");
    console.log("Меню с операции:");
    console.log("1. Стартиране на деня");
    console.log("2. Покупка");
    console.log("3. Продажба");
    console.log("4. Справка");
    console.log("5. Подкуп");
    console.log("6. Затваряне на деня");
};


const chooseOPERATION = function(operationIndex){

    listAllOperations();

    //var operationIndex = prompt("Избери номер на операция");

    if (operationIndex == 1) return operationStartDay();
    if (operationIndex == 2) return operationBuy();
    if (operationIndex == 3) return operationSell();
    if (operationIndex == 4) return operationReport();
    if (operationIndex == 5) return operationBribe();
    if (operationIndex == 6) return operationEndDay();

    return console.error("Няма операция с такъв индекс! Опитай отново");
};


chooseOPERATION(OPERATION__START_DAY);
chooseOPERATION(OPERATION__BUY);
chooseOPERATION(OPERATION__BUY);
chooseOPERATION(OPERATION__SELL);
chooseOPERATION(OPERATION__REPORT);
chooseOPERATION(OPERATION__END_DAY);
chooseOPERATION(OPERATION__START_DAY);
chooseOPERATION(OPERATION__END_DAY);
chooseOPERATION(OPERATION__REPORT);

