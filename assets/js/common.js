$(document).ready(function(){
	accordion();
    tabMenu();

    sectionMove();
    anchorChange();

    footerToggle();

    scrollHeader();
    hoverHeader();

    hamburger();
    mobileHeaderAccordion();
});

function mobileHeaderAccordion(){
    $('.header_mo .nav > ul > li > span').click(function(){
        $(this).toggleClass('active');
        $(this).nextAll('ul').slideToggle('fast');
        $(this).parent().siblings('li').children('ul').slideUp('fast')
            .parent('li').find('span').removeClass('active');
        return false;
        
    })
}

function hamburger(){
    $('.header_mo .hamburger').click(function(){
        $(this).parents('.header_mo').toggleClass('active');
    
        
        if($('.header_mo').hasClass('active')) {
            $('body').addClass('active');
        } else {
            $('body').removeClass('active');
        }
    })
}

function hoverHeader(){
    if($(window).width() > 768) {
        
        $('header').hover(function(){
            $('header').addClass('active')
        })
    }
}

function scrollHeader(){
    let lastScroll = 0;
    if($(window).width() > 768) {
        // window 크기가 768보다  클 때
        $(window).on('scroll', function(){
            let scrollTop = $(this).scrollTop();
            if(scrollTop > lastScroll) {
                //down
                $('header, .header_mo').removeClass('active fixed');
            } else {
                // up
                $('header, .header_mo').addClass('active fixed');
            }
            lastScroll = scrollTop;
        });
    }

    if($(window).width() > 768) {
        // window 크기가 768보다  클 때
            $(window).on('scroll', function(){
                let scrollTop = $(this).scrollTop();
                if(scrollTop == 0) {
                    //down
                    $('header, .header_mo').removeClass('active');
                }
            });
        }

    // $(window).on('scroll', function(){
    //     let scrollTop = $(this).scrollTop();
    //     if(scrollTop > lastScroll) {
    //         //down
    //         $('header, .header_mo').removeClass('fixed');
    //     } else {
    //         // up
    //         $('header, .header_mo').addClass('fixed');
    //     }
    //     lastScroll = scrollTop;
    // });
}

function anchorChange(){

    function navOn() {
        // 1. 현재 scrollTop() 값을 가져오기 위해 변수에 넣는다.
      var nowTop = $(window).scrollTop();
      
        // 2. 각 섹션의 offset().top 값을 가져온다.
      var sec1_offset = $('#mainSection_1').offset().top;
      var sec2_offset = $('#mainSection_2').offset().top + 50;
      var sec3_offset = $('#mainSection_3').offset().top - 200;
      var sec4_offset = $('#mainSection_4').offset().top - 100;
      var sec5_offset = $('#mainSection_5').offset().top - 200;
      var sec6_offset = $('#mainSection_6').offset().top - 100;


        // 3. class를 초기화 시킨다.
      $('.anchorBox > li').removeClass('active');
    
         // 4. 현재 scrollTop()의 값이 각 섹션의 범위에 있으면 class를 추가한다.
      if ( nowTop >=  0 && nowTop == sec1_offset) {
          $('.anchorBox > li').eq(0).addClass('active');
      } else if( nowTop >=  sec2_offset && nowTop < sec3_offset ) {
          $('.anchorBox > li').eq(1).addClass('active');
      } else if( nowTop >=  sec3_offset && nowTop < sec4_offset ) {
          $('.anchorBox > li').eq(2).addClass('active');
      } else if( nowTop >=  sec4_offset && nowTop < sec5_offset ) {
          $('.anchorBox > li').eq(3).addClass('active');
      } else if( nowTop >=  sec5_offset && nowTop < sec6_offset ) {
        $('.anchorBox > li').eq(4).addClass('active');
    }  
      else if( nowTop >=  sec6_offset  ) {
          $('.anchorBox > li').eq(5).addClass('active');
      }
  };
//   navOn();

  // 4. scroll function을 넣어 scroll을 트리거로 이벤트를 발생시킨다.
  $(window).scroll(function() {
      navOn();
  });
}

function footerToggle(){
    $('footer > div > div:nth-of-type(3) span').click(function(){
        $('footer > div > div:nth-of-type(3) > div').toggleClass('active');
    })
}

function sectionMove(){
    if($(window).width() > 768) {
        $('.anchorBox li').click(function(){
            $('.anchorBox li').removeClass('active');
            $(this).addClass('active');
            })
            $(".anchorBox li:nth-child(1)").click(function(){
                $("html,body").animate({scrollTop:$("#mainSection_1").offset().top},1000);
            });
            $(".anchorBox li:nth-child(2)").click(function(){
                $("html,body").animate({scrollTop:$("#mainSection_2").offset().top + 50},1000);
            });
            $(".anchorBox li:nth-child(3)").click(function(){
                $("html,body").animate({scrollTop:$("#mainSection_3").offset().top - 180},1000);
            });
            $(".anchorBox li:nth-child(4)").click(function(){
                $("html,body").animate({scrollTop:$("#mainSection_4").offset().top + 200},1000);
            });
            $(".anchorBox li:nth-child(5)").click(function(){
                $("html,body").animate({scrollTop:$("#mainSection_5").offset().top - 200},1000);
            });
            $(".anchorBox li:nth-child(6)").click(function(){
                $("html,body").animate({scrollTop:$("#mainSection_6").offset().top + 100},1000);
            });
        } else {
            $('.anchorBox li').click(function(){
                $('.anchorBox li').removeClass('active');
                $(this).addClass('active');
            })
            $(".anchorBox li:nth-child(1)").click(function(){
                $("html,body").animate({scrollTop:$("#mainSection_1").offset().top},1000);
            });
            $(".anchorBox li:nth-child(2)").click(function(){
                $("html,body").animate({scrollTop:$("#mainSection_2").offset().top},1000);
            });
            $(".anchorBox li:nth-child(3)").click(function(){
                $("html,body").animate({scrollTop:$("#mainSection_3").offset().top},1000);
            });
            $(".anchorBox li:nth-child(4)").click(function(){
                $("html,body").animate({scrollTop:$("#mainSection_4").offset().top},1000);
            });
            $(".anchorBox li:nth-child(5)").click(function(){
                $("html,body").animate({scrollTop:$("#mainSection_5").offset().top},1000);
            });
            $(".anchorBox li:nth-child(6)").click(function(){
                $("html,body").animate({scrollTop:$("#mainSection_6").offset().top},1000);
            });
        }

    

}

function accordion(){

    $('.accordionBox .titleBox').click(function(){        
        $('.accordionBox .titleBox').removeClass('active');

        if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else if(!$(this).hasClass('active')){
            $(this).addClass('active');
        }
    })

}


function tabMenu(){
    $('.tabBtnBox li, .tabBtnBox button').click(function(){
        $('.tabBtnBox li, .tabBtnBox button').removeClass('active');
        $(this).addClass('active');
        
        if($('.tabBtnBox .tabBtn_1').hasClass('active')){
			$('.tabContentBox > div').removeClass('active');
			$('.tabContentBox .tabContent_1').addClass('active');
		}
		if($('.tabBtnBox .tabBtn_2').hasClass('active')){
			$('.tabContentBox > div').removeClass('active');
			$('.tabContentBox .tabContent_2').addClass('active');
		}
        if($('.tabBtnBox .tabBtn_3').hasClass('active')){
			$('.tabContentBox > div').removeClass('active');
			$('.tabContentBox .tabContent_3').addClass('active');
		}
    })
}
// 해색 원격탐사 탭메뉴