// https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
var tv = document.getElementById("myTv");
var radio = document.getElementById("myRadio");

// Get the button that opens the modal
var tvBtn = document.getElementById("watchTV");
var rdBtn = document.getElementById("playRadio");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
tvBtn.onclick = function () {
    tv.style.display = "block";
}
rdBtn.onclick = function () {
    radio.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    tv.style.display = "none";
    radio.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == tv)
        tv.style.display = "none";
    if (event.target == radio)
        radio.style.display = "none";
}