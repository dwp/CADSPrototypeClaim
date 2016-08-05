var IE10 = (navigator.userAgent.match(/(MSIE 10.0)/g) ? true : false);
if (IE10) {
	$('html').addClass('ie10');
}
var IE11 = (navigator.userAgent.match(/(MSIE 11.0)/g) ? true : false);
if (IE11) {
	$('html').addClass('ie11');
}


// Chris' datepicker
function datepicker(dateFieldId) {
    return $(dateFieldId).datepicker({
        dateFormat: 'dd/mm/yy',
        showButtonPanel: true,
        closeText: 'Clear',
        onClose: function (dateText, inst) {
            if ($(window.event.srcElement).hasClass('ui-datepicker-close'))
            {
                document.getElementById(this.id).value = '';
            }
        }
    });
}


    
    
$(function() {    
    // view more / view less
$(".helper-info").css("display", "none");
$('.helper-more').click(function(){
   var labelText = $(this).text() === $(this).attr('data-close')? $(this).attr('data-initial') : $(this).attr('data-close');

        $(this).toggleClass("helper-less")
        $(this).next(".helper-info").slideToggle();

        $(this).text(labelText);
});    


// Add the "focus" value to class attribute 
  $('ul.radio li label').focusin( function() {
    $(this).addClass('focus');
  }
  );

  // Remove the "focus" value to class attribute 
  $('ul.radio li label').focusout( function() {
    $(this).removeClass('focus');
  }
  );



// Help & Feedback container
     $("#answerNoMessageWrap").css("display", "none");
     $('.no-button span, .no-button input').click(function(){
     	$( "#answerNoMessageWrap" ).show();
     });
     
     $("#answerNoMessageWrap").css("display", "none");
     $('.yes-button span, .yes-button input').click(function(){
     	$( "#answerNoMessageWrap" ).hide();
     });


    
	// show - hide - remove
     $(".open-detail").css("display", "none");

     $('.show-detail span, .show-detail input').click(function(){
     	$( ".open-detail" ).toggle();
     	//$(this).toggleClass("active-detail")
     });

/*
	  $('.remove-detail span, .remove-detail input').click(function(){
	    $( ".open-detail" ).hide();
	  });
	  */
	  
	  
	  
	  // show - hide - remove
     $(".open-detail2").css("display", "none");
     $('.show-detail2 span, .show-detail2 input').click(function(){
     	$( ".open-detail2" ).show();
     	$(this).toggleClass("active-detail")
     });

	  $('.remove-detail2 span, .remove-detail2 input').click(function(){
	    $( ".open-detail2" ).hide();
	  });
	  
	  // show - hide - remove
     $(".open-detail3").css("display", "none");
     $('.show-detail3 span, .show-detail3 input').click(function(){
     	$( ".open-detail3" ).show();
     	$(this).toggleClass("active-detail")
     });

	  $('.remove-detail3 span, .remove-detail3 input').click(function(){
	    $( ".open-detail3" ).hide();
	  });
	  
	  
	  
	   // show - hide - remove
     $(".open-detail4").css("display", "none");
     $('.show-detail4 span, .show-detail4 input').click(function(){
     	$( ".open-detail4" ).show();
     	$( ".open-detail5" ).hide();
     	$(this).toggleClass("active-detail")
     });

	  $('.remove-detail4 span, .remove-detail4 input').click(function(){
	    $( ".open-detail4" ).hide();
	  });
	  
	  
	   // show - hide - remove
     $(".open-detail5").css("display", "none");
     $('.show-detail5 span, .show-detail5 input').click(function(){
     	$( ".open-detail5" ).show();
     	$( ".open-detail4" ).hide();
     	$(this).toggleClass("active-detail")
     });

	  $('.remove-detail5 span, .remove-detail5 input').click(function(){
	    $( ".open-detail5" ).hide();
	  });

	  // show - hide - remove

	  $(".open-detail6").css("display","none");
	  $('.show-detail6 span, .show-detail6 input').click(function() {
	    $( ".open-detail6" ).show();
	    $( ".open-detail5" ).hide();
	    $(this).toggleClass("active-detail")
	    });

	  $('remove-detail6 span, .remove-detail6 input').click(function() {
	    $( ".open-detail6" ).hide();
	    });
	  
	  
	  
	   // show - hide - checkbox
     $(".open-check").css("display", "none");
     $('.show-check input, .show-check label').click(function(){
     	$( ".open-check" ).show();
     	$(this).toggleClass("open-check")
     });


// Help & Feedback container
     $('.helper-mobile a').click(function(){
     	$( ".left-col" ).slideToggle(0);
     	$(this).toggleClass("open-helper")
     });


     
     // Non JS message 
     $(".js-message").css("display", "none");
     $(".feed-close").css("display", "block");
     
    // Nino auto jump
	//$('.ni-number input, .sort-code input, .year input').autotab_magic();

    // smooth scroll
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').animate({
            scrollTop: $(target).offset().top - 40
        }, 750, 'swing', function () {
            window.location.hash = target;
        });
    });

});

$(document).ready(function() {
    if (typeof console !== 'undefined') {
        console.log("document on ready " + areCookiesEnabled() );
    }

    if (areCookiesEnabled())  {
        $('#no-cookies').toggle(false);
        $('#content').toggle(true);
    }else{
        $('#no-cookies').toggle(true);
        $('#content').toggle(false);
    }

});



function areCookiesEnabled(){
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled)
    {
        document.cookie="testcookie";
        cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }
    return (cookieEnabled);
}

function trackEvent(category, action, label, value, noninteraction){
    _gaq.push(['_trackEvent',category,action].concat(opt(label)).concat(opt(value)).concat(opt(noninteraction)));
}

function trackVirtualPageView(category){
    _gaq.push(['_trackPageview',category]);
}

function opt(v){
    if (typeof v == 'undefined') return [];
    else return[v];
}