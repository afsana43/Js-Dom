// console.log('btn cliked');

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log('btn cliked');
    const mobileNumber = document.getElementById("mobile-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(mobileNumber , pinNumber);

    if (mobileNumber === "018" && pinNumber === "1234") {
      console.log("you are logged in");
      window.location.href = "/home.html";
    }
     else {
      alert('Write the correct phon number and pin')
    }
  });
