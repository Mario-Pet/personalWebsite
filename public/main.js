
document.querySelector("#language").addEventListener("change", (e) => {
    if(document.querySelector("#language").value == "german") {
        document.querySelector("#underConstructionSentence").textContent = "Diese Website befindet sich derzeit im Aufbau.";
        document.querySelector("#returnSentence").textContent = "Bitte kommen Sie in naher Zukunft wieder.";
        document.querySelector("#myProjectsSentence").textContent = "Meine Projekte sind oben rechts auf der Seite zu sehen.";
        document.querySelector("#contactSentence").textContent = "Kontaktieren Sie mich unter: hey@mariopetkovic.com";
        document.querySelector("#projects").textContent = "projekte"
    } else {
        document.querySelector("#underConstructionSentence").textContent = "This website is currently under construction.";
        document.querySelector("#returnSentence").textContent = "Please return in the near future.";
        document.querySelector("#myProjectsSentence").textContent = "My projects are represented in the top right of the page.";
        document.querySelector("#contactSentence").textContent = "contact me at: hey@mariopetkovic.com";
        document.querySelector("#projects").textContent = "projects";
    }
})

