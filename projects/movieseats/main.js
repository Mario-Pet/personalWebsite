function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const chairsPreOccupied = getRandomNumber(10, 35);

function addChairs(num) {

}
addChairs(48);

const chairs = {
    number: 48,
    numberOfRandomChairs: 25,
    add(num) {

    if (num % 2 == "1") {
        side = num / 4;
        center = num / 2;

        sideRemainder = (side - parseInt(side))*2;
        centerRemainder = center-parseInt(center);

        
        for (var i = 0; i < side - 1; i++) {
            let imgUnoccupied = document.createElement("img");
            imgUnoccupied.setAttribute("class", "chair unoccupied");
            imgUnoccupied.setAttribute("id", `leftSection${i+1}`)
            document.querySelector("#leftSection").append(imgUnoccupied)
        }

        for (var i = 0; i < center - 1; i++) {
            let imgUnoccupied = document.createElement("img");
            imgUnoccupied.setAttribute("class", "chair unoccupied");
            imgUnoccupied.setAttribute("id", `middleSection${i+1}`)
            document.querySelector("#middleSection").append(imgUnoccupied)
        }

        for (var i = 0; i < side - 1; i++) {
            let imgUnoccupied = document.createElement("img");
            imgUnoccupied.setAttribute("class", "chair unoccupied");
            imgUnoccupied.setAttribute("id", `rightSection${i+1}`)
            document.querySelector("#rightSection").append(imgUnoccupied)
        }
        
        let leftOverChair = getRandomNumber(0, 3);
        let imgUnoccupied = document.createElement("img");
        imgUnoccupied.setAttribute("class", "chair unoccupied");

        if (leftOverChair == 0) {
            document.querySelector("#leftSection").append(imgUnoccupied)
            imgUnoccupied.id = `leftSection${side+1}`
        } else if (leftOverChair == 1) {
            document.querySelector("#middleSection").append(imgUnoccupied)
            imgUnoccupied.id = `middleCenter${center+1}`
        } else if (leftOverChair == 2) {
            document.querySelector("#leftSection").append(imgUnoccupied)
            imgUnoccupied.id = `leftSection${side+1}`
        }

    } else {

        side = num / 4;
        center = num / 2;

        for (var i = 0; i < side; i++) {
            let imgUnoccupied = document.createElement("img");
            imgUnoccupied.setAttribute("class", "chair unoccupied");
            imgUnoccupied.setAttribute("id", `leftSection${i+1}`)
            document.querySelector("#leftSection").append(imgUnoccupied)
        }

        for (var i = 0; i < center; i++) {
            let imgUnoccupied = document.createElement("img");
            imgUnoccupied.setAttribute("class", "chair unoccupied");
            imgUnoccupied.setAttribute("id", `middleSection${i+1}`)
            document.querySelector("#middleSection").append(imgUnoccupied)
        }

        for (var i = 0; i < side; i++) {
            let imgUnoccupied = document.createElement("img");
            imgUnoccupied.setAttribute("class", "chair unoccupied");
            imgUnoccupied.setAttribute("id", `rightSection${i+1}`)
            document.querySelector("#rightSection").append(imgUnoccupied)
        }
        
        }
    }, 
    randomChairSelector(num) { 
        
        if (chairs.numberOfRandomChairs % 2 == 1) { // odd
            side = num / 4;
            center = num / 2;
            sideRemainder = (side - parseInt(side))*2;
            centerRemainder = center-parseInt(center);

            let leftSectionElement = document.querySelector("#leftSection");
            console.log(leftSectionElement)
            
        } else if (chairs.numberOfRandomChairs % 2 == 0) { // even

        }


        

    } 
}

chairs.randomChairSelector()

document.querySelector(".chairSelection").addEventListener("click", (e) => {
    if (e.target.classList.contains("selected")) {e.target.classList.replace("selected", "unoccupied")}
    else {e.target.classList.replace("unoccupied", "selected")}
})

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();


})

window.onload = chairs.add(chairs.number);