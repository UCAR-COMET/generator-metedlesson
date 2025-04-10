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
var imagePath = $(this).find('.as-form').data('path');

	
// Initial load images
$(this).find('.left-as-image').attr('src', 'media/graphics/' + imagePath + leftProduct + '.jpg');
$(this).find('.right-as-image').attr('src', 'media/graphics/' + imagePath + rightProduct + '.jpg');


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
			$(leftSide).attr('src', 'media/graphics/' + imagePath + leftProduct + '.jpg');
			break;
			
		case 'nir':
			$(leftSide).attr('src', 'media/graphics/' + imagePath + leftProduct + '.jpg');
			break;
		
		case 'ir_enh':
			$(leftSide).attr('src', 'media/graphics/' + imagePath + leftProduct + '.jpg');
			break;
		
		case 'wv':
			$(leftSide).attr('src', 'media/graphics/' + imagePath + leftProduct + '.jpg');
			break;
			
		case 'scon':
			$(leftSide).attr('src', 'media/graphics/' + imagePath + leftProduct + '.jpg');
			break;
			
		case 'dust':
			$(leftSide).attr('src', 'media/graphics/' + imagePath + leftProduct + '.jpg');
			break;
		
		case 'ncol':
			$(leftSide).attr('src', 'media/graphics/' + imagePath + leftProduct + '.jpg');
			break;
		
		case 'night_micro':
			$(leftSide).attr('src', 'media/graphics/' + imagePath + leftProduct + '.jpg');
			break;
		
		case 'nir_south':
			$(leftSide).attr('src', 'media/graphics/' + imagePath + leftProduct + '.jpg');
			break;
			
		default:
			$(leftSide).attr('src', 'media/graphics/' + imagePath + leftProduct + '.jpg');
			break;
	}
	
	
	// Right image comp switch
	switch (rightProduct) {
		case 'ir_enh':
			$(rightSide).attr('src', 'media/graphics/' + imagePath + rightProduct + '.jpg');
			break;
		
		case 'wv':
			$(rightSide).attr('src', 'media/graphics/' + imagePath + rightProduct + '.jpg');
			break;
			
		case 'scon':
			$(rightSide).attr('src', 'media/graphics/' + imagePath + rightProduct + '.jpg');
			break;
			
		case 'dust':
			$(rightSide).attr('src', 'media/graphics/' + imagePath + rightProduct + '.jpg');
			break;
		
		case 'ncol':
			$(rightSide).attr('src', 'media/graphics/' + imagePath + rightProduct + '.jpg');
			break;
		
		case 'night_micro':
			$(rightSide).attr('src', 'media/graphics/' + imagePath + rightProduct + '.jpg');
			break;
		
		case 'nir_south':
			$(rightSide).attr('src', 'media/graphics/' + imagePath + rightProduct + '.jpg');
			break;
			
		case 'dust_south':
			$(rightSide).attr('src', 'media/graphics/' + imagePath + rightProduct + '.jpg');
			break;
		
		case 'convection_south':
			$(rightSide).attr('src', 'media/graphics/' + imagePath + rightProduct + '.jpg');
			break;
		
		case 'Nat_colour_south':
			$(rightSide).attr('src', 'media/graphics/' + imagePath + rightProduct + '.jpg');
			break;
		
		case 'night_microphysics_south':
			$(rightSide).attr('src', 'media/graphics/' + imagePath + rightProduct + '.jpg');
			break;
			
		default:
			$(rightSide).attr('src', 'media/graphics/' + imagePath + rightProduct + '.jpg');
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