//  //设置布尔值作为开关
//	var bol=true;
//	//设置定时器
//	var timer=null;
//	//设定navbar(就是会移到下方的部分)
//	var t=$("#navbar").height();
//	
//	var maxH=50;
//	var minH=0;
//	//设定nav(就是最外面的父级)
//	//navbar已经定位，无法将下方内容顶开，需要同时变更父级的高度来顶开下方的内容
//	var navT=$("nav").height();
//	var navMaxH=100;
//	var navMinH=50;
//	$("#btn").click(function(){
//		//判断布尔值
//		if(bol){
//			$("#navbar").css('borderTop','1px solid #eee');
//			timer=setInterval(function(){
//				t+=50;
//				navT+=50;
//				//父级nav上限
//				if(navT>=navMaxH){
//					navT=navMaxH;
//				}
//				//navbar上限
//				if(t>=maxH){
//					t=maxH;
//					navT=navMaxH;
//					clearInterval(timer)
//				}
//				$("#navbar").animate({height:t+'px'});
//				$("nav").animate({height:navT+'px'});
//			},3)
//			//布尔值改为false，下次点击时，就会执行else中的语句
//			bol=false;
//		}else{
//			timer=setInterval(function(){
//				t-=50;
//				navT-=50;
//				//父级nav下限
//				if(navT<=navMinH){
//					navT=navMinH;
//				}
//				//navbar下限
//				if(t<=minH){
//					t=minH;
//					navT=navMinH;
//					clearInterval(timer);
//				}
//				$("#navbar").animate({height:t+'px'});
//				$("nav").animate({height:navT+'px'});
//			},3)
//			//布尔值改为true,下次点击时，就会执行if中的语句
//			bol=true;
//		}
//	})


//设置布尔值开关
var bol=true;
//设置定时器
var timer=null;
//设定navbar(就是会移到下方的部分)
var t=$("#navbar").height();

var maxH=50;
var minH=0;
$("#btn").click(function(){
	//alert(1);
	//判断布尔值
	if(bol){
		$("#navbar").css('borderTop','1px solid #eee');
		timer=setInterval(function(){
			t+=50;
			//navbar上限
			if(t>=maxH){
				t=maxH;
				clearInterval(timer)
			}
			$("#navbar").animate({height:t+'px'});
		},3)
		//布尔值改为false，下次点击时，就会执行else中的语句
		bol=false;
	}else{
		//$("#navbar").css('borderTop','none');
		timer=setInterval(function(){
			t-=50;
			//navbar下限
			if(t<=minH){
				t=minH;
				clearInterval(timer);
			}
			$("#navbar").animate({height:t+'px'});
		},3)
		//布尔值改为true,下次点击时，就会执行if中的语句
		bol=true;
	}
})
