$(document).ready(function() {
	$('.ui.dropdown')
		.dropdown()

	$('.message .close')
	.on('click', function() {
		$(this)
		.closet('.message')
		.transition('fade')
		;
	})
	;

	$('#modal-btn').click(function() {
		$('.ui.modal')
		.modal('show')
		;
	})
;
}) 