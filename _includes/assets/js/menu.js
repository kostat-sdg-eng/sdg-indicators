$(function() {

  var topLevelSearchLink = $('.top-level span:eq(1), .top-level button:eq(1)');

  var resetForSmallerViewport = function() {
    topLevelSearchLink.text('Search');
    $('.top-level li').removeClass('active');
    $('.top-level span').removeClass('open');
  };  
  
  var topLevelMenuToggle = document.querySelector("#menuToggle");
  
  topLevelMenuToggle.addEventListener("click", function(){
    setTopLevelMenuAccessibilityActions();
  });
  function setTopLevelMenuAccessibilityActions(){
    if(topLevelMenuIsOpen()){
      setAriaExpandedStatus(true);
      focusOnFirstMenuElement();
    }
    else{
      setAriaExpandedStatus(false);
    }
    function topLevelMenuIsOpen(){
      return topLevelMenuToggle.classList.contains("active");
    }
    function setAriaExpandedStatus(expandedStatus){
      topLevelMenuToggle.setAttribute("aria-expanded", expandedStatus.toString());
    }
    function focusOnFirstMenuElement(){
      var firstMenuElement = getFirstMenuElement();
      firstMenuElement.focus();
    }
    function getFirstMenuElement(){
      return document.querySelector("#menu .nav-link:first-child a");
    }
  }

  $('.top-level span, .top-level button').click(function() {
    var target = $(this).data('target');

    $('.top-level li').removeClass('active');
    topLevelSearchLink.text('Search');

    var targetEl = $('#' + target);
    var wasVisible = targetEl.is(':visible');

    // hide everything:
    $('.menu-target').hide();
    $(".top-level li button[data-target='" + target + "']").attr("aria-expanded", "false");

    if(target === 'search') {
      $(this).toggleClass('open');
      
      if($(this).hasClass('open') || !wasVisible) {
        $(this).text('Hide');
      } else {
        $(this).text('Search');
      }
    } else {
      // menu click, always hide search:
      topLevelSearchLink.removeClass('open');
      topLevelSearchLink.text('Search');
    }

    if(!wasVisible) {
      targetEl.show();
      $(".top-level li button[data-target='" + target + "']").attr("aria-expanded", "true");
      $(this).parent().addClass('active');
    }
  });

  $(window).on('resize', function(e) {
    var viewportWidth = window.innerWidth,
        previousWidth = $('body').data('vwidth'),
        breakpointWidth = 768;

    if(viewportWidth > breakpointWidth && previousWidth <= breakpointWidth) {
      // switched to larger viewport:
      $('.menu-target').show();
    } else if(previousWidth >= breakpointWidth && viewportWidth < breakpointWidth) {
      // switched to smaller viewport:
      $('.menu-target').hide();
      resetForSmallerViewport();
    }

    // update the viewport width:
    $('body').data('vwidth', viewportWidth);
  });
});
