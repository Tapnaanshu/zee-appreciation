let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        // Check aspect ratio and add class if vertical
        let img = new Image();
        img.src = slides[i].src;
        img.onload = function() {
            if (img.height > img.width) {
                slides[i].classList.add("vertical");
            }
        };
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}
