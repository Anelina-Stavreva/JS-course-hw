const operationRegisterNewClient = () => {

    let name        = prompt("Въведи потребителско име");
    let age         = prompt("Въведи възрастта си");
    age = parseInt(age);
    let sex         = prompt("Въведи пол: MALE или FEMALE");

    if(!SexEnum.isSexValid(sex)){
        return console.error("Въведохте грешен пол! Довиждане!");
    };

    let status      = prompt("Въведи социалния си статус: POOR, MEDIUM или RICH");

    if(!StatusEnum.isStatusValid(status)){
        return console.error("Няма такъв статус! Довиждане!");
    };

    let initialBudget      = prompt("Въведи колко пари ще вкараш в сметката си");

    initialBudget = parseInt(initialBudget);
    BudgetManager.setBudget(initialBudget);
    let budget = BudgetManager.getBudget();

    let customer = new Customer ({
        name, age, sex, status, budget
    });

    CustomerManager.addCustomer(customer);

    // customer.addService({
    //     title: "TV Digital+",
    //     type: TVTypeEnum.DIGITAL,
    //     channelNumber: 150,
    //     quality: QualityEnum.GOOD,
    //     price: 1600,
    //     term: 12
    // });

    console.log("Успешно добавихте нов клиент!");
    customer.render();
};