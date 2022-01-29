const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const chairs = {
    numberOfChairs: 0,
    numberOfRandomChairs: 0,
    add(num) {
        const oddOrEven = (num) => {
            return num % 2 == 1 ? "odd" : "even";
        } // even function

        const pickASide = (oddOrEven, num) => {
            let chairsToBeAdded = num - (parseInt(num / 4) + parseInt(num / 4) + parseInt(num / 2));

            for (let i = 0; i < chairsToBeAdded; i++) {
                let valueOfRandom = randomNumber(0, 3);
                if (valueOfRandom == 0) { // left section
                    let imgUnoccupied = document.createElement("img");
                    imgUnoccupied.setAttribute("class", "chair unoccupied");
                    imgUnoccupied.setAttribute("id", `A${leftSide.numberOfChairs}`)
                    document.querySelector("#leftSection").append(imgUnoccupied)
                } else if(valueOfRandom == 1) { // center
                    let imgUnoccupied = document.createElement("img");
                    imgUnoccupied.setAttribute("class", "chair unoccupied");
                    imgUnoccupied.setAttribute("id", `B${centerSide.numberOfChairs}`)
                    document.querySelector("#centerSection").append(imgUnoccupied)
                } else if(valueOfRandom == 2) {
                    let imgUnoccupied = document.createElement("img");
                    imgUnoccupied.setAttribute("class", "chair unoccupied");
                    imgUnoccupied.setAttribute("id", `C${rightSide.numberOfChairs}`)
                    document.querySelector("#rightSection").append(imgUnoccupied)
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
            // flips a coin to either fill 20% or 40% or 60% of the chairs
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
                    let n = randomNumber(0, leftSideChairs);
    
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
                    let n = randomNumber(0, centerSideChairs);
    
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
                    let n = randomNumber(0, rightSideChairs);
    
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
                    }
                    
                } // for  
               return newValues;
            }
            
            const IDs = [...leftSideArray, ...centerSideArray, ...rightSideArray].sort()
            IDs.push(...oddSideAdder())







            // execution
            leftSideAdder()
            rightSideAdder()
            centerSideAdder()
            oddSideAdder()
            console.log(`oddChairsToBeAdded = ${oddChairsToBeAdded}`)
            return IDs;
        } // sideIdentifier

        
        

        chanceCalculator()
        let processedIds = sideIdentifer(this.numberOfRandomChairs);
        
        const applier = ids => {
            ids.forEach(element => {
                document.querySelector(`#${element}`).classList.replace("unoccupied", "occupied")
            })
        }

        applier(processedIds)


    } // add

    

} // chair object

chairs.add(160)
chairs.randomChairSelector()
console.log(`numberOfRandomChairs = ${chairs.numberOfRandomChairs}`)






















const sentenceManipulator = {
    chairs: [],
    price: 0
}

const email = {
    value: "hey@mariopetkovic.com",
    looks() {},
    send() {}
}

document.querySelector(".chairSelection").addEventListener("click", (e) => {
    if (e.target.classList.contains("selected")) {e.target.classList.replace("selected", "unoccupied")}
    else {e.target.classList.replace("unoccupied", "selected")}
})