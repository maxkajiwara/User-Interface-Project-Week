// Menu animation
const toggleNav = () => {
  !open ? (
    hamburgers.forEach(element => element.classList.toggle('flex')),
    navContainer.classList.toggle('flex'),
    nightMode.classList.toggle('flex'),
    TweenMax.fromTo( navContainer, .3, {height: '0vh'}, {height: '100vh'} ),
    TweenMax.fromTo( nav, .4, {y: -100, opacity: 0}, {y: 0, opacity: 1, delay: .2} ),
    TweenMax.fromTo( nightMode, .4, {opacity: 0}, {opacity: 1, delay: .2} ),
    open = true
  ) : (
    hamburgers.forEach(element => element.classList.toggle('flex')),
    TweenMax.fromTo( navContainer, .2, {height: '100vh'}, {height: '0vh', delay: .2} ),
    TweenMax.fromTo( nav, .2, {y: 0, opacity: 1}, {y: -33, opacity: 0} ),
    TweenMax.fromTo( nightMode, .2, {opacity: 1}, {opacity: 0} ),
    open = false,
    setTimeout( () => {navContainer.classList.toggle('flex'); nightMode.classList.toggle('flex')}, 400 )
  );
};

const navContainer = document.querySelector('.nav-container');
const nav = document.querySelector('nav');
const hamburgers = Array.from(document.querySelectorAll('.hamburger'));
let open = false;

hamburgers.forEach(element => element.addEventListener('click', toggleNav));

// Night mode
const toggleNightMode = () => {
  document.querySelector('body').classList.toggle('dark');
  (document.querySelector('header').classList.toggle('header-dark'));
  (document.querySelector('footer').classList.toggle('footer-dark'));
  Array.from(document.querySelectorAll('p, h2:not(.project-square), h3, .button, label')).forEach(element => element.classList.toggle('light'));
};

const nightMode = document.querySelector('.night-mode');

nightMode.addEventListener('click', () => {toggleNightMode(); toggleNav()});