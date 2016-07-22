$('#opUserPesd').on('click', function() {
  $('#selectInstitution').toggle(this.checked);
}).change();



/*TOOLTIPS*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*POPOVER*/
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});