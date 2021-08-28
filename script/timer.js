console.log("We Are Working")


var speed = 100;
var i = 0;
var p = document.getElementById('typewr');
var txt = `NEW UPDATES COMING SOON`;
function tWE(){
    if (i < txt.length) {
        p.innerHTML += txt.charAt(i);
        i++;
    setTimeout(tWE, speed);
    }
}
document.addEventListener("DOMContentLoaded",function(){
    tWE();
    // Set the date we're counting down to
    var countDownDate = new Date("Sep 10, 2021 15:37:25").getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {
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
    document.getElementById("clock1").innerHTML = `<h1>${days}d ${hours}h ${minutes}m ${seconds}s </h1>`
    //let b=`<h1>${days}d ${hours}h ${minutes}m ${seconds}s </h1>`
    //tWE2(b)
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock1").innerHTML = "<h1>EXPIRED</h1>";
    }
    //console.log(days + "d " + hours + "h "
    //+ minutes + "m " + seconds + "s ");
    },
    1000);
})