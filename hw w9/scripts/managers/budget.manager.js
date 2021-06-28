const BudgetManager = (() => {
    let customerBudget = 0;

    const setBudget = (newBudget) => {
        return customerBudget = newBudget;
    };

    const getBudget = () =>{
        return customerBudget;
    };

    const decreaseBudgetWith = (amount) => {
        return customerBudget -= amount;
    };

    const increaseBudgetWith = (amount) => {
        return customerBudget += amount;
    };

    const isBudgetEnough = (currentExpenses) => {
        return customerBudget >= currentExpenses;
    };

    return{
        setBudget, getBudget, decreaseBudgetWith, increaseBudgetWith, isBudgetEnough
    };
})();