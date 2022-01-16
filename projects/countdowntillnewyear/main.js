setInterval(() => {
    nextYear = new Date(new Date().getFullYear()+1, 0, 1);
    todaysDate = new Date();
    let distance = nextYear - todaysDate;
    
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000*60*60));
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / 1000);
    
    let daysId = document.querySelector("#days")
    daysId.textContent = days;
    let hoursId = document.querySelector("#hours")
    hoursId.textContent = hours;
    let minutesId = document.querySelector("#minutes")
    minutesId.textContent = minutes;
    let secondsId = document.querySelector("#seconds")
    secondsId.textContent = seconds;
    
 }, 1000)