var i = 0;
var screenWidth = window.innerWidth;
var desktop_images = [
    'img/index/landscape/img_6.png',
    'img/index/landscape/img_7.png',
    'img/index/landscape/img_2.png',
    'img/index/landscape/img_1.png',
    'img/index/landscape/img_2.png',
    'img/index/landscape/img_3.png',
    'img/index/landscape/img_4.png',
    'img/index/landscape/img_2.png',
    'img/index/landscape/img_8.png',
    'img/index/landscape/img_9.png',
];

var portrait_images = [
    'img/index/portrait/img_1.png',
    'img/index/portrait/img_2.png',
    'img/index/portrait/img_3.png',
    'img/index/portrait/img_4.png',
    'img/index/portrait/img_5.png',
    'img/index/portrait/img_6.png',
    'img/index/portrait/img_7.png',
];

var time = 3000;
const slide = document.getElementById("slide");

// Set the image array based on the screen size
var img = desktop_images;

function changeImg() {
    // Add zoom-in class to the image for animation
    slide.classList.add('zoom-in');
    
    // Change the image source
    slide.src = img[i];

    // Reset the zoom effect after a short delay (to allow the zoom to complete)
    setTimeout(() => {
        slide.classList.remove('zoom-in');
    }, 1000);  // Match this delay with the transition time (1 second)

    // Move to the next image
    if (i < img.length - 1) {
        i++;
    } else {
        i = 0;
    }

    // Call the changeImg function again after the specified time
    setTimeout(changeImg, time);
}

// Initialize image change on page load
window.onload = changeImg;