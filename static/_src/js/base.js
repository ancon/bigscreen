$(document).ready(function(){
	var menuAction={
		changeSkin:function(){
			var type=['bg_china_newyear','bg_night_sky','bg_christmas_red'];
			if($(body).hasClass(type[2])){
				$(body).removeClass(type[2]);
				$(body).addClass(type[0]);
			}
			else if($(body).hasClass(type[1])){
				
			}
		}
	}
});
$(window).load(function(){
	//
});
