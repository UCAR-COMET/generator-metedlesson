$(document).ready(function(){
	$('map area').on('click', function(){
		var objname = $(this).attr('href');
		var mapname = $(this).parents('.mapper').attr('name');
		$('.'+mapname).find('.mapper_item').hide();
		$(objname).show();
		return false;
	});
	var res1 = '';
	var correctAnswer = '';
	$('.cfq .submit-button').on('click', function(){
		res1 = $(this).parents('.cfq').find('input:checked').val();
		correctAnswer = $(this).parents('.question-wrap').find('.cr').children('input').val();
		//set switch
		switch (res1) {
			case 'a':
				$(this).parents('.cfq').find('.cfq-fb-a').show();
				break;	
			case 'b':
				$(this).parents('.cfq').find('.cfq-fb-b').show();
				break;	
			case 'c':
				$(this).parents('.cfq').find('.cfq-fb-c').show();
				break;
			case 'd':
				$(this).parents('.cfq').find('.cfq-fb-d').show();
				break;
			default:
				break;
		}
		//Conditional show-after
		if ( res1 === correctAnswer ) {
			$(this).parents('.cfq').find('.cr').addClass('correct-answer');
			$(this).parents('.cfq').next('.cfq-show-after').show();
		}
	});
	$('.ss-reset').on('click', function(){
		$(this).parents('.cfq').find('input:checked').prop('checked', false);
		$(this).parents('.cfq').find('.submit-button').attr('disabled', false);
		$(this).parents('.cfq').find('.submit-button').removeClass('btn-default').addClass('btn-primary');
		$(this).parents('.cfq').find('.cfq-fb').hide();
	});
	if (printVersion === true){
		$(".drag-container").each(function(){
			var fileName = $(this).attr('title');
			$(this).children('.image_holder').append('<img src="' +fileName+ '" class="img-responsive center-block" />');
		});
		$('.drawing-question').each(function() {
			var drw3Image = $(this).data('image');
			var drw3Path = 'media/graphics/';
			$(this).addClass('question-wrap-draw panel panel-default');
	   		$(this).append('<div class="drawing-container center-block" title="' + drw3Path + drw3Image + '" ></div>');
			$(this).children('.drawing-container').append('<div class="canvas-wrap"></div>');
			$(this).children('.answer').appendTo(this);
		});
		$(".drawing-container").each(function() {
			var fileName = $(this).attr('title');
			$(this).find('.canvas-wrap').prepend('<img class="background img-responsive center-block" src="'+fileName+'" alt="background image" style="position: relative;">');
		});
	}
});