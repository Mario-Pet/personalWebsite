function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const chairsPreOccupied = getRandomNumber(10, 35);
const randomChairElementsArray = []

const chairs = {
    number: 61,
    numberOfRandomChairs: 11,
    add(num) {
        let remainder = num % 2;
        let sideCount = num / 4;
        let centerCount = num / 2;
        let sideRemainder = (sideCount - parseInt(sideCount)) * 2;
        let centerRemainder = (centerCount - parseInt(centerCount));
        console.log(`sideCount${sideCount}`)
        console.log(`centerCount${centerCount}`)
        console.log(`sideRemainder${sideRemainder}`)
        console.log(`centerRemainder${centerRemainder}`)
        console.log(`remainder ${remainder}`)

        if (remainder == 1) {
            console.log("odd")
            for (var i = 0; i < sideCount - 1; i++) {
                let imgUnoccupied = document.createElement("img");
                imgUnoccupied.setAttribute("class", "chair unoccupied");
                imgUnoccupied.setAttribute("id", `leftSection${i}`)
                document.querySelector("#leftSection").append(imgUnoccupied)
            }
    
            for (var i = 0; i < centerCount - 1; i++) {
                let imgUnoccupied = document.createElement("img");
                imgUnoccupied.setAttribute("class", "chair unoccupied");
                imgUnoccupied.setAttribute("id", `middleSection${i}`)
                document.querySelector("#middleSection").append(imgUnoccupied)
            }
    
            for (var i = 0; i < sideCount - 1; i++) {
                let imgUnoccupied = document.createElement("img");
                imgUnoccupied.setAttribute("class", "chair unoccupied");
                imgUnoccupied.setAttribute("id", `rightSection${i}`)
                document.querySelector("#rightSection").append(imgUnoccupied)
            }

            let leftOverChair = getRandomNumber(0, 3);
            let imgUnoccupied = document.createElement("img");
            imgUnoccupied.setAttribute("class", "chair unoccupied");

            if (leftOverChair == 0) {
                document.querySelector("#leftSection").append(imgUnoccupied)
                imgUnoccupied.id = `leftSection${sideCount+1}`
            } else if (leftOverChair == 1) {
                document.querySelector("#middleSection").append(imgUnoccupied)
                imgUnoccupied.id = `middleCenter${centerCount+1}`
            } else if (leftOverChair == 2) {
                document.querySelector("#leftSection").append(imgUnoccupied)
                imgUnoccupied.id = `leftSection${sideCount+1}`
            }

        } else if (remainder == 0) {
            console.log("even")
            for (var i = 0; i < sideCount; i++) {
                let imgUnoccupied = document.createElement("img");
                imgUnoccupied.setAttribute("class", "chair unoccupied");
                imgUnoccupied.setAttribute("id", `leftSection${i}`)
                document.querySelector("#leftSection").append(imgUnoccupied)
            }
        
            for (var i = 0; i < centerCount; i++) {
                let imgUnoccupied = document.createElement("img");
                imgUnoccupied.setAttribute("class", "chair unoccupied");
                imgUnoccupied.setAttribute("id", `middleSection${i}`)
                document.querySelector("#middleSection").append(imgUnoccupied)
                }
        
            for (var i = 0; i < sideCount; i++) {
                let imgUnoccupied = document.createElement("img");
                imgUnoccupied.setAttribute("class", "chair unoccupied");
                imgUnoccupied.setAttribute("id", `rightSection${i}`)
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

            randomChairsIdArray = [];
            
            while (randomChairsIdArray.length < num) {
                let randomChairNumber = getRandomNumber(0, num);

                if (randomChairsIdArray.includes(randomChairNumber)) {
                } else {
                    randomChairsIdArray.push(randomChairNumber)
                }
            }

            

            for (var i = 0; i < randomChairsIdArray.length; i++) {
                let randomNum = getRandomNumber(0, 3);

                if (randomNum == 0) { // left section
                    randomChairElementsArray.push(`leftSection${randomChairsIdArray[i]}`)
                } else if (randomNum == 1) {
                    randomChairElementsArray.push(`middleSection${randomChairsIdArray[i]}`)
                } else if (randomNum == 2) {
                    randomChairElementsArray.push(`rightSection${randomChairsIdArray[i]}`)
                }
                
            }
           
            

            
            
        } else if (chairs.numberOfRandomChairs % 2 == 0) { // even

        }


        

    } 
}

chairs.randomChairSelector(chairs.numberOfRandomChairs)

document.querySelector(".chairSelection").addEventListener("click", (e) => {
    if (e.target.classList.contains("selected")) {e.target.classList.replace("selected", "unoccupied")}
    else {e.target.classList.replace("unoccupied", "selected")}
})

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();


})


window.onload = chairs.add(chairs.number);
console.log(randomChairElementsArray)
function addingColourToTheSelectedChairs() {
    for (var i = 0; i < randomChairElementsArray.length; i++) {
        let lmao = document.querySelector(`#${randomChairElementsArray[i]}`);
        console.log(lmao)
        lmao.classList.replace("unoccupied", "occupied")
    }
}

console.log(randomChairElementsArray)

addingColourToTheSelectedChairs()
