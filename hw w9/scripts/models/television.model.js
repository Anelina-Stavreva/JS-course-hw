class TelevisionService {
    constructor(argumentObject){
        
        this.title              = argumentObject.title;
        this.type               = argumentObject.type;
        this.channelNumber      = argumentObject.channelNumber;
        this.quality            = argumentObject.quality;
        this.price              = argumentObject.price;
        this.term               = argumentObject.term;

        this.idSign             ="TV";
        this.isPaid             = false;
    };

    render(){
        console.log(`===================`);
        console.log(`Услуга: ${this.title}`);
        console.log(`Тип: ${this.type}`);
        console.log(`Брой канали: ${this.channelNumber}`);
        console.log(`Качество: ${this.quality}`);
        console.log(`Цена: ${this.price}`);
        console.log(`Срок в месеци: ${this.term}`);
        console.log(`Сигнатура: ${this.idSign}`);
    };

};