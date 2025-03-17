// Function to calculate similarity percentage
function calculateSimilarity(correctAnswer, userAnswer) {
    const correctWords = correctAnswer.toLowerCase().split(" ");
    const userWords = userAnswer.toLowerCase().split(" ");
    let matchCount = 0;

    // Count matching keywords
    correctWords.forEach(word => {
        if (userWords.includes(word)) {
            matchCount++;
        }
    });

    // Calculate percentage
    const similarity = (matchCount / correctWords.length) * 100;
    return similarity.toFixed(2); // Return percentage with 2 decimals
}

// Function to evaluate the answer
function evaluateAnswer() {
    const correctAnswer = document.getElementById("correctAnswer").value;
    const userAnswer = document.getElementById("userAnswer").value;
    const resultDiv = document.getElementById("result");

    if (correctAnswer.trim() === "" || userAnswer.trim() === "") {
        resultDiv.textContent = "Please enter both the correct answer and the user's answer.";
        return;
    }

    // Calculate similarity percentage
    const similarity = calculateSimilarity(correctAnswer, userAnswer);

    // Display result
    resultDiv.textContent = `Score Percentage: ${similarity}%`;
}
