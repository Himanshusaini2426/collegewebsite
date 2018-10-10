$(window).scroll(function () {
    if ($(window).scrollTop() >60) {
        $('.header1').css({'top':'0px',"position":"fixed"});
        $('.header2').css({'margin-top':'100px'});
        $('.navbar-brand').css({'font-size':'14px'});
    }
    if($(window).scrollTop() < 60){
        $('.header1').css({'position':'relative'});
        $('.header2').css({'margin-top':'0px'});
        $('.navbar-brand').css({'font-size':'20px'});
    }
}
);
$(window).resize(function(){
    if($(document).width()<490){
        $('.d-block').css({'height':'250px'});
    }
    else if($(document).width()< 780){
        $('.d-block').css({'height':'350px'});
    }
    else if($(document).width()< 1080){
        $('.d-block').css({'height':'480px'});
    }
    else{
        $('.d-block').css({'height':'650px'});
    }
});


