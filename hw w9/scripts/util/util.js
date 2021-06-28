const getCustomerCategory = (age) =>{
    if (age >= 16 && age <= 26 ){
        return "young";
    };

    if (age >= 27 && age <= 36 ){
        return "middle-aged";
    };

    if (age >= 37 && age <= 55 ){
        return "old";
    };

    if (age >= 56 && age <= 70 ){
        return "too old";
    };

    return "suspicious";
};


//абонатен номер на клиент

var alphabetCollection  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getRandomNumberBetweenMinAndMax = (min, max) => {
    
    let randomNumber    = Math.random() * (max - min + 1) + min;
    randomNumber        = Math.floor(randomNumber);
    return randomNumber;
};

const getRandomLetter = () => {
    let randomIndex = getRandomNumberBetweenMinAndMax(0, 25);
    return alphabetCollection[randomIndex];
}

const generateCustomerNumber = () => {
    let coeficientA = getRandomLetter();
    let coeficientB = getRandomNumberBetweenMinAndMax(0,9);
    let coeficientC = getRandomLetter();
    let coeficientD = getRandomNumberBetweenMinAndMax(0,9);
    let coeficientE = getRandomLetter();
    let coeficientF = getRandomNumberBetweenMinAndMax(0,9);

    return `${coeficientA}${coeficientB}${coeficientC}${coeficientD}${coeficientE}${coeficientF}`;
};

const generateServiceIdSign = (customerNumber, serviceSign) => {
    return (`${customerNumber}${serviceSign}${getRandomNumberBetweenMinAndMax(0,9)}`);
};