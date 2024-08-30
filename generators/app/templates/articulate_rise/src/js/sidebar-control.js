$(document).ready(function(){
    $('.nav-control__button').click(function(){
      var ariaExpanded = $(this).attr('aria-expanded');
      if(ariaExpanded == 'true'){
        $(this).attr('aria-expanded', 'false');
        $('.course-navigation__sidebar').attr('aria-hidden', 'true').removeClass('course-navigation__sidebar--nav-open');
      } else {
        $(this).attr('aria-expanded', 'true');
        $('.course-navigation__sidebar').attr('aria-hidden', 'false').addClass('course-navigation__sidebar--nav-open');
      }
    });
  });