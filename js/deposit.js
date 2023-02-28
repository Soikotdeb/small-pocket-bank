 
 

 // stap-1=add eventlesaner to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
// stap-2=get deposit amount from the deposit input field 
   const depositField = document.getElementById('deposit-field');
    // stap-3= get deposit amount to input field string to value= input field taika value pabo sata string hotapera abar number
   const newDepositAmountString =depositField.value;
// stap-4=  convert string deposit amount to a number type = input field taika pawa value k number a connvert korba
const newDepositAmount=parseFloat(newDepositAmountString);
// stap-5= deposit field taika ja value pabo tarpor field ta clear koradiba 
depositField.value='';
// akon deposit a aga jai value chilo previous oita nibo span tag ar vitor

const depositTotalElement = document.getElementById('deposit-total');
// span tag ar vitor je asa ter innertext k nibo upora amra string k number convert kora petaise tai akon amra span tag ar vitor number pabo
const previousDepositTotalString=depositTotalElement.innerText;
const previousDepositTotal= parseFloat( previousDepositTotalString);

// sum previous amount + new deposit amount 
const newDepositTotal = previousDepositTotal +newDepositAmount;
// akhana agar anount ar vitorar text ar satha newdeposit + hoyajeba
depositTotalElement.innerText =newDepositTotal;





// ---------------withdraw section-------------------? 
// withdraw button taika agar value k niba terpor taka value ta convert korba
const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
 const previousBalanceTotalAmount=parseFloat(previousBalanceTotalString);
// get current balance total
// calculate the new balance and set the previous balance total
const newBalanceTotal= previousBalanceTotalAmount+newDepositAmount;
balanceTotalElement.innerText=newBalanceTotal;



})


