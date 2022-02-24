document.querySelector("select").addEventListener("change", e => {
    let classValue;
    if(document.querySelector("#chk").value == "dark") {classValue = "white"};
    if (document.querySelector("select").value == "english") {
        document.querySelector("#makiHeadline").innerHTML = `hello, i am <span class="maki ${classValue}" id="makiLine">maki;</span>`;
        document.querySelector("#makiHeadline").classList.remove("makiHeadline")
        document.querySelector("#makiHeadline").classList.add("makiHeadlineEnglish")
        document.querySelector("#underHeadline").textContent = "I love to code and I love to learn."
        document.querySelector("#projectsHeadline").textContent = "PROJECTS";
        document.querySelector("#projectsBankApp").textContent = "bank app;";
        document.querySelector("#projectsCinemaApp").textContent = "cinema seat booking app;";
        document.querySelector("#projectsCountdown").textContent = "countdown till new years;";
        document.querySelector("#about").textContent = "ABOUT ME";
        document.querySelector("#contact").textContent = "CONTACT";
        document.querySelector("#aboutLine").textContent = "I often read books, play the piano and i love music.";
        document.querySelector("#secondSectionThirdColumn").classList.toggle("secondSectionThirdColumnEnglish")

    } else {
        document.querySelector("#makiHeadline").innerHTML = `hallo, ich bin <span class="maki ${classValue}" id="makiLine">maki;</span>`;
        document.querySelector("#makiHeadline").classList.remove("makiHeadlineEnglish")
        document.querySelector("#makiHeadline").classList.add("makiHeadline")
        document.querySelector("#underHeadline").textContent = "Ich liebe zu programmieren und ich liebe zu lernen."
        document.querySelector("#projectsHeadline").textContent = "PROJEKTE";
        document.querySelector("#projectsBankApp").textContent = "Bank App;";
        document.querySelector("#projectsCinemaApp").textContent = "Kinoplatzreservierung;";
        document.querySelector("#projectsCountdown").textContent = "Countdown bis zum neuen Jahr;";
        document.querySelector("#about").textContent = "ÜBER MICH";
        document.querySelector("#contact").textContent = "KONTAKT";
        document.querySelector("#aboutLine").textContent = "Ich lese Bücher oft, spiele Klavier und liebe Musik";
        document.querySelector("#secondSectionThirdColumn").classList.toggle("secondSectionThirdColumnEnglish")

    }
})

document.querySelector("#chk").addEventListener("click", e => {
    const btn = document.querySelector("#chk")
    if (btn.value == "white") {
        btn.value = "dark";
    } else {
        btn.value = "white";
    }

    if (e.target.value == "white") {
        document.body.classList.toggle("darkBG")

        document.querySelector("#makiHeadline").classList.toggle("white");
        document.querySelector("#makiLine").classList.toggle("white");
        document.querySelector("#underHeadline").classList.toggle("white");

        document.querySelector("#logoImg").setAttribute("src", "imgs/logoDark1080.png")

        document.querySelector("#projectsHeadline").classList.toggle("white");
        document.querySelector("#projectsBankApp").classList.toggle("white");
        document.querySelector("#projectsCinemaApp").classList.toggle("white");
        document.querySelector("#projectsCountdown").classList.toggle("white");

        document.querySelector("#about").classList.toggle("white");
        document.querySelector("#aboutLine").classList.toggle("white");
        document.querySelector("#githubLine").classList.toggle("white");

        document.querySelector("#contact").classList.toggle("white");
        document.querySelector("#underContact").classList.toggle("white");

        document.querySelector("#skillsLine").classList.toggle("white");
        document.querySelector("#jsIcon").setAttribute("src", "imgs/skills/whbl/javascript.png")
        document.querySelector("#htmlIcon").setAttribute("src", "imgs/skills/whbl/html.png")
        document.querySelector("#cssIcon").setAttribute("src", "imgs/skills/whbl/css.png")
        document.querySelector("#gitIcon").setAttribute("src", "imgs/skills/whbl/git.png")
        document.querySelector("#githubIcon").setAttribute("src", "imgs/skills/whbl/github.png")
        document.querySelector("#firebaseIcon").setAttribute("src", "imgs/skills/whbl/firebase.png")
        document.querySelector("#figmaIcon").setAttribute("src", "imgs/skills/whbl/figma.png")
        document.querySelector("#adobexdIcon").setAttribute("src", "imgs/skills/whbl/adobexd.png")
        document.querySelector("#photoshopIcon").setAttribute("src", "imgs/skills/whbl/photoshop.png")
        document.querySelector("#aftereffectsIcon").setAttribute("src", "imgs/skills/whbl/aftereffects.png")
        document.querySelector("#codewarsIcon").setAttribute("src", "imgs/skills/whbl/codewars.png")
        document.querySelector("#codecademyIcon").setAttribute("src", "imgs/skills/whbl/codecademy.png")

        document.querySelector("#language").classList.toggle("languageWhite");

    } else if (e.target.value == "dark") {
        document.body.classList.toggle("darkBG")

        document.querySelector("#makiHeadline").classList.toggle("white");
        document.querySelector("#makiLine").classList.toggle("white");
        document.querySelector("#underHeadline").classList.toggle("white");

        document.querySelector("#logoImg").setAttribute("src", "imgs/logoWhite1080.png")

        document.querySelector("#projectsHeadline").classList.toggle("white");
        document.querySelector("#projectsBankApp").classList.toggle("white");
        document.querySelector("#projectsCinemaApp").classList.toggle("white");
        document.querySelector("#projectsCountdown").classList.toggle("white");

        document.querySelector("#about").classList.toggle("white");
        document.querySelector("#aboutLine").classList.toggle("white");

        document.querySelector("#contact").classList.toggle("white");
        document.querySelector("#underContact").classList.toggle("white");
        document.querySelector("#githubLine").classList.toggle("white");

        document.querySelector("#skillsLine").classList.toggle("white");

        document.querySelector("#jsIcon").setAttribute("src", "imgs/skills/blwh/javascript.png")
        document.querySelector("#htmlIcon").setAttribute("src", "imgs/skills/blwh/html.png")
        document.querySelector("#cssIcon").setAttribute("src", "imgs/skills/blwh/css.png")
        document.querySelector("#gitIcon").setAttribute("src", "imgs/skills/blwh/git.png")
        document.querySelector("#githubIcon").setAttribute("src", "imgs/skills/blwh/github.png")
        document.querySelector("#firebaseIcon").setAttribute("src", "imgs/skills/blwh/firebase.png")
        document.querySelector("#figmaIcon").setAttribute("src", "imgs/skills/blwh/figma.png")
        document.querySelector("#adobexdIcon").setAttribute("src", "imgs/skills/blwh/adobexd.png")
        document.querySelector("#photoshopIcon").setAttribute("src", "imgs/skills/blwh/photoshop.png")
        document.querySelector("#aftereffectsIcon").setAttribute("src", "imgs/skills/blwh/adobeaftereffects.png")
        document.querySelector("#codewarsIcon").setAttribute("src", "imgs/skills/blwh/codewars.png")
        document.querySelector("#codecademyIcon").setAttribute("src", "imgs/skills/blwh/codecademy.png")

        document.querySelector("#language").classList.toggle("languageWhite");
        document.querySelector("#chklabel").classList.toggle("darkBG");
        document.querySelector("#ball").classList.toggle("darkBG");


    }
})

