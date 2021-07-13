const OutputManager = (() => {

    let currentOperand = "";
    let currentOperator;
    let firstOperand;
    let secondOperand;
    let finalOutput;

    const getCurrentOperand = () => {
        return currentOperand;
    };

    const setCurrentOperand = (value) => {
        return currentOperand = value;
    };

    const formCurrentOperand = (number) => {
        return currentOperand += number;
    };

    const resetCurrentOperand = () => {
        return currentOperand = "";
    }

    const getFirstOperand = () => {
        return firstOperand;
    };

    const setFirstOperand = () => {
        firstOperand = currentOperand;
    };

    const getSecondOperand = () => {
        return secondOperand;
    };

    const setSecondOperand = () => {
        secondOperand = currentOperand;
    };

    const setCurrentOperator = (selectedOperator) => {
        return currentOperator = selectedOperator;
    };

    const getCurrentOperator = () => {
        return currentOperator;
    };

    const addOperation = () => {
        firstOperand = parseInt(firstOperand);
        secondOperand = parseInt(secondOperand);

        return finalOutput = firstOperand + secondOperand;
    };

    const subtractOperation = () => {
        firstOperand = parseInt(firstOperand);
        secondOperand = parseInt(secondOperand);

        return finalOutput = firstOperand - secondOperand;
    };

    const divideOperation = () => {
        firstOperand = parseInt(firstOperand);
        secondOperand = parseInt(secondOperand);

        return finalOutput = firstOperand / secondOperand;
    };

    const multiplyOperation = () => {
        firstOperand = parseInt(firstOperand);
        secondOperand = parseInt(secondOperand);

        return finalOutput = firstOperand * secondOperand;
    };

    const getFinalOutput = () => {
        return finalOutput;
    };

    const resetAllWithoutCurrentOperand = () => {
        currentOperator = undefined;
        firstOperand = undefined;
        secondOperand = undefined;
        finalOutput = undefined;
    };

    const delOneSymbol = (currentString) => {
        return currentOperand = currentString.slice(0, currentString.length-1);
    };

    return {
        getCurrentOperand, formCurrentOperand, resetCurrentOperand, getFirstOperand, setCurrentOperand,
        setFirstOperand, setCurrentOperator, getSecondOperand, setSecondOperand, 
        addOperation, getFinalOutput, resetAllWithoutCurrentOperand, getCurrentOperator, subtractOperation, 
        divideOperation, multiplyOperation, delOneSymbol
    };

})();