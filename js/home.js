// console.log('script added');

// add money sytem -------->

// step-1: set the event handler on the cliking btn:
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log('add money btn cliked');

    // step-2: get the amount & pin value from the input
    const AmountInput = document.getElementById("amount").value;
    const pinInput = document.getElementById("pin-number").value;
    // console.log(AmountInput, pinInput);

    // step-3: validate pin number:
    // if (pinInput === "1234") {
    //   // console.log('your are logged in');
    // //   step-4; get ammount-blance value
    //   const accountBlance = document.getElementById("account-blance").innerText;
    //   // console.log(accountBlance);
    // //   step-5: get new blance
    //   const newBlance = parseFloat(accountBlance) + parseFloat(AmountInput);
    //   // console.log( newBlance);

    //   // step-6: set the new blance in the ui/dom:
    //   document.getElementById("account-blance").innerText = newBlance;
    // } else {
    //   alert("The pin Number is incorrect ,try again!");
    // }
  });

// Cash out steps:

// step-1:
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // step-2
    const amountNumber = document.getElementById("cash-out-amount").value;
    const pinNumber = document.getElementById("cash-out-pin").value;
    // console.log(amountNumber, pinNumber);

    // step-3:
    // if (pinNumber === "1234") {
    //   const accountBlance = document.getElementById("account-blance").innerText;
    //   const cashOutblance = parseFloat(accountBlance) - parseFloat(amountNumber);

    //   // step-6: set the new blance in the ui/dom:
    //   document.getElementById("account-blance").innerText = cashOutblance;
    // }
    // else {
    //   alert("The pin Number is incorrect ,try again!");
    // };
  });

// shared code reuseble step:

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getElementByIdInput("amount");
    const pinNumber = getElementByIdInput("pin-number");
    //  console.log('admoney' , addMoney, pinNumber);

    if (pinNumber === 1234) {
      const balance = getTextValue("account-blance");
      const newBlance = balance + addMoney;
      document.getElementById("account-blance").innerText = newBlance;
    } else {
      alert("faild to add money!");
    }
  });
