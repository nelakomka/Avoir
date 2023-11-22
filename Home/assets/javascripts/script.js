/* Rutherford Labbe: 11-14-2023 */
/* Update: 11-15-2023 */

// Global variable names
var video = document.getElementById('myVideo');
var video02 = document.getElementById('myVideo02');
var skipButton = document.getElementById("button");
var profileButton = document.getElementById("button02");
var fadeOverlay = document.getElementById('fade_overlay');

// Play the video once the page loads
document.addEventListener('DOMContentLoaded', function() {
    video.play();

    // The button appears after 500 milliseconds or half seconds
    setTimeout(function() {skipButton.style.visibility = 'visible';}, 500);
});

// Once the video finishes - The button and video disappear - The second video starts playing
video.addEventListener('ended', function() {
    video.style.display = "none";
    fadeOverlay.style.opacity = 1;
    skipButton.style.display = "none";
    video02.play();
});

// Clicking the button causes both the button and the video to disappear - The second video starts playing
function skipVideo() {
    video.style.display = "none";
    skipButton.style.display = "none";
    fadeOverlay.style.opacity = 1;
    video02.play();
}

// The button disappear after 14000 milliseconds or 14 seconds
setTimeout(function() {skipButton.style.opacity = '0';}, 14000);