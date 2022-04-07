let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
    
<<<<<<< HEAD
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });








=======
}
>>>>>>> 17a5b0e55a3205f5181b075a58fa7e62bd0ebd2d
