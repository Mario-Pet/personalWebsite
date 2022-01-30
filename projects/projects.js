document.querySelector("#language").addEventListener("change", (e) => {
    if(document.querySelector("#language").value == "german") {
        document.querySelector("#expenseTracker").textContent = "kosten tracker";
        document.querySelector("#countdown").textContent = "countdown bis zum neuen jahr";
        document.querySelector("#movieseatBooking").textContent = "movieseat buchen";
        document.querySelector("#description").textContent = `Eine Beschreibung, was diese Projekte tun und wie sie zu verwenden sind, finden Sie, wenn Sie auf "source code" klicken.`;
        
    } else {
        document.querySelector("#expenseTracker").textContent = "expense tracker";
        document.querySelector("#countdown").textContent = "countdown till new years";
        document.querySelector("#movieseatBooking").textContent = "movieseat booking";
        document.querySelector("#description").textContent = `A description on what these projects do and how to use them are provided when you click "source code"`;
    }
})
