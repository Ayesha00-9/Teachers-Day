// Fade in the main card on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('main-card').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('main-card').style.transition = 'opacity 1s ease-in-out';
        document.getElementById('main-card').style.opacity = '1';
    }, 100);

    // Create and append butterfly SVG
    const butterfly = document.getElementById('butterfly');
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.innerHTML = `
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5l-3.5-3.5V7h2v5.5l3 3.5-1.5 1.5z" fill="#A3BFFA"/>
    `;
    butterfly.appendChild(svg);
});

// Function to reveal surprises
function revealSurprises() {
    const container = document.getElementById('surprise-container');
    const btn = document.querySelector('.surprise-btn');
    
    container.style.display = 'flex';
    setTimeout(() => {
        container.classList.add('show');
    }, 10);
    
    btn.innerHTML = 'Surprises Revealed! ✨';
    btn.disabled = true;
    
    setTimeout(() => {
        container.style.display = 'none';
        btn.innerHTML = 'Unlock Surprises! 🔄';
        btn.disabled = false;
    }, 10000);
}

document.getElementById('surprise-container').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
        document.querySelector('.surprise-btn').innerHTML = 'Unlock Surprises Again! 🎁';
        document.querySelector('.surprise-btn').disabled = false;
    }
});