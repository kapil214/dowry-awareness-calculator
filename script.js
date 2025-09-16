// Wait for the HTML document to be fully loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the necessary elements from the HTML
    const dowryForm = document.getElementById('dowry-form');
    const messageOverlay = document.getElementById('message-overlay');
    const closeButton = document.querySelector('.close-btn');

    // Function to show the message modal
    const showModal = () => {
        messageOverlay.classList.add('show');
    };

    // Function to hide the message modal
    const hideModal = () => {
        messageOverlay.classList.remove('show');
    };

    // Add an event listener for the form submission
    dowryForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior (which would reload the page)
        event.preventDefault();
        
        // Show the modal with the social message
        showModal();
    });

    // Add an event listener to the close button
    closeButton.addEventListener('click', () => {
        hideModal();
    });

    // Add an event listener to the overlay background
    // This allows the user to close the modal by clicking outside of it
    messageOverlay.addEventListener('click', (event) => {
        // If the clicked element is the overlay itself (and not the modal content)
        if (event.target === messageOverlay) {
            hideModal();
        }
    });

});