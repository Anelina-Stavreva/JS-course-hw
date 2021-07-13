const operationItemTemplate = (first, second, currentOperator, total) => {
    let operator = getOperatorSymbol(currentOperator);
    return `<div class="operation-item">${first} ${operator} ${second} = ${total}</div>`;
};

const getOperatorSymbol = (operator) => {
    if (operator == "add") return "+";
    if (operator == "subtract") return "-";
    if (operator == "multiply") return "*";
    if (operator == "divide") return "/";
};

// number buttons =====================================================

number1Component.addEventListener("click", () => {

    OutputManager.formCurrentOperand("1");
    outputComponent.innerText = OutputManager.getCurrentOperand();
    outputComponent.classList.remove("final-result");
    
});

number2Component.addEventListener("click", () => {

    OutputManager.formCurrentOperand("2");
    outputComponent.innerText = OutputManager.getCurrentOperand();
    outputComponent.classList.remove("final-result");
    
});

number3Component.addEventListener("click", () => {

    OutputManager.formCurrentOperand("3");
    outputComponent.innerText = OutputManager.getCurrentOperand();
    outputComponent.classList.remove("final-result");
    
});

number4Component.addEventListener("click", () => {

    OutputManager.formCurrentOperand("4");
    outputComponent.innerText = OutputManager.getCurrentOperand();
    outputComponent.classList.remove("final-result");
    
});

number5Component.addEventListener("click", () => {

    OutputManager.formCurrentOperand("5");
    outputComponent.innerText = OutputManager.getCurrentOperand();
    outputComponent.classList.remove("final-result");
    
});

number6Component.addEventListener("click", () => {

    OutputManager.formCurrentOperand("6");
    outputComponent.innerText = OutputManager.getCurrentOperand();
    outputComponent.classList.remove("final-result");
    
});

number7Component.addEventListener("click", () => {

    OutputManager.formCurrentOperand("7");
    outputComponent.innerText = OutputManager.getCurrentOperand();
    outputComponent.classList.remove("final-result");
    
});

number8Component.addEventListener("click", () => {

    OutputManager.formCurrentOperand("8");
    outputComponent.innerText = OutputManager.getCurrentOperand();
    outputComponent.classList.remove("final-result");
    
});

number9Component.addEventListener("click", () => {

    OutputManager.formCurrentOperand("9");
    outputComponent.innerText = OutputManager.getCurrentOperand();
    outputComponent.classList.remove("final-result");
    
});

// action buttons =====================================================

actionAddComponent.addEventListener("click", () => {

    if(OutputManager.getFirstOperand() == undefined){
        OutputManager.setFirstOperand();

        OutputManager.setCurrentOperator("add");
        OutputManager.resetCurrentOperand();
        outputComponent.innerText = OutputManager.getCurrentOperand();
        outputComponent.classList.remove("final-result");
        return;
    };

    return outputComponent.innerText = "Натисни равно и тогава продължи с другите калкулации";
});

actionSubtractComponent.addEventListener("click", () => {

    if(OutputManager.getFirstOperand() == undefined){
        OutputManager.setFirstOperand();

        OutputManager.setCurrentOperator("subtract");
        OutputManager.resetCurrentOperand();
        outputComponent.innerText = OutputManager.getCurrentOperand();
        outputComponent.classList.remove("final-result");
        return;
    };

    return outputComponent.innerText = "Натисни равно и тогава продължи с другите калкулации";
});

actionMultiplyComponent.addEventListener("click", () => {

    if(OutputManager.getFirstOperand() == undefined){
        OutputManager.setFirstOperand();

        OutputManager.setCurrentOperator("multiply");
        OutputManager.resetCurrentOperand();
        outputComponent.innerText = OutputManager.getCurrentOperand();
        outputComponent.classList.remove("final-result");
        return;
    };

    return outputComponent.innerText = "Натисни равно и тогава продължи с другите калкулации";
});

actionDivideComponent.addEventListener("click", () => {

    if(OutputManager.getFirstOperand() == undefined){
        OutputManager.setFirstOperand();

        OutputManager.setCurrentOperator("divide");
        OutputManager.resetCurrentOperand();
        outputComponent.innerText = OutputManager.getCurrentOperand();
        outputComponent.classList.remove("final-result");
        return;
    };

    return outputComponent.innerText = "Натисни равно и тогава продължи с другите калкулации";
});



actionEqualComponent.addEventListener("click", () => {

    if(OutputManager.getFirstOperand() != undefined && OutputManager.getSecondOperand() == undefined){

        OutputManager.setSecondOperand();

        if(OutputManager.getCurrentOperator() == "add"){
            OutputManager.addOperation();
        };

        if(OutputManager.getCurrentOperator() == "subtract"){
            OutputManager.subtractOperation();
        };

        if(OutputManager.getCurrentOperator() == "multiply"){
            OutputManager.multiplyOperation();
        };

        if(OutputManager.getCurrentOperator() == "divide"){
            OutputManager.divideOperation();
        };
        
        outputComponent.innerText = OutputManager.getFinalOutput();
        outputComponent.classList.add("final-result");
        OperationsPanelComponent.innerHTML += operationItemTemplate(OutputManager.getFirstOperand(), OutputManager.getSecondOperand(), OutputManager.getCurrentOperator(), OutputManager.getFinalOutput());
        OutputManager.setCurrentOperand(OutputManager.getFinalOutput().toString());
        OutputManager.resetAllWithoutCurrentOperand();
        return;
    };

    return outputComponent.innerText = "Нещо се обърка, рестартирай!";
});

// delete buttons

actionDeleteAllComponent.addEventListener("click", () => {

    OperationsPanelComponent.innerHTML = "";
    OutputManager.resetAllWithoutCurrentOperand();
    OutputManager.resetCurrentOperand();
    outputComponent.innerText = OutputManager.getCurrentOperand();
    outputComponent.classList.remove("final-result");

});

actionDeleteLastComponent.addEventListener("click", () => {
    
    OutputManager.delOneSymbol(OutputManager.getCurrentOperand());
    outputComponent.innerText = OutputManager.getCurrentOperand();
    
});