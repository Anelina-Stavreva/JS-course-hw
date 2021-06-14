const transformCurrentToPrevious = function(){

    //прехвърляне на стойностите от текущия ден към стойности за предишен ден 
    numberOfOperationsPreviousDay = numberOfOperationsCurrentDay;
    numberOfSellsPreviousDay = numberOfSellsCurrentDay;
    profitPreviousDay = profitCurrentDay;
    cashBallancePreviousDay = cashBallanceCurrentDay;

    //зануляване на текущите стойности
    numberOfOperationsCurrentDay = 0;
    numberOfSellsCurrentDay = 0;
    profitCurrentDay = 0;
    buyExpensesCurrentDay = 0;
    cashBallanceCurrentDay = 0;
}

const operationEndDay = function(){

    if(!isDayStarted){
        return console.error("Не може да извършите тази операция! Първо трябва да стартирате деня!");
    }

    isDayStarted = false;
    numberOfOperationsCurrentDay++;
    cashBallanceCurrentDay = profitCurrentDay - buyExpensesCurrentDay;
    financialResultCollection.push(cashBallanceCurrentDay);
        
    console.warn(`Успешно затвори деня с капитал ${cashBallanceCurrentDay} парички`);
    transformCurrentToPrevious();
}