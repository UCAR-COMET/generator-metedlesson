// MENU TOGGLE BUTTON
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

// DOWNLOAD CLEANUP
$(document).ready(function() {
    // acquire real content then remove junk
    var $content_area = $('#maincontent');
    var $agreement = $('#dl_agree');
        $agreement.hide(); // hide while fussing
    var $agree_content = $agreement.find('#form1 table tr td:first').html();
    var $yes_accept = $agreement.find('input:first');
    var $no_accept = $agreement.find('input:last');
    var $notice = $agreement.find('td:last p:last');

    // create new license div
    $content_area.append('<div id="license_agree"></div>');
    var $new_license = $('#license_agree');
        $new_license.append($agree_content);
        $new_license.before('<h3 style="text-align:center">License Agreement</h3>');
        $new_license.after('<div id="agree_btns"><span></span><span></span></div>');
    var $agree_btns = $('#agree_btns');
        $agree_btns.children('span:first').append($yes_accept);
        $agree_btns.children('span:last').append($no_accept);
        $agree_btns.children('span:first input').addClass('agree').attr('value', 'I Accept');
        $agree_btns.children('span:last input').attr('value', 'I do not accept');
    // add LC2+ styling
    $('#agree_btns input:first').addClass('btn btn-primary');
    $('#agree_btns input:last').addClass('btn btn-primary').css('margin-left', '6px');
        $agree_btns.after($notice);
        //$agree_btns.after('<h4>Notice!</h4>');  //This notice should be removed past JAN/2021
        $content_area.find('p:last').removeAttr('style');
        $agreement.remove();
});