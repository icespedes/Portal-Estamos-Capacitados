$(document).ready(function(){

	/*OPTION REGISTRO DE USUARIO*/
	$('#opUserPesd').click(function() {
		$('#selectInstitution').show();
	});

	$('#opUser').click(function() {
		$('#selectInstitution').hide();
	});


  /*RESULTADO DE BUSQUEDA - OCULTAR ESTRELLAS*/
  //$('.searchPageCardBox').on('mouseover', function(){

  //	$('.rating-widget').removeClass('hidden').animate();

  //}).on('mouseout', function(){
  //	$('.rating-widget').addClass('hidden');
  //});

  /*RATING HEART*/
	$('.kv-ltr-theme-svg-alt').rating({
	    hoverOnClear: false,
	    theme: 'krajee-svg',       
	    containerClass: 'is-heart',
	    filledStar: '<span class="krajee-icon krajee-icon-heart"></span>',
	    emptyStar: '<span class="krajee-icon krajee-icon-heart"></span>',
	    defaultCaption: '{rating} hearts',
	    displayOnly: true,
	    starCaptions: function (rating) {
	        return rating == 1 ? 'One heart' : rating + ' hearts';
	    }
	});
  
  //$('.kv-fa-heart').on(
  //  	'change', function () {
  //	       console.log('Rating selected: ' + $(this).val());
  //        });


	/*******UTILIDADES BOOTSTRAP*******/
	/*BOOTSTRAP TOOLTIPS*/
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})

	/*BOOTSTRAP POPOVER*/
	$(document).ready(function(){
	    $('[data-toggle="popover"]').popover();
	});
});