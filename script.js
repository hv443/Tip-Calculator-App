


function tipAmount(){
   
    const people = document.getElementById("cal_people");
    const bill = document.getElementById("cal_bill");
    const tipamount = document.getElementById("tip_amount");
    tipamount.innerHTML = bill.value*people.value;
};

function NO_OF_PEOPLE(){
    const people = document.getElementById("cal_people");
    people.value = "1";
};

const people = document.getElementById("cal_people");
const tip = document.getElementById("cal_5");
const rest = document.getElementById("reset");

const tipamount = document.getElementById("tip_amount");
rest.addEventListener('click', ()=>{
const rest = document.getElementById("reset");
tipamount.innerHTML = 5*tip.value;
})