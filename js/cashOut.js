// console.log('cahout js');
document.getElementById('cash-out-btn').addEventListener('click', function(){
    const cashoutMoney = getElementByIdInput('cash-out-amount');
    const cashOutPin = getElementByIdInput('cash-out-pin');

// is nan checking
    if (isNaN(cashoutMoney)) {
      alert("faild to cash out");
      return;
    };

   

    // pin validate
   if(cashOutPin === 1234){

   const balance = getTextValue('account-blance');

    // blance check
    if(cashoutMoney > balance){
      alert('You do not have sufficent blance')
      return;
    }; 

   const cashOutblance = balance - cashoutMoney;
     document.getElementById('account-blance').innerText = cashOutblance;
   
   }
   else{
    alert('Try to faild cashout!')
   }
    
});
