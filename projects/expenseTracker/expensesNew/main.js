// Initial balance 
let balance = 0;

// Making the spaces in between the number
function calcBalance(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

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
    // Retriviing Data 
    event.preventDefault();
    let dataName = document.getElementById("name");
    let dataAmount = document.getElementById("amount");
    let dataDate = document.getElementById("date");
    console.log([dataName.value, dataAmount.value, dataDate.value])

    // Adding the Information to the Table
    let tableBody = document.getElementById("mainTbody");
    let trElement = document.createElement("tr");
    var tdElement = document.createElement("td");
    tableBody.appendChild(trElement);
    trElement.appendChild(tdElement);

    tdElement.innerHTML = dataName.value;
    tdElement.setAttribute("class", "thAndRowName")

    var tdElement = document.createElement("td");
    trElement.appendChild(tdElement);
    tdElement.innerHTML = `${dataAmount.value}€`;
    tdElement.setAttribute("class", "thRest")

    var tdElement = document.createElement("td");
    trElement.appendChild(tdElement);
    tdElement.innerHTML = dataDate.value;
    tdElement.setAttribute("class", "thRest")

    var tdElementStatus = document.createElement("td");
    trElement.appendChild(tdElementStatus);

    tdElementStatus.setAttribute("id", `status`)

    function changeStatus() {

        function randomInt(n) {
            return Math.floor(Math.random() * n)
        }

        let randmInt = randomInt(3)
        if (randmInt === 0) {
            tdElementStatus.innerHTML = "denied";
            tdElementStatus.setAttribute("class", "thStatusDenied");
        } else if (randmInt === 1){
            tdElementStatus.innerHTML = "pending";
            tdElementStatus.setAttribute("class", "thStatusPending");
        } else if (randmInt === 2) {
            tdElementStatus.innerHTML = "active";
            tdElementStatus.setAttribute("class", "thStatusActive");
        }
        console.log(randomInt(3))

    }
    changeStatus()
    

    // Calculating and converting to readable number
    balance = Number(balance) + Number(dataAmount.value);
    balanceDisplay = calcBalance(balance)
   
    // Assigning the calculated balance to the element
    balanceScreen = document.getElementById("balance");
    balanceScreen.innerHTML = `${balanceDisplay}€`;

    // Clearing the input fields
    dataAmount.value = "";
    dataName.value = "";
    dataDate.value = "";

 
}

// Checking the table for current transactions

