//Интеренет услуги

const internet20 = new InternetService({
    title: "Internet 20MB",
    localMB: 20,
    internationalMB: 0,
    quality: QualityEnum.BAD,
    price: 200,
    term: 12

});


InternetManager.addInternetService(internet20);

const internet200 = new InternetService({
    title: "Internet 200MB",
    localMB: 200,
    internationalMB: 50,
    quality: QualityEnum.MEDIUM,
    price: 450,
    term: 12

});

InternetManager.addInternetService(internet200);



const internet2000 = new InternetService({
    title: "Internet 2000MB",
    localMB: 2000,
    internationalMB: 250,
    quality: QualityEnum.GOOD,
    price: 2000,
    term: 24

});

InternetManager.addInternetService(internet2000);

//телевизия

const televisionAnalogue = new TelevisionService({
    title: "TV Analogue",
    type: TVTypeEnum.ANALOG,
    channelNumber: 40,
    quality: QualityEnum.BAD,
    price: 120,
    term: 6
})

TelevisionManager.addTVService(televisionAnalogue);


const televisionDigital = new TelevisionService({
    title: "TV Digital",
    type: TVTypeEnum.DIGITAL,
    channelNumber: 100,
    quality: QualityEnum.MEDIUM,
    price: 500,
    term: 12
})

TelevisionManager.addTVService(televisionDigital);

const televisionDigitalPlus = new TelevisionService({
    title: "TV Digital+",
    type: TVTypeEnum.DIGITAL,
    channelNumber: 150,
    quality: QualityEnum.GOOD,
    price: 1600,
    term: 12
})

TelevisionManager.addTVService(televisionDigitalPlus);


//телефонна услуга

const telephoneCityHome = new TelephoneService({
    title: "Tel - Home City",
    type: TelTypeEnum.ANALOG,
    range: TelRangeEnum.CITY,
    category: TelCategoryEnum.HOME,
    price: 90,
    term: 12
});

TelephoneManager.addTelService(telephoneCityHome);


const telephoneIntercityHome = new TelephoneService({
    title: "Tel - Home Intercity",
    type: TelTypeEnum.INTERNET,
    range: TelRangeEnum.INTERCITY,
    category: TelCategoryEnum.HOME,
    price: 180,
    term: 12
});

TelephoneManager.addTelService(telephoneIntercityHome);


const telephoneInternationalOffice = new TelephoneService({
    title: "Tel - Office International",
    type: TelTypeEnum.INTERNET,
    range: TelRangeEnum.INTERNATIONAL,
    category: TelCategoryEnum.COMPANY,
    price: 800,
    term: 24
});

TelephoneManager.addTelService(telephoneInternationalOffice);
