document.querySelector("#language").addEventListener("change", (e) => {
    if(document.querySelector("#language").value == "german") {
        document.querySelector("#headline").textContent = "Das neue Jahr ist in";
        document.querySelector("#daysText").textContent = "Tagen";
        document.querySelector("#hrsText").textContent = "Stunden";
        document.querySelector("#minText").textContent = "Minuten";
        document.querySelector("#secsText").textContent = "Sekunden";
        
    } else {
        document.querySelector("#headline").textContent = "new year is in";
        document.querySelector("#daysText").textContent = "days";
        document.querySelector("#hrsText").textContent = "hours";
        document.querySelector("#minText").textContent = "minutes";
        document.querySelector("#secsText").textContent = "seconds";
    }
})


// Interval that has an arrow function that is run every 1sec.
setInterval(() => {

    // Assigning next year based on today's year and adding 1 to that year.
    nextYear = new Date(new Date().getFullYear()+1, 0, 1);
    todaysDate = new Date();

    // Measuring the distance between the two dates.
    let distance = nextYear - todaysDate;
    
    // Calculating the days, hours, minutes, seconds because distance by itself is unusable because its displayed in miliseconds.
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000*60*60));
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / 1000);
    
    // Assigning the values to the corresponding html elements
    document.querySelector("#days").textContent = days;
    document.querySelector("#hours").textContent = hours;
    document.querySelector("#minutes").textContent = minutes;
    document.querySelector("#seconds").textContent = seconds;
    
 }, 1000)

document.querySelector("#chk").addEventListener("change", e => {
    const btn = document.querySelector("#chk");

    if (btn.value === "dark") {
        btn.value = "white";
    } else {
        btn.value = "dark";
    }

    if (btn.value === "dark") {
        document.body.classList.toggle("darkBG");
        
        document.querySelector("#headline").classList.toggle("white");
        document.querySelector("#daysBox").classList.toggle("white");
        document.querySelector("#hoursBox").classList.toggle("white");
        document.querySelector("#minutesBox").classList.toggle("white");
        document.querySelector("#secondsBox").classList.toggle("white");
        
        document.querySelector("#language").classList.toggle("white");

        document.querySelector("#sourcecode").classList.remove("dark")
        document.querySelector("#sourcecode").classList.add("white")
    } else {
        document.body.classList.toggle("darkBG")

        document.querySelector("#headline").classList.toggle("white");

        document.querySelector("#daysBox").classList.toggle("white");
        document.querySelector("#hoursBox").classList.toggle("white");
        document.querySelector("#minutesBox").classList.toggle("white");
        document.querySelector("#secondsBox").classList.toggle("white");

        document.querySelector("#language").classList.toggle("white");

        document.querySelector("#sourcecode").classList.remove("white")
        document.querySelector("#sourcecode").classList.add("dark")
    }
})