//active class
$('.navbar-nav li a').click(function () {
        $('.navbar-nav').find(".active").removeClass("active");
        $(this).parent().addClass("active");
    })


//change navbar background when scroll
var homeOffest=$('#home').offset().top;
$(window).scroll(function(){
        let topOffset=$(window).scrollTop();
        if(topOffset>homeOffest)
        {
                $('.navbar').css({'background-color':'#fff','transition':'.4s all','box-shadow': '0 13px 8px -10px #0000001a'});
                $('.navbar-brand img').attr('src',"images/logo-red.png");
                $('.nav-link').css({'color':'#282828'})
                $('.active>.nav-link').css({'color':'#f25454'})
                $('.nav-icons i').css({'color':'#282828'})

                
    
        }else
        {
                $('.navbar').css({'background-color':'transparent','box-shadow':'none'});
                $('.navbar-brand img').attr('src',"images/logo-white.png");
                $('.nav-link').css({'color':'#fff'})
                $('.active>.nav-link').css({'color':'#f25454'})
                $('.nav-icons i').css({'color':'#fff'})
        }

})
//loading page untill document ready
$(document).ready(function(){
        $('.load').fadeOut(1000,function(){
                $('body').css('overflow','visible')
        })
})

//colorbox
var bgColor=['#f25454','#4e9cb5','#24bca4','#ee8f67']
for(var i=0;i<bgColor.length;i++)
{
        $('.color-option li').eq(i).css('background-color',bgColor[i]);  
}
$('.color-option li').click(function()
{
        var color=$(this).css('background-color');
        $('.change').css('color',color)
})


var width=$('.color-option').innerWidth();
$('.color-box').css('left',-width);
 
$('.color-box i').click(function(){
     if($('.color-box').css('left')=='0px')
     {
        $('.color-box').animate({'left':-width},500); 

     }else
     {
        $('.color-box').animate({'left':0},500); 

     }
})