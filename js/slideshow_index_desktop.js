var i = 0;
var screenWidth = window.innerWidth;
var desktop_images = [
    'img/index/landscape/img_1.png',
    'img/index/landscape/img_2.png',
    'img/index/landscape/img_3.png',
    'img/index/landscape/img_4.png',
    'img/index/landscape/img_5.png',
    'img/index/landscape/img_6.png',
    'img/index/landscape/img_7.png',
    'img/index/landscape/img_8.png',
    'img/index/landscape/img_9.png',
    'img/index/landscape/img_10.png',
    'img/index/landscape/img_11.png',
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



var time = 4000;
const slide=document.getElementById("slide")

var img = desktop_images



function changeImg(){

    //
    //if(screenWidth > 600){var img = desktop_images}
    //else{var img = portrait_images}
    

    
    
    slide.src = img[i];

    if(i < img.length-1){
        i++
    } 
    else {
        i = 0
    }
    setTimeout(changeImg,time)

}




window.onload = changeImg;
