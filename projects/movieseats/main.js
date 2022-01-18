// let chairsSelectedElement = document.querySelector("#chairsSelected")
// let priceOfAllChairsElement = document.querySelector("#priceOfAllChairsSelected")

// let numberOfChairsSelected = 20;
// let priceOfAllChairsSelected = 231312;

// chairsSelectedElement.textContent = numberOfChairsSelected;
// priceOfAllChairsElement.textContent = priceOfAllChairsSelected;

function chairAdded(num) {

    if (num % 2 == "1") {
        side = num / 4;
        center = num / 2;

        sideRemainder = (side - parseInt(side))*2;
        centerRemainder = center-parseInt(center);
        singleSeat = sideRemainder + centerRemainder;
        
        for (var i = 0; i < side - 1; i++) {
            let imgUnoccupied = document.createElement("img");
            imgUnoccupied.setAttribute("class", "chair unoccupied");
            document.querySelector("#leftSection").append(imgUnoccupied)
        }

        for (var i = 0; i < center - 1; i++) {
            let imgUnoccupied = document.createElement("img");
            imgUnoccupied.setAttribute("class", "chair unoccupied");
            document.querySelector("#middleSection").append(imgUnoccupied)
        }

        for (var i = 0; i < side - 1; i++) {
            let imgUnoccupied = document.createElement("img");
            imgUnoccupied.setAttribute("class", "chair unoccupied");
            document.querySelector("#rightSection").append(imgUnoccupied)
        }


    } else {
        side = num / 4;
        center = num / 2;
        
    }
}
chairAdded(2001);
function randomChairSelector() {

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    
    const chairsPreOccupied = getRandomNumber(10, 35);
    
}
randomChairSelector()

document.querySelector(".chairSelection").addEventListener("click", (e) => {
    if (e.target.classList.contains("selected")) {e.target.classList.replace("selected", "unoccupied")}
    else {e.target.classList.replace("unoccupied", "selected")}
})

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();


})