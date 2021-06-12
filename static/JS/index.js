var imgslide = document.getElementById("slideimg");
var imgs = new Array(
    "../static/img/bg7.jpg",
    "../static/img/bg4.jpg",
    "../static/img/bg6.jpg",
    "../static/img/bg10.jpg",
    "../static/img/bg9.jpg",
    "../static/img/bg8.jpg",
    "../static/img/bg5.jpg",
    "../static/img/bg3.jpg",
    "../static/img/bg1.jpg",
    "../static/img/bg2.jpg",

);
var len = imgs.length;
var i = 0;
function slider() {
    if (i > len - 1) {
        i = 0;
    }
    imgslide.src = imgs[i];
    i++;
    setTimeout('slider()', 3000);
}

// side nav Script 
var menuBtn = document.getElementById("menuBtn")
var sidenav = document.getElementById("sidenav")
var close = document.getElementById("close")
var open = document.getElementById("open")
var menu = document.getElementById("menu")

sidenav.style.right = "-250px"

menuBtn.onclick = function () {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right = "0px"
        open.style.display = "none"
        close.style.display = "block"
        close.style.color = "white"
    }
    else {
        sidenav.style.right = "-250px"
        open.style.display = "block"
        close.style.display = "none"
    }
}

var card = document.getElementById("SiginLogin-inner-box");

function openRegister() {
    card.style.transform = "rotateY(-180deg)";
}
function openLogin() {
    card.style.transform = "rotateY(0deg)";
}

