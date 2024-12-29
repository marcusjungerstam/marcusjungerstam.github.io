var i = 0;
let w = window.outerWidth;
var portrait_images = [
    'img/index/portrait/img_1.png',
    
];







var time = 3000;
const slide=document.getElementById("slide")


function changeImg(){

    var img = portrait_images; 
    
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
