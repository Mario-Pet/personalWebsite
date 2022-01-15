const createElementWithOptions = (type, options = {}) =>
  Object.assign(document.createElement(type), options);

const getRandomNumber = (arr) => arr[Math.floor(Math.random() * arr.length)];


const balance = {
    current: 0,
    add(n) {
        balance.current += Number(n)
        document.querySelector("#balance").textContent = Intl.NumberFormat("fr-FR").format(balance.current)
    },
    currency: "€"
}

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

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const row = document.createElement("tr");

    const statusses = statusDecider.get();
    const statusCell = createElementWithOptions("td", {
        textContent: statusses[0],
        className: statusses.join(" ")
    })

    document.querySelector("table tbody").append(row);

    row.append(
        ...Array.from(document.querySelectorAll("table th:not(:last-child")).map((th) => 
        createElementWithOptions("td", {
            textContent: `${data.get(th.textContent)}${th.textContent === "amount" ? "€" : ""}`
        })),
        statusCell
    );

    if (statusCell.textContent === "pending") {
        statusCell.setAttribute("class", "pending")
    }

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
        if (statusses.includes("approved")) {
            if (balance.currency === "$") {
                var amount = data.get("amount")
                balance.add(amount * 1.1452051406);
            } else if (balance.currency === "€") {
                balance.add(data.get("amount"))
            }
        }

        if (statusses.includes("denied")) {
            statusCell.setAttribute("class", "denied")
        }
    }
      e.target.reset()  
    })
    

   

document.querySelector("#currencySelector").addEventListener("click", () => {
    balance.currency = document.querySelector("#currencySelector").value
})

function onChangeCurrency() {
    let newCurrency = document.querySelector("#currencySelector").value

    if (balance.currency === "€" && newCurrency === "$") {
        balance.current = balance.current * 1.1452051406;
        document.querySelector("#balance").textContent = balance.current.toFixed(2);
        document.querySelector("#currency").textContent = "$";
        document.querySelector("#balance").textContent = Intl.NumberFormat("fr-FR").format(balance.current)
    } else if (newCurrency == null) {
        balance.add(data.get("amount"))
    }

    if (balance.currency === "$" && newCurrency === "€") {}
}

console.log(312312 * 1.1415303584);
console.log(1 -0.14153035840000006)
console.log(357661.308 * 0.8784696415999999)