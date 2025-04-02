// menu icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// navbar active scroll links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    //sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    
    //remove menu when click on link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

//scroll reveal 
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});


function flipCard(cardId) {
    document.getElementById(cardId).classList.toggle("flipped");
  }

  function flipBack(cardId) {
    let card = document.getElementById(cardId);
    card.classList.toggle("flipped");

    // Muta pagina la cardul respectiv
    card.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function flipCard(button) {
    let card = button.closest(".services-box");
    card.classList.toggle("flipped");
}


ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portofoliu-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img ', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content ', {origin: 'right'});