import $ from 'jquery';
import Swiper from 'swiper';
function nav(){
//轮播图
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        speed: 1100,
        autoplayDisableOnInteraction: false
    });
    $(".swiper-container").mouseenter(function () {//滑过悬停
        swiper.stopAutoplay(); //swiper 为上面你swiper实例化的名称
    }).mouseleave(function () {//离开开启
        swiper.startAutoplay();
    });
//弹窗
    $('.layer_img').click(function () {
        $('.pop_layer,.gif_mask').show();
        $('.navbar').css({'height': '0', 'border-top': 'none'});
        $(".pop_layer img").attr("src", $(this).attr("layergif"))
        setTimeout(function () {
            $('.pop_layer,.gif_mask').hide();
        }, 24000)
    })
    $('.gif_mask').click(function () {
        $('.pop_layer,.gif_mask,.pop_layer1').hide();
    })
//textarea
    $(".tip_text").click(function () {
        $('.tip_text').hide();
        $("textarea").focus();
    })
    $("textarea").blur(function () {
        if ($("textarea").val() == "") {
            $('.tip_text').show();
        } else {
            $('.tip_text').hide();
        }

    })

//reset
    $('.inpu_res').click(function () {
        $('.cnt_inpu input,textarea').val('');
        $('.tip_text').show();
    })
//label
//$(".label_player").click(function () {
//    $('.pop_layer,.gif_mask').show();
//    $('.navbar').css({ 'height': '0', 'border-top': 'none' });
//})
    $(".layer_clcik").click(function () {
        $('.pop_layer,.gif_mask').show();
        $('.navbar').css({'height': '0', 'border-top': 'none'});
        $(".pop_layer img").attr("src", $($(this).find("a")[0]).attr("labelgif"))
    })
//动态获取cnt_left的高度，赋给下拉菜单的top值
    var ht = $(".cnt_left").height();
    $("#_select,#flags").css("top", ht + 4 + 'px');
//获取下拉菜单到底端的距离   页面没有出现滚动条的时候
//console.log($(".cn_main").offset().top);
//var tt=$(window).height();
    var tt = $("body").outerHeight(true);
    console.log(tt);
    var ss = $("body").outerHeight(true) - $(".cn_main").offset().top - $(".cnt_left").height() - 114;
    $("#flags,#_select").css({'height': 'auto', 'max-height': ss});
//下拉列表
    var imgss = ['start.png', 'afh.png', 'ymny.png', 'yd.png', 'start.png', 'afh.png', 'ymny.png', 'yd.png', 'start.png', 'afh.png', 'ymny.png', 'yd.png', 'ymny.png', 'afh.png', 'ymny.png'];
    var texts = ['China', 'Colombia', 'Indonesia', 'Malaysia', 'Pakistan', 'Russia', 'Argentina', 'Brazil', 'Thailand', 'Victnam', 'Turkey', 'Arabiac', '伊拉克', 'Казахстан', 'South Africa'];
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]);
        return '';
    }
//if (!navigator.userAgent.match(/mobile/i)&& navigator.userAgent.match(/mobile/i) && screen.width>767) {
    $('.country_left').click(function () {
        $(".countryContainer").toggle();
    })

//点击空白处隐藏下拉菜单
//	$("*").click(function (event) {
//		if (!$(this).hasClass("countryContainer")&&!$(this).hasClass("country_left")){
//			$(".countryContainer").hide();
//		}
//		event.stopPropagation();
//	});
    $('#currentCountry').val(GetQueryString("c"));
//	$("#count").html(decodeURI((GetQueryString("c")|| 'China')));
//	$(".country_img img").attr('src','static/images/'+imgss[GetQueryString("t")||[0]]);
    $("#flags li").click(function () {
        //    var index = $(this).index();
        //    $("#count").html(texts[index]);
        //    $(".country_img img").attr('src', 'static/images/' + imgss[index]);
        //改变国家
        $("#ddlCountry").val($(this).attr("class"));
        $("#changeCountry").val("1");
        $('form')[0].action = "index.aspx" + window.location.search;
        $('form')[0].submit();

    })

    $(".country_right").click(function () {
        $(".countryContainer1").toggle();
    })
    $('#currentLanguage').val(GetQueryString("n"));
//$('.select_language').html(decodeURI(GetQueryString("n") || 'Mandarin'));
    $("#_select li").click(function () {
        $("#language").val($(this).attr("class"));
        $("#changeLan").val("1");
        $('form')[0].action = "index.aspx" + window.location.search;
        $('form')[0].submit();
    })

//滚动条事件
//	$(window).scroll(function(){
//		var st= $(this).scrollTop();
//		//console.log(st);
//		//$("#flags").css('height',st);
//
//		if(st>=$(document).height()-$(window).height()){
//			console.log(st);
//			$("#flags").css('height',st+'px');
//		}
//	})
//}
// Mobile      这里是只有再 移动设备 上访问时
//	if (navigator.userAgent.match(/mobile/i) && screen.width<767) {
//		//$('#_select,#flags').hide();
//		$("#flags").addClass('_flags');
//		$('.country_left').click(function(){
//			$("#_flags,.gif_mask").show();
//			$("#_flags").animate({'bottom':'0px'});
//			$("#navbar").css('border-top','none');
//			$('body').css('position','fixed');
//
//			//
//			$(".gif_mask").on('touchmove',function(e){
//              e.preventDefault();  //阻止默认行为
//          })
//
//			$('.gif_mask').click(function(){
//				//$("#_flags").hide();
//				$("#navbar").css('border-top','1px solid #ddd');
//				$('body').css('position','relative');
//				$("#_flags").animate({'bottom':'-260px'});
//			})
//		})
//		$('#_flags li').click(function(){
//			//$('.gif_mask,#flags').hide();
//			//$("#navbar").css('border-top','1px solid #ddd');
//			var index=$(this).index();
//			$("#count").html(texts[index]);
//			$(".country_img img").attr('src','../../static/images/'+imgss[index]);
//			$('body').css('position','relative');
//			$("#_flags").animate({'bottom':'-260px'},300,function(){
//				$(".gif_mask").hide()
//			});
//
//		})
//
//		$('.country_right').click(function(){
//			$("#_selects,.gif_mask").show();
//			$('body').css('position','fixed');
//			$("#_selects").animate({'bottom':'0px'});
//			$("#navbar").css('border-top','none');
//
//			//
//			$(".gif_mask").on('touchmove',function(e){
//              e.preventDefault();  //阻止默认行为
//          })
//
//			$('.gif_mask').click(function(){
//				//$("#_selects").hide();
//				$("#navbar").css('border-top','1px solid #ddd');
//				$('body').css('position','relative');
//				$("#_selects").animate({'bottom':'-260px'});
//
//			})
//		})
//
//		$('#_selects li').click(function(){
//			//$('.gif_mask,#_select').hide();
//			//$("#navbar").css('border-top','1px solid #ddd');
//			var index=$(this).index();
//			$(".select_language").html($(this).html());
//			$('body').css('position','relative');
//			//$("#_selects").animate({'bottom':'-260px'});
//			$("#_selects").animate({'bottom':'-260px'},300,function(){
//				$(".gif_mask").hide()
//			});
//		})
//	}

    if (navigator.userAgent.match(/mobile/i) && window.screen.width < 767) {

        var ht = $(".cnt_left").height();
        $("#_select,#flags").css("top", 'auto');

        $('.country_left').click(function () {
            $(".gif_mask,.countryContainer").show();
            $('.select_flag').animate({'bottom': '0'});
            $("#navbar").css('border-top', 'none');
            $('body').css('position', 'fixed');

            $(".gif_mask").on('touchmove', function (e) {
                e.preventDefault();  //阻止默认行为
            })

        })

        $(".gif_mask").click(function () {
            $('.select_flag').animate({'bottom': '-300px'}, 300, function () {
                $(".gif_mask").hide()
            });
            $('body').css('position', 'relative');
        })

        $(".select_flag li").click(function () {
            //			$(".select_flag").animate({'bottom':'-260px'});
            $('body').css('position', 'relative');
        })


        $('.country_right').click(function () {
            $(".gif_mask,.countryContainer1").show();
            $('#_select').animate({'bottom': '0'});
            $("#navbar").css('border-top', 'none');
            $('body').css('position', 'fixed');

            $(".gif_mask").on('touchmove', function (e) {
                e.preventDefault();  //阻止默认行为
            })

        })

        $(".gif_mask").click(function () {
            $('#_select').animate({'bottom': '-300px'}, 300, function () {
                $(".gif_mask").hide()
            });
            $('body').css('position', 'relative');
        })

        $("#_select li").click(function () {
            //			$("#_select").animate({'bottom':'-260px'});
            $('body').css('position', 'relative');
        })
    }


}(window)


export {nav}


