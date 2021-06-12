
// main hotel changing
var imgslide = document.getElementById("slideimg2");
var imgs = new Array(
    "../static/img/hbg1.jpg",
    "../static/img/hbg2.jpg",
    "../static/img/hbg3.jpg",
    "../static/img/hbg4.jpg",
    "../static/img/hbg5.jpg"
);
var len = imgs.length;
var i = 0;
function slider2() {
    if (i > len - 1) {
        i = 0;
    }
    imgslide.src = imgs[i];
    i++;
    setTimeout('slider2()', 3000);
}

// Tabs
var tab = document.getElementsByClassName("tab")
var cont = document.getElementsByClassName("tab-content")

tab[0].onclick = function () {
    for (i = 0; i < 6; i++) {
        tab[i].classList.remove("active")
        cont[i].classList.remove("active")
        cont[i].classList.remove("show")
    }
    tab[0].classList.add("active")
    cont[0].classList.add("active")
    cont[0].classList.add("show")
}
tab[1].onclick = function () {
    for (i = 0; i < 6; i++) {
        tab[i].classList.remove("active")
        cont[i].classList.remove("active")
        cont[i].classList.remove("show")
    }
    tab[1].classList.add("active")
    cont[1].classList.add("active")
    cont[1].classList.add("show")
}
tab[2].onclick = function () {
    for (i = 0; i < 6; i++) {
        tab[i].classList.remove("active")
        cont[i].classList.remove("active")
        cont[i].classList.remove("show")
    }
    tab[2].classList.add("active")
    cont[2].classList.add("active")
    cont[2].classList.add("show")
}
tab[3].onclick = function () {
    for (i = 0; i < 6; i++) {
        tab[i].classList.remove("active")
        cont[i].classList.remove("active")
        cont[i].classList.remove("show")
    }
    tab[3].classList.add("active")
    cont[3].classList.add("active")
    cont[3].classList.add("show")
}
tab[4].onclick = function () {
    for (i = 0; i < 6; i++) {
        tab[i].classList.remove("active")
        cont[i].classList.remove("active")
        cont[i].classList.remove("show")
    }
    tab[4].classList.add("active")
    cont[4].classList.add("active")
    cont[4].classList.add("show")
}
tab[5].onclick = function () {
    for (i = 0; i < 6; i++) {
        tab[i].classList.remove("active")
        cont[i].classList.remove("active")
        cont[i].classList.remove("show")
    }
    tab[5].classList.add("active")
    cont[5].classList.add("active")
    cont[5].classList.add("show")
}

// <!-- Initialize Swiper -->
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
});

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