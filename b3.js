document.addEventListener("DOMContentLoaded", function() {
    const backgroundImage = document.querySelector('.background-image');
    const overlay = document.querySelector('.overlay');
    const overlayText = document.querySelector('.overlay-text');
    backgroundImage.onload = function() {
        backgroundImage.style.filter = 'blur(0)';
        overlay.style.opacity = '1';
        overlayText.style.opacity = '1';
        setTimeout(function() {
            backgroundImage.style.filter = 'blur(0)';
            overlay.style.opacity = '0';
            overlayText.style.opacity = '0';
        }, 2000);
    };
});
