// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () =>{
//     section.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop-150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top > offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelectorAll('header nav a [href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };



let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to update active link based on scroll position
window.onscroll = () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    section.forEach(sec => {
        let secTop = sec.offsetTop - 150;
        let secHeight = sec.offsetHeight;
        let secId = sec.getAttribute('id');

        if (scrollPosition >= secTop && scrollPosition < secTop + secHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${secId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// Function to scroll smoothly to the section when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let targetId = this.getAttribute('href');
        let targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});