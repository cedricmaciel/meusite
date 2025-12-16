function moveCarousel(btn, direction) {
    let track = btn.parentElement.querySelector(".carousel-track");
    track.scrollLeft += direction * 100;
}

function moveCarouseltrack(btn, direction){
    let track = btn.parentElement.querySelector(".carousel-tack-asset");
    track.scrollLeft += direction * 80;
}

function openModal(src) {
    document.getElementById("modalImage").src = src;
    document.getElementById("imgModal").style.display = "flex";
}

function closeModal(e) {
    if (e) e.stopPropagation();
    document.getElementById("imgModal").style.display = "none";
}
