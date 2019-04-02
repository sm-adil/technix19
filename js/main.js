// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

const md_trigger = document.querySelectorAll('.md__trigger');
const md_modal = document.querySelector('.md__modal');
const md_close = document.querySelector('.md__close');

let navLinks = document.querySelectorAll('.nav-link');

let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

const counter = document.querySelector('.counter__container');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

navLinks.forEach(item => item.addEventListener('click', closeMenu));

function closeMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// Counter
let countDownDate = new Date("Apr 22, 2019 00:00:00").getTime();

let countDownFunction = setInterval(function() {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.innerHTML = Math.floor((distance % (1000 * 60)) / (1000));

  if (distance < 0) {
    clearInterval(countDownFunction);
    counter.style.display = "none";
  }
}, 1000)


var html, body;

window.onload = function() {
  //getting all anchor elements
  var links = document.links;

  //getting html
  html = document.documentElement;

  //getting body
  body = document.body;

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      //getting current scroll position
      var scrollTop = Math.round(body.scrollTop || html.scrollTop);
      if (this.hash !== "") {
        //preventing default anchor click behavior
        event.preventDefault();

        //getting element with id found in hash
        var hashElement = document.getElementById(this.hash.substring(1));

        var hashElementTop = 0;
        var obj = hashElement;
        while (obj.offsetParent) {
          hashElementTop += obj.offsetTop;
          obj = obj.offsetParent;
        }
        //getting element's position
        hashElementTop = Math.round(hashElementTop);

        scroll(scrollTop, hashElementTop, this.hash);
      }
    };
  }
};

function scroll(from, to, hash) {
  var timeInterval = 1; //in ms
  var prevScrollTop;
  var increment = to > from ? 10 : -10;

  var scrollByPixel = setInterval(function() {
    //getting current scroll position
    var scrollTop = Math.round(body.scrollTop || html.scrollTop);

    if (
      prevScrollTop == scrollTop ||
      (to > from && scrollTop >= to) ||
      (to < from && scrollTop <= to)
    ) {
      clearInterval(scrollByPixel);
      //Add hash to the url after scrolling
      window.location.hash = hash;
    } else {
      body.scrollTop += increment;
      html.scrollTop += increment;

      prevScrollTop = scrollTop;
    }
  }, timeInterval);
}

md_trigger.forEach(item => item.addEventListener('click', function() {
  md_modal.classList.add('md__show');
}))

md_close.addEventListener('click', function() {
  md_modal.classList.remove('md__show');
})