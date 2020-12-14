(function(){
"use strict";
var screenWidth, screenHeight;

function deviceWH(){
	screenWidth = $(window).width();
	screenHeight = $(window).height();
}
	
$('.menuToggle').on('click', function(e){
	e.preventDefault();
	$('body').toggleClass('closeNav');
});
function mobileMenu(){	
	if(screenWidth <768){		
		$('body').addClass('closeNav');
	}else {
		$('body').removeClass('closeNav');
	}
}
$(window).resize(function(){
	deviceWH();	
	mobileMenu();
});

deviceWH();
if(screenWidth <768){
	mobileMenu();
}

}());