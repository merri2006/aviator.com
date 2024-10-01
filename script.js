alert("Your session is ready, the predictions are 75% accurate so it's important to minimize your stakes, aslo keep in mind that after clicking the predict button, you need to wait for the round to get finished first in order to avoid misreadings and predictions")
document.getElementById('generateBtn').addEventListener('click', function() {
    // Generate a random number between 0 and 200 with up to 2 decimal places
    const nextRound = (Math.random() * 40).toFixed(2);
    // Display the random number in the paragraph
    document.getElementById('nextRound').innerText = `Next round: X${nextRound}`;
});
