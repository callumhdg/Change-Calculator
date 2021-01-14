

var randomNum = 0;

var numOf1p = 0, numOf2p = 0, numOf5p = 0, numOf10p = 0, numOf20p = 0, numOf50p = 0, numOf100p = 0, numOf200p = 0, numOf500p = 0, numOf1000p = 0;
var valueOf1p = 0.01, valueOf2p = 0.02, valueOf5p = 0.05, valueOf10p = 0.1, valueOf20p = 0.2, valueOf50p = 0.5, valueOf100p = 1, valueOf200p = 2, valueOf500p = 5, valueOf1000p = 10;


function displayRandomNumber() {
    document.getElementById('lblRandomNumber').innerText = generateRandomNumber();
}


function calculateUserInput() {
    
    //TODO measuer input
    calculateInput();

    
    //TODO display results


    //TODO repeat
    
}


function generateRandomNumber() {
    var randomOutputNum = "0";

    randomNum = Math.floor((Math.random() * 2999) + 1);
    randomNum = randomNum / 100;

    if (randomNum <= 1){
        randomOutputNum = randomNum + "p";
    }
    else {
        randomOutputNum = "£" + randomNum.toFixed(2);
    }
    return randomOutputNum;
}


function calculateInput() {

    userTotalInput = 0;

    //count user input
    numOf1p    = document.getElementById('1pIn').value;
    numOf2p    = document.getElementById('2pIn').value;
    numOf5p    = document.getElementById('5pIn').value;
    numOf10p   = document.getElementById('10pIn').value;
    numOf20p   = document.getElementById('20pIn').value;
    numOf50p   = document.getElementById('50pIn').value;
    numOf100p  = document.getElementById('100pIn').value;
    numOf200p  = document.getElementById('200pIn').value;
    numOf500p  = document.getElementById('500pIn').value;
    numOf1000p = document.getElementById('1000pIn').value;

    // calculate total
    userTotalInput = userTotalInput + (numOf1p * valueOf1p);
    userTotalInput = userTotalInput + (numOf2p * valueOf2p);
    userTotalInput = userTotalInput + (numOf5p * valueOf5p);
    userTotalInput = userTotalInput + (numOf10p * valueOf10p);
    userTotalInput = userTotalInput + (numOf20p * valueOf20p);
    userTotalInput = userTotalInput + (numOf50p * valueOf50p);
    userTotalInput = userTotalInput + (numOf100p * valueOf100p);
    userTotalInput = userTotalInput + (numOf200p * valueOf200p);
    userTotalInput = userTotalInput + (numOf500p * valueOf500p);
    userTotalInput = userTotalInput + (numOf1000p * valueOf1000p);

    if (userTotalInput == randomNum){
        //correct
        

    }
    else{
        //incorrect


    }


}


function clearInputs() {
    document.getElementById('1pIn').value = '';
    document.getElementById('2pIn').value = '';
    document.getElementById('5pIn').value = '';
    document.getElementById('10pIn').value = '';
    document.getElementById('20pIn').value = '';
    document.getElementById('50pIn').value = '';
    document.getElementById('100pIn').value = '';
    document.getElementById('200pIn').value = '';
    document.getElementById('500pIn').value = '';
    document.getElementById('1000pIn').value = '';
}






