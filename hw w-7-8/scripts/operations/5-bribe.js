const operationBribe = function(){

    if(!isDayStarted){
        return console.error("Не може да извършите тази операция! Първо трябва да стартирате деня!");
    }

    console.warn("Подкупи");
    numberOfOperationsCurrentDay++;
}