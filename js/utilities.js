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
}