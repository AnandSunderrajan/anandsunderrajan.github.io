

/*===== Function to show the menu on navigation bar for smaller screen =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==== DARK MODE ====*/

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('data-theme') || 'dark';
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);


/*===== EXPERIENCE TIMELINE CAROUSEL ===== */
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
    SlideShow(slidePosition += n);
}
//  images controls
function currentSlide(n) {
    SlideShow(slidePosition = n);
}
function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("exp_base_container");
    var circles = document.getElementsByClassName("experience__tab");
    if (n > slides.length) {slidePosition = 1}
    if (n < 1) {slidePosition = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    slides[slidePosition-1].style.display = "block";
    circles[slidePosition-1].className += " enable";
}

/* skills function */
var skills_slidePosition = 1;
skills_SlideShow(skills_slidePosition);

// forward/Back controls
function skills_plusSlides(n) {
    skills_SlideShow(skills_slidePosition += n);
}
//  images controls
function skills_currentSlide(n) {
    skills_SlideShow(skills_slidePosition = n);
}
function skills_SlideShow(n) {
    var i;
    var skills_slides = document.getElementsByClassName("skill_base_container");
    var skills_circles = document.getElementsByClassName("skills__tab");
    if (n > skills_slides.length) {skills_slidePosition = 1}
    if (n < 1) {skills_slidePosition = skills_slides.length}
    for (i = 0; i < skills_slides.length; i++) {
        skills_slides[i].style.display = "none";
    }
    for (i = 0; i < skills_circles.length; i++) {
        skills_circles[i].className = skills_circles[i].className.replace(" enable", "");
    }
    skills_slides[skills_slidePosition-1].style.display = "block";
    skills_circles[skills_slidePosition-1].className += " enable";
}

document.getElementsByTagName("video")[0].playbackRate = 0.8

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1500,
    reset: true
});

/*========= SCROLL REVEAL HOME ===========*/
sr.reveal('.home__title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home__img',{delay: 400});
sr.reveal('.home__social-icon',{ interval: 200});

/*========== SCROLL REVEAL ABOUT ME ===============*/
sr.reveal('.about__img',{});
sr.reveal('.about__subtitle',{delay: 400});
sr.reveal('.about__text',{delay: 400});


/*=============SCROLL REVEAL EXPERIENCE ===================*/
sr.reveal('.experience__subtitle', {});
sr.reveal('.experience__carousel', {});
// sr.reveal('.timeline__component', {});

/*=============SR PROJECTS ===================*/
// sr.reveal('.work__item', {});

/*==================SKILLS=========================*/
// sr.reveal('.skills__tab', {})

/*================SCROLL REVEAL CONTACT FORM=========================*/
sr.reveal('.contact__input',{interval: 200});

