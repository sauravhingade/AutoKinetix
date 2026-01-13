const glow = document.getElementById('cursor-glow');
const interactables = document.querySelectorAll('a, button, .service-card');

let mouseX = 0;
let mouseY = 0;
let glowX = 0;
let glowY = 0;
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    // Optional: animate hamburger into X
    hamburger.classList.toggle('active');
});


// Track Mouse Movement
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth Animation Loop (Lerp)
function animate() {
    // This formula creates the smooth "lagging" follow effect
    // 0.08 is the speed. Lower = smoother/slower.
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;

    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;

    requestAnimationFrame(animate);
}

animate();

// Interaction Effects: Glow grows when hovering over items
interactables.forEach(item => {
    item.addEventListener('mouseenter', () => {
        glow.style.width = '600px';
        glow.style.height = '600px';
        glow.style.background = 'radial-gradient(circle, rgba(82, 232, 255, 0.25) 0%, rgba(82, 232, 255, 0) 70%)';
    });

    item.addEventListener('mouseleave', () => {
        glow.style.width = '400px';
        glow.style.height = '400px';
        glow.style.background = 'radial-gradient(circle, rgba(82, 232, 255, 0.15) 0%, rgba(82, 232, 255, 0) 70%)';
    });
});