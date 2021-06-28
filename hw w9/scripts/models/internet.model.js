class InternetService {
    constructor(argumentObject){
        
        this.title              = argumentObject.title;
        this.localMB            = argumentObject.localMB;
        this.internationalMB    = argumentObject.internationalMB;
        this.quality            = argumentObject.quality;
        this.price              = argumentObject.price;
        this.term               = argumentObject.term;

        this.idSign             = "IN";
        this.isPaid             = false;
    };

    render(){
        console.log(`===================`);
        console.log(`Услуга: ${this.title}`);
        console.log(`LocalMB: ${this.localMB}`);
        console.log(`InternationalMB: ${this.internationalMB}`);
        console.log(`Качество: ${this.quality}`);
        console.log(`Цена: ${this.price}`);
        console.log(`Срок в месеци: ${this.term}`);
        console.log(`Сигнатура: ${this.idSign}`);
    };
};