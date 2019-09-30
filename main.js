var sum = 0;

//what's being displayed 
var display = 0;


var numberInput = 0;

//display integer being transferred into a variable
var numberStore1 = 0;

var numberStore2 = 0;

//variable to store operator
var operatorStore = " ";

var btnTextArray = ['C', ' ', ' ', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', ' ', '='];



//UI 
function calculator() {

    var displayRow = document.createElement("div");
    displayRow.id = 'drowid';
    displayRow.className = 'row justify-content-center';

    var displayCol = document.createElement("div");
    displayCol.id = "dcolid";
    displayRow.className = 'col-9 ml-5 mt-5';
    displayCol.innerHTML = display;

    var calcContainer = document.createElement("div")
    calcContainer.id = 'calcContainerId';
    calcContainer.className = "container mt-5";

    var btnRow = document.createElement("div");
    btnRow.id = 'btnRowid';
    btnRow.className = 'row justify-content-center d-flex flex-grow-1 mx-3 my-3';



    //setting up buttons and click function to control what happens on clicks
    var i = 0
    while (i < 20) {
        var btnText = document.createElement("div");
        btnText.addEventListener('click', clickEvent);
        //creatina a button text array globally, and then setting the btn text to each index which runs through the loop.
        btnText.id = btnTextArray[i];
        btnText.setAttribute('class', 'col-3 border rounded-circle circle display-4');
        btnText.innerHTML = btnTextArray[i];

        // btnTextArray.push(0);
        btnRow.appendChild(btnText);

        i++;

    }

    displayRow.appendChild(displayCol);
    calcContainer.appendChild(displayRow);
    calcContainer.appendChild(btnRow);
    document.getElementById('calculatorhtml').appendChild(calcContainer);

}


//
function clickEvent() {
    //index of array set to a variable called keypressed
    keypressed = (this.id);


    //cases for each type
    switch (keypressed) {
        //clears the display
        case 'C':

            operatorStore = " ";
            numberStore1 = 0;
            numberStore2 = 0;
            display = 0;
            sum = 0;
            numberInput = 0;
            break;

        case '+': case '-': case 'x': case '/':
            // runs second. first time through operator is open. second time it's not.if a operator is hit and it isn't a emtpy string, which happens after first click, next click evaluates
            if (operatorStore != " ") {
                evaluate()
            }
            //storing first integer into a new variable, and resetting display to 0.
            numberStore1 = numberInput;
            numberInput = 0;
            operatorStore = keypressed;

            break;

        case '=':
            evaluate();
            break;

        // 1st.   MY NUMBERS CASE and decimal CASE. set numbers to default. Default says other keyspressed=this.id not defined in cases, do this. 
        default:
            //if display shows 0 it gets rid of it when you press a number.
            if (numberInput == 0) {
                numberInput = " "
            }

            //then display is nothing plus the integer you select, and if not 0 keeps adding to display..999999.   2nd number to equate is reloaded into numberInput for numberStore2
            numberInput += keypressed;

            //numberInput is display
            display = numberInput;
            break;

    }

    //set innerhtml to the display variable  
    dcolid.innerHTML = display;
}

function evaluate() {

    numberStore2 = numberInput.trim();

    if (numberStore2 == '.') {
        display = "Josh made error"
    }


      else if (operatorStore == "+") {


        sum = Number(numberStore1) + Number(numberStore2);
        display = Number(sum.toPrecision(12));
    }

    else if (operatorStore == "-") {

        sum = Number(numberStore1) - Number(numberStore2);
        display = Number(sum.toPrecision(12));
    }

    else if (operatorStore == "x") {
        sum = Number(numberStore1) * Number(numberStore2);
        display = Number(sum.toPrecision(12));
    }

    else if (operatorStore == "/") {
        sum = Number(numberStore1) / Number(numberStore2);
        display = Number(sum.toPrecision(12));
    }







    numberInput = display;

}










