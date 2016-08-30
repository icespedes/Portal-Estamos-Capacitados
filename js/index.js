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

//CONTADOR DE CARACTERES DESCRIPCION SERVICIO
var text_max = 300;
$('#count_message').html(text_max + ' Caracteres');

$('#service_description').keyup(function() {
  var text_length = $('#service_description').val().length;
  var text_remaining = text_max - text_length;
  
  $('#count_message').html(text_remaining + ' Caracteres');
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

/* INPUT PHOTOS  http://plugins.krajee.com/file-input#features*/
$("#input-fa").fileinput({
    theme: "fa",
    uploadUrl: "/uploadServicePhotos"
});