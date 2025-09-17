function revealSurprises() {
    const surpriseContainer = document.getElementById('surprise-container');
    surpriseContainer.style.display = 'block';
    setTimeout(() => surpriseContainer.style.opacity = '1', 10);
}