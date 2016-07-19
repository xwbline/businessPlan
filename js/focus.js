$(document).ready(function(){
var $jq_focus=$("#jq_focus");
var $jq_focusvisual=$("#jq_focusvisual");
var $jq_flicking=$("#jq_flicking span");
var $jq_next=$("#btn_next");
var $jq_prev=$("#btn_prev");

	/*$jq_focusvisual.hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
	},function(){
		$("#btn_prev,#btn_next").fadeOut()
	});*/
	
	$dragBln = false;
	
	$jq_focus.touchSlider({
		flexible :true,
		speed :700,
		btn_prev :$("#btn_prev"),
		btn_next :$jq_next,
		paging :$jq_flicking,
		counter :function (e){
			$jq_flicking.removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	$jq_focus.bind("mousedown", function() {
		$dragBln = false;
	});
	
	$jq_focus.bind("dragstart", function() {
		$dragBln = true;
	});
	
	$jq_focus.find("a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$jq_next.click();
	}, 3000);
	
	$jq_focusvisual.hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$jq_next.click();
		},3000);
	});
	
	$jq_focus.bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$jq_next.click();
		}, 3000);
	});


//$("#jq_focusBox,#jq_focusvisual,#jq_focus,#jq_focus li").height($("window").height());
// var $bodyW=$("body").width();
// var $imgW=$("#jq_focus img").width();
// if($imgW>$bodyW){
// 	$("#jq_focus img").width($bodyW);
// }
});
