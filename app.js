$(document).ready(function(){
	$('.footerLinks li').hover(
       function(){ $(this).siblings().stop().fadeTo(500,0.4)},
       function(){ $(this).siblings().stop().fadeTo(500,1.0)}
	);
	$('button').click(function(){ 
		$('#logo-white').toggle();
		$('#logo-white-small').toggle();
		$('header h1').toggle();
		$('#connect-inspire-believe').toggle();
		$('#performances').toggle();
		$('#faculty').toggle();
		$('#contact').toggle();
		$('.navbar-nav>li>a').css('padding-top','28px');
	});
	
});