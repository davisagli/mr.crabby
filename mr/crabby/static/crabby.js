jQuery(function($) {

var $crab = $('<div class="crabby"><div class="arm"><div class="claw"></div></div></div>')
	.appendTo('body');
$('#search-site,#searchGadget').keypress(function() {
  if ($(this).val() == 'cioppino') {
  	$crab.addClass('attacking');
  	$(document).bind('click', function() {
  		$crab.removeClass('attacking');
  	});
  }
});

});
