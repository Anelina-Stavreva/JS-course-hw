
const OPERATION_REGISTER_CLIENT = 1;
const OPERATION_OFFER_SERVICE   = 2;
const OPERATION_PAYMENT         = 3;
const OPERATION_REPORT          = 4;

const chooseOperation = (operationIndex) => {

    if(operationIndex == 1) return operationRegisterNewClient();
    if(operationIndex == 2) return operationOfferService();
    if(operationIndex == 3) return operationPayment();
    if(operationIndex == 4) return operationReport();

    return console.error("Няма такава операция");
};

chooseOperation(OPERATION_REGISTER_CLIENT);
// chooseOperation(OPERATION_REGISTER_CLIENT);
// chooseOperation(OPERATION_REGISTER_CLIENT);
chooseOperation(OPERATION_OFFER_SERVICE);
// chooseOperation(OPERATION_OFFER_SERVICE);
//chooseOperation(OPERATION_PAYMENT);
// chooseOperation(OPERATION_PAYMENT);
//chooseOperation(OPERATION_REPORT);

