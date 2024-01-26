document.addEventListener("DOMContentLoaded", function() {
    const jokes = [
        {"joke": "All vampires keep their money in a special place—the blood bank."},
        {"joke": "What do you call someone who can’t stick to a diet? A desserter."},
        {"joke": "I only seem to get sick on weekdays. I must have a weekend immune system."},
        {"joke": "You can tell it's a dogwood tree from its bark."},
        {"joke": "What do you call a sheep that knows karate? A lamb chop."},
        {"joke": "What does a dad get in their stocking if they’ve been naughty? Char-coal."},
        {"joke": "Why did the scarecrow win an award? Because he was outstanding in his field"},
        {"joke": "What do you call a cow with no legs? Ground beef."},
        {"joke": "What has ears but cannot hear? A cornfield!"},
        {"joke": "I don’t get why Marvel doesn’t use the Hulk to advertise more. He’s basically one big Banner."}
    ];

    const getJokeBtn = document.getElementById('getJokeBtn');
    const jokeDisplay = document.getElementById('jokeDisplay');

    getJokeBtn.addEventListener('click', function() {
        // Get a random joke from the array
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const randomJoke = jokes[randomIndex].joke;

        // Display the joke
        jokeDisplay.textContent = randomJoke;

        // Change the background color
        changeBackgroundColor();
    });

    function changeBackgroundColor() {
        // Generate a random hex color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        // Set the background color of the body
        document.body.style.backgroundColor = randomColor;
    }
});
