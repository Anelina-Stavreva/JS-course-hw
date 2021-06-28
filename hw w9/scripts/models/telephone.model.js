class TelephoneService {
    constructor(argumentObject){

        this.title              = argumentObject.title;
        this.type               = argumentObject.type;
        this.range              = argumentObject.range;
        this.category           = argumentObject.category;
        this.price              = argumentObject.price;
        this.term               = argumentObject.term;

        this.idSign             ="TP";
        this.isPaid             = false;
    };

    render(){
        console.log(`===================`);
        console.log(`Услуга: ${this.title}`);
        console.log(`Тип: ${this.type}`);
        console.log(`Обхват: ${this.range}`);
        console.log(`Категория: ${this.category}`);
        console.log(`Цена: ${this.price}`);
        console.log(`Срок в месеци: ${this.term}`);
        console.log(`Сигнатура: ${this.idSign}`);
    };
};