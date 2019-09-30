var sum = 0;

var display = 0;

var numberInput = 0;

var numberStore1 = 0;

var numberStore2 = 0;

var operatorStore = " ";

var btnTextArray = ['C', ' ', ' ', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', ' ', '='];



//UI 
function calculator() {
    var displayContainer = document.createElement("div")
    displayContainer.id = 'dcontainerid';
    displayContainer.className = "container border";

    var displayRow = document.createElement("div");
    displayRow.id = 'drowid';
    displayRow.className = 'row justify-content-center d-flex flex-grow-1';

    var displayCol = document.createElement("div");
    displayCol.id = "dcolid";
    displayRow.className = 'col ml-5';
    displayCol.innerHTML = display;

    var btnBody = document.createElement("div")
    btnBody.id = 'btnBodyid';
    btnBody.className = "container";

    var btnRow = document.createElement("div");
    btnRow.id = 'btnRowid';
    btnRow.className = 'row justify-content-center d-flex flex-grow-1';



    //setting up buttons and click function to control what happens on clicks
    var i = 0
    while (i < 20) {
        var btnText = document.createElement("div");
        btnText.addEventListener('click', clickEvent);
        //creatina a button text array globally, and then setting the btn text to each index which runs through the loop.
        btnText.id = btnTextArray[i];
        btnText.setAttribute('class', 'col-3 border display-4 justify-content-center');
        btnText.innerHTML = btnTextArray[i];

        // btnTextArray.push(0);
        btnRow.appendChild(btnText);

        i++;

    }

    displayRow.appendChild(displayCol);
    displayContainer.appendChild(displayRow);
    btnBody.appendChild(btnRow);
    document.getElementById('calculatorhtml').appendChild(displayContainer);
    document.getElementById('calculatorhtml').appendChild(btnBody);

}


//
function clickEvent() {
    //index of array 
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
        //
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':


            //if display shows 0 it gets rid of it
            if (numberInput == 0) {

                numberInput = " "


            }

            //then display is nothing plus the integer you select, and if not 0 keeps adding to display
            numberInput += keypressed;

            display = numberInput;


            break;


        case '+':
        case '-':
        case 'x':
        case '/':


            if(operatorStore != " ") {
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
        
    }

    //set innerhtml to display the numberstore string
    dcolid.innerHTML = display;

}

function evaluate() {

    numberStore2 = numberInput;

    if (operatorStore == "+") {


        sum = Number(numberStore1) + Number(numberStore2);
        display = Number(sum.toPrecision(12));
    }

    else if( operatorStore == "-"){

        sum = Number(numberStore1) - Number(numberStore2);
        display = Number(sum.toPrecision(12));
    }

    else if( operatorStore == "x"){
        sum = Number(numberStore1) * Number(numberStore2);
        display = Number(sum.toPrecision(12));
    }

    else if( operatorStore == "/") {
        sum = Number(numberStore1) / Number(numberStore2);
        display = Number(sum.toPrecision(12));
    }



    numberInput = display;



}










