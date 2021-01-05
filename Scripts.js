

var randomNum = 0;




function displayRandomNumber(){
    document.getElementById('lblRandomNumber').innerText = generateRandomNumber();
}


function generateRandomNumber(){
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

function clearInputs(){
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






