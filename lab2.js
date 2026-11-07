const message = document.getElementById("message");
const messageButton = document.getElementById("messageButton");
const backgroundButton = document.getElementById("backgroundButton");

// Original and New Messages
const originalMessage = "Our names are John Marco Antonio, Elyzah Kim Diaz, Craig Michael Esleta.";

const newMessage = "Hello! Welcome to our webpage.";

let isChanged = false;

// Change Message Button
messageButton.addEventListener("click", function() {

    if (isChanged) {
        message.textContent = originalMessage;
    } else {
        message.textContent = newMessage;
    }

    isChanged = !isChanged;

});


const backgroundColors = [
    "#5959aa", 
    "#eff155", 
    "#71db71", 
    "#62a8a8", 
    "#8d2222", 
    "#eb6885", 
    "#cb7beb", 
    "#fc6eb0",  
];

let colorIndex = 0;


backgroundButton.addEventListener("click", function() {

    document.body.style.backgroundColor = backgroundColors[colorIndex];

    colorIndex++;

    if (colorIndex >= backgroundColors.length) {
        colorIndex = 0;
    }

});
