var i = 0;

var images = [
    'img/game_7/slide_1/img_1.jpg',
    'img/game_7/slide_1/img_2.jpg',
    'img/game_7/slide_1/img_3.jpg',
    'img/game_7/slide_1/img_4.jpg',
    'img/game_7/slide_1/img_5.jpg',
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
