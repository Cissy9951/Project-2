$(document).ready(function() {


    function pic1(){
        $("body").css("transition","background-image 1s");
        $("body").css("transition-timing-function","ease-in-out");

        $("body").css("background-image", "url(../images/IMG_1259.jpg)");
    } 
    function pic2(){
        $("body").css("transition","background-image 1s");
        $("body").css("transition-timing-function","ease-in-out");

        $("body").css("background-image", "url(../images/Blue_IMG_0863.jpg)");
    }
    function pic3(){
        $("body").css("transition","background-image 1s");
        $("body").css("transition-timing-function","ease-in-out");

        $("body").css("background-image", "url(../images/Sensuous_IMG_1111.jpg)");
    }
    function pic4(){
        $("body").css("transition","background-image 1s");
        $("body").css("transition-timing-function","ease-in-out");

        $("body").css("background-image", "url(../images/IMG_1436.jpg)");
    }
    function pic5(){
        $("body").css("transition","background-image 1s");
        $("body").css("transition-timing-function","ease-in-out");
        $("body").css("background-image", "url(../images/IMG_0773.jpg)");
    }

    let array = [pic1,pic2,pic3,pic4,pic5];
    let i = 0;
    $("body").click(function(){

        if (i<(array.length-1)){
            i=i+1;
            array[i]();
        } else {
            i = 0;
            array[i]();
        }

        
    }); 
        



} );