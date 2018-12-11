$(window).load(function(){
/* =============================================================================
   ISOTOP
   ========================================================================== */	
	// Needed variables
	var $container	 	= $('.portfolio');
	var $filter 		= $('#portfolio-filter');
	
	$container.imagesLoaded( function(){
		$('ul.portfolio').show();
		$container.isotope({
			filter				: '*',
			layoutMode   		: 'masonry',
			animationOptions	: {
			duration			: 750,
			easing				: 'linear'
		   }
		});
	});

	$(window).bind('resize', function(){
		var selector = $filter.find('a.active4').attr('data-filter');
		$container.isotope({ 
			filter	: selector,
			animationOptions: {
				duration: 750,
				easing	: 'linear',
				queue	: false,
	   		}
		});
	  	return false;
	});
	
	// Isotope Filter   
	$filter.find('a').click(function(){
		var $this = $(this);
		// don't proceed if already selected
		if ( $this.hasClass('selected-item') ) {
		  return false;
		}
		$filter.find('.selected-item').removeClass('selected-item');
		$this.addClass('selected-item');
		
		var selector = $(this).attr('data-filter');
		$container.isotope({ 
			filter	: selector,
			animationOptions: {
				duration: 750,
				easing	: 'linear',
				queue	: false,
	   		}
		});
	  	return false;
	});
    /* END ISOTOP */  
    
/* =============================================================================
   NAVIGATION JQUERY STARS 
   ========================================================================== */	         
	$('.sf-menu li ul li').each(function(){
		$(this).mouseenter(function(){
			$(this).parent().parent().addClass('slected-menu');
		});
		$(this).mouseleave(function(){
			$(this).parent().parent().removeClass('slected-menu');
		});
	});
	
	if ( $( '#main-navigation' ).length && $() ) {
	var arrowimages={down:['', 23], right:['']}
	var jqueryslidemenu={
	animateduration: {over: 200, out: 200}, //duration of slide in/ out animation, in milliseconds
	buildmenu:function(menuid, arrowsvar){
		$(document).ready(function(jQuery){
			var jQuerymainmenu=$("#"+menuid+">ul")
			var jQueryheaders=jQuerymainmenu.find("ul").parent()
			jQueryheaders.each(function(i){
				var jQuerycurobj=$(this)
				var jQuerysubul=$(this).find('ul:eq(0)')
				this._dimensions={w:this.offsetWidth, h:this.offsetHeight, subulw:jQuerysubul.outerWidth(), subulh:jQuerysubul.outerHeight()}
				this.istopheader=jQuerycurobj.parents("ul").length==1? true : false
				jQuerysubul.css({top:"109px"})
				jQuerycurobj.children("a:eq(0)").css(this.istopheader? {paddingRight: arrowsvar.down[2]} : {}).append(
					
				)
				jQuerycurobj.hover(
					function(e){
						//jQuerycurobj.parent().parent().addClass('selected');
						var jQuerytargetul=$(this).children("ul:eq(0)")
						this._offsets={left:$(this).offset().left, top:$(this).offset().top}
						var menuleft=this.istopheader? 0 : this._dimensions.w
						menuleft=(this._offsets.left+menuleft+this._dimensions.subulw>$(window).width())? (this.istopheader? -this._dimensions.subulw+this._dimensions.w : -this._dimensions.w) : menuleft
						if (jQuerytargetul.queue().length<=1) //if 1 or less queued animations
							jQuerytargetul.css({left:menuleft+"px", width:this._dimensions.subulw+'px'}).slideDown(jqueryslidemenu.animateduration.over)
					},
					function(e){
						var jQuerytargetul=$(this).children("ul:eq(0)")
						jQuerytargetul.slideUp(jqueryslidemenu.animateduration.out)
					}
				) //end hover
				jQuerycurobj.click(function(){
					$(this).children("ul:eq(0)").hide()
				})
			}) //end jQueryheaders.each()
			jQuerymainmenu.find("ul").css({display:'none', visibility:'visible'})
		}) //end document.ready
	}
	}
	jqueryslidemenu.buildmenu("main-navigation", arrowimages)
	
	}
	/* NAVIGATION JQUERY ENDS */ 
	
/* =============================================================================
   BEGIN:SELECTED MENU 
   ========================================================================== */
	$(document).ready(function (){
		selectnav('example-nav2', {
			label: '-- Select Menu --',
			nested: true,
			indent: '-'
		});
		
	})
 	/* END BEGIN:SELECTED MENU */ 
	
/* =============================================================================
   FLEXSLIDER 
   ========================================================================== */
	$('#slider').flexslider({
        animation: "fade",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    /* FLEXSLIDER */  
    
    /* FLEXSLIDER BLOG */ 
	$('#slider-blog').flexslider({
        animation: "fade",
        controlNav: false,
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    /* END FLEXSLIDER BLOG*/ 

/* =============================================================================
   CAROUSEL 
   ========================================================================== */
	$('#carousel').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 235,
        controlNav: false,
        move: 1,
      });
    /* END CAROUSEL */
    
/* =============================================================================
   RELATED POST 
   ========================================================================== */
	$('#related').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 255,
        controlNav: false,
        move: 1,
      });
    /* END RELATED POST */
    
/* =============================================================================
   TESTIMONIAL 
   ========================================================================== */	
	$('#testimonials').flexslider({
       animation: "fade",
	   controlNav: true,
	   directionNav: false,
	   animationLoop: true,
      });
    /* END TESTIMONIAL */
    
/* =============================================================================
   GRAYSCALE HTML5 
   ========================================================================== */      
	// Fade in images so there isn't a color "pop" document load and then on window load
	$(".item img").animate({opacity:1},500);
	
	// clone image
	$('.item img').each(function(){
		var el = $(this);
		el.css({"position":"relative"}).wrap("<div class='img_wrapper' style='position: relative;'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
			var el = $(this);
			el.parent().css({"width":"100%","height":"100%"});
			el.dequeue();
		});
		this.src = grayscale(this.src);
	});
	
	// Fade image 
	$('.item img').mouseover(function(){
		$(this).parent().find('img:first').stop().animate({opacity:1}, 500);
	})
	$('.img_grayscale').mouseout(function(){
		$(this).stop().animate({opacity:0}, 500);
	});
	/* END GRAYSCALE HTML5 */ 
	
/* =============================================================================
   BACK TO TOP 
   ========================================================================== */ 	
	// hide #back-top first
	$("#back-top").hide();
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
					}
	});
	// scroll body to 0px on click
	$('#back-top a').click(function () {
		$('body,html').animate({
			scrollTop: 0
			}, 500);
			return false;
			});
	   });
	   /* END BACK TO TOP */
	});
/* =============================================================================
   TOOGLE 
   ========================================================================== */ 	
    $('#toggle-view li').click(function () {
	  var text = $(this).children('p');
	  if (text.is(':hidden')) {
	   text.slideDown('200');
	   $(this).children('span').html('-');  
	  } else {
	   text.slideUp('200');
	   $(this).children('span').html('+');  
	  } 
	 });
/* =============================================================================
   MOSAIC 
   ========================================================================== */	 
	$('.circle').mosaic({
		opacity		:	0.3	//Opacity for overlay (0-1)
	});
/* =============================================================================
   PRETTYPHOTOS 
   ========================================================================== */	
	// prettyPhoto
	$("a[rel^='prettyPhoto']").prettyPhoto();
	$("#work-portfolio:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000});
	$("#work-portfolio:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
	$("#blog-list:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000});
	$("#blog-list:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
	$("#our-portfolio-col-info:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000});
	$("#our-portfolio-col-info:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
/* =============================================================================
   JBar Script by Todd Motto 
   ========================================================================== */		
	$('.jBar').delay(2000).slideUp(function() { // Hides the Hellobar after 2 seconds
		$('.jRibbon').show().removeClass('up', 300); // Get the dropdown effect
		
	});
	$('.jTrigger').click(function(){ // Click it
		$('.jBar').slideToggle(); // Toggle the bar
	});
/* =============================================================================
   OrganicTabs
   ========================================================================== */	
	$("#tab").organicTabs({
                "speed": 200
            });
/* =============================================================================
   Toggle tabslide out + change color demo + change backgroud textbar and twitter bar
   ========================================================================== */	
	//Toggle tabslide out + change color demo
	function checkCSS(){
	  var _css = $.cookie('css');
	  if ( _css ) $('#main-style').attr({href : 'css/'+ _css + '.css'});
	}
	checkCSS();
	$('.color').click(function(e){
		e.preventDefault();
		style = $(this).attr('data-href');
		$('#main-style').attr({href : 'css/'+ style + '.css'});
		$.cookie('css', style);
		//alert('asdasd');
	}); 
	function runEffect() {
        // run the effect
        $( "#effect" ).toggle( 'drop', 300 );
    };

    // set effect from select menu value
    $( "#button-option" ).click(function() {
        runEffect();
        return false;
    });
	
	$("#patterns li div").click(function () {
    	var img = $(this).css("background-image");
    	$(".text-bar").css('background-image',img);
    	$(".twitter-bar").css('background-image',img);
    });
	    
	/* GRAYSCALE HTML5 CANVAS*/ 
	// Grayscale w canvas method
	function grayscale(src){
        var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
        var imgObj = new Image();
		imgObj.src = src;
		canvas.width = imgObj.width;
		canvas.height = imgObj.height; 
		ctx.drawImage(imgObj, 0, 0); 
		var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
		for(var y = 0; y < imgPixels.height; y++){
			for(var x = 0; x < imgPixels.width; x++){
				var i = (y * 4) * imgPixels.width + x * 4;
				var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
				imgPixels.data[i] = avg; 
				imgPixels.data[i + 1] = avg; 
				imgPixels.data[i + 2] = avg;
			}
		}
		ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
		return canvas.toDataURL();
    }
