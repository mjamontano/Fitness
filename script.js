// Get the button
const scrollUpBtn = document.getElementById('scrollUpBtn');

// Show the button when the user scrolls down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = 'block';  // Show the button
    } else {
        scrollUpBtn.style.display = 'none';  // Hide the button
    }
};

// Scroll to the top of the page when the button is clicked
scrollUpBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Function to open modal
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Close the modal when clicking on close button or outside the modal
var modals = document.querySelectorAll('.modal');
modals.forEach(function(modal) {
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Close the modal when clicking on close button
var closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
    var modal = closeButton.closest('.modal');
    modal.style.display = "none";
  });
});


