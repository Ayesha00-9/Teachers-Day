function revealSurprises() {
    const surpriseContainer = document.getElementById('surprise-container');
    surpriseContainer.style.display = 'block';
    surpriseContainer.style.opacity = '0'; // Start with opacity 0
    setTimeout(() => {
        surpriseContainer.style.opacity = '1'; // Fade in
    }, 100); // Increased delay for smoother transition
    const farhanCard = document.getElementById('farhan-card');
    const asjadCard = document.getElementById('asjad-card');
    farhanCard.style.animation = 'fadeIn 1s ease-out';
    asjadCard.style.animation = 'fadeIn 1s ease-out 0.5s'; // Staggered animation
}