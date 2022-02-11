/* function dubleIt(num){
    const result = num * 2;
    return result;
}
const first = dubleIt(5);
const second  = dubleIt(7); */

// double input value
function getInputValue(inputId) {
  debugger;

  const inputField = document.getElementById(inputId); //input variable
  const inputAmountText = inputField.value; //get input value
  const amountValue = parseFloat(inputAmountText); //convert to number
  inputField.value = ''; //clear input field

  return amountValue;
}

// double total value
function updateTotalField(totalFieldId, amount) {

  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const prevTotal = parseFloat(totalText);
  totalElement.innerText = prevTotal + amount;

}

function getCurrentBlance() {

  const blanceTotal = document.getElementById('blance-total');
  const blanceTotalText = blanceTotal.innerText;
  const prevBlanceTotal = parseFloat(blanceTotalText);
  return prevBlanceTotal;

}

function updateBlance(amount, isAdd) {
  const blanceTotal = document.getElementById('blance-total');
  /*const blanceTotalText = blanceTotal.innerText;
  const prevBlanceTotal = parseFloat(blanceTotalText); */

  const prevBlanceTotal = getCurrentBlance();

  if (isAdd == true) {
    blanceTotal.innerText = prevBlanceTotal + amount;
  } else {
    blanceTotal.innerText = prevBlanceTotal - amount;
  }
}

document.getElementById('deposit-btn').addEventListener('click', function () {

  const depositInputAmount = getInputValue('deposit-input');

  if (depositInputAmount > 0) {
    updateTotalField('deposit-total', depositInputAmount);

    updateBlance(depositInputAmount, true);
  }

  /* const depositInput = document.getElementById('deposit-input');//input variable
    const depositInputValue = depositInput.value; //get input value
    const depositInputAmount =parseFloat(depositInputValue);//convert to number */

  /*   const depositTotal = document.getElementById('deposit-total');//deposit total variable
    const depositTotalText = depositTotal.innerText;// get deposit total innerText
    const prevDepositTotal = parseFloat(depositTotalText);//convert to number
     depositTotal.innerText = prevDepositTotal + depositInputAmount; // get deposit input value */

  /*    //  update blance 
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const prevBlanceTotal = parseFloat(blanceTotalText);

    blanceTotal.innerText = prevBlanceTotal + depositInputAmount; */
});

// handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    
  const withdrawInputAmount = getInputValue('withdraw-input');
  const currentBlance = getCurrentBlance();

  if (withdrawInputAmount > 0 && withdrawInputAmount < currentBlance) {
    updateTotalField('withdraw-total', withdrawInputAmount);

    updateBlance(withdrawInputAmount, false);
  }
  if (withdrawInputAmount > currentBlance) {
    alert('You can not withdraw more than what you have in your account');
  }

  /*  const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputValue); */

  /*   get withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = withdrawInputAmount + withdrawTotalAmount; */

  //  update blance after withdraw
  /* const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const prevBlanceTotal = parseFloat(blanceTotalText);

    blanceTotal.innerText = prevBlanceTotal - withdrawInputAmount; */
});
