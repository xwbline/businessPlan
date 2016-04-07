$(function(){
    //手机端打开导航
$("#jq_siteMenu_open").on("click",this,function(){$("#jq_siteMenu").show();$("#jq_siteMenu .btnClose").show();$("body").css({"overflow":"hidden","height":"100%"});});
$("#jq_siteMenu .btnClose").on("click",this,function(){$("#jq_siteMenu").hide();$("body").css({"overflow":"auto"});});


//评价星星
//$('.scoreStar a').hover(function(){$(this).addClass('active_star');},function(){$(this).removeClass('active_star');});
$('.scoreStar a').click(function(){$(this).addClass('active_star').siblings().removeClass('active_star');});
//选择所属领域
$(".selectTagsSty a").click(function(){$(this).addClass('current').siblings().removeClass('current')});
$(".jq_closeParents").on("touchmove touchstart click",function(){$(this).parents(".bpWin").hide();});


$(".jq_showPlaceholder").each(function(){
var $this=$(this);
var $placeholder=$this.parent().parent().find('.jq_getPlaceholder').attr("placeholder")
$this.html($placeholder);

});
$("#jq_closeParent,.jq_closeParent").on("touchmove touchstart click",function(){$(this).parent().hide();});
})//jq over	


//angular
var bpUpload = angular.module('bpUpload', []);
bpUpload.controller('openEditBox', function($scope) {
    $scope.showBox = true;
    $scope.btnEdit = true;
    $scope.editBox = true;
    $scope.btnSave = true;
    $scope.btnEsc = true;
    //点编辑按钮时
    $scope.edit = function() {
        $scope.showBox = false;
        $scope.btnEdit = false;
        $scope.editBox = false;
        $scope.btnSave = false;
        $scope.btnEsc = false;
    }
    //点保存按钮时
   $scope.save=function(){
	    $scope.showBox = true;
	    $scope.btnEdit = true;
	    $scope.editBox = true;
	    $scope.btnSave = true;
	    $scope.btnEsc = true;
    }
    //点取消按钮时
    $scope.esc=function(){
	    $scope.showBox = true;
	    $scope.btnEdit = true;
	    $scope.editBox = true;
	    $scope.btnSave = true;
	    $scope.btnEsc = true;
    }
});


  











