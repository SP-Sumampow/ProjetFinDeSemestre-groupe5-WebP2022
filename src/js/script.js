/************ BURGER MENU ************/

var burger = document.querySelector(".container");
var menu = document.querySelector(".menu");
var header = document.querySelector(".header");

burger.addEventListener("click", function() {
  burger.classList.toggle("is-click");
  menu.classList.toggle("is-open-menu");
  header.classList.toggle("header-is-open");
});

/************ HEADER ON SCROLL ************/

var header = document.querySelector(".header");

window.addEventListener("scroll", e => {
  var offsetWindow = window.pageYOffset;
  var scrolled = document.body.scrollTop;
  var position = header.offsetTop;
  const dumbPosition = 500;
  console.log(offsetWindow);
  if (offsetWindow > dumbPosition) {
    console.log("add class");
    header.classList.add("header-on-scroll");
  } else {
    console.log("remove class");
    header.classList.remove("header-on-scroll");
  }
});

/************ FOOTER ON TABLET & DESKTOP VERSION ************/

var buttonPlus = document.querySelector(".footer--thirdPart__button__plus");
var hidenInformation = document.querySelector(".footer__thirdPart--menuHide");

/************ WAYPOINTS ************/

var ids = ["collection", "selection"];

ids.forEach(function(id) {
  var element = document.getElementById(id);
  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      element.classList.add("is-reached");
    },
    offset: "75%"
  });
});

/*let cross = document.getElementById("cross");
cross.addEventListener("click", function() {
  menu.classList.remove("is-open-menu");
  header.classList.remove("header-is-open");
});*/
