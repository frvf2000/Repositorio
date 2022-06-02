$(document).ready(function () {
    //$('p').CSS('color','red');
    //Btn1
    $("#accion1").click(function () {
        //Getter
        console.log("accion1");
        console.log($('p').css('font-size'));
        //Setter
        $("p").css('color',' red');
    });
    /////////////////////
    //Btn2
    $("#accion2").click(function () {
        $("p").css('font-family',' Times New Roman');
        console.log("accion2");
        console.log($('p').css('font-family'));
    });
    //////////////////////
    //BTN3
    $("#accion3").click(function () {
        $("body").css('background-color','black');
        $("h1").css('color',' white');
        $("p").css({
            'font-family':' Arial',
            'color':' white',
            'text-align': 'justify'
        });
    });
    ////
    $("#accion4").click(function () {
        $("body").css('background-color','white');
        $("h1").css('color',' black');
        $("p").css({
            'font-family':' Arial',
            'color':' black',
            'text-align': 'left'
        });
    });

});
