


const leftSection = {
    chairs: 4,
    add(n) {
        chairs += 0
    }
}

const middleSection = {
    section: document.querySelector("middleSection"),
    chairs: 0,
    add(n) {
        chairs += 0
    }
}

const rightSection = {
    section: document.querySelector("rightSection"),
    chairs: 0,
    add(n) {
        chairs += 0
    }
}
function chairs() {
    
    let leftSectionElement = document.querySelector("#leftSection")
    // Left Section
    for (i = 0; i < leftSection.chairs; i++) {
        if (leftSection.chairs < 3) {
            for (i = 0; i < leftSection.chairs; i++) {
                let imgElement = new Image();
                imgElement.src = "chairNotOccupied.png";
                leftSectionElement.append(imgElement);
            }
        } else {
            
        }
    }
}

chairs()


