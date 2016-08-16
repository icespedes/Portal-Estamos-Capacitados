/*OPTION REGISTRO DE USUARIO*/
$('#opUserPesd').click(function() {
	$('#selectInstitution').show();
});

$('#opUser').click(function() {
	$('#selectInstitution').hide();
});

/*RATING STAR*/
$('.kv-ltr-theme-svg-star').rating({
    hoverOnClear: false,
    theme: 'krajee-svg',
    displayOnly: true
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
$(function () {
	$("[data-toggle=popover]").popover();
})