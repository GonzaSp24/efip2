bulmaCarousel.attach("#carousel-demo", {
    slidesToScroll: 1,
    slidesToShow: 4,
    pagination: false,
    breakPoints: [
        { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
        { changePoint: 640, slidesToShow: 2, slidesToScroll: 2 },
        { changePoint: 768, slidesToShow: 3, slidesToScroll: 3 }
    ],
});

bulmaCarousel.attach("#carousel-cuerpo", {
    slidesToScroll: 1,
    slidesToShow: 1,
    pagination: false,
    loop: true,
    autoplay: true,
    autoplaySpeed: 1500,
});

// Cargar el contenido del footer
document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById("footer-container");
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
        });
});


document.addEventListener("DOMContentLoaded", function() {
    const carousel1 = document.querySelector("#carousel-demo");
    const infoContainer = document.querySelector("#info-container");
    const infoContent = document.querySelector("#info-content");
  
    carousel1.addEventListener("click", function(event) {
      // Verificar si se hizo clic en una imagen dentro del carousel 1
      if (event.target.tagName === "IMG") {
        // Obtener el atributo data-info de la imagen
        const info = event.target.getAttribute("data-info");
        
        // Mostrar la información en el contenedor de información
        infoContent.textContent = info;
        infoContainer.style.display = "block"; // Mostrar el contenedor de información
      }
    });
  
    // Cerrar el contenedor de información al hacer clic fuera de él
    infoContainer.addEventListener("click", function(event) {
      if (event.target === infoContainer) {
        infoContainer.style.display = "none";
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelectorAll('.carousel-image');
    const contactForm = document.getElementById('contact-form');

    carouselImages.forEach(image => {
        image.addEventListener('click', function () {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const carouselImages = document.querySelectorAll('.carousel-image');

  carouselImages.forEach(image => {
      image.addEventListener('mouseover', function () {
          const infoText = this.getAttribute('data-info');
          const overlayContent = this.nextElementSibling.querySelector('.overlay-content');
          overlayContent.textContent = infoText;
      });

      image.addEventListener('mouseout', function () {
          const overlayContent = this.nextElementSibling.querySelector('.overlay-content');
          overlayContent.textContent = '';
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Obtén todos los elementos de la clase "navbar-burger"
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Verifica si hay elementos "navbar-burger"
  if ($navbarBurgers.length > 0) {

    // Añade un event listener a cada "navbar-burger"
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Obtén el target del "data-target"
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Alterna la clase "is-active" en el "navbar-burger" y el "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var scrollToTopButton = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      scrollToTopButton.classList.add('is-active');
    } else {
      scrollToTopButton.classList.remove('is-active');
    }
  });

  scrollToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
