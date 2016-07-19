$(function(){

//全选
$("#jq_checkall").click(function(){
    if($(this).is(":checked")){
        $("#jq_checkall").next("span").text("全不选");
        $("#jq_checkList :checkbox").each(function(){ 
            $(this).prop("checked",true);
        });
    }else{
    $("#jq_checkall").next("span").text("全选");
    $("#jq_checkList :checkbox").each(function(){ 
        $(this).prop("checked",false);
    });
    }
});
//退出机构
$("#jq_exitTeam").click(function(){$("#jq_exitTeamWin").show();});
/*限制文本框只能输入数字*/ 
$(".jq_numText").keyup(function(){   
        $(this).val($(this).val().replace(/\D|^0/g,'')); 
    }).bind("paste",function(){  //CTR+V事件处理   
        $(this).val($(this).val().replace(/\D|^0/g,''));    
    }).css("ime-mode", "disabled"); //CSS设置输入法不可用   

/*限制文本框只能输入数字和小数点*/ 
$(".jq_numDecText").keyup(function(){   
        $(this).val($(this).val().replace(/[^0-9.]/g,''));   
    }).bind("paste",function(){  //CTR+V事件处理   
        $(this).val($(this).val().replace(/[^0-9.]/g,''));    
    }).css("ime-mode", "disabled"); //CSS设置输入法不可用   

$("#jq_copyLink").click(function(){$("#jq_copyLinkWin").show();});
//操作按钮
$("#jq_operateBar").click(function(e){
	if($("#jq_operateBar dd").is(":hidden")){
		$("#jq_operateBar dd").slideDown();
	}else{
		$("#jq_operateBar dd").slideUp();
	}
    e.stopPropagation();
});
$("body").click(function(){$("#jq_operateBar dd").slideUp();});
$("#jq_operateBar dd").click(function(e){e.stopPropagation();});

//关闭弹窗
$(document).on("touchmove click",".jq_btnBar_closeWin a",function(){$(this).parents(".winSty01").hide();});

//约谈
$("#jq_interview").click(function(){$("#jq_interviewWin").show();});
$("#jq_interview02").click(function(){$("#jq_interviewWin02").show();});
$("#jq_closeInterviewOkWin").on("click",function(){$("#jq_interviewOkWin").hide();});
//
$("#jq_conditionEdit").click(function(){$("#jq_conditionEditWin").show();});

//微信中点击分享按钮，打开/关闭弹窗
$("#jq_weixinShare").click(function(){
    $("body").append('<div class="weixinShare" id="jq_weixinShareWin" title="请点击右上角将它发送给指定朋友或分享到朋友圈"></div>');
});
$(document).on("touchmove click","#jq_weixinShareWin",function(){$("#jq_weixinShareWin").remove();});

//上传BP-点击编辑按钮输入框获取焦点
$(".jq_openEditBox").on("click",function(){$(this).parent().parent().find('input,textarea').focus();});

//手机端打开导航
$(document).on("click","#jq_siteMenu_open",function(){$("#jq_siteMenu").show();$("body").css({"overflow":"hidden","height":"100%"});$("#jq_siteMenu .btnClose").show();});
$(document).on("click","#jq_siteMenu .btnClose",function(){$("#jq_siteMenu").hide();$("body").css({"overflow":"auto"});});


//评价星星
$('.scoreStar a').click(function(){$(this).addClass('active_star').siblings().removeClass('active_star');});
//选择所属领域
$(".selectTagsSty a").click(function(){$(this).addClass('current').siblings().removeClass('current')});
$(".jq_closeParents").on("click",function(){$(this).parents(".bpWin").hide();});

//上传BP-显示提示
$(".jq_showPlaceholder").each(function(){
var $this=$(this);
var $placeholder=$this.parent().parent().find('.jq_getPlaceholder').attr("placeholder")
$this.html($placeholder);
});
//关闭
$(document).on("touchmove click","#jq_closeParent",function(){$(this).parent().hide();});
$(document).on("touchmove click",".jq_closeParent",function(){$(this).parent().hide();});

})//jq over	

//限制输入数字
function IsNum(e) {
  var k = window.event ? e.keyCode : e.which;
  if (((k >= 48) && (k <= 57)) || k == 8 || k == 0) {
  } else {
      if (window.event) {
          window.event.returnValue = false;
      }
      else {
          e.preventDefault(); //for firefox 
      }
  }
} 
