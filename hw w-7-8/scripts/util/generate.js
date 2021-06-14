//таен търговски код

const getSecretTradingCode = function(){
    var operationSign = (numberOfOperationsPreviousDay == 0) ? "#@" : numberOfOperationsPreviousDay;
    var sellSign = (numberOfSellsPreviousDay == 0) ? "**" : numberOfSellsPreviousDay;
    var profitSign = (profitPreviousDay <= 0 ) ? "00" : profitPreviousDay;

    return `${operationSign}$$${sellSign}%%${profitSign}`;
};

//id на продукт

var currentLetterIndex = 0;
var alphabetCollection  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var currentPrimeNumber  = 2;
var currentProductNumber = 1;

const nextAlphabetLetter = function(){

    if (currentLetterIndex == (alphabetCollection.length)){
        currentLetterIndex = 0;
    }

    return alphabetCollection[currentLetterIndex++];
};


const isPrimeNumber = function(checkNumber){

    var prime = true;

    for(var i = 2; i <= Math.sqrt(checkNumber); i++){

        if(checkNumber % i == 0){
            prime = false;
            break;
        }
    }

    return (prime) ? true : false;
    
}

const nextPrimeNumber = function(){

    while(!isPrimeNumber(currentPrimeNumber)){
        currentPrimeNumber++;
    }
    
    return currentPrimeNumber++;
}

const nextProductNumber = function(){
    return currentProductNumber++;
}


const generateProductId = function(productTitle=""){
    var coeficientA = nextAlphabetLetter();
    var coeficientB = productTitle.length;
    var coeficientC = nextPrimeNumber();
    var coeficientD = nextProductNumber();

    return `${coeficientA}@${coeficientB}%${coeficientC}^${coeficientD}`;
};