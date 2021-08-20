// hint for a previous doubt, use onchange event to calc the value on the fly

// tomorrow you have to set layout and logic right cause it was never 'Total Tip' it was total amount to be paid per person

let billAmount = document.getElementById("bill");
let percentTipCustom = document.getElementById("custom");
let percentTipRadio = document.getElementsByName("tip");
let numberOfPeople = document.getElementById("num-people");
let totalAmount = document.getElementById("total-amount");
let tipPerPerson = document.getElementById("tip-amount-pp");
let btnReset = document.getElementById("reset");

let tipPercent = 0;
var numPeople = 1;
var totalTip = 0;
var tipPP = 0;
var amountTotal = 0;

function radioUnselector() {
  let percentTipRadio = document.getElementsByName("tip");
  for (let ii = 0; ii < percentTipRadio.length; ii++) {
    percentTipRadio[ii].checked = "false";
  }
  console.log(percentTipRadio);
}

function tipFinder() {
  if (percentTipCustom.value) {
    tipPercent = percentTipCustom.value;
  } else {
    for (let ii = 0; ii < percentTipRadio.length; ii++) {
      if (percentTipRadio[ii].checked) {
        tipPercent = percentTipRadio[ii].value;
      }
    }
  }
  console.log(tipPercent);

  totalTip = ((tipPercent / 100) * billAmount.value).toFixed(2);
  tipPP = (totalTip / numberOfPeople.value).toFixed(2);
  amountTotal = (billAmount.value / numberOfPeople.value + +tipPP).toFixed(2);

  console.log(tipPercent, totalTip, tipPP);
  totalAmount.textContent = "$" + amountTotal;
  tipPerPerson.textContent = `\$${tipPP}`;
}
