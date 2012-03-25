jQuery(function($) {

var loaded = false;
$('#search-site,#searchGadget').keypress(function() {
  var $crab = $('.crabby');
  if (!$crab.length) {
  	$crab = $('<div class="crabby"><div class="arm"><div class="claw"></div></div></div>')
	.appendTo('body');
  }
  if ($(this).val() == 'cioppino') {
  	$crab.addClass('attacking');
  	$(document).bind('click', function() {
  		$crab.removeClass('attacking');
  	});
  }
});

});
