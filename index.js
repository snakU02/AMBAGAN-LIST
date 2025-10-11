const inputName = document.getElementById('inputName');
const inputAmount = document.getElementById('inputAmount');
const inputDate = document.getElementById('inputDate');
const addButtonJS = document.getElementById('addButtonJS');
const resultsAmbagan = document.getElementById('resultsAmbagan');
const allamountResult = document.getElementById('allamountResult');

//Budget coontainer
const inputItemName = document.getElementById('inputItemName');
const inputItemAmount = document.getElementById('inputItemAmount');
const inputItemDate = document.getElementById('inputItemDate');
const itemBoughtButton = document.getElementById('itemBoughtButton');
const resultsSpent = document.getElementById('resultsSpent');
const allBudgetResult = document.getElementById('allBudgetResult');

//total cost
const totalCostResult = document.getElementById('totalCostResult');



const ambaganArr = [];
const spentArr = [];

let allBudget = 0;

displayAmbagan();
displayItems();

function addInput() {
    //AMBAGAN
    let names = inputName.value;
    let amount = Number(inputAmount.value);
    let date = inputDate.value;



    // Prevent adding empty fields
    if (names === '' || amount <= 0 || date === '') {
        alert('Please fill out all fields!');
        ///return means “stop this function now — don’t-
        //continue executing what’s below.  
        return;
    }

    ambaganArr.push({
        name: names,
        amount: amount,
        date: date
    });
    inputName.value = '';
    inputAmount.value = '';
    inputDate.value = '';
    displayAmbagan();
    showAmount();
    budgetAmount();
}

function displayAmbagan() {
    resultStore = '';
    for (let i = 0; i < ambaganArr.length; i++) {
        const ambaganObject = ambaganArr[i];
        const name = ambaganObject.name;
        const amount = ambaganObject.amount;
        const date = ambaganObject.date;
        const resultHTML = `
        <div class="listName">${name}</div>
        <div>₱${amount} </div>
        <div>${date} </div>
        <div class="deleteBtnDiv">
        <button class="deleteBtn" onclick="ambaganArr.splice(${i}, 1);  displayAmbagan();   showAmount(); budgetAmount(); ">
        <img src="icons/trash-solid-full.svg" alt="">
        </button>
        </div>
        `;
        resultStore += resultHTML;
    }
    resultsAmbagan.innerHTML = resultStore;
}

function showAmount() {
    let allAmount = 0;
    for (let i = 0; i < ambaganArr.length; i++) {
        allAmount += ambaganArr[i].amount;
    }
    allamountResult.innerHTML = `<div class="resultAmount">${allAmount}</div>`;
    allBudget = allAmount;
}

function budgetAmount() {
    let resultBudget = allBudget;
    for (let i = 0; i < spentArr.length; i++) {
        const itemAmount = spentArr[i].amount;
        resultBudget -= itemAmount;
    }
    allBudgetResult.innerHTML = `<div class="resultAmount">${resultBudget}</div>`;
}

function spentInput() {

    //BUDGET
    let itemName = inputItemName.value;
    let Itemamount = Number(inputItemAmount.value);
    let itemDate = inputItemDate.value;


    if (itemName === '' || Itemamount <= 0 || itemDate === '') {
        alert('Please fill out all fields!');
        ///return means “stop this function now — don’t-
        //continue executing what’s below.  
        return;
    }

    spentArr.push({
        name: itemName,
        amount: Itemamount,
        date: itemDate
    });


    inputItemName.value = '';
    inputItemAmount.value = '';
    inputItemDate.value = '';
    console.log(spentArr);
    displayItems();
    budgetAmount();
    displayTotalCost();
}

function displayItems() {
    resultStore = '';
    for (let i = 0; i < spentArr.length; i++) {
        const spentObject = spentArr[i];
        const itemName = spentObject.name;
        const itemAmount = spentObject.amount;
        const itemDate = spentObject.date;
        const resultHTML = `
        <div class="listName">${itemName}</div>
        <div>₱${itemAmount} </div>
        <div>${itemDate} </div>
        <div class="deleteBtnDiv">
        <button class="deleteBtn" onclick="spentArr.splice(${i}, 1);  displayItems(); budgetAmount(); displayTotalCost(); ">
        <img src="icons/trash-solid-full.svg" alt="">
        </button>
        </div>  
        `;
        resultStore += resultHTML;
    }
    resultsSpent.innerHTML = resultStore;
}

function displayTotalCost() {
    let costResult = 0;
    for (let i = 0; i < spentArr.length; i++) {
        const totalAmount = spentArr[i].amount;
        costResult += totalAmount;
    }
    totalCostResult.innerHTML = `<div class="resultAmount">${costResult}</div>`;
}

addButtonJS.onclick = function () {
    addInput();
}

itemBoughtButton.onclick = function () {
    spentInput();
}