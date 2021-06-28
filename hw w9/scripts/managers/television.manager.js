
const TelevisionManager = (() =>{
    let televisionServiceCollection = [];

    const addTVService = (service) => {
        televisionServiceCollection.push(service);
    };

    const offerBadQualityTV = () => {
        for(let i = 0; i < televisionServiceCollection.length; i++){
            if(televisionServiceCollection[i].quality == QualityEnum.BAD){
                return televisionServiceCollection[i];
            };
        };
    };

    const offerMediumQualityTV = () => {
        for(let i = 0; i < televisionServiceCollection.length; i++){
            if(televisionServiceCollection[i].quality == QualityEnum.MEDIUM){
                return televisionServiceCollection[i];
            };
        };
    };

    const offerGoodQualityTV = () => {
        for(let i = 0; i < televisionServiceCollection.length; i++){
            if(televisionServiceCollection[i].quality == QualityEnum.GOOD){
                return televisionServiceCollection[i];
            };
        };
    };

    return{
        addTVService, offerBadQualityTV, offerMediumQualityTV, offerGoodQualityTV
    };
})();