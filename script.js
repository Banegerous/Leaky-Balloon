const inflateButton = document.getElementById('inflateButton');
const balloon = document.getElementById('balloon');
const message = document.getElementById('message');
const hidden = document.getElementsByClassName('hidden');
let sizeW = 120; // Initial size in pixels
let sizeH = 145; // Initial size in pixels
let score = 0; // Score to keep track of attempts
inflateButton.classList.add('hidden'); // Hide inflate button initially
balloon.classList.add('hidden'); // Hide balloon initially

inflateButton.addEventListener('click', () => {
    
    sizeW += 10; // Increase size by 10 pixels
    sizeH += 10; // Increase size by 10 pixels
    score++; // Increment score

    balloon.style.width = `${sizeW}px`;
    balloon.style.height = `${sizeH}px`;

    const timer = setInterval(() => {
        sizeW -= 0.005; // Gradually decrease width
        sizeH -= 0.005; // Gradually decrease height

        balloon.style.width = `${sizeW}px`;
        balloon.style.height = `${sizeH}px`;

        if (sizeW < 0) {
        
        balloon.classList.add('hidden');
        inflateButton.classList.add('hidden'); 
        startButton.classList.remove('hidden');   
        
        message.innerText = `Balloon has died! You managed to keep it inflated for ${score} attempts.`;

        clearInterval(timer); // Stop the shrinking timer
    };
    })
}, 100000); // Start shrinking after 3 second

startButton.addEventListener('click', () => {
    clearInterval(); // Stop shrinking when size is less than 0

    balloon.classList.remove('hidden'); // Show balloon
    inflateButton.classList.remove('hidden'); // Show inflate button
    startButton.classList.add('hidden'); // Hide start button

    score = 0; // Reset score
    sizeW = 120; // Reset width
    sizeH = 145; // Reset height
    balloon.style.width = `${sizeW}px`; // Reset
    balloon.style.height = `${sizeH}px`; // Reset
    message.innerText = `How long can you keep the balloon afloat?`; // Reset message    
});
