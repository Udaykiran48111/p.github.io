// Hide the envelope initially
document.querySelector('.envelope-wrapper').style.display = 'none';

// Add event listener to the "Click Me" button
document.getElementById('openEnvelope').addEventListener('click', function() {
    // Hide the card
    document.querySelector('.card').style.display = 'none';
    // Show the envelope
    document.querySelector('.envelope-wrapper').style.display = 'block';
});

// Add event listener to the heart to open the letter
document.querySelector('.heart').addEventListener('click', function() {
    // If the envelope is already shown
    if (document.querySelector('.container').classList.contains('show-envelope')) {
        // Open the letter
        document.querySelector('.envelope > .letter').classList.add('open');
    }
});

// Toggle flap animation when clicking on the envelope
const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});
