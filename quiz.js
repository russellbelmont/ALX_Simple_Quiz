// Function to check the answer when the user submits
function checkAnswer() {
    // Step 1: Declare the correct answer
    const correctAnswer = "4";

    // Step 2: Get the selected answer from the radio buttons
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Check if the user has selected an answer
    if (userAnswer) {
        // Step 4: Compare the user's selected answer (userAnswer.value) with the correct answer
        if (userAnswer.value === correctAnswer) {
            // Step 5: Provide feedback if the answer is correct
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // Step 6: Provide feedback if the answer is incorrect
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // Step 7: Handle case where no option is selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Step 8: Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

