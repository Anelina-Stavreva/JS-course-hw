const operationPayment = () => {

    let customerNumberInput = prompt("Меню плащане. Въведи абонатния си номер");
    let customer = CustomerManager.getCustomerById(customerNumberInput);
    
    if(!customer){
        return console.error("Няма такъв клиент!");
    };
    
    console.log(`Добре дошъл ${customer.name}`);
    
    let subscriptions = customer.subscriptionCollection;
    console.warn(`Следните абонаменти не са платени:`);
    
    for(let i = 0; i < subscriptions.length; i++){

        if(!subscriptions[i].isPaid){
            //console.log(currentService);
            console.log(`Дължите ${subscriptions[i].price} за услуга ${subscriptions[i].title} със идентификационен код: ${subscriptions[i].idSign}`);
        };
    };

    let serviceToPayInput = prompt("Въведи идентификационен код на услугата, която искаш да платиш");
    let serviceToBePaid;

    for(let i = 0; i < subscriptions.length; i++){
        if(subscriptions[i].idSign == serviceToPayInput){
            serviceToBePaid = subscriptions[i];
        };
    };

    if(!serviceToBePaid){
        return console.error("Няма такъв абонамент!");
    };

    let isPaymentPossible = BudgetManager.isBudgetEnough(serviceToBePaid.price);

    while(!isPaymentPossible){
        let increaseAmount = prompt(`Дължиш ${serviceToBePaid.price}, а в сметката ти има само ${BudgetManager.getBudget()}. Колко пари ще вкараш?`);
        increaseAmount = parseInt(increaseAmount);
        customer.budget = BudgetManager.increaseBudgetWith(increaseAmount);
        isPaymentPossible = BudgetManager.isBudgetEnough(serviceToBePaid.price);
    };

    if(isPaymentPossible){
        customer.budget = BudgetManager.decreaseBudgetWith(serviceToBePaid.price);
        serviceToBePaid.isPaid = true;
        console.log("Успешно извърши плащането! Довиждане!");
        console.log(subscriptions);
    }
};