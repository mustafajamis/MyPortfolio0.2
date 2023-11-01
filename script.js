// This function opens the modal by changing its display style to "block"
function openModal() {
    // Get the modal element by its ID
    var modal = document.getElementById("modal");
    
    // Set the display style to "block" to make the modal visible
    modal.style.display = "block";
}

// This function closes the modal by changing its display style to "none"
function closeModal() {
    // Get the modal element by its ID
    var modal = document.getElementById("modal");
    
    // Set the display style to "none" to hide the modal
    modal.style.display = "none";
}

// Add an event listener to close the modal when clicking outside the modal content
document.addEventListener("click", function(event) {
    var modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
