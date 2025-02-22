$(document).ready(function(){
    MSIE8 = ($.browser.msie) && ($.browser.version == 8),
	$.fn.ajaxJSSwitch({
		topMargin: 84,//mandatory property for decktop
		bottomMargin: 458,//mandatory property for decktop
		topMarginMobileDevices: 84,//mandatory property for mobile devices
		bottomMarginMobileDevices: 458,//mandatory property for mobile devices
        delaySubMenuHide: 300,
        bodyMinHeight: 1000,
		menuInit:function (classMenu, classSubMenu){
		},
		buttonOver:function (item){
		},
		buttonOut:function (item){
		},
		subMenuButtonOver:function (item){
		},
		subMenuButtonOut:function (item){
		},
		subMenuShow:function(subMenu){
        	subMenu.stop(true,true).animate({"height":"show"}, 400, "easeOutCubic");
		},
		subMenuHide:function(subMenu){
        	subMenu.stop(true,true).animate({"height":"hide"}, 500, "easeOutCubic");
		},
		pageInit:function (pages){
		},
		currPageAnimate:function (page){
			$('h1').stop(true).animate({'marginTop':'63px'},600,'easeOutCubic');
			$('.sf-menu').stop(true).animate({'marginBottom':'0px'},600,'easeOutCubic');

            page.css({"left":$(window).width()}).stop(true).delay(300).animate({"left":0}, 500, "easeOutCubic");
		},
		prevPageAnimate:function (page){
            page.stop(true).animate({"display":"block", "left":-$(window).outerWidth()*2}, 700, "easeInCubic");
		},
		backToSplash:function (){
			$('h1').stop(true).delay(200).animate({'marginTop':'-167px'},600,'easeInOutCubic');
			$('.sf-menu').stop(true).delay(200).animate({'marginBottom':'230px'},600,'easeInOutCubic');
		},
		pageLoadComplete:function (){
			$('.list1, .list4').each(function (ind) {
				$('>li>a', this).attr('rel','appendix'+ind);
			});
			$('.list1>li>a, .list4>li>a')
			.prepend('<span class="sitem_over"><strong></strong></span>')
			$('.list1>li>a, .list4>li>a').fancybox();
        }
	});
})
$(window).load(function(){
    setTimeout(function (){ $(window).trigger('resize') },600)
    
    $("#galleryHolder").gallerySplash({
        autoPlayState:'false',
        paginationDisplay:'false',
        autoPlayTime: 12,
        alignIMG: 'center'
    }); 

	$("#webSiteLoader").delay(500).animate({opacity:0}, 600, "easeInCubic", function(){$("#webSiteLoader").remove()});
});