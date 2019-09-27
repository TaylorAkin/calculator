

var numberStore = 0;

var calSum = 0;

var btnTextArray = ['C', ' ', ' ', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', ' ', ' ', '=']


function calculator() {
    var displayContainer = document.createElement("div")
    displayContainer.id = 'dcontainerid';
    displayContainer.className = "container border";

    var displayRow = document.createElement("div");
    displayRow.id = 'drowid';
    displayRow.className = 'row justify-content-center d-flex flex-grow-1';

    var displayCol = document.createElement("div");
    displayCol.id = "dcolid";
    displayRow.className = 'row';
    displayCol.innerHTML = numberStore;

    var btnBody = document.createElement("div")
    btnBody.id = 'btnBodyid';
    btnBody.className = "container";

    var btnRow = document.createElement("div");
    btnRow.id = 'btnRowid';
    btnRow.className = 'row justify-content-center d-flex flex-grow-1';

    var i = 0
    while (i < 20) {
        var btnText = document.createElement("div");
        btnText.addEventListener('click', math);
        btnText.id= btnTextArray[i];
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

function math(displayCol) {

     numberStore = (this.id);

     dcolid.innerHTML = numberStore;
    console.log(numberStore);

   


    // for (i=0; i < btnTextArray.length; i++)

        



    // console.log(Number(btnTextArray[13]) + Number(btnTextArray[13]));

    // if (Number(btnTextArray[13]) + Number(btnTextArray[13]) == 4 ){

    //     console.log('correctanswer')

    }

   











