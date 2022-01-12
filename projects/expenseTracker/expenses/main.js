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
    document.querySelector("table tbody").append(row);

    row.append(
        ...Array.from()
    )
})
