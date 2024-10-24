document.addEventListener("DOMContentLoaded", function() {
    const footerContainer = document.getElementById("footer-container");

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching footer:', error);
        });

    bulmaCarousel.attach('#carousel-demo', {
        slidesToScroll: 1,
        slidesToShow: 4,
        pagination: false,
        breakpoints: [
            {
                changePoint: 480,
                slidesToShow: 1,
                slidesToScroll: 1
            },
            {
                changePoint: 640,
                slidesToShow: 2,
                slidesToScroll: 2
            },
            {
                changePoint: 768,
                slidesToShow: 3,
                slidesToScroll: 3
            }
        ]
    });
});
