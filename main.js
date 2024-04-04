/*=========== toggle icon navbar ==========*/

let newIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

MenuIcon.onClick = () => {
    MenuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


/*=========== Scroll Section Active link ==========*/

let Section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*=========== sticky navbar ==========*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

/*=========== remove toggle icon and nav bar ==========*/
    MenuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*=========== Scroll reveals ==========*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,   
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin:'button'});
ScrollReveal().reveal('.contact p, .about-contact', { origin: 'right' });


/*=========== TYPE JS==========*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer', 'Java Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop: true,
});