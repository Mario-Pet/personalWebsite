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
    let dataAmount = document.getElementById("amountInput");
    let dataDate = document.getElementById("date");

    // Adding the Information to the Table
    let tableBody = document.getElementById("mainTbody");
    let trElement = document.createElement("tr");
    var tdElement = document.createElement("td");
    tableBody.appendChild(trElement);
    trElement.appendChild(tdElement);

    // Adding the Name Cell
    tdElement.innerHTML = dataName.value;
    tdElement.setAttribute("class", "thAndRowName")

    // Adding the Amount Cell
    var tdElement = document.createElement("td");
    trElement.appendChild(tdElement);
    tdElement.innerHTML = `${dataAmount.value}€`;
    tdElement.setAttribute("class", "thRest")

    // Adding the Date Cell
    var tdElement = document.createElement("td");
    trElement.appendChild(tdElement);
    tdElement.innerHTML = dataDate.value;
    tdElement.setAttribute("class", "thRest")

    // Adding the Status Cell
    var tdElementStatus = document.createElement("td");
    trElement.appendChild(tdElementStatus);
    tdElementStatus.setAttribute("id", `status`)
   
    
    function statusDecider() {

        function rndmInt(x) {
            return Math.floor(Math.random() * x)
        }
        let storedRandomxValue = rndmInt(3);
    
        

        if (storedRandomValue === 0) {

            tdElementStatus.innerHTML = "active";
            tdElementStatus.setAttribute("class", "thStatusActive");
            addBalance()
            clearingFields()

        } else if (storedRandomValue === 1) {
            console.log("Pending" + storedRandomValue)
            tdElementStatus.innerHTML = "pending";
            tdElementStatus.setAttribute("class", "thStatusPending");
            function decider() {
                let pendingStoredRandomValue = rndmInt(2);
                if (pendingStoredRandomValue === 0) {
                    addBalance()
                    console.log("AA" + pendingStoredRandomValue)
                    tdElementStatus.innerHTML = "active";
                    tdElementStatus.setAttribute("class", "thStatusActive");
                    clearingFields()
                    
                } else if (pendingStoredRandomValue === 1) {
                    console.log("AA" + pendingStoredRandomValue)
                    tdElementStatus.innerHTML = "denied";
                tdElementStatus.setAttribute("class", "thStatusDenied");
                clearingFields()
                } 
            }
            setTimeout(decider, 5000)
           

        } else if (storedRandomValue === 2) {
            console.log("Denied" + storedRandomValue)
            tdElementStatus.innerHTML = "denied";
            tdElementStatus.setAttribute("class", "thStatusDenied");
            clearingFields()
        }

    }


    statusDecider()





    
        
    function addBalance() {
    // Calculating and converting to readable number
    
        
    balance = Number(balance) + Number(dataAmount.value);
    balanceDisplay = calcBalance(balance)

   
    // Assigning the calculated balance to the element
    balanceScreen = document.getElementById("balance");
    balanceScreen.innerHTML = `${balanceDisplay}€`;
    
    }
    function clearingFields() {
        // Clearing the input fields
        dataAmount.value = "";
        dataName.value = "";
        dataDate.value = "";
    }
    }


    
    
    
 




