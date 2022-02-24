
// Creating a way to create elements easier and creating an arrow function that picks a number based on an array.
const createElementWithOptions = (type, options = {}) =>
  Object.assign(document.createElement(type), options);

const getRandomNumber = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Initial balance object with adding capabilities
const balance = {
    current: 0,
    add(n) {
        balance.current += Number(n)
        document.querySelector("#balance").textContent = Intl.NumberFormat("fr-FR").format(balance.current)
    },
    currency: "€"
}

// Deciding which status to take  Currently 80% for approved 20% for denied
const statusDecider = {
    statusses: [
        ["approved"],
        ["approved"],
        ["approved"],
        ["approved"],
        ["approved"],
        ["approved"],
        ["approved"],
        ["pending", "approved"],
        ["pending", "denied"],
        ["denied"]
    ],
    get() {
        return getRandomNumber(statusDecider.statusses)
    }
}

// On Submit create a row and add value to the balance object
document.querySelector("form").addEventListener("submit", (e) => {

    e.preventDefault();
    
    // Creating Row and fetching which status to use
    const data = new FormData(e.target);
    const row = document.createElement("tr");
    const statusses = statusDecider.get();
    
    const statusCell = createElementWithOptions("td", {
        textContent: statusses[0],
        className: statusses.join(" ")
    })

    document.querySelector("table tbody").append(row);
    
    // Appending every piece of information except the last child.
    let thValues = ['name', "amount", "date"]
    row.append(
        ...thValues.map((th) => createElementWithOptions('td', {
            textContent: `${data.get(th)}${th === "amount" ? "€" : ""}`
        })),
        statusCell
    );

    // Adding pending class if the status is pending
    if (statusCell.textContent === "pending") {
        statusCell.setAttribute("class", "pending")
    }

    // if it is a pending status then it assigns a class  and adds value in appropriate currency depending if the status includes "approved" or not 
    if (statusses.length > 1) {

        setTimeout(() => {
            statusCell.textContent = statusses[1];
            statusCell.classList.remove(statusses[0]);

            if (statusses.includes("approved")) {

                statusCell.setAttribute("class", "approved")

                if (balance.currency === "$") {
                    var amount = data.get("amount")
                    balance.add(amount * 1.1452051406);
                } else if (balance.currency === "€") {
                    balance.add(data.get("amount"))
                }

            } else {
                statusCell.setAttribute("class", "denied")
            }
        }, 5000)

    } else {
        
        // Normal adding without the pending status
        if (statusses.includes("approved")) {

            if (balance.currency === "$") {
                let amount = data.get("amount")
                amount = amount  * 1.1452051406
                balance.add(amount);
            } else if (balance.currency === "€") {
                balance.add(data.get("amount"))
            }
        }

        // Assigning the denied class to the denied status
        if (statusses.includes("denied")) {
            statusCell.setAttribute("class", "denied")
        }

    }
      e.target.reset()  
    })

// Event Listener to grab the value of the previous currency for later comparisson
document.querySelector("#currencySelector").addEventListener("click", () => {
    balance.currency = document.querySelector("#currencySelector").value
})


function onChangeCurrency() {
    // Grabs value of new currency that the selector changed to
    let newCurrency = document.querySelector("#currencySelector").value

    // Depending on the last and new value applies multiplication in this case and changes the placeholder, currency property.
    if (balance.currency === "€" && newCurrency === "$") {
        balance.current = balance.current * 1.1452051406;

        document.querySelector("#balance").textContent = balance.current.toFixed(2);
        document.querySelector("#currency").textContent = "$";
        document.querySelector("#balance").textContent = Intl.NumberFormat("fr-FR").format(balance.current)

        balance.currency = newCurrency;

        document.querySelector("#amountInput").placeholder = "$";

    }

    // Depending on the last and new value applies division in this case and changes the placeholder, currency property.
    if (balance.currency === "$" && newCurrency === "€") {

        balance.current = balance.current / 1.1452051406;

        document.querySelector("#balance").textContent = balance.current.toFixed(1);
        document.querySelector("#currency").textContent = "€";
        document.querySelector("#balance").textContent = Intl.NumberFormat("fr-FR").format(balance.current)

        balance.currency = newCurrency;

        document.querySelector("#amountInput").placeholder = "€";
    }


}


document.querySelector("#language").addEventListener("change", (e) => {
    if(document.querySelector("#language").value == "german") {
        document.querySelector("#headName").textContent = "Name";
        document.querySelector("#headAmount").textContent = "Summe";
        document.querySelector("#headDate").textContent = "Datum";
        document.querySelector("#headStatus").textContent = "Status";
        document.querySelector("#name").placeholder = "Name"
    } else {
        document.querySelector("#headName").textContent = "name";
        document.querySelector("#headAmount").textContent = "amount";
        document.querySelector("#headDate").textContent = "date";
        document.querySelector("#headStatus").textContent = "status";
        document.querySelector("#name").placeholder = "name"
    }
})

