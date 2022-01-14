const createElementWithOptions = (type, options = {}) =>
  Object.assign(document.createElement(type), options);

const getRandomNumber = (arr) => arr[Math.floor(Math.random() * arr.length)];


const balance = {
    current: 0,
    add(n) {
        balance.current += Number(n)
        document.querySelector("#balance").textContent = Intl.NumberFormat("fr-FR").format(balance.current)
    },
    currency: "$"
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
    console.log(statusCell)
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

            if (statusses.includes("approved"))
            balance.add(data.get("amount"));
            statusCell.setAttribute("class", "approved")
        }, 5000)
    } else {
        if (statusses.includes("approved"))
        balance.add(data.get("amount"));
    }
    

    e.target.reset();
})


document.querySelector("#currencySelector").addEventListener("click", () => {
    let currentCurrency = document.querySelector("#currencySelector").value
    console.log(currentCurrency)
})

document.querySelector("#currencySelector").addEventListener("onchange", () => {
    let newCurrency = document.querySelector("#currencySelector").value
    console.log(newCurrency)
})

function change() {
    console.log("dsa")
}