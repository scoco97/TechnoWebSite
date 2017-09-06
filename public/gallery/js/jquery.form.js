jQuery(document).ready(function(){

$('#contactform').submit(function(){

var action = $(this).attr('action');

$("#message").slideUp(250,function() {
$('#message').hide();

 	$('#submit')
.attr('disabled','disabled');

$.post(action, {
name: $('#name').val(),
email: $('#email').val(),
comments: $('#comments').val()
},
function(data){
document.getElementById('message').innerHTML = data;
$('#message').fadeIn('fast');
$('#submit').removeAttr('disabled');
jQuery('#message').has('.error_message').click(function() {
jQuery(this).hide();
});
jQuery('#message').has('#success_page').click(function() {
jQuery(this).show();
});

}
);

});

return false;

});

});