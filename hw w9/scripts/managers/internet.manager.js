const InternetManager = (() =>{
    let internetServiceCollection = [];

    const addInternetService = (service) => {
        internetServiceCollection.push(service);
    };

    const offerBadQualityInternet = () => {
        for(let i = 0; i < internetServiceCollection.length; i++){
            if(internetServiceCollection[i].quality == QualityEnum.BAD){
                return internetServiceCollection[i];
            };
        };
    };

    const offerMediumQualityInternet = () => {
        for(let i = 0; i < internetServiceCollection.length; i++){
            if(internetServiceCollection[i].quality == QualityEnum.MEDIUM){
                return internetServiceCollection[i];
            };
        };
    };

    const offerGoodQualityInternet = () => {
        for(let i = 0; i < internetServiceCollection.length; i++){
            if(internetServiceCollection[i].quality == QualityEnum.GOOD){
                return internetServiceCollection[i];
            };
        };
    };

    return{
        addInternetService, offerBadQualityInternet, offerMediumQualityInternet, offerGoodQualityInternet
    };
})();