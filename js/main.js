var modal = document.getElementById('juliannaModal');
console.log("modal: " + modal);
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
