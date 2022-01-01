setInterval(() => {
    lmao = new Date(new Date().getFullYear()+1, 0, 1);
    lmao1 = new Date();
    let distance = lmao - lmao1;
    
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000*60*60));
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / 1000);
    
    let daysId = document.getElementById("days")
    daysId.innerHTML = days;
    let hoursId = document.getElementById("hours")
    hoursId.innerHTML = hours;
    let minutesId = document.getElementById("minutes")
    minutesId.innerHTML = minutes;
    let secondsId = document.getElementById("seconds")
    secondsId.innerHTML = seconds;
 }, 1000)