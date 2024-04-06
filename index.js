const names = ["Collin", "Co11in", "Crabby", "MindfulMeaning"];
const images = [
  "collin.png",
  "Ai Collin.jpg",
  "crabbybackground.png",
  "MindfulMeaning.png"
];

let currentIndex = 0;

function cycleNamesAndImages() {
  const animatedText = document.getElementById('animated-text');
  const profilePicture = document.getElementById('profile-picture');

  // Update the text and image
  animatedText.textContent = names[currentIndex];
  profilePicture.src = images[currentIndex];

  // Move to the next name or loop back to the start
  currentIndex = (currentIndex + 1) % names.length;

  // Repeat this function every 4 seconds
  setTimeout(cycleNamesAndImages, 4000); // 4000 milliseconds = 4 seconds
}

// Start the cycle
cycleNamesAndImages();

