let imgElement = new Image();
imgElement.src = "chairNotOccupied.png";



const leftSection = {
    chairs: 2,
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

    // Left Section
    for (i = 0; i < leftSection.chairs; i++) {
        if (leftSection.chairs < 3) {
            let section = leftSection.section;
            console.log(section)
            section.append(imgElement);
        } else {
            
        }
    }
}

chairs()


