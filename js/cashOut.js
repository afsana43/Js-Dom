// console.log('cahout js');
document.getElementById('cash-out-btn').addEventListener('click', function(){
    const cashoutMoney = getElementByIdInput('cash-out-amount');
    const cashOutPin = getElementByIdInput('cash-out-pin');

   if(cashOutPin === 1234){

   const balance = getTextValue('account-blance');
   const cashOutblance =balance - cashoutMoney;
     document.getElementById('account-blance').innerText = cashOutblance;
   
   }
   else{
    alert('Try to faild cashout!')
   }
    
});
