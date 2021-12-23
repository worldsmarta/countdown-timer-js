const d = document.getElementById('days')
const h = document.getElementById('hours')
const m = document.getElementById('mins')
const s = document.getElementById('seconds')


// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //     + minutes + "m " + seconds + "s ";

    d.innerHTML = days
    h.innerHTML = hours
    m.innerHTML = minutes
    s.innerHTML = seconds

})