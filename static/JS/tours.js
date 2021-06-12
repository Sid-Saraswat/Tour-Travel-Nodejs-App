
swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});

function countries() {
  const featuredToures = document.querySelector(".featuredToures");
  fetch("/countries.json").then(response => response.json()).then(data => {
    // console.log(data);
    data.countries.forEach(element => {
      name = element.name;
      // console.log(name);
      const featuredTouresDiv = document.createElement("div");
      featuredTouresDiv.classList.add("swiper-slide");
      featuredTouresDiv.insertAdjacentHTML("afterbegin", `<img src="https://source.unsplash.com/1600x900/?${name}" alt="Image"> <h4><a href = "/PlaceDetail/${name}" onclick="CountryName(this)">${name}</a></h4>`);
      featuredToures.append(featuredTouresDiv);
    })
  })
}


// family tours
function family() {
  const familyTour = document.querySelector(".familyTour");
  fetch("/countries.json").then(response => response.json()).then(data => {
    // console.log(data);
    data.FamilyPlaces.forEach(element => {
      name = element.name;
      // console.log(name);
      const familyTourDiv = document.createElement("div");
      familyTourDiv.classList.add("swiper-slide");
      familyTourDiv.insertAdjacentHTML("afterbegin", `<img src="https://source.unsplash.com/1600x900/?${name}" alt="Image"> <h4><a href = "/PlaceDetail/${name}" >${name}</a></h4>`);
      familyTour.append(familyTourDiv);
    })
  })
}


// cheap tours
function cheap() {
  const cheapTour = document.querySelector(".cheapTour")
  fetch("/countries.json").then(response => response.json()).then(data => {
    // console.log(data);
    data.BeachPlaces.forEach(element => {
      name = element.name;
      // console.log(name);
      const cheapTourDiv = document.createElement("div");
      cheapTourDiv.classList.add("swiper-slide");
      cheapTourDiv.insertAdjacentHTML("afterbegin", `<img src="https://source.unsplash.com/1600x900/?${name}" alt="Image"> <h4><a href = "/PlaceDetail/${name}" onclick="CountryName(this)">${name}</a></h4>`);
      cheapTour.append(cheapTourDiv);
    })
  })
}


// beach tours
function beach() {
  const beachTour = document.querySelector(".beachTour")
  fetch("/countries.json").then(response => response.json()).then(data => {
    // console.log(data);
    data.BeachPlaces.forEach(element => {
      name = element.name;
      // console.log(name);
      const beachTourDiv = document.createElement("div")
      beachTourDiv.classList.add("swiper-slide")
      beachTourDiv.insertAdjacentHTML("afterbegin", `<img src="https://source.unsplash.com/1600x900/?${name}" alt="Image"> <h4><a href = "/PlaceDetail/${name}" onclick="CountryName(this)">${name}</a></h4>`);
      beachTour.append(beachTourDiv)
    })
  })
}


// honeymoon tours
function honeymoon() {
  const honeymoonTour = document.querySelector(".honeymoonTour")
  fetch("/countries.json").then(response => response.json()).then(data => {
    // console.log(data);
    data.HoneymoonTours.forEach(element => {
      name = element.name;
      // console.log(name);
      const honeymoonTourDiv = document.createElement("div")
      honeymoonTourDiv.classList.add("swiper-slide")
      honeymoonTourDiv.insertAdjacentHTML("afterbegin", `<img src="https://source.unsplash.com/1600x900/?${name}" alt="Image"> <h4><a href = "/PlaceDetail/${name}" onclick="CountryName(this)">${name}</a></h4>`);
      honeymoonTour.append(honeymoonTourDiv)
    })
  })
}


// more tours
function more() {
  const moreTour = document.querySelector(".moreTour")
  fetch("/countries.json").then(response => response.json()).then(data => {
    // console.log(data);
    data.MoreToures.forEach(element => {
      name = element.name;
      // console.log(name);
      const moreTourDiv = document.createElement("div")
      moreTourDiv.classList.add("swiper-slide")
      moreTourDiv.insertAdjacentHTML("afterbegin", `<img src="https://source.unsplash.com/1600x900/?${name}" alt="Image"> <h4><a href = "/PlaceDetail/${name}" onclick="CountryName(this)">${name}</a></h4>`);
      moreTour.append(moreTourDiv)
    })
  })
}


// season tours
function seasons() {
  const seasonTour1 = document.querySelector(".seasonTour1")
  fetch("/seasons.json").then(response => response.json()).then(data => {
    // console.log(data);
    data.SpringPlaces.forEach(element => {
      name = element.name;
      // console.log(name);
      const seasonTourDiv1 = document.createElement("div")
      seasonTourDiv1.classList.add("swiper-slide")
      seasonTourDiv1.insertAdjacentHTML("afterbegin", `<img src="https://source.unsplash.com/1600x900/?${name}" alt="Image"> <h4><a href = "/PlaceDetail/${name}" onclick="CountryName(this)">${name}</a></h4>`);
      seasonTour1.append(seasonTourDiv1)
    })
  })

  const seasonTour2 = document.querySelector(".seasonTour2")
  fetch("/seasons.json").then(response => response.json()).then(data => {
    // console.log(data);
    data.SummerPlaces.forEach(element => {
      name = element.name;
      // console.log(name);
      const seasonTourDiv2 = document.createElement("div")
      seasonTourDiv2.classList.add("swiper-slide")
      seasonTourDiv2.insertAdjacentHTML("afterbegin", `<img src="https://source.unsplash.com/1600x900/?${name}" alt="Image"> <h4><a href = "/PlaceDetail/${name}" onclick="CountryName(this)">${name}</a></h4>`);
      seasonTour2.append(seasonTourDiv2)
    })
  })

  const seasonTour3 = document.querySelector(".seasonTour3")
  fetch("/seasons.json").then(response => response.json()).then(data => {
    // console.log(data);
    data.FallPlaces.forEach(element => {
      name = element.name;
      // console.log(name);
      const seasonTourDiv3 = document.createElement("div")
      seasonTourDiv3.classList.add("swiper-slide")
      seasonTourDiv3.insertAdjacentHTML("afterbegin", `<img src="https://source.unsplash.com/1600x900/?${name}" alt="Image"> <h4><a href = "/PlaceDetail/${name}" onclick="CountryName(this)">${name}</a></h4>`);
      seasonTour3.append(seasonTourDiv3)
    })
  })

  const seasonTour4 = document.querySelector(".seasonTour4")
  fetch("/seasons.json").then(response => response.json()).then(data => {
    // console.log(data);
    data.WinterPlaces.forEach(element => {
      name = element.name;
      // console.log(name);
      const seasonTourDiv4 = document.createElement("div")
      seasonTourDiv4.classList.add("swiper-slide")
      seasonTourDiv4.insertAdjacentHTML("afterbegin", `<img src="https://source.unsplash.com/1600x900/?${name}" alt="Image"> <h4><a href = "/PlaceDetail/${name}" onclick="CountryName(this)">${name}</a></h4>`);
      seasonTour4.append(seasonTourDiv4)
    })
  })
}

countries();
family();
cheap();
beach();
seasons();
honeymoon();
more();

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

function targetSet() {
  let t = document.getElementById('target');
  let s = document.getElementById('source');
  let content = s.textContent;
  s.style.display = "none";
  t.href = `/Placebook/${content}`;
}
targetSet();