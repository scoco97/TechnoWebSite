window_presetter_inited = false;

jQuery(document).ready(function ($) {

    var preseter_options_default = {
        'delay_time_to_autohide' : 1500
        ,'init_on_document_ready' : true
    }

    if(window.preseter_options ){
        window.preseter_options = $.extend(preseter_options_default, window.preseter_options);
    }else{
        window.preseter_options = preseter_options_default;
    }

    if(window.preseter_options.init_on_document_ready && window.preseter_init){

        window.preseter_init();
    }
})

function preseter_init(){

    var preseter_options_default = {
        'delay_time_to_autohide' : 1500
    }



    var $ = jQuery;



    if(window.preseter_options ){
        window.preseter_options = $.extend(preseter_options_default, window.preseter_options);
    }else{
        window.preseter_options = preseter_options_default;
    }


    if(window_presetter_inited){
        return false;
    }


    var _preseter = $('.preseter').eq(0);

    jQuery('.select-wrapper select').bind('change', change_select);




    console.info(_preseter);

    var targetw = -(_preseter.find('.the-content').outerWidth());


    if(_preseter.find('.the-content').attr('data-targetw')){
        targetw = Number(_preseter.find('.the-content').attr('data-targetw'));
    }


    if(_preseter.hasClass('align-right')){
        setTimeout(function () {
            _preseter.animate({'right': targetw}, {duration: 700, queue: false});
        }, window.preseter_options.delay_time_to_autohide)
    }else{
        setTimeout(function () {
            _preseter.animate({'left':  targetw}, {duration: 700, queue: false});
        }, window.preseter_options.delay_time_to_autohide)
    }

    $('.preseter > .the-icon,.preseter .the-icon-con').bind("click", function () {
        var _t = $(this);
        console.log(_t);

        var targetw = -(_preseter.find('.the-content').outerWidth());


        if(_preseter.find('.the-content').attr('data-targetw')){
            targetw = Number(_preseter.find('.the-content').attr('data-targetw'));
        }


        if(_preseter.hasClass('align-right')){
            if (parseInt(_t.parent().css('right')) < 0) {
                _t.parent().animate({'right': 0}, {duration: 300, queue: false});
                _preseter.addClass('preseter-opened-by-user');
            } else {
                _preseter.animate({'right': targetw}, {duration: 300, queue: false});
                _preseter.removeClass('preseter-opened-by-user');
                _t.parent().find(".picker-con").find(".picker").fadeOut('fast');
            }
        }else{
            if (parseInt(_t.parent().css('left')) < 0) {
                _t.parent().animate({'left': 0}, {duration: 300, queue: false});
                _preseter.removeClass('preseter-opened-by-user');
            } else {
                _preseter.animate({'left': targetw}, {duration: 300, queue: false});
                //console.log(_t.parent().find(".picker-con"));
                _t.parent().find(".picker-con").find(".picker").fadeOut('fast');
                _preseter.addClass('preseter-opened-by-user');
            }
        }


    })


    window_presetter_inited = true;

}

window.preseter_init = preseter_init;

function change_select() {
    var selval = (jQuery(this).find(':selected').text());
    jQuery(this).parent().children('span').text(selval);
}