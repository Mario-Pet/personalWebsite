const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const chairs = {
    numberOfChairs: 0,
    numberOfRandomChairs: 0,
    positions: [],
    priceOfAllChairsSelected: 0,
    add(num) {
        const oddOrEven = (num) => {
            return num % 2 == 1 ? "odd" : "even";
        } // even function

        const pickASide = (oddOrEven, num) => {
            let chairsToBeAdded = num - (parseInt(num / 4) + parseInt(num / 4) + parseInt(num / 2));

            const makingAChair = (idLetter, idSide, side) => {
                let imgUnoccupied = document.createElement("img");
                imgUnoccupied.setAttribute("class", "chair unoccupied");
                imgUnoccupied.setAttribute("id", `${idLetter}${idSide}`)
                imgUnoccupied.setAttribute("name", "chair")
                document.querySelector(`#${side}`).append(imgUnoccupied)
            }

            for (let i = 0; i < chairsToBeAdded; i++) {
                let valueOfRandom = randomNumber(0, 3);

                if (valueOfRandom == 0) { // left section
                    makingAChair("A", leftSide.numberOfChairsLeft, "leftSection")
                } else if(valueOfRandom == 1) { // center section
                    makingAChair("B", centerSide.numberOfChairsCenter, "centerSection")
                } else if(valueOfRandom == 2) { // right section
                    makingAChair("C", rightSide.numberOfChairsRight, "rightSection")
                } // if statement
            } // for    
        } // pickASide function

        const leftSide = {
            numberOfChairsLeft: 0,
            add(num) {
                this.numberOfChairsLeft += parseInt(num / 4);

                for(let i = 0; i < this.numberOfChairsLeft; i++) {
                    let imgUnoccupied = document.createElement("img");
                    imgUnoccupied.setAttribute("class", "chair unoccupied");
                    imgUnoccupied.setAttribute("id", `A${i}`)
                    imgUnoccupied.setAttribute("name", "chair")
                    document.querySelector("#leftSection").append(imgUnoccupied)
                } // for
                chairs.numberOfChairs += this.numberOfChairsLeft // adding to the main chair property
            } // add method 
        } // leftSide object

        const centerSide = {
            numberOfChairsCenter: 0,
            add(num) {
                this.numberOfChairsCenter += parseInt(num / 2);

                for(let i = 0; i < this.numberOfChairsCenter; i++) {
                    let imgUnoccupied = document.createElement("img");
                    imgUnoccupied.setAttribute("class", "chair unoccupied");
                    imgUnoccupied.setAttribute("id", `B${i}`)
                    imgUnoccupied.setAttribute("name", "chair")
                    document.querySelector("#centerSection").append(imgUnoccupied)
                } // for
                chairs.numberOfChairs += this.numberOfChairsCenter // adding to the main chair property
            } // add method
        } // centerSide object
        
        const rightSide = {
            numberOfChairsRight: 0,
            add(num) {
                this.numberOfChairsRight += parseInt(num / 4);
                for(let i = 0; i < this.numberOfChairsRight; i++) {
                    let imgUnoccupied = document.createElement("img");
                    imgUnoccupied.setAttribute("class", "chair unoccupied");
                    imgUnoccupied.setAttribute("id", `C${i}`)
                    imgUnoccupied.setAttribute("name", "chair")
                    document.querySelector("#rightSection").append(imgUnoccupied)
                } // for
                chairs.numberOfChairs += this.numberOfChairsRight // adding to the main chair property
            } // add method
        } // rightSide object

        // execution
        leftSide.add(num)
        rightSide.add(num)
        centerSide.add(num)
        pickASide(oddOrEven(), num)
        
    },

    randomChairSelector() {     
        const chanceCalculator = () => {
            // flips a (triple???)coin to either fill 20% or 40% or 60% of the chairs
            const randomNum = randomNumber(0, 3);
           
            if (randomNum == 0) {this.numberOfRandomChairs = Math.round(this.numberOfChairs * 0.2);} // 20%
            else if(randomNum == 1) {this.numberOfRandomChairs = Math.round(this.numberOfChairs * 0.4);} // 40%
            else if (randomNum == 2) {this.numberOfRandomChairs = Math.round(this.numberOfChairs * 0.6);} // 60%
        }

        const sideIdentifer = () => {
            const leftSideChairs = parseInt(this.numberOfRandomChairs / 4);
            const centerSideChairs = parseInt(this.numberOfRandomChairs / 2);
            const rightSideChairs = parseInt(this.numberOfRandomChairs / 4);

            const oddChairsToBeAdded = this.numberOfRandomChairs - (leftSideChairs + centerSideChairs + rightSideChairs);

            let leftSideArray = leftSideAdder();
            let centerSideArray = centerSideAdder();
            let rightSideArray = rightSideAdder();

            function leftSideAdder() {
                let leftIds = [];

                while (leftIds.length < leftSideChairs) {
                    let n = randomNumber(0, parseInt(chairs.numberOfChairs/4));
    
                    if (leftIds.includes(`A${n}`)) {
                    } else {
                        leftIds.push(`A${n}`)
                    } // if 
                } // while
                
                return leftIds;
            } // function

            function centerSideAdder() {
                let centerIds = [];

                while (centerIds.length < centerSideChairs) {
                    let n = randomNumber(0, parseInt(chairs.numberOfChairs/2));
    
                    if (centerIds.includes(`B${n}`)) {
                    } else {
                        centerIds.push(`B${n}`)
                    } // if 
                } // while
                
                return centerIds;
            } // function

            function rightSideAdder() {
                let rightIds = [];

                while (rightIds.length < rightSideChairs) {
                    let n = randomNumber(0, parseInt(chairs.numberOfChairs/4));
    
                    if (rightIds.includes(`C${n}`)) {
                    } else {
                        rightIds.push(`C${n}`)
                    } // if 
                } // while
                
                return rightIds;
            } // function

            const oddSideAdder = () => {
                let newValues = [];
                for (let i = 0; i < oddChairsToBeAdded; i++) {
                    let valueOfRandom = randomNumber(0, 3);

                    if (valueOfRandom == 0) { // left
                        newValues.push(`A${leftSideArray.length}`)
                        leftSideArray.push(`A${leftSideArray.length}`)
                    } else if(valueOfRandom == 1) { // center
                        newValues.push(`B${centerSideArray.length}`)
                        centerSideArray.push(`B${centerSideArray.length}`)
                    } else if (valueOfRandom == 2) {
                        newValues.push(`C${rightSideArray.length}`)
                        rightSideArray.push(`C${rightSideArray.length}`)
                    } // if 
                } // for  
               return newValues;
            } // oddSideAdder
            
            const IDs = [...leftSideArray, ...centerSideArray, ...rightSideArray, ...oddSideAdder()].sort()
            
            // execution
            leftSideAdder()
            rightSideAdder()
            centerSideAdder()
            oddSideAdder()
            
            return IDs;
        } // sideIdentifier

        chanceCalculator() // deciding how many chairs are going to be random

        let processedIds = sideIdentifer(this.numberOfRandomChairs);

        const applier = ids => {
            ids.forEach(element => {
                document.querySelector(`#${element}`).classList.replace("unoccupied", "occupied")
            })
        }

        applier(processedIds)
    } // add
} // chair object

// Manipulating the sentence -- Made it an object for future proofing 
const sentenceManipulator = {
    calculate(value) {
        let priceOfAllChairsSelected = document.querySelector("#priceOfAllChairsSelected")
       
        if (value == "Zack Snyder's Justice League - 16€") {priceOfAllChairsSelected.textContent = chairs.positions.length * 16; chairs.priceOfAllChairsSelected = chairs.positions.length * 16;}
        else if(value == "Spider-Man: No way Home - 19€") {priceOfAllChairsSelected.textContent = chairs.positions.length * 19; chairs.priceOfAllChairsSelected = chairs.positions.length * 19;}
        else if(value == "The Suice Squad - 18€") {priceOfAllChairsSelected.textContent = chairs.positions.length * 18; chairs.priceOfAllChairsSelected = chairs.positions.length * 18;}
    }
}

// Calculating the data in the cells of the table
const calculateReceipt = () => {
    document.querySelector("#movieRunning").textContent = document.querySelector("#movieSelector").value
    document.querySelector("#chairsOccupied").textContent = chairs.positions;
    document.querySelector("#priceOfChairsOccupied").textContent = chairs.priceOfAllChairsSelected;
}

// Event listener for selection of chairs
document.querySelector(".chairSelection").addEventListener("click", (e) => { 
    if (e.target.classList.contains("selected") && e.target.name == "chair") {e.target.classList.replace("selected", "unoccupied"); chairs.positions.splice(chairs.positions.indexOf(e.target.id), 1) }
    else if (!e.target.classList.contains("occupied")&& e.target.name == "chair"){e.target.classList.replace("unoccupied", "selected"); chairs.positions.push(e.target.id);}
    
    let chairsSelected = document.querySelector("#chairsSelected")
    chairsSelected.textContent = chairs.positions.length;
    sentenceManipulator.calculate(document.querySelector("#movieSelector").value)
    calculateReceipt()

    if(chairsSelected.textContent == 1) {
        document.querySelector("#stuehle").textContent = "Stuhl";
        document.querySelector("#stuehlen").textContent = "ist";
    } else {
        document.querySelector("#stuehle").textContent = "Stühle";
        document.querySelector("#stuehlen").textContent = "aller Stühlen ist";
    }
})

// Event listener for change of movie
document.querySelector("#movieSelector").addEventListener("change", (e) => {
    sentenceManipulator.calculate(e.target.value)
    calculateReceipt(document.querySelector("#movieSelector").value, chairs.positions, sentenceManipulator.price)
} )

// Event listener for display button pressed
document.querySelector("#submit").addEventListener("click", (e) => {
    document.querySelector("#table").classList.toggle("notDisplayed")
    calculateReceipt()
})

document.querySelector("#chairsSelected").addEventListener("change", (e) => {
    console.log(e.target.value)
})

document.querySelector("#language").addEventListener("change", (e) => {
    if(document.querySelector("#language").value == "german") {
        document.querySelector("#headerMovie").textContent = "Movieseat buchen";
        document.querySelector("#notoccupiedText").textContent = "Nicht besetzt";
        document.querySelector("#occupiedText").textContent = "Besetzt";
        document.querySelector("#selectedText").textContent = "Ausgewählt";
        document.querySelector("#status").innerHTML = `Sie haben <span id="chairsSelected">0</span> Stühle ausgewählt und der Preis aller Stühlen sind <span id="priceOfAllChairsSelected">0</span>€!`;
        document.querySelector("#submit").textContent = "Quittung zeigen";
        document.querySelector("#tableMovie").textContent = "Movie";
        document.querySelector("#tableChairs").textContent = "Ausgewählte Stühle";
        document.querySelector("#tablePrice").textContent = "Preis";
    } else {
        document.querySelector("#headerMovie").textContent = "Movie Theater Booth";
        document.querySelector("#notoccupiedText").textContent = "Not Occupied";
        document.querySelector("#occupiedText").textContent = "Occupied";
        document.querySelector("#selectedText").textContent = "Selected";
        document.querySelector("#status").innerHTML = `You have currently selected <span id="chairsSelected">0</span> chairs and the price sum will be <span id="priceOfAllChairsSelected">0</span>€!`
        document.querySelector("#submit").textContent = "Display Receipt";
        document.querySelector("#tableMovie").textContent = "Movie";
        document.querySelector("#tableChairs").textContent = "Selected Chairs";
        document.querySelector("#tablePrice").textContent = "Price";
    }
})

chairs.add(100)
chairs.randomChairSelector()
