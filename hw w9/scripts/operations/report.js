const operationReport = () => {
    console.warn("Меню справки:");
    console.log("1. Справка по възраст");
    console.log("2. Справка по възрастов интервал");
    console.log("3. Справка по възрастова категория");
    console.log("4. Справка по социален статус");

    let reportType = prompt("Въведи индекс на справката, която да ти покажа");
    

    if(reportType == 1){
        let reportAge = prompt("Въведи възраст на клиентите, които да ти покажа");
        reportAge = parseInt(reportAge);
        CustomerManager.getCustomerByAge(reportAge);
    };

    if(reportType == 2){
        let ageMin = prompt("Въведи долна възрастова граница");
        let ageMax = prompt("Въведи горна възрастова граница");
        CustomerManager.getCustomersByAgeRange(ageMin,ageMax);
    };

    if(reportType == 3){
        let customerCategory = prompt("Въведи категория на клиентите, които да ти покажа (young, middle-aged, old, too old или suspicious)");
        CustomerManager.getCustomersByCategory(customerCategory);
    };

    if(reportType == 4){
        let customerStatus = prompt("Въведи статус на клиентите, които да ти покажа (POOR, MEDIUM, RICH)");
        CustomerManager.getCustomersByStatus(customerStatus);
    };

    if(reportType != 1 && reportType != 2 && reportType != 3 && reportType != 4){
        return console.error("Няма такава справка!");
    };
};