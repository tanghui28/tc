$(function(){
	resizes();
	index();
    pageBox();
    // indexMain();
})
$(window).resize(function(){
    resizes();
    pageBox()
})
$(window).load(function(){
    
})

function index(){

   // if( $('.backLazys').length > 0 ) {
   //      $(".backLazys").lazyload({effect: "fadeIn",threshold:0});
   //  }

    $('.commonHoverA a').hover(function() {
        $(this).addClass('active').siblings('a').removeClass('active')
    })
    $(".news_sec .news_sec_r_one .con li").on("click",function(){
        $(this).find('.sub_nav').stop().slideToggle();
        $(this).siblings('li').find('.sub_nav').stop().slideUp();
   })

    $('.back_top').on('click',function() {
        $("html,body").animate({scrollTop:0},600)
    })

    $('.banner_hide').on("click",function() {
        $('.banner_control').toggleClass('active')
    })

    jQuery(".search_icon").click(function(){
        jQuery(".slider-search").animate({top:0,"opacity":"show"},600);
    });
    jQuery(".btnclosess").click(function(){
        jQuery(".slider-search").animate({top:"-100%","opacity":"hide"},600);
    });
     jQuery('.sradio').on('click',function () {
        $(this).addClass('active').siblings('span').removeClass('active')
        return false;
    })
     
}

function resizes(){
    winH = $(window).height()
   
}


// function indexMain() {
//     $('.frind_link_owl').owlCarousel({
//         navigation: true,
//         items:1,
//         autoPlay:true,
//         pagination:true,
//         navigation:true,
//         responsiveRefreshRate:200,
//         navigationText:['',''],
//         rewindNav:true,
//         slideSpeed:600,
//         paginationNumbers:false,
//         singleItem:false,
//         afterMove:function(){
//             var $owlpagination=$('.frind_link_owl .owl-pagination .active').index();
//             $('.q_news_owl_page a').eq($owlpagination).addClass('active').siblings().removeClass('active')
//         },
//         afterInit:function(){
//             var $owlpagination=$('.frind_link_owl .owl-pagination .active').index();
//             $('.q_news_owl_page a').eq($owlpagination).addClass('active').siblings().removeClass('active')
//         }
//     });

//     var owlScroll = $('.frind_link_owl').data('owlCarousel');
//     $('.q_news_left').on('click',function() {
//         owlScroll.prev();
//     })

//     $('.q_news_right').on('click',function() {
//         owlScroll.next();
//     })

//     $('.q_news_owl_page a').on('click',function() {
//         var index = $(this).index();
//         owlScroll.goTo(index,1)
//     })

//     //浮动效果
//     var wow = new WOW({
//         boxClass: 'wow',
//         animateClass: 'animated',
//         offset: 100,
//         mobile: false,
//         live: true
//     });
//     wow.init(); 

    


// }


function imgfadeIn(obj){
    var obj=obj
    var imgL=obj.find('.backLazys').length;
    setTimeout(function(){
        obj.find('.backLazys').each(function(){
            var imgori=$(this).attr('data-original')
            $(this).css({'background-image':'url('+imgori+')'})
        })
    },100)
}
function move (o) {
    var $owlpagination=o.find('.owl-pagination .active').index();
    var obj = o.find('.item').eq($owlpagination);
    o.find('.owl-item').eq($owlpagination).addClass('active').siblings().removeClass('active');
    $('.bossThemeOwl_page a').eq($owlpagination).addClass('active').siblings().removeClass('active');
    imgfadeIn(obj);
}




function pageBox() {
    w_width = jQuery(window).width();
    w_height = jQuery(window).height();

    //设置移动端参数
    if (w_width <= 1024) {
        isMobile = true;
    } else if (w_width > 1024) {
        isMobile = false;
    };
    //区分手机端和平板
    if (w_width <= 640) {
        mobile = true;
    } else if (w_width > 640) {
        mobile = false;
    };

}


// 家庭服务滚动
$(window).load(function(){
    var arr = [],tirm;
    var winH = $(window).height();
    var winW = $(window).width();
    var $ser_fix = $('.main_bussis_nav');
    if($('.main_bussis_nav').length > 0) var main_bussis_navT = $('.main_bussis_nav').offset().top - 130;
   
    if( $('.main_bussis_block').length > 0){
        $('.main_bussis_block').each(function(index) {
            var thisT = $(this).offset().top - 130;
            arr[index] = thisT;
        })
    }


    
    init();
    scrollSer();
    $(window).scroll(function() {
        scrollSer();
    })

    // 点击到达指定位置
    $('.main_bussis_nav a').on('click',function() {
        var INDEX = $(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $('html,body').animate({scrollTop:arr[INDEX] },1400)
    })


    function init() {
        var url = window.location.href.split("#",2)[1];
        $('html,body').animate({scrollTop:arr[url] },1400)
        $('.main_bussis_nav a').eq(url).addClass('active').siblings('a').removeClass('active');
    }

    // 滚动方法
    function scrollSer() {
        var scrollTop = $(window).scrollTop() + 130;
        for(var i = 0; i < arr.length; i++) {
            if(scrollTop > arr[i]) {
                $ser_fix.find('a').eq(i).addClass('active').siblings('a').removeClass('active');
            }
        }

        if(scrollTop > main_bussis_navT) {
            $('.main_bussis_nav').addClass('active')
        } else {
            $('.main_bussis_nav').removeClass('active')
        }

        if(scrollTop > 140) {
            $('.headerBg').stop().animate({top:0},500)
        } else {
            $('.headerBg').stop().animate({top:-102},500)
        }
    }


}) 









