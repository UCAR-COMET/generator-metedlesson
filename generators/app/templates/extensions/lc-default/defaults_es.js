// ********************************************************************* //
// * LC Default SPANISH functions generated for:
// * <%= lessonTitle %> (<%= lessonID %>)
// ********************************************************************* //

var moduleID = '<%= lessonID %>';

$(document).ready(function () {
	$('.tab-pane > h3').each(function () {
		$(this).insertBefore($(this).parent());
	});
});
// ===============================
// MODULE PRINT VIEW CONTROL
// ===============================
$(document).ready(function () {
	// Auto controls hiding of elements in Print View or Module View.
	if (printVersion) {
		$(document.body).addClass('prt');
	}
	else {
		$(document.body).addClass('dyn');
	};
});

// ===============================
// JQUERY UI COMPONENTS
// ===============================

// Sortable List Items (jQuery UI)
$(function () {
	$('.sortable').sortable({ placeholder: 'ui-state-highlight' });
	$('.sortable').disableSelection();
});

// Back-to-Top Button
$(function () {
	// hide .back-top first
	$('.back-top').hide();
	// fade in .back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.back-top').fadeIn();
			} else {
				$('.back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('.back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});

// ===============================
// BOOTSTRAP COMPONENTS
// ===============================

// Tooltips and Popovers
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
	$('.lc-tip, .lc-tip-top').tooltip({ placement: 'top' });
	$('.lc-tip-right').tooltip({ placement: 'right' });
	$('.lc-tip-bottom').tooltip({ placement: 'bottom' });
	$('.lc-tip-left').tooltip({ placement: 'left' });

	$('[data-toggle="popover"]').popover();
	$('.lc-pop, .lc-pop-top').popover({ placement: 'top' });
	$('.lc-pop-right').popover({ placement: 'right' });
	$('.lc-pop-bottom').popover({ placement: 'bottom' });
	$('.lc-pop-left').popover({ placement: 'left' });
});

// TABLE OF CONTENTS - Scroll Spy
$(function () {
	$('body').scrollspy({ target: '.sidebar-toc' });
});


// ===============================
// LEARNING INTERACTIONS
// ===============================
$(function () {

	// MULTIPLE CHOICE QUESTION - RADIO BUTTONS
	$('.radio .submit-button').click(function () {
		var my_boolean = false;
		for (i = 1; i < this.form.length - 1; i++) {
			if (this.form[i].checked == true) {
				my_boolean = true;
			}
		}//end for loop

		if (my_boolean) {
			//alert(i);
			$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
			$(this).parent().parent().parent().children('.answer')
				.css('display', 'block');
			$(this).parent().parent().parent().children('.message')
				.css('display', 'none');
			$(this).siblings('.correct')
				.addClass('correct-answer');

			$(this).closest('.question-wrap').next('.show-after').show();
			$(this).closest('.interaction-question').next('.show-after').show();
			$(this).closest('.show-after').next('.show-after').show();
		} else {
			$(this).parent().parent().parent().children('.answer')
				.css('display', 'none');
			$(this).parent().parent().parent().children('.message')
				.css('display', 'block');
			$(this).siblings('.correct')
				.removeClass('correct-answer');
		}//end if else
	});

	// MULTIPLE SELECT QUESTIONS - CHECKBOXES
	$('.checkboxes .submit-button').click(function () {
		var my_boolean = false;
		for (i = 1; i < this.form.length - 1; i++) {
			if (this.form[i].checked == true) {
				my_boolean = true;
			}
		}//end for loop

		if (my_boolean) {
			//alert(i);
			$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
			$(this).parent().parent().parent().children('.answer')
				.css('display', 'block');
			$(this).parent().parent().parent().children('.message')
				.css('display', 'none');
			$(this).siblings('.correct')
				.addClass('correct-answer');

			$(this).closest('.question-wrap').next('.show-after').show();
			$(this).closest('.interaction-question').next('.show-after').show();
			$(this).closest('.show-after').next('.show-after').show();
		} else {
			$(this).parent().parent().parent().children('.answer')
				.css('display', 'none');
			$(this).parent().parent().parent().children('.message')
				.css('display', 'block');
			$(this).siblings('.correct')
				.removeClass('correct-answer');
		}//end if else
	});

	// SHORT/LONG ANSWER QUESTION - TEXT ENTRY 
	$('.textentry .submit-button').click(function () {
		$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
		$(this).closest('.question-wrap').find('.answer').show();
		$(this).closest('.question-wrap').find('.correct').addClass('correct-answer');
		$(this).closest('.question-wrap').next('.show-after').show();

		$(this).closest('.interaction-question').next('.show-after').show();
		$(this).closest('.show-after').next('.show-after').show();
	});

	// SHORT/LONG ANSWER QUESTION (MINIMUM CHARACTER REQUIREMENT) - TEXT ENTRY
	$('.req-text').each(function () {
		$('.req-text .submit-button').click(function () {
			var inputText = $(this).parent().find('.text-response').val();
			var characterMin = $(this).parent().find('.text-response').attr('data-text-min');

			if (inputText.length > characterMin) {
				$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
				$(this).closest('.question-wrap').find('.answer').show();
				$(this).closest('.question-wrap').find('.correct').addClass('correct-answer');
				$(this).closest('.question-wrap').next('.show-after').show();
				$(this).parent().parent().siblings('.message').css('display', 'none');

				$(this).closest('.interaction-question').next('.show-after').show();
				$(this).closest('.show-after').next('.show-after').show();
			}
			else {
				$(this).parent().parent().siblings('.message').css('display', 'block');
			}
		});
	});

	// COMPLETE THE STATEMENT - INLINE DROPDOWNS
	$('.inlinedropdowns .submit-button').click(function () {
		var my_boolean = false;
		var ddArray = [];
		var ddCount = $(this).parents('.inlinedropdowns').find('select option:selected').length;
		for (i = 0; i < ddCount; i++) {
			var selectedOption = $(this).parents('.inlinedropdowns').find('select').eq(i).children('option:selected').val();
			ddArray.push(selectedOption);
			if (selectedOption !== "--") {
				my_boolean = true;
			}
		}//end for loop
		if (my_boolean) {
			$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
			$(this).parent().children('.dropdown_correct').css('display', 'block');
			$(this).parent().parent().parent().children('.answer').css('display', 'block');
			$(this).parent().parent().siblings('.message').css('display', 'none');
			$(this).siblings('.correct').addClass('correct-answer');

			//display show-after
			$(this).closest('.question-wrap').next('.show-after').show();
			$(this).closest('.interaction-question').next('.show-after').show();
			$(this).closest('.show-after').next('.show-after').show();
		} else {
			$(this).parent().parent().siblings('.message').css('display', 'block');
		}
	});

	// REORDERING QUESTIONS - SORTABLE LIST
	$('.reordering .submit-button').click(function () {
		$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
		$(this).parent().children('.dropdown-correct')
			.css('display', 'block');
		$(this).parent().parent().parent().children('.answer')
			.css('display', 'block');
		$(this).siblings('.correct')
			.addClass('correct-answer');

		$(this).closest('.question-wrap').next('.show-after').show();
		$(this).closest('.interaction-question').next('.show-after').show();
		$(this).closest('.show-after').next('.show-after').show();
	});

	// NESTED QUESTION - Reset
	$('.show-after').hide();

	// DRAG AND DROP QUESTION - Done
	$('.question-wrap-drag .done_drag').click(function () {
		$(this).closest('.question-wrap-drag').find('.answer').show();
		$(this).closest('.question-wrap-drag').find('.correct').addClass('correct-answer');
		$(this).closest('.question-wrap-drag').next('.show-after').show();
	});
	// DRAG AND DROP QUESTION - Reset
	$('.question-wrap-drag .reset_drag').click(function () {
		$(this).closest('.question-wrap-drag').find('.answer').hide();
		$(this).closest('.question-wrap-drag').find('.correct').removeClass('correct-answer');
		$(this).closest('.question-wrap-drag').next('.show-after').hide();
	});

	// DRAWING QUESTION - Done
	$('.question-wrap-draw .done').click(function () {
		$(this).closest('.question-wrap-draw').find('.answer').show();
		$(this).closest('.question-wrap-draw').find('.correct').addClass('correct-answer');
		$(this).closest('.question-wrap').find('.answer').show();
		$(this).closest('.question-wrap-draw').next('.show-after').show();
	});
	// DRAWING QUESTION - Reset
	$('.question-wrap-draw .reset').click(function () {
		$(this).closest('.question-wrap-draw').find('.answer').hide();
		$(this).closest('.question-wrap-draw').find('.correct').removeClass('correct-answer');
		$(this).closest('.question-wrap').find('.answer').show();
		$(this).closest('.question-wrap-draw').next('.show-after').hide();
	});

});


// ===============================
// Radio Button Image Switcher
// ===============================
$(document).ready(function () {
	$('.radio-image-selector').each(function () {
		$(this).find('.rs-list li input').each(function (r) {
			var inputValue = r;
			$(this).val(r);
		});
		var currentInput = $(this).find('input[type=radio]:checked').val();
		currentInput = parseInt($(this).find(':checked').val());
		//currentInput += -1; used with manual values to begin index @ 1

		$(this).children('.rs-content').children().eq(currentInput).css('display', 'block');

		$(this).on('input[type=radio]').change(function () {
			currentInput = parseInt($(this).find(':checked').val());
			//currentInput += -1; used with manual values to begin index @ 1
			$(this).find('.rs-content').children().css('display', 'none');
			$(this).find('.rs-content').children().eq(currentInput).css('display', 'block');

		});
		var listChildNum = $(this).find('.rs-list').children().length;
		var contentChildNum = $(this).find('.rs-content > *').length;
		if (listChildNum !== contentChildNum) {
			$(this).prepend('<p style="font-weight:bold; font-style:italic; color:red;">Number of radio buttons does NOT match number of content items!</p>');
		}
	});
});


// ===============================
// Collapsible panel icon indicator
// ===============================
$(document).ready(function () {
	function togglePanelIcon(e) {
		$(e.target)
			.prev('.panel-heading')
			.find('.glyphicon')
			.toggleClass('glyphicon-plus-sign glyphicon-minus-sign');
	}
	$('.panel-collapse').on('hidden.bs.collapse', togglePanelIcon);
	$('.panel-collapse').on('shown.bs.collapse', togglePanelIcon);
});


// ===============================
// PROGRAMMER NOTES
// ===============================
$(document).ready(function () {
	// Convert preprogrammer notes to programmer notes
	$('.preprogram-note').each(function (noteCount) {
		var progNoteID = "pnote-" + noteCount;
		$(this).prepend('<div class="panel-heading"><h4 class="panel-title"><a href="#' + progNoteID + '" data-toggle="collapse">&lt;Programmer Note&gt;</a></h4></div>');
		$(this).addClass('panel');
		$(this).children('p').wrap('<div id="' + progNoteID + '" class="panel-collapse collapse"><div class="panel-body"></div></div>');
		$(this).removeClass('preprogram-note').addClass('programmer-note');
	});
});


// ===============================
// PRECURSOR INTERACTIONS
// ===============================
$(document).ready(function () {
	// Convert predraw to drawing
	$('.predrawing-question').each(function () {
		$(this).addClass('drawing-question').removeClass('predrawing-question');
	});

	// DRAW INTERACTIONS --
	var backgroundImg;
	var colors = [];
	var brushSizes = [];
	$('.pre-draw').each(function () {
		$(this).prepend('<div class="panel-body"></div>');
		$(this).children('p').wrap('<div></div>');
		$(this).removeClass('pre-draw').addClass('drawing-question');
	});
});


// ===============================
// MODULE TITLE
// ===============================
$(document).ready(function () {
	var moduleTitle = $('title').text();
	$('.module-title-text').html(moduleTitle);
});


// ===============================
// MODULE QUIZ AND SURVEY PROMPTS
// ===============================

// Module Preassessment, Quiz, and Survey Modal Prompts
$(document).ready(function () {
	// Preassessment Text
	$('#preassessment-message').prepend('<div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="preassessment-label">Preevaluaci&oacute;n</h4></div><div class="modal-body" id="module-preassessment-modal"><p>Antes de comenzar, haga clic en el bot&oacute;n que aparece a continuaci&oacute;n y complete esta breve preevaluaci&oacute;n.<br><br>La preevaluaci&oacute;n, que cubre el material que se presenta en la lecci&oacute;n que est&aacute; a punto de estudiar, le ayudar&aacute; a evaluar su nivel de comprensi&oacute;n actual del tema. Una vez que termine la lecci&oacute;n podr&aacute; tomar una prueba con preguntas muy parecidas. La comparaci&oacute;n de los dos resultados le permitir&aacute; ver cu&aacute;nto aprendi&oacute;; asimismo, nos permitir&aacute; saber en qu&eacute; medida la lecci&oacute;n logra sus objetivos.</p></div>');
	
	// Quiz Prompt
	//var moduleQuiz = $('#quiz-prompt').attr('data-item-id');
	$('#quiz-prompt').append('<div id="userQuiz" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="userquiz-label" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="userquiz-label">Prueba</h4></div><div class="modal-body" id="module-userquiz-modal"><p>Si est&aacute; viendo esta p&aacute;gina desde una versi&oacute;n descargada de la lecci&oacute;n, deber&aacute; conectarse a internet para tomar la prueba. Si no tiene una sesi&oacute;n abierta en MetEd o necesita crear una cuenta de MetEd, recibir&aacute; un mensaje al respecto. Cada vez que haga clic en <i>Pregunta siguiente</i>, el sistema guardar&aacute; sus respuestas, incluso si cierra el navegador y contin&uacute;a en alg&uacute;n otro momento. Puede saltar preguntas y volver a ellas en cualquier momento. Una vez que haya guardado una respuesta para todas las preguntas, el sistema calcular&aacute; y le presentar&aacute; el resultado de la prueba.</p></div><div class="modal-footer"> <a class="btn btn-default" href="/lesson/'+moduleID+'/quiz" target="_blank">Comenzar la prueba &raquo;</a> </div></div></div></div>');
	
	// Survey Prompt
	$('#quiz-prompt').append('<div id="userSurvey" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="usersurvey-label" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="usersurvey-label">Encuesta al usuario</h4></div><div class="modal-body" id="module-usersurvey-modal"><p>No podemos mejorar sin su ayuda. T&oacute;mese el tiempo de enviarnos su opini&oacute;n sobre esta lecci&oacute;n. Sus respuestas nos ayudar&aacute;n a crear materiales de instrucci&oacute;n m&aacute;s eficaces en el futuro.<br><br>Haga clic en el enlace siguiente para abrir la breve encuesta de satisfacci&oacute;n. Si est&aacute; viendo esta p&aacute;gina desde una versi&oacute;n descargada de la lecci&oacute;n, deber&aacute; conectarse a internet para participar en la encuesta. Si no tiene una sesi&oacute;n abierta en MetEd o necesita crear una cuenta en MetEd, recibir&aacute; un mensaje al respecto.</p></div><div class="modal-footer"> <a class="btn btn-default" href="/lesson/'+moduleID+'/survey" target="_blank">Comenzar la encuesta &raquo;</a> </div></div></div></div>');

	// Booster Link
	if (moduleID !== '0000') {
		$('#booster-link').attr('href', 'https://meted.ucar.edu/lesson/' + moduleID + '/booster');
	}
});