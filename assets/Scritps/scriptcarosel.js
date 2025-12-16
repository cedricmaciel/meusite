function openModal(src) {
    document.getElementById("modalImage").src = src;
    document.getElementById("imgModal").style.display = "flex";
}

function closeModal(e) {
    if (e) e.stopPropagation();
    document.getElementById("imgModal").style.display = "none";
}
