var i = 0;

var images = [
    '/img/project_1/slide/CT-introstoryboard-rr-01.jpg',
    '/img/project_1/slide/CT-introstoryboard-rr-02.jpg',
    '/img/project_1/slide/CT-introstoryboard-rr-03.jpg',
    '/img/project_1/slide/CT-introstoryboard-rr-04.jpg',
    '/img/project_1/slide/CT-introstoryboard-rr-05.jpg',
    '/img/project_1/slide/CT-introstoryboard-rr-06.jpg',
    '/img/project_1/slide/CT-introstoryboard-rr-07.jpg',
    '/img/project_1/slide/CT-introstoryboard-rr-08.jpg',
    '/img/project_1/slide/CT-introstoryboard-rr-09.jpg',
    '/img/project_1/slide/CT-introstoryboard-rr-10.jpg',
    '/img/project_1/slide/CT-introstoryboard-rr-11.jpg',
    '/img/project_1/slide/CT-introstoryboard-rr-12.jpg',
 
];


var time = 1000;



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
