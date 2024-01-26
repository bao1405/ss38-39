document.addEventListener("DOMContentLoaded", function() {
    updateRemainingWater(2);
});

function fillMainCup(cups) {
    const mainCupLevel = document.getElementById('mainCupLevel');
    const remainingWaterElement = document.getElementById('remainingWater');

    const currentRemainingWater = parseFloat(remainingWaterElement.textContent);
    const waterToAdd = cups * 0.25; // Each small cup is 250ml

    if (currentRemainingWater >= waterToAdd) {
        remainingWaterElement.textContent = (currentRemainingWater - waterToAdd).toFixed(2) + 'L';

        const filledPercentage = (1 - (currentRemainingWater - waterToAdd) / 2) * 100;
        mainCupLevel.style.height = filledPercentage + '%';
    }
}

function updateRemainingWater(value) {
    const remainingWaterElement = document.getElementById('remainingWater');
    remainingWaterElement.textContent = value + 'L';
}
