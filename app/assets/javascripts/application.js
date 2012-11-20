// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
// Loads all Bootstrap javascripts
//= require bootstrap
//= require_tree .
$(document).ready(function() {
  $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });
  
  // set frontpage columns to equal height
  if ( $(window).width() > 767){
    columns = $('.frontpageTopColumn');
    maxHeight = Math.max.apply(
      Math, columns.map(function() {
        return $(this).height();
    }).get());
    columns.height(maxHeight);
    $('#calendar_iframe').height(maxHeight-60);
  }
});
