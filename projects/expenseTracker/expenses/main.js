const getRandomNumber = (arr) => arr[Math.floor(Math.random() * arr.length)];


const balance = {
    current: 0,
    add(n) {

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
    ]
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("date"))
})