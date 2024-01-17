let maxNumber = 6;
let secretNumber;
let tries;
let usedNumbers = [];

function assignTextElement(elementName, text){
    let htmlElement = document.querySelector(elementName);
    htmlElement.innerHTML = text;
}

function randomNumGenerator(limit) {
    let number = Math.ceil(Math.random()*limit);

    if(usedNumbers.length==maxNumber){
        assignTextElement("p", "ya se sortearon todos los numeros posibles")
    } else{
    if(usedNumbers.includes(number)){
        return randomNumGenerator(maxNumber);
    } else {
        usedNumbers.push(number);
        return number;
    }
}
}

function initialState(){
    assignTextElement("h1", "Juego del numero secreto");
    assignTextElement("p", `Indica un numero del 1 al ${maxNumber}`);
    secretNumber = randomNumGenerator(maxNumber);
    tries = 1;
}


function verifyNumber(){
    console.log(tries)
    let userNumber = parseInt(document.getElementById("inputNumber").value);
    if(userNumber===secretNumber){
        assignTextElement("p", `Acertaste el numero en ${tries} ${tries>1?"intentos":"intento"}`);
        document.getElementById('reiniciar').toggleAttribute('disabled');
    }
    else{
        if(userNumber>secretNumber){
            assignTextElement("p", "El numero secreto es menor");
        } else {
            assignTextElement("p", "El numero secreto es mayor");
        }
        tries++;
        cleanInput();
    }
    return;
}

function cleanInput(){
    document.querySelector('#inputNumber').value = '';
}

function restartGame(){
    cleanInput();
    initialState();
    document.getElementById('reiniciar').toggleAttribute('disabled');
    console.log(secretNumber)
}


initialState();

