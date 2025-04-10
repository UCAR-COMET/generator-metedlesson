//========================
// ASMET multiselect sweeper
//========================
// Setup sweeper functionality
$(document).ready(function() {


//BASIC TYPE 1
$('.dynamic-slider').each(function(){

// Setup vars
var leftSide = $(this).find('.left-as-image');
var rightSide = $(this).find('.right-as-image');
var leftProduct = $(this).find('[name=ld]').val();
var rightProduct = $(this).find('[name=rd]').val();
//var imagePath = $(this).find('.as-form').data('path');

	
// Initial load images
$(this).find('.left-as-image').attr('src', 'media/graphics/' + leftProduct);
$(this).find('.right-as-image').attr('src', 'media/graphics/' + rightProduct);


// On change switching
$('.as-form').on('change', function() {
	leftSide = $(this).parents('.dynamic-slider').find('.left-as-image');
	rightSide = $(this).parents('.dynamic-slider').find('.right-as-image');
	leftProduct = $(this).find('[name=ld]').val();
	rightProduct = $(this).find('[name=rd]').val();
	imagePath = $(this).data('path');
		
	// Left image comp switch
	switch (leftProduct) {
		case 'ir':
			$(leftSide).attr('src', 'media/graphics/' + leftProduct);
			break;
			
		default:
			$(leftSide).attr('src', 'media/graphics/' + leftProduct );
			break;
	}
	
	
	// Right image comp switch
	switch (rightProduct) {
		case 'ir':
			$(rightSide).attr('src', 'media/graphics/' + rightProduct);
			break;
			
		default:
			$(rightSide).attr('src', 'media/graphics/' + rightProduct );
			break;
	}
	
});


//Run init on load
	if (printVersion) {
		// Display Images (Take NO Action)
	}
	else {
		// Activate Sweeper
		$('.as-sweeper').twentytwenty({
	  		default_offset_pct: 0.5
		});
	}


});

// Initialize sweeper for interactive version
$(window).on('load', function(){
	// Generate Image Sweepers
	if (printVersion) {
		// Display Images (Take NO Action)
	}
	else {
		// Activate Sweeper
		$('.as-sweeper').twentytwenty({
	  		default_offset_pct: 0.5
		});
	}
});


});