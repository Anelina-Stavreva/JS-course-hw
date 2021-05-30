const RANDOM_MIN__EMOTION = 1;
const RANDOM_MAX__EMOTION = 10;

const RANDOM_MIN__MOMENT_EMOTION = 1;
const RANDOM_MAX__MOMENT_EMOTION = 100;

const RANDOM_MIN__STEPS = 1;
const RANDOM_MAX__STEPS = 100;

const RANDOM_MIN__DETECT_BANITSA = 1;
const RANDOM_MAX__DETECT_BANITSA = 6;

const RANDOM_MIN__GET_BANITSA = 1;
const RANDOM_MAX__GET_BANITSA = 69;

const RANDOM_MIN__DEPRECION_QUESTION = 0;
const RANDOM_MAX__DEPRECION_QUESTION = 1;

const RANDOM_MIN__DEPRECION_SALARY = 1;
const RANDOM_MAX__DEPRECION_SALARY = 1000;

const ROBOT_EMOTION__TRAGEDY = "трагедия";
const ROBOT_EMOTION__PRODUCTIVITY = "продуктивност";
const ROBOT_EMOTION__DEPRECION = "депресия";
const ROBOT_EMOTION__CHAOS = "хаос";
const ROBOT_EMOTION__FRIENDLINESS = "дружелюбност";

function getRandomNumberBetweenMinAndMax (min, max){
    
    var randomNumber    = Math.random() * (max - min + 1) + min;
    randomNumber        = Math.floor(randomNumber);
    return randomNumber;
}

//функция за самоунищожение
function selfDestructRobot(){

    var selfDestructionMessage = "Сбогом жесток свят...";
    alert(selfDestructionMessage);

    var countDownSelfDestruction = successfulStepsOfRobot;
    while(countDownSelfDestruction > 0){
        alert(`${countDownSelfDestruction}...`);
        countDownSelfDestruction--;
    }

    var isRobotSelfDestructed = true;
    return isRobotSelfDestructed;
}

//функция за моментна емоция
function setRobotEmotion(){

    var momentRobotEmotion;

    var randomNumberForEmotion = getRandomNumberBetweenMinAndMax(RANDOM_MIN__EMOTION,RANDOM_MAX__EMOTION);
    var randomNumberForMomentEmotion = getRandomNumberBetweenMinAndMax (RANDOM_MIN__MOMENT_EMOTION,RANDOM_MAX__MOMENT_EMOTION);

    var isMomentEmotionPositive =  (randomNumberForMomentEmotion    >= 5 &&
                                    randomNumberForMomentEmotion    <= 55 );

    var isMomentEmotionNegative =  (randomNumberForMomentEmotion    >= 60 &&
                                    randomNumberForMomentEmotion    <= 80 &&
                                    randomNumberForMomentEmotion    % 3 == 0);
      
    if (randomNumberForEmotion % 2 == 0){

        if (isMomentEmotionNegative){
            momentRobotEmotion = ROBOT_EMOTION__TRAGEDY;
        }
        else if(isMomentEmotionPositive){
            momentRobotEmotion = ROBOT_EMOTION__PRODUCTIVITY;
        }
        else{
            momentRobotEmotion = ROBOT_EMOTION__DEPRECION;
        }
    }

    if (randomNumberForEmotion % 2 != 0){

        if (isMomentEmotionNegative){
            momentRobotEmotion = ROBOT_EMOTION__CHAOS;
        }
        else if(isMomentEmotionPositive){
            momentRobotEmotion = ROBOT_EMOTION__FRIENDLINESS;
        }
        else{
            momentRobotEmotion = ROBOT_EMOTION__DEPRECION;
        }
    }

    return momentRobotEmotion;
}

//функция за лекуване на депресия
function cureRobotDeprecion(){

    alert("Как си?");

    var randomNumberForDeprecionQuestion = getRandomNumberBetweenMinAndMax(RANDOM_MIN__DEPRECION_QUESTION,RANDOM_MAX__DEPRECION_QUESTION);
    var isRobotOK = randomNumberForDeprecionQuestion == 1;
    var numberOfAttemptsToCureDeprecion = 0;
    var newRobotEmotion;

    if(isRobotOK){
        alert("Роботът казва: Добре съм!");
        alert("Хайде да работим!");
        newRobotEmotion = setRobotEmotion();
        console.log(`Нова емоция(валидно, ако старата е била депресия): ${newRobotEmotion}`);

        if(newRobotEmotion == ROBOT_EMOTION__DEPRECION){
            alert("Пак съм в депресия!");
        }
    }

    while(!isRobotOK){
        alert("Роботът казва: Не ми се живее");

        var randomNumberForDeprecionSalary = getRandomNumberBetweenMinAndMax(RANDOM_MIN__DEPRECION_SALARY,RANDOM_MAX__DEPRECION_SALARY);
        var robotSalaryIncreasePresumption = prompt("Ще ти увелича заплатата с (Въведи число от 1 до 1000)");

        var isIncreasePresumptionEnough = ((robotSalaryIncreasePresumption + numberOfAttemptsToCureDeprecion) >= randomNumberForDeprecionSalary);
        
        numberOfAttemptsToCureDeprecion++;

        if(isIncreasePresumptionEnough){
            alert("Договорихме се!");
            isRobotOK = true;
            newRobotEmotion = setRobotEmotion();
            console.log(`Нова емоция(валидно, ако старата е била депресия): ${newRobotEmotion}`);

            if(newRobotEmotion == ROBOT_EMOTION__DEPRECION){
                alert("Пак съм в депресия!");
            }
        }

        if(!isIncreasePresumptionEnough){
            alert("Неуспешен опит за договаряне на заплата! Опитай отново!");
        }
    }

    return newRobotEmotion;
}

//================================================================================================================
//ПРОЦЕДУРА ПО ЗАРЕЖДАНЕ И СТАРТИРАНЕ НА РОБОТ

var momentRobotEmotion = setRobotEmotion();
var robotStartMessage="";

if(momentRobotEmotion == ROBOT_EMOTION__TRAGEDY){
    robotStartMessage = "Сега стана страшно";
}

if(momentRobotEmotion == ROBOT_EMOTION__PRODUCTIVITY){
    robotStartMessage = "Работа, работа, работа";
}

if(momentRobotEmotion == ROBOT_EMOTION__DEPRECION){
    robotStartMessage = "Трудно е да си робот :(";
}

if(momentRobotEmotion == ROBOT_EMOTION__CHAOS){
    robotStartMessage = "Време е да унищожим всички човеци";
}

if(momentRobotEmotion == ROBOT_EMOTION__FRIENDLINESS){
    robotStartMessage = "Прекрасен ден птичките пеят";
}


console.log(momentRobotEmotion);
alert(robotStartMessage);

//================================================================================================================
//ПРИДВИЖВАНЕ НА РОБОТА ДО ЦЕХА

var successfulStepsOfRobot = 0;
var unsuccessfulStepsOfRobot = 0;
var isRobotSelfDestructed = false;

while(successfulStepsOfRobot < 3){

    var randomNumberForRobotSteps = getRandomNumberBetweenMinAndMax(RANDOM_MIN__STEPS,RANDOM_MAX__STEPS);

    if (momentRobotEmotion == ROBOT_EMOTION__TRAGEDY){

        if (randomNumberForRobotSteps >= 1 &&
            randomNumberForRobotSteps <= 10){

                successfulStepsOfRobot ++;
                alert(`Успешна крачка № ${successfulStepsOfRobot}`);
        }
        else{
            unsuccessfulStepsOfRobot++;
            var encouragingMessage = prompt("Стъпката не е успешна! Въведете окуражително съобщение: Животът не струва.");

            if (encouragingMessage == "Животът не струва."){
                successfulStepsOfRobot ++;
                alert(`Успешна крачка № ${successfulStepsOfRobot}`);
            }
            else{
                isRobotSelfDestructed = selfDestructRobot();
                break;
            }
        }
    } 

    if (momentRobotEmotion == ROBOT_EMOTION__PRODUCTIVITY){

        if (randomNumberForRobotSteps >= 2 &&
            randomNumberForRobotSteps <= 100){

                successfulStepsOfRobot ++;
                alert(`Успешна крачка № ${successfulStepsOfRobot}`);
        }
        else{
            unsuccessfulStepsOfRobot++;
            var encouragingMessage = prompt("Стъпката не е успешна! Въведете окуражително съобщение: Pазбий ги!");

            if (encouragingMessage == "Pазбий ги!"){
                successfulStepsOfRobot ++;
                alert(`Успешна крачка № ${successfulStepsOfRobot}`);
            }
            else{
                isRobotSelfDestructed = selfDestructRobot();
                break;
            }
        }
    } 

    if (momentRobotEmotion == ROBOT_EMOTION__CHAOS){

        if (randomNumberForRobotSteps >= 1 &&
            randomNumberForRobotSteps <= 15){

                successfulStepsOfRobot ++;
                alert(`Успешна крачка № ${successfulStepsOfRobot}`);
        }
        else{
            unsuccessfulStepsOfRobot++;
            var encouragingMessage = prompt("Стъпката не е успешна! Въведете окуражително съобщение: Невежеството е благодат.");

            if (encouragingMessage == "Невежеството е благодат."){
                successfulStepsOfRobot ++;
                alert(`Успешна крачка № ${successfulStepsOfRobot}`);
            }
            else{
                isRobotSelfDestructed = selfDestructRobot();
                break;
            }
        }
    }

    if (momentRobotEmotion == ROBOT_EMOTION__FRIENDLINESS){

        if (randomNumberForRobotSteps >= 1 &&
            randomNumberForRobotSteps <= 65){

                successfulStepsOfRobot ++;
                alert(`Успешна крачка № ${successfulStepsOfRobot}`);
        }
        else{
            unsuccessfulStepsOfRobot++;
            var encouragingMessage = prompt("Стъпката не е успешна! Въведете окуражително съобщение: Давай, ти си!");

            if (encouragingMessage == "Давай, ти си!"){
                successfulStepsOfRobot ++;
                alert(`Успешна крачка № ${successfulStepsOfRobot}`);
            }
            else{
                isRobotSelfDestructed = selfDestructRobot();
                break;
            }
        }
    }

    if (momentRobotEmotion == ROBOT_EMOTION__DEPRECION){
        momentRobotEmotion = cureRobotDeprecion();
        unsuccessfulStepsOfRobot++
    }

    console.log(`успешни крачки до сега: ${successfulStepsOfRobot}`);
    console.log(`НЕуспешни крачки до сега: ${unsuccessfulStepsOfRobot}`);

}

if(successfulStepsOfRobot == 3){
    alert("Успешно стигна до цеха!");
}

//================================================================================================================
//РАЗПОЗНАВАНЕ НА БАНИЧКИ

if(!isRobotSelfDestructed){

    var isRobotEmotionPositive =   (momentRobotEmotion == ROBOT_EMOTION__FRIENDLINESS ||
                                    momentRobotEmotion == ROBOT_EMOTION__PRODUCTIVITY);


    while(!isRobotEmotionPositive){
        momentRobotEmotion = setRobotEmotion();           
        isRobotEmotionPositive =   (momentRobotEmotion == ROBOT_EMOTION__FRIENDLINESS ||
                                    momentRobotEmotion == ROBOT_EMOTION__PRODUCTIVITY);
    }

    console.log(`Нова емоция(валидно, ако старата е била негативна): ${momentRobotEmotion}`);

    if(isRobotEmotionPositive){

        var isBanitzaDetected = false;

        while(!isBanitzaDetected){

            var firstRandomNumberDetectBanitsa = getRandomNumberBetweenMinAndMax(RANDOM_MIN__DETECT_BANITSA,RANDOM_MAX__DETECT_BANITSA);
            var secondRandomNumberDetectBanitsa = getRandomNumberBetweenMinAndMax(RANDOM_MIN__DETECT_BANITSA,RANDOM_MAX__DETECT_BANITSA);
            var thirdRandomNumberDetectBanitsa = getRandomNumberBetweenMinAndMax(RANDOM_MIN__DETECT_BANITSA,RANDOM_MAX__DETECT_BANITSA);

            isBanitzaDetected = (firstRandomNumberDetectBanitsa + secondRandomNumberDetectBanitsa + thirdRandomNumberDetectBanitsa) >= (successfulStepsOfRobot + unsuccessfulStepsOfRobot)

            console.log(`Открита ли е баница: ${isBanitzaDetected}`);
        }
    }

    //================================================================================================================
    //ВЗЕМАНЕ НА БАНИЧКА

    var isRobotSoftwareUpToDate = false;
    var softwareVersionNumber = 0;

    while(!isRobotSoftwareUpToDate){

        var randomNumberGetBanitsa = getRandomNumberBetweenMinAndMax(RANDOM_MIN__GET_BANITSA,RANDOM_MAX__GET_BANITSA);
        randomNumberGetBanitsa = randomNumberGetBanitsa + unsuccessfulStepsOfRobot;

        isRobotSoftwareUpToDate = randomNumberGetBanitsa <= 10;

        if(!isRobotSoftwareUpToDate){
            softwareVersionNumber ++;
        }

    }

    if(softwareVersionNumber == 0){
        alert("Баницата е взета успешно!");
    }

    if(softwareVersionNumber > 0){
        alert(`“Вие успешно актуализирахте версията на софтуер Doors в момента сте с версия ${softwareVersionNumber}. Баницата е взета успешно!`);
    }

    //================================================================================================================
    //ПРИДВИЖВАНЕ НА РОБОТА ДО СКЛАДА (за да изпълни горните изисквания и да стигне до склада, роботът може да е само с емоция продуктивност или дружелюбност)

    while(successfulStepsOfRobot < 6){

        var randomNumberForRobotSteps = getRandomNumberBetweenMinAndMax(RANDOM_MIN__STEPS,RANDOM_MAX__STEPS);

        if (momentRobotEmotion == ROBOT_EMOTION__PRODUCTIVITY){

            if (randomNumberForRobotSteps >= 2 &&
                randomNumberForRobotSteps <= 100){

                    successfulStepsOfRobot ++;
                    alert(`Успешна крачка № ${successfulStepsOfRobot}`);
            }
            else{
                unsuccessfulStepsOfRobot++;
                var encouragingMessage = prompt("Стъпката не е успешна! Въведете окуражително съобщение: Pазбий ги!");

                if (encouragingMessage == "Pазбий ги!"){
                    successfulStepsOfRobot ++;
                    alert(`Успешна крачка № ${successfulStepsOfRobot}`);
                }
                else{
                    isRobotSelfDestructed = selfDestructRobot();
                    break;
                }
            }
        } 

        if (momentRobotEmotion == ROBOT_EMOTION__FRIENDLINESS){

            if (randomNumberForRobotSteps >= 1 &&
                randomNumberForRobotSteps <= 65){

                    successfulStepsOfRobot ++;
                    alert(`Успешна крачка № ${successfulStepsOfRobot}`);
            }
            else{
                unsuccessfulStepsOfRobot++;
                var encouragingMessage = prompt("Стъпката не е успешна! Въведете окуражително съобщение: Давай, ти си!");

                if (encouragingMessage == "Давай, ти си!"){
                    successfulStepsOfRobot ++;
                    alert(`Успешна крачка № ${successfulStepsOfRobot}`);
                }
                else{
                    isRobotSelfDestructed = selfDestructRobot();
                    break;
                }
            }
        }

        console.log(`успешни крачки до сега: ${successfulStepsOfRobot}`);
        console.log(`НЕуспешни крачки до сега: ${unsuccessfulStepsOfRobot}`);

    }

    if(successfulStepsOfRobot == 6){
        alert("Успешно стигна до склада!");
    }
}

//===========================================================================================================
//САМОУНИЩОЖЕНИЕ

if(!isRobotSelfDestructed){
    selfDestructRobot();
}