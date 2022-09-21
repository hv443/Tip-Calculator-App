const billInput = document.querySelector("#cal_bill");
const tips = document.querySelectorAll("#tips li input");
const custom = document.querySelector("#cal_custom");
const peopleInput = document.querySelector("#cal_people");
const tipIndividual = document.querySelector("#tip_amount");
const tipTotal = document.querySelector("#total");
const reset = document.querySelector("#reset");
const error = document.querySelector(".error");


peopleInput.value = 1;
billInput.value = 0;
tipIndividual.innerHTML = "$" + (0.00).toFixed(2);
tipTotal.innerHTML = "$" + (0.00).toFixed(2);

billInput.addEventListener('input', billInputfn);
peopleInput.addEventListener('input', peopleInputfn);

billvalue = 0;
tipvalue = 0.15;
peoplevalue = 1;



function billInputfn() {
  billvalue = billInput.value
  tipcalculate()
};


function peopleInputfn() {
  peoplevalue = peopleInput.value;
  tipcalculate()
};




tips.forEach(function (val) {
  val.addEventListener('click', tip)
})

function tip(event) {
  tips.forEach(function (val) {

    if (event.target.value === val.value) {
      val.classList.add("active")

      tipvalue = parseFloat(val.value) / 100;

    }
    else {
      val.classList.remove("active")
    }
  })
  tipcalculate();
}





function tipcalculate() {

  if (peoplevalue > 0) {
    tipIndividual.innerHTML = "$" + ((billvalue * tipvalue) / peopleInput.value).toFixed(2);
    tipTotal.innerHTML = "$" + (billvalue / peopleInput.value).toFixed(2);
    error.style.display = "none";
    peopleInput.style.outlineColor = 'hsl(172, 67%, 45%)';
  }
  else {
    tipIndividual.innerHTML = "$" + (0.00).toFixed(2);
    tipTotal.innerHTML = "$" + (0.00).toFixed(2);
    error.style.display = "flex";
    peopleInput.style.outlineColor = 'red';
  }
}

function restart() {
  custom.value = null;
  billInput.value = 0;
  peopleInput.value = 1;
  tipIndividual.innerHTML = "$" + (0.00).toFixed(2);
  tipTotal.innerHTML = "$" + (0.00).toFixed(2);
}


reset.addEventListener('click', restart)
