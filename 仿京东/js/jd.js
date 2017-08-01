$(function(){
// close
    $('.close').click(function(){
        $('.adv').hide();
    })

// content-left
    $('.content-left li').on('mouseover',function(){
        var i = $(this).index()
        $('.content-left li div').eq(i).show()
    })
    $('.content-left li').on('mouseleave',function(){
        var i = $(this).index()
        $('.content-left li div').eq(i).hide()
    })
//rotator
    var s = $('.picall .pic').length;
    var i = 0;

    $('.picall').css({'width': s*790});
    for (var j = 0; j < s; j++) {
        $('.circle').append('<div class="c"><div>') 
    }
    time();
    $(".c").eq(0).addClass("h").siblings(".c").removeClass("h")

// stop and star
    $('.rotator').mouseover(function(){
        clearInterval(set)
    })
    $('.rotator').mouseleave(function(){
        time()
    })

// left and right
    $('.left').on('click',function(){
        if(i > 0){
                i--;
            }else{
                i = s-1;
            }
            $(".c").eq(i).addClass("h").siblings(".c").removeClass("h");
            $('.picall').stop(true).animate({'left': -i*790 +'px'})
    })

    $('.right').on('click',function(){
        if(i < s-1){
                i++;
            }else{
                i = 0;
            }
            $(".c").eq(i).addClass("h").siblings(".c").removeClass("h");
            $('.picall').stop(true).animate({'left': -i*790 +'px'})
    })

    $(".c").click(function(){
		i = $(this).index();
			$(".picall").stop(true).animate({"left": - i * 790 + "px"});
			$(".c").eq(i).addClass("h").siblings(".c").removeClass("h");		
	})

// auto run
    function time(){
        set = setInterval(function(){
            if(i < s-1){
                i++
            }else{
                i = 0;
            }
            $(".c").eq(i).addClass("h").siblings(".c").removeClass("h");
            $('.picall').stop(true).animate({'left': -i*790 +'px'});
        },1500)
    }  

// time  
    var ti = 60;
    var mi = 12;
    setInterval(function(){
        if(ti > 0){
            ti--;
        }else{
            ti = 60;
            mi--
        }
        $('.purchase .sec').text(ti);
        $('.purchase .min').text(mi);
    },1000)
 
        




// right sidebar
    $('.small .icons').on('mouseover',function(){
        var i = $(this).index();
        $(this).css({'background':'#c81623'})
        $('.sidebar-r .icons div').eq(i).animate({'left':-59});
        $('.small .icons div').eq(i).css({'background':'#c81623'});
    })
    $('.small .icons').on('mouseleave',function(){
        var i = $(this).index();
        $(this).css({'background':'#7a6e6e'});
        $('.small .icons div').eq(i).stop(true).animate({'left':0});
        $('.small .icons div').eq(i).css({'background':'#7a6e6e'});
    })
    
//back to top
    $('.bt-top .icons').on('mouseover',function(){
        var j = $(this).index();
        $(this).css({'background':'#c81623'})
        $('.bt-top .icons div').eq(j).animate({'left':-59});
        $('.bt-top .icons div').eq(j).css({'background':'#c81623'});
    })

    $('.bt-top .icons').on('mouseleave',function(){
        var j = $(this).index();
        $(this).css({'background':'#7a6e6e'});
        $('.bt-top .icons div').eq(j).stop(true).animate({'left':0});
        $('.bt-top .icons div').eq(j).css({'background':'#7a6e6e'});
    })
    $('.bt-top .top').on('click',function(){
        $('body').stop(true).animate({'scrollTop':0})
    })

//广告切换
    var k = 0;
    $('.s-left').on('click',function(){
        if(k > 0){
                k--;
            }else{
                k = 1;
            }
        $('.productall').stop(true).animate({'left': -k*1000 +'px'})
    })

    $('.s-right').on('click',function(){
        if(k < 1){
                k++;
            }else{
                k = 0;
            }
         $('.productall').stop(true).animate({'left': -k*1000 +'px'})
    })


//楼层切换
    $(window).on("scroll",function(){
		var w_h = $(window).scrollTop();
		if(w_h>1000){
			$(".sidebar-l").show();
		}else{
			$(".sidebar-l").hide();
		}

		if(w_h>1000 && w_h<=1500){
			$(".sidebar-l .kinds").eq(0).addClass('x').siblings(".sidebar-l .kinds").removeClass('x');
		}else if(w_h>1500 && w_h<=2000){
			$(".sidebar-l .kinds").eq(1).addClass('x').siblings(".sidebar-l .kinds").removeClass('x');
		}else if(w_h>2000){
			$(".sidebar-l .kinds").eq(2).addClass('x').siblings(".sidebar-l .kinds").removeClass('x');
		}
	})

    $(".sidebar-l .kinds").eq(0).on('click',function(){
        scroll(1001)
    })
    $(".sidebar-l .kinds").eq(1).on('click',function(){
        scroll(1501)
    })
    $(".sidebar-l .kinds").eq(2).on('click',function(){
        scroll(2001)
    })

    function scroll(t){
		$("body").stop(true).animate({"scrollTop": t});
	}

})