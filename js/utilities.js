// console.log('cliked utilities');

// input field er jnno
function getElementByIdInput(id){
    const inputValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

// text input er jnno

function getTextValue(id){
    const textInput = document.getElementById(id).innerText;
    const textNumber = parseFloat(textInput);
    return textNumber;
};

// form show toggle er jnno

function showAsectionById(id){

    // hidden all btns:
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transction-section').classList.add('hidden');

    // show btn :
    document.getElementById(id).classList.remove('hidden');
}