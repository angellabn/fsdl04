// Function to show a personalized message
function showMessage() {
    const nameInput = document.getElementById('name-input').value;
    const messageDiv = document.getElementById('message');
    
    // If name input is empty, ask for input
    if (nameInput.trim() === "") {
        messageDiv.textContent = "Please enter your name!";
    } else {
        messageDiv.textContent = `Hello, ${nameInput}! You are awesome! 💖`;
    }

    // Create hearts that float around the page
    createHearts();
}

// Function to create hearts that will float around the page
function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    
    // Randomly create hearts
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';

        // Randomize position and animation timing
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`; // 2 to 4 seconds animation duration

        heartsContainer.appendChild(heart);

        // Remove heart after animation finishes
        setTimeout(() => {
            heart.remove();
        }, 4000); // Hearts are removed after 4 seconds
    }
}
