
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
    let daysId = document.querySelector("#days")
    daysId.textContent = days;
    let hoursId = document.querySelector("#hours")
    hoursId.textContent = hours;
    let minutesId = document.querySelector("#minutes")
    minutesId.textContent = minutes;
    let secondsId = document.querySelector("#seconds")
    secondsId.textContent = seconds;
    
 }, 1000)