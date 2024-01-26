document.addEventListener("DOMContentLoaded", function() {
    const twitterCountElement = document.getElementById('twitterCount');
    const youtubeCountElement = document.getElementById('youtubeCount');
    const facebookCountElement = document.getElementById('facebookCount');

    const twitterFollowers = 12000;
    const youtubeSubscribers = 5000;
    const facebookFans = 7500

    const animationDurationMin = 1000;
    const animationDurationMax = 2000;

    animateNumberCount(twitterCountElement, twitterFollowers, animationDurationMin, animationDurationMax);
    animateNumberCount(youtubeCountElement, youtubeSubscribers, animationDurationMin, animationDurationMax);
    animateNumberCount(facebookCountElement, facebookFans, animationDurationMin, animationDurationMax);
});

function animateNumberCount(element, targetCount, durationMin, durationMax) {
    let currentCount = 0;
    const step = 50;

    const duration = Math.floor(Math.random() * (durationMax - durationMin + 1) + durationMin);

    const interval = setInterval(function() {
        currentCount += step;

        if (currentCount >= targetCount) {
            currentCount = targetCount;
            clearInterval(interval);
        }

        element.textContent = currentCount;
    }, duration / (targetCount / step));
}
