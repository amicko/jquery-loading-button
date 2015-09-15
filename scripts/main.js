'use strict';

var $loadButton = $('#loadButton');
// var widget = $( '.selector' ).progressbar( 'widget' );

function $loadSubmit() {
	$loadButton.prop('disabled', false);
	$loadButton.html('Submit');
}

$loadButton.on('click', function() {
	$(this).prop('disabled', true)
	$(this).html('Loading...');
	setTimeout($loadSubmit, 2000);
})

