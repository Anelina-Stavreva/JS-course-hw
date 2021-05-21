const MAX_NUMBER_OF_STROKES = 4;

//Robot move command
var isEnteredObjectCorrect = false;

while(!isEnteredObjectCorrect){
    var objectInFrontOfRobot = prompt("Въведи коректна стойност! Какво има пред теб? Стена, стол или нищо?");

    var isEnteredObjectCorrect = (objectInFrontOfRobot == "стена")   ||
                                 (objectInFrontOfRobot == "стол")    ||
                                 (objectInFrontOfRobot == "нищо");
}

var robotMoveCommand;

if(objectInFrontOfRobot == "стена"){
    robotMoveCommand = "Go Sideway";
}

if(objectInFrontOfRobot == "стол"){
    robotMoveCommand = "Jump";
}

if(objectInFrontOfRobot == "нищо"){
    robotMoveCommand = "Forward";
}

var numberOfStrokes = 0;
var isBatteryCharged = true;
var shouldRobotContinueLookForMouse = true;

//is ok to continue looking for mouse
while (isBatteryCharged && shouldRobotContinueLookForMouse){

    //is there mouse in front of robot
    var isThereMouseInFrontOfRobot = false;

    while(!isThereMouseInFrontOfRobot){

        var numberOfPixelsInSpace = prompt("Въведи колко пиксела има в пространството, за да проверим дали има мишка пред теб?");
        isThereMouseInFrontOfRobot = (numberOfPixelsInSpace % 2 == 0);

        var messageIfMouseDetected = (isThereMouseInFrontOfRobot)   ? "Мишката е точно пред теб. Приготви се за удар!" 
                                                                    : "Не е намерена мишка, опитай отново";
        alert(messageIfMouseDetected);
    }
    

    //is the mouse hit
    if (isThereMouseInFrontOfRobot){
        
        var isEnteredImpactForceCorrect = false;

        while(!isEnteredImpactForceCorrect){
            var impactForceOfRobot = prompt("Въведете сила на удара на робота (от 1 до 10)");
            isEnteredImpactForceCorrect = (impactForceOfRobot >= 1) && (impactForceOfRobot <= 10);
        }

        numberOfStrokes ++;
        isBatteryCharged = (numberOfStrokes < MAX_NUMBER_OF_STROKES);

        var isMouseHit = (impactForceOfRobot != 5);
        
        if (isMouseHit){
            alert(`Мишката е поразена! Брой оставащи удари ${(4 - numberOfStrokes)}`);
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

//System program status & message
var robotSystemProgramDigit = 10;

while(robotSystemProgramDigit >= 1){

    robotSystemProgramDigit -= 1;

    if((robotSystemProgramDigit % 2) == 0){
        alert(`I'm a Robotttt! System program status is ${robotSystemProgramDigit}`);
    }
}
