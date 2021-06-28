class Customer{
    constructor(customerObject){
        this.name   = customerObject.name;
        this.age    = customerObject.age;
        this.sex    = customerObject.sex;
        this.status = customerObject.status;
        this.budget = BudgetManager.setBudget(customerObject.budget);

        this.category = getCustomerCategory(this.age);
        this.customerNumber = generateCustomerNumber();
        this.subscriptionCollection = [];
    };

    addService(serviceObject){
        this.subscriptionCollection.push(serviceObject);
    };

    getCustomerStatus(){
        return this.status;
    };

    render(){
        console.warn(`Клиентски характеристики:`);
        console.log(`Име: ${this.name}`);
        console.log(`Години: ${this.age}`);
        console.log(`Пол: ${this.sex}`);
        console.log(`Социален статус: ${this.status}`);
        console.log(`Бюджет: ${this.budget}`);
        console.log(`Категория: ${this.category}`);
        console.log(`Абонатен номер: ${this.customerNumber}`);
        console.log(`Абонаменти:`);

        for(let i=0; i < this.subscriptionCollection.length; i++){
            console.log(this.subscriptionCollection[i].title);
        };
    };
};