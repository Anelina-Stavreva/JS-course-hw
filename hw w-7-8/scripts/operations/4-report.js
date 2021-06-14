const REPORT_INDEX__FINANCIAL_RESULT    = 1;
const REPORT_INDEX__TURNOVER            = 2;
const REPORT_INDEX__ALL_PRODUCTS        = 3;

const REPORT_FINANCIAL__CURRENT         = 1;
const REPORT_FINANCIAL__PREVIOUS_ALL    = 2;

const operationReport = function(){
    console.warn("Справки:");
    console.log("1. Справки - финансов резултат");
    console.log("2. Справки - обороти");
    console.log("3. Справка - всички продукти");

    var reportTypeToRender = prompt("Какъв тип справка да ти заредя?");

    //справки финансов резултат
    if(reportTypeToRender == REPORT_INDEX__FINANCIAL_RESULT){

        console.warn("Финансови справки:");
        console.log("1. Дневен финансов резултат");
        console.log("2. Предишни финасови резултати: последователно");

        var financialResultReportVariant = prompt("Въведи индекс на справката, която желаеш да видиш");

        //справка текущ финансов резултат
        if (financialResultReportVariant == REPORT_FINANCIAL__CURRENT){
            return console.log(`Текущият финансов резултат е: ${profitCurrentDay - buyExpensesCurrentDay}`);
        }

        //справка предишен финансов резултат последователно
        if (financialResultReportVariant == REPORT_FINANCIAL__PREVIOUS_ALL){

            console.warn(`Предишни финансови резултати - последователно:`);

            for(var i = 0; i < financialResultCollection.length; i++){
                console.log(financialResultCollection[i]);
            }
            return;
        }

    };

    //справки обороти
    if(reportTypeToRender == REPORT_INDEX__TURNOVER){
        
    };

    //справка всички продукти
    if(reportTypeToRender == REPORT_INDEX__ALL_PRODUCTS){
        console.warn("Продукти за продажба:")
        for(var i = 0; i < productBuyCollection.length; i++){
            console.log(`Продукт ${productBuyCollection[i].title} с баркод ${productBuyCollection[i].id}`);
        };
        return;
    };

    //грешна справка
    if(reportTypeToRender != REPORT_INDEX__FINANCIAL_RESULT && 
       reportTypeToRender != REPORT_INDEX__TURNOVER &&
       reportTypeToRender != REPORT_INDEX__ALL_PRODUCTS){
           return console.error("Няма такава справка!");
       }



    numberOfOperationsCurrentDay++;
}