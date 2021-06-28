const TelephoneManager = (() =>{
    let telephoneServiceCollection = [];

    const addTelService = (service) => {
        telephoneServiceCollection.push(service);
    };

    const offerBadRangeTelephone = () => {
        for(let i = 0; i < telephoneServiceCollection.length; i++){
            if(telephoneServiceCollection[i].range == TelRangeEnum.CITY){
                return telephoneServiceCollection[i];
            };
        };
    };

    const offerMediumRangeTelephone = () => {
        for(let i = 0; i < telephoneServiceCollection.length; i++){
            if(telephoneServiceCollection[i].range == TelRangeEnum.INTERCITY){
                return telephoneServiceCollection[i];
            };
        };
    };

    const offerGoodRangeTelephone = () => {
        for(let i = 0; i < telephoneServiceCollection.length; i++){
            if(telephoneServiceCollection[i].range == TelRangeEnum.INTERNATIONAL){
                return telephoneServiceCollection[i];
            };
        };
    };

    return{
        addTelService, offerBadRangeTelephone, offerMediumRangeTelephone, offerGoodRangeTelephone
    };
})();