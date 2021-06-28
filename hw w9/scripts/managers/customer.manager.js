const CustomerManager = (() => {
    let customerCollection = [];

    const addCustomer = (customerObject) => {
        customerCollection.push(customerObject);
    };

    const getAllCustomers = () => {
        return customerCollection;
    };

    const getCustomerById = (customerId) => {

        for(let i = 0; i < customerCollection.length; i++){
            if(customerCollection[i].customerNumber == customerId){
                return customerCollection[i];
            };
        };
    };

    const getCustomerByAge = (ageToCheck) => {
        console.warn(`Списък на клиентите:`);
        for(let i = 0; i < customerCollection.length; i++){
            if(customerCollection[i].age == ageToCheck){
                console.log(`${customerCollection[i].name} на възраст ${customerCollection[i].age}`);
            };
        };
    };

    const getCustomersByAgeRange = (minAge, maxAge) => {
        console.warn(`Списък на клиентите:`);
        for(let i = 0; i < customerCollection.length; i++){
            if(customerCollection[i].age >= minAge && customerCollection[i].age <= maxAge){
                console.log(`${customerCollection[i].name} на възраст ${customerCollection[i].age}`);
            };
        };
    };

    const getCustomersByCategory = (categoryToCheck) => {
        console.warn(`Списък на клиентите:`);
        for(let i = 0; i < customerCollection.length; i++){
            if(customerCollection[i].category == categoryToCheck){
                console.log(`${customerCollection[i].name} от категория ${customerCollection[i].category}`);
            };
        };
    };

    const getCustomersByStatus = (statusToCheck) => {
        console.warn(`Списък на клиентите:`);
        for(let i = 0; i < customerCollection.length; i++){
            if(customerCollection[i].status == statusToCheck){
                console.log(`${customerCollection[i].name} със статус ${customerCollection[i].status}`);
            };
        };
    };

    return{
        addCustomer, getAllCustomers, getCustomerById, getCustomerByAge, getCustomersByAgeRange, getCustomersByCategory, getCustomersByStatus
    };
})();