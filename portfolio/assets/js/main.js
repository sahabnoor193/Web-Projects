/*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById("nav-menu");
     navToggle = document.getElementById("nav-toggle");
     navClose = document.getElementById("nav-close");
    /*=============== MENU SHOW ===============*/
    // Validate if constant exists
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }
    /*=============== MENU HIDDEN ===============*/
    // Validate if constant exists
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }
  
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on the nav__link we remove the show-menu
    navMenu.classList.remove('show-menu')
} 
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper( ".projects__container", {
  
  loop:true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el:".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,

  breakpoints:{
    1200: {
      slidePreview: 2,
      spaceBetween: -56,
    }
  }
});

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
  e.preventDefault()

  //check if the field has a value
  if(contactName.value === "" || contactEmail.value === '' || contactProject.value === '' ){
    
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.remove('color-red')

    //show message
    contactMessage.textContent = 'write all the input fields ✒'
  }
  else{
    emailjs.sendForm('service_w788qja', 'template_my4z45c', '#contact-form' , 'gt4J6h4Wm0h9KG-G-')
    .then(() =>{
      //show message and add color
      contactMessage.classList.add('color-blue')
      contactMessage.textContent = 'Message sent ✔'

      setTimeout(() =>{
        contactMessage.textContent = ''
      }, 5000)
    }, (error) => {
      alert('OOPs! Something have failed', error)
    })
    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''
  }
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up');
  // when scroll up button offset top < this value scroll up button will be visible
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
  : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
// Retrieve the previously selected theme and icon from local storage
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
// Function to get the current theme
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
// Function to get the current icon
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'ri-contrast-2-line' : 'ri-sun-line');
// Apply the previously selected theme and icon if they exist
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-contrast-2-line' ? 'add' : 'remove'](iconTheme);
}
// Add an event listener for the theme button activate\deactivate theme
themeButton.addEventListener('click', () => {
  // Toggle the dark theme and icon
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Save the current theme and icon to local storage
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add scroll-header class to the header
  this.scrollY >= 50 ? header.classList.add('bg-header')
  : header.classList.remove('bd-header');
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const  sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('home__data, .projects__container, .footer__container')
sr.reveal('home__info div', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('.skills__content:nth-child(1), .contact__content:nth-child(1) ', {origin: 'left'})
sr.reveal('.skills__content:nth-child(2), .contact__content:nth-child(2)', {origin: 'right'})
sr.reveal('.qualification__content, .services__card' , {interval:100})