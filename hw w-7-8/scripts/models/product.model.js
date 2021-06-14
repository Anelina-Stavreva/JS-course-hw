class ProductClass{

    constructor(objectParameter){

        this.category       = objectParameter.category;
        this.title          = objectParameter.title;
        this.count          = parseInt(objectParameter.count);
        this.buyPrice       = parseInt(objectParameter.buyPrice);
        this.sellPrice      = parseInt(objectParameter.sellPrice);
        this.id             = generateProductId(objectParameter.title);
    }

    render(){
        console.warn("Продуктови характеристики:");
        console.log(`1. Категория на продукт: ${this.category}`);
        console.log(`2. Име на продукт: ${this.title}`);
        console.log(`3. Брой закупени продукти: ${this.count}`);
        console.log(`4. Покупна цена: ${this.buyPrice}`);
        console.log(`5. Продажна цена: ${this.sellPrice}`);
        console.log(`6. Идентификационен номер: ${this.id}`);
    }

    correctProductCategory(category){
        this.category = category;
    }

    correctProductTitle(title){
        this.title = title;
    }

    correctProductCount(count){
        this.count = count;
    }

    correctProductBuyPrice(buyPrice){
        this.buyPrice = buyPrice;
    }

    correctProductSellPrice(sellPrice){
        this.sellPrice = sellPrice;
    }

    getBuyExpenseWithTaxes(){
        return (this.count * (this.buyPrice + (this.buyPrice * currentBuyTaxRate / 100)));
    }

}

