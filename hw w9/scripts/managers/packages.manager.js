var packagesCollection = [];
const PackagesManager = (() => {

    //let packagesCollection = [];

    let packageClassic = {
        packageTitle: "classic",
        services: [internet20, televisionAnalogue, telephoneCityHome]
    };

    let packageTensioner = {
        packageTitle: "tensioner",
        services: [internet200, televisionDigital, telephoneIntercityHome]
    };

    let packageTurbo = {
        packageTitle: "turbo",
        services: [internet2000, televisionDigitalPlus, telephoneInternationalOffice]
    };

    packagesCollection.push(packageClassic);
    packagesCollection.push(packageTensioner);
    packagesCollection.push(packageTurbo);

    const offerClassicPackage = () => {
        return [internet20, televisionAnalogue, telephoneCityHome];
    };

    const offerTensionerPackage = () => {
        return [internet200, televisionDigital, telephoneIntercityHome];
    };

    const offerTurboPackage = () => {
        return [internet2000, televisionDigitalPlus, telephoneInternationalOffice];
    };

    return{
        offerClassicPackage, offerTensionerPackage, offerTurboPackage
    };

})();