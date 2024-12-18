var i = 0;

var images = [
    'img/game_6/slide_1/m_0.png',
    'img/game_6/slide_1/m_1.png',
    'img/game_6/slide_1/m_2.png',
    'img/game_6/slide_1/m_3.png',
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
