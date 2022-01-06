//initial balance
balance = 24240240;

// Making the spaces in between the number
function calcBalance(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

// Assigning the calculated balance to the element
balanceScreen = document.getElementById("balance");
balanceScreen.innerHTML = `${calcBalance(balance)}€`;

// Making the year counter and appending the value to the element
let startYear = 1020;
let endYear = new Date().getFullYear();
let selector = document.getElementById("yearpicker")
for (i = endYear; i > startYear - 1; i--) {
    let el = document.createElement("option")
    el.innerHTML = i;
    selector.appendChild(el)
}

function retrieveData(event) {
    event.preventDefault();
    var dataName = document.getElementById("name");
    var dataAmount = document.getElementById("amount");
    var dataDate = document.getElementById("date");
    console.log([dataName.value, dataAmount.value, dataDate.value])
}
