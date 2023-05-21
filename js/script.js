console.clear();
console.log("version 2.0 mountains");

// Creating a digital clock
let span = document.getElementById("time")

function formateTime(time) {
    if (time < 10) {
        time = `0${time}`
    }
    return time
}

function showTime() {
    const times = new Date()
    let hours = formateTime(times.getHours())
    let minutes = formateTime(times.getMinutes())
    let seconds = formateTime(times.getSeconds())
    let clock = `${hours}:${minutes}:${seconds}`
    span.innerHTML = clock
}
showTime()
window.setInterval(showTime, 1000)