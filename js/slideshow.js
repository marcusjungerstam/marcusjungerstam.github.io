var i = 0;
var images = [];
var time = 3000;

images[0] = 'img/project_6/img_6.png';
images[1] = 'img/project_6/img_2.png';
images[2] = 'img/project_6/img_5.png';

images[3] = 'img/project_2/img_1.png';
images[4] = 'img/project_2/img_4.png';
images[5] = 'img/project_2/img_8.png';


images[6] = 'img/project_4/img_2.png';
images[7] = 'img/project_4/img_3.png';
images[8] = 'img/project_4/img_4.png';


function changeImg(){
    document.slide.src = images[i];

    if(i < images.length-1){
        i++
    } 
    
    else {
        i = 0
    }

    setTimeout("changeImg()", time)
}




window.onload = changeImg;
