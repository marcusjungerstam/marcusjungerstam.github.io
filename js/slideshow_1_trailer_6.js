var i = 0;

var images = [
    '/img/project_6/slide/img_1.png',
    '/img/project_6/slide/img_2.png',
    '/img/project_6/slide/img_3.png',
    '/img/project_6/slide/img_4.png',
    '/img/project_6/slide/img_5.png',
    '/img/project_6/slide/img_6.png',
    '/img/project_6/slide/img_7.png',
 
];


var time = 3000;



const slide=document.getElementById("slide")

function changeImg(){
    slide.src = images[i];

    if(i < images.length-1){
        i++
    } 
    
    else {
        i = 0
    }

    setTimeout(changeImg,time)
}




window.onload = changeImg;
