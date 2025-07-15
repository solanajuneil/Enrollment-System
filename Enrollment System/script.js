$(document).ready(function() {
  
    //parsley validation
    var $carousel = $('#enrollmentCarousel');
    var $sections = $('.carousel-item');
    var $accordions = $('#accordion .collapse');
    var $accordion = $('#accordion');
    
    function curIndex() {
    // Return the current index by looking at which section has the class 'current'
        return $sections.index($sections.filter('.active'));
    }
    
    function accordIndex() {
    // Return the current index by looking at which section has the class 'current'
        return $accordions.index($accordions.filter('.show'));
    }

    // Previous button is easy, just go back
    $('.prev').click(function() {
        $carousel.carousel('prev');
    });
    
    $('.enrollment-form').parsley().options.requiredMessage = "Invalid Entry";
    
    // Next button goes forward iff current block validates
    $('.next').click(function() {
        $('.enrollment-form').parsley().whenValidate({
          group: 'block-' + curIndex()
        }).done(function() {
          $('.carousel-indicators li').eq(curIndex()).addClass('done');
          $carousel.carousel('next');
        });
    });
    
    //Continue through accordions
    $('.continue').click(function(e) {
        e.preventDefault();
        $('.enrollment-form').parsley().whenValidate({
          group: 'accordion-' + accordIndex()
        }).done(function() {
          navigateTo(accordIndex() + 1);
        });
    });
  
    function navigateTo(index) {
        // Mark the current section with the class 'current'
        $accordions.eq(index-1).prev('h3').addClass('complete');
        $accordions
          .collapse('hide')
          .eq(index)
            .collapse('show');
    }
    
    //prevent opening accordions before the section is completed
    $("h3[data-toggle='collapse']").click(function(event) {
        if (!$(this).hasClass('complete')){
            event.stopPropagation();
        }
    });
    
    //prevent moving through carousel before section is completed
    $("li[data-slide-to]").click(function(event) {
        if (!$(this).hasClass('done')){
            event.stopPropagation();
        }
    }); 
    
    $accordions.on('shown.bs.collapse', function() {    
      var $panel = $(this).prev('h3');
      $('html,body').animate({
        scrollTop: $panel.offset().top
      }, 250);
    });
    
    // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
    $sections.each(function(index, section) {
        $(section).find(':input').attr('data-parsley-group', 'block-' + index);
    });
    $accordions.each(function(index, accordion) {
        $(accordion).find(':input').attr('data-parsley-group', 'accordion-' + index);
    });
    
    
    //masking for various inputs
  $('.phone').mask('09000000000');
  $('.zip').mask('0000');
});