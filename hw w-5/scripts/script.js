//Robot move command
var isEnteredObjectCorrect = false;

while(isEnteredObjectCorrect == false){
    var objectInFrontOfRobot = prompt("Въведи коректна стойност! Какво има пред теб? Стена, стол или нищо?");

    var isEnteredObjectCorrect = (objectInFrontOfRobot == "стена")   ||
                                 (objectInFrontOfRobot == "стол")    ||
                                 (objectInFrontOfRobot == "нищо");
}

if(objectInFrontOfRobot == "стена"){
    var robotMoveCommand = "Go Sideway";
}

if(objectInFrontOfRobot == "стол"){
    var robotMoveCommand = "Jump";
}

if(objectInFrontOfRobot == "нищо"){
    var robotMoveCommand = "Forward";
}

//This variable defines if a message "I'm a robottt" will be displayed
var robotSystemProgramDigit = 10;

var numberOfStrokes = 0;
const MAX_NUMBER_OF_STROKES = 4;

var isBatteryCharged = true;
var shouldRobotContinueLookForMouse = true;

//is ok to continue looking for mouse
while (isBatteryCharged && shouldRobotContinueLookForMouse){

    //is there mouse in front of robot
    var isThereMouseInFrontOfRobot = false;

    while(isThereMouseInFrontOfRobot == false){
        var numberOfPixelsInSpace = prompt("Въведи колко пиксела има в пространството, за да проверим дали има мишка пред теб?");
        isThereMouseInFrontOfRobot = (numberOfPixelsInSpace % 2 == 0);

        if (isThereMouseInFrontOfRobot){
            alert("Мишката е точно пред теб. Приготви се за удар!");
        }
        else{
            alert("Не е намерена мишка, опитай отново");
        }
    }
    

    //is the mouse hit
    if (isThereMouseInFrontOfRobot){
        
        var isEnteredImpactForceCorrect = false;

        while(isEnteredImpactForceCorrect == false){
            var impactForceOfRobot = prompt("Въведете сила на удара на робота (от 1 до 10)");
            isEnteredImpactForceCorrect = (impactForceOfRobot >= 1) && (impactForceOfRobot <= 10);
        }

        numberOfStrokes ++;
        isBatteryCharged = (numberOfStrokes < MAX_NUMBER_OF_STROKES);

        var isMouseHit = (impactForceOfRobot != 5);
        
        if (isMouseHit){
            alert(`Мишката е поразена! Брой оставащи удари ${(4 - numberOfStrokes)}`);

            if((robotSystemProgramDigit % 2) == 0){
                alert(`I'm a Robotttt! System program status is ${robotSystemProgramDigit}`);
            }

            robotSystemProgramDigit -= 1;
        }
        else{
            alert(`Току-що счупи всички мебели! Брой оставащи удари ${(4 - numberOfStrokes)}`)
        }

        shouldRobotContinueLookForMouse = confirm("Да продължи ли роботът да търси мишки?");
    }
}

if(!isBatteryCharged){
    alert("Батерията свърши. Отиди до най-близкия контакт!");

    var firstDigitEntryForElectricity = 0;
    var secondDigitEntryForElectricity = 0;

    while(firstDigitEntryForElectricity == secondDigitEntryForElectricity){
        
        firstDigitEntryForElectricity = prompt("Въведи първото число за проверка на електричеството (от 1 до 1000)");
        secondDigitEntryForElectricity = prompt("Въведи второто число за проверка на електричеството (от 1 до 1000)");
    }

    if(firstDigitEntryForElectricity > secondDigitEntryForElectricity){
        alert("Успешно заредихте батериите!");
        numberOfStrokes = 0;
    }

    if(firstDigitEntryForElectricity < secondDigitEntryForElectricity){
        alert("Няма ток, батериите не са заредени");
    }
}
