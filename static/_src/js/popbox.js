// popbox.js,点击/悬浮放大效果
$(document).ready(function(){
	//二维码点击放大效果
	$(".qrcode").click(function(){
	    var $qrcode=$(this);
	    if($qrcode.css("z-index") != "10086"){
	      $qrcode.animate({
	        'width':'500px',
	        'height':'500px',
	        'right':'50%',
	        'margin-top':'50px',
	        'margin-right':'-250px',
	        'z-index':'10086'
	      },500);
	    }
	    else{
	      $qrcode.animate({
	        'width':'100px',
	        'height':'100px',
	        'right':'0',
	        'margin-top':'0',
	        'margin-right':'0',
	        'z-index':'1000'
	      },500);
	    }
	});
	
});
