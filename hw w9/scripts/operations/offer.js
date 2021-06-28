const operationOfferService = () => {
    let customerNumberInput = prompt("Въведи абонатния си номер");
    let customer = CustomerManager.getCustomerById(customerNumberInput);
    
    if(!customer){
        return console.error("Няма такъв клиент!");
    };
    
    console.log(`Добре дошъл ${customer.name}`);

    let serviceInInterest = prompt(`Въведи индекс на услугата, която те интересува: 1 - Интернет, 2 - Телевизия, 3- Телефон, 4 - пакетна услуга`);
    let customerStatus = customer.getCustomerStatus();
    let serviceToOffer;

    //пакети
    if (serviceInInterest == 4){
        if (customerStatus == StatusEnum.POOR){
            serviceToOffer = PackagesManager.offerClassicPackage();
            console.warn("Предлагаме Ви пакет Класик със следните абонаменти:");
        };

        if (customerStatus == StatusEnum.MEDIUM){
            serviceToOffer = PackagesManager.offerTensionerPackage();
            console.warn("Предлагаме Ви пакет Натегач със следните абонаменти:");
        };

        if (customerStatus == StatusEnum.RICH){
            serviceToOffer = PackagesManager.offerTurboPackage();
            console.warn("Предлагаме Ви пакет Турбо Гъзар със следните абонаменти:");
        };

        
        for(let i = 0; i < serviceToOffer.length; i++){
            serviceToOffer[i].render();
        };

        let isPackageAccepted = confirm(`Ще се абонираш ли за предложения пакет`);

        if(!isPackageAccepted){
            return console.log("Довиждане! Много ти здраве!");
        };
    
        if(isPackageAccepted){
            for(let i = 0; i < serviceToOffer.length; i++){
                serviceToOffer[i].idSign = generateServiceIdSign(customer.customerNumber, serviceToOffer[i].idSign);
                customer.addService(serviceToOffer[i]);
            };
        };
        console.log(customer.subscriptionCollection);
        return console.warn(`Успешно се абонира за пакетната услуга`);

    };


    //Интернет

    if (serviceInInterest == 1){
        if (customerStatus == StatusEnum.POOR){
            serviceToOffer = InternetManager.offerBadQualityInternet();
        };

        if (customerStatus == StatusEnum.MEDIUM){
            serviceToOffer = InternetManager.offerMediumQualityInternet();
        };

        if (customerStatus == StatusEnum.RICH){
            serviceToOffer = InternetManager.offerGoodQualityInternet();
        };
    };
    

    //Телевизия

    if (serviceInInterest == 2){
        if (customerStatus == StatusEnum.POOR){
            serviceToOffer = TelevisionManager.offerBadQualityTV();
        };

        if (customerStatus == StatusEnum.MEDIUM){
            serviceToOffer = TelevisionManager.offerMediumQualityTV();
        };

        if (customerStatus == StatusEnum.RICH){
            serviceToOffer = TelevisionManager.offerGoodQualityTV();
        };
    };

    //Телефон

    if (serviceInInterest == 3){
        if (customerStatus == StatusEnum.POOR){
            serviceToOffer = TelephoneManager.offerBadRangeTelephone();
        };

        if (customerStatus == StatusEnum.MEDIUM){
            serviceToOffer = TelephoneManager.offerMediumRangeTelephone();
        };

        if (customerStatus == StatusEnum.RICH){
            serviceToOffer = TelephoneManager.offerGoodRangeTelephone();
        };
    };

    console.warn("Предлагаме Ви следния абонамент:");
    serviceToOffer.render();

    let isOfferAccepted = confirm(`Ще се абонираш ли за услуга ${serviceToOffer.title}`);

    if(!isOfferAccepted){
        return console.log("Довиждане! Много ти здраве!");
    };

    if(isOfferAccepted){
        serviceToOffer.idSign = generateServiceIdSign(customer.customerNumber, serviceToOffer.idSign);
        customer.addService(serviceToOffer);
        console.log(customer.subscriptionCollection);
        console.warn(`Успешно се абонира за услуга ${serviceToOffer.title}`);
    };
};