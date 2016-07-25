$('#opUserPesd').click(function() {
	$('#selectInstitution').show();
});

$('#opUser').click(function() {
	$('#selectInstitution').hide();
});

/*TOOLTIPS*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*POPOVER*/
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});