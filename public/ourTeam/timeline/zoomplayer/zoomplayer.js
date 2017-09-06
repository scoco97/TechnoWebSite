// ==DZS ZoomVideo Player
// @version 1.23
// @this is not free software
// @copyright - http://digitalzoomstudio.net

var _global_youtubeIframeAPIReady  = false;
var dzszvp_players_arr = []; // -- an array to hold video players
window.dzszvp_yt_iframe_settoload = false;
(function($) {

    $.fn.prependOnce = function(arg, argfind) {
        var _t = $(this) // It's your element


//        console.info(argfind);
        if(typeof(argfind) =='undefined'){
            var regex = new RegExp('class="(.*?)"');
            var auxarr = regex.exec(arg);


            if(typeof auxarr[1] !='undefined'){
                argfind = '.'+auxarr[1];
            }
        }



        // we compromise chaining for returning the success
        if(_t.children(argfind).length<1){
            _t.prepend(arg);
            return true;
        }else{
            return false;
        }
    };
    $.fn.appendOnce = function(arg, argfind) {
        var _t = $(this) // It's your element


        if(typeof(argfind) =='undefined'){
            var regex = new RegExp('class="(.*?)"');
            var auxarr = regex.exec(arg);


            if(typeof auxarr[1] !='undefined'){
                argfind = '.'+auxarr[1];
            }
        }
//        console.info(_t, _t.children(argfind).length, argfind);
        if(_t.children(argfind).length<1){
            _t.append(arg);
            return true;
        }else{
            return false;
        }
    };



    Math.easeIn = function(t, b, c, d) {

        return -c *(t/=d)*(t-2) + b;

    };

    Math.easeOutQuad = function (t, b, c, d) {
        t /= d;
        return -c * t*(t-2) + b;
    };
    Math.easeInOutSine = function (t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    };


    $.fn.zoomvideoplayer = function(o) {

        //==default options
        var defaults = {
            type: 'detect' // -- 'video' or 'youtube' or 'vimeo'
            ,design_skin: 'skin-default'
            ,url_playerlight: 'playerlight.swf'
            ,settings_video_overlay: "on" // -- an overlay over the video that you can press for pause / unpause
            , settings_disableControls: 'off'
            , settings_hideControls: 'off'
            ,settings_suggestedQuality: 'large'
            , settings_makeFunctional: false
            , settings_otherSocialIcons: ''
            , settings_httpprotocol: 'https:'
            , settings_forceFlashPlayer: 'off'
            , settings_ad_enable_visual_placement: 'on'
            , responsive_ratio: 'off' // -- enter a number 0.5 / 1.2 to describe the width/height ratio or set detect to try to detect ratios
            , settings_rtmpServer: ''
            , settings_rtmp_live: 'off'
            , cue: "on"
            , autoplay: "off"
            ,playfrom : 'default' // play from a index , default means that this will be decided by the data-playfrom
            ,con_videoplayer: null
            ,con_videogallery: null
            ,settings_disableVideoArray: 'off'
            ,settings_thumbnailDir: ''
            ,settings_enableAutoHide: 'on' // -- auto hide off or on
            ,design_specialContainer: 'off' // -- off or "laptop"
            ,design_attachTotalTimeAfterScrub: 'off' // -- off or on
            ,design_totalTimeRemoveSlash: 'auto' // -- off or on
            ,design_hideScrubBoxProg: 'off' // -- off or on
            ,settings_enableTags: 'on' // -- off or on
            ,embed_code: ''
            ,disable_downloadbtn: 'off'

        };

//        console.info(this, o);

        if(typeof o =='undefined'){
            if(typeof $(this).attr('data-options')!='undefined'  && $(this).attr('data-options')!=''){
                var aux = $(this).attr('data-options');
                aux = 'var aux_opts = ' + aux;
                eval(aux);
                o = aux_opts;
            }
        }
        o = $.extend(defaults, o);
        this.each( function(){
            var cthis = $(this)
                , cclass = cthis.attr('class')
                ,cid = ''
                ;

            var _controlsCon = null
                ,_theMediaCon = null
                ,_theMedia = null
                ,_theMedia_ = null
                ,_scrubbar = null
                ,_scrubBg = null
                ,_scrubBuf = null
                ,_scrubProg = null
                ,_scrubBox = null
                ,_scrubBoxProg = null
                ,_volBarActive = null
                ,_hdBtn = null
                ,_volBtn = null
                ,_socialBtn = null
                ,_downloadBtn = null
                ,_logoBtn = null
                ,_socialContainer = null
                ,_embedBtn = null
                ,_btnInfo = null
                ,_videoPlayerHd = null
                ,_videoPlayerAd = null
                ,_adSkipCon = null
                ,_currTimeHolder = null
                ,_totalTimeHolder = null
            //,_extraTotalTimeHolder = null
                ,_par = null
                ,_infoWindow = null
                ,_infoWindowCanvasBg = null
                ,_coverImage = null
                ;

            var tw = 0
                ,th = 0
                ,right_calculate = 0
                ,i=0
                ;
            var yt_playerReady = false
                ,controls_inited = false
                ;


            var inter_prepareYouTube = 0
                ,inter_workaround_getcurrtime
                ,inter_handle_frame
                ,inter_ad_enable_visual_placement = 0
                ,inter_removeFsControls
                ;

            var currTime = 0
                ,totalTime = 0
                ,bufferedLength = -1
                ,currQuality = 'not defined yet'
                ,currVol = 1
                ,lastVol = 1
                ,theSrc = ''
                ,cue='on'
                ,ad_skipad_time = 1001
                ,time_counter_skipad
                ,inter_time_counter_skipad = 0
                ,responsive_ratio = 0
                ;

            var isflash = false
                ,ispaused = true
                ,wasPlaying = false
                ,isFullscreen = false
                ,hasEnded = false
                ,hasAutoplayed=false
                ,muted = false
                ,destroyed = false
                ,ad_playing = false
                ,ad_played = false
                ,pulse_frame = false
                ,ad_videoHasToAutoplay = false// -- if the autoplay is disrupted by an ad, the video still needs to autoplay when the commercial is over

                ;

            var original_thumbnailDir = '';

            var ad_array = []
                ,arr_tags = []
                ;


            var vimeo_data, vimeo_url;



            var dzszvg_translate_youcanskipto =  'you can skip to video in ';;


            if(window.dzszvg_translate_youcanskipto!=undefined){
                dzszvg_translate_youcanskipto = window.dzszvg_translate_youcanskipto;
            }

            init();


            function init(){
                if(cthis.hasClass('dzszvp-inited')){
                    return;
                }
                cthis.addClass('dzszvp-inited');


                if(_global_youtubeIframeAPIReady==false && window.dzszvp_yt_iframe_settoload==false){
                    var head= document.getElementsByTagName('head')[0];
                    var script= document.createElement('script');
                    script.type= 'text/javascript';
                    script.src= 'https://www.youtube.com/iframe_api';
                    head.appendChild(script);
                    window.dzszvp_yt_iframe_settoload=true;
                }


                if(is_ie8()){
                    o.design_skin = 'skin-pro';
                    o.suggestedQuality='large';
                    cthis.addClass('is-ie8')
                }
                if(is_ie9()){
                    cthis.addClass('is-ie9')
                }



                if (cclass.indexOf('skin-') == -1) {
                    cthis.addClass(o.design_skin);

                }else{

                    var auxa = /skin-.*?[ |"]/g.exec(cthis.attr('class'));



                    if(auxa && auxa[0]){
                        o.design_skin =auxa[0];
                        o.design_skin = String(o.design_skin).replace(' ','');
                        o.design_skin = String(o.design_skin).replace('"','');
                    }

                }

//                console.info(cthis, o.design_skin);

                if(o.design_specialContainer!='off'){
                    o.responsive_ratio = 'off';
                }

                var aux = o.responsive_ratio;
                if(isNaN(Number(aux))==false){
                    responsive_ratio = Number(aux);
                }

                if(o.design_totalTimeRemoveSlash=='auto'){
                    if(cthis.hasClass('skin-default')){
                        o.design_totalTimeRemoveSlash='on';
                    }else{
                        o.design_totalTimeRemoveSlash='off';
                    }

                }


//                console.info( 'zoomplayer'+parseInt(Math.random()*1000,10), typeof cthis.attr('id'), cthis.attr('id'));
                if(typeof cthis.attr('id')!='undefined' && cthis.attr('id')!=''){
                    cid = cthis.attr('id');
                }else{
                    cid = 'zoomplayer'+parseInt(Math.random()*1000,10)
                }

//                console.info(cid);

//                cthis.append('<span class="controls-con"></span>');
                cthis.prepend('<span id="'+'the-media-con-'+cid+'" class="the-media-con"></span>');

                var str_controls = '';

                if(cthis.children('.controls-con').length>0){
                    str_controls = cthis.children('.controls-con').eq(0).html();
                    cthis.children('.controls-con').eq(0).remove();
                }

//                console.info(o.design_skin, str_controls);
                if(str_controls==''){
                    if(o.design_skin=='skin-default' || o.design_skin=='skin-playbig' || o.design_skin=='skin-pro' || o.design_skin=='skin-avanti'){
                        if(o.design_skin=='skin-default'){
                            str_controls = window.dzszvp_controls_skin_default;
                        }
                        if(o.design_skin=='skin-playbig'){
                            str_controls = window.dzszvp_controls_skin_playbig;
                        }
                        if(o.design_skin=='skin-pro'){
                            str_controls = window.dzszvp_controls_skin_pro;
                        }
                        if(o.design_skin=='skin-avanti'){
                            str_controls = window.dzszvp_controls_skin_avanti;
                        }
                    }else{
                        if(window.dzszvp_custom_skins){
                            if(window.dzszvp_custom_skins[o.design_skin]){
                                str_controls = window.dzszvp_custom_skins[o.design_skin];
                            }
                        }
                    }

                }

                if(o.design_specialContainer=='laptop'){
                    cthis.wrap('<div class="zoomvideoplayer-con-laptop"></div>');
                    _par = cthis.parent();

                }

                if(cthis.attr('data-arg_downloadlink')){
                    str_controls = str_controls.replace(/{{jsreplace_arg_downloadlink}}/g, cthis.attr('data-arg_downloadlink'));
                }
                if(cthis.attr('data-thumbnaildir')){
                    o.settings_thumbnailDir = cthis.attr('data-thumbnaildir');
                }


                if(cthis.attr('data-arg_logoimg')){
                    str_controls = str_controls.replace(/{{jsreplace_arg_logoimg}}/g, cthis.attr('data-arg_logoimg'));
                }else{
                    str_controls = str_controls.replace(/{{jsreplace_arg_logoimg}}/g, '');
                }


                var aux23 = '#';
                if(cthis.attr('data-arg_logolink')){
                    aux23 = cthis.attr('data-arg_logolink');
                }

                str_controls = str_controls.replace(/{{jsreplace_arg_logolink}}/g, aux23);

                str_controls = str_controls.replace( /{{jsreplace_arg_othersocialicons}}/g, o.settings_otherSocialIcons);


                _theMediaCon = cthis.children('.the-media-con').eq(0);

                _theMediaCon.after('<span class="controls-con">'+str_controls+'</span>');

                _controlsCon = cthis.children('.controls-con').eq(0);

                //console.log(o.design_attachTotalTimeAfterScrub);
                if(cthis.find('.scrubbar').length>0){
                    _scrubbar = cthis.find('.scrubbar').eq(0);
                    if(o.design_attachTotalTimeAfterScrub=='on'){
                        _scrubbar.before('<span class="total-time-holder" data-absolute_right_calculate="on" style="margin-right: 6px; bottom: 8px; line-height: 1; min-width:38px;"></span>')
                    }
                }
                if(cthis.find('.scrubbar-bg').length>0){
                    _scrubBg = cthis.find('.scrubbar-bg').eq(0);
                }
                if(cthis.find('.scrubbar-buffered').length>0){
                    _scrubBuf = cthis.find('.scrubbar-buffered').eq(0);
                }
                if(cthis.find('.scrubbar-prog').length>0){
                    _scrubProg = cthis.find('.scrubbar-prog').eq(0);
                }
                if(cthis.find('.scrubbar-box').length>0){
                    _scrubBox = cthis.find('.scrubbar-box').eq(0);
                }
                if(cthis.find('.scrubbar-box-prog').length>0){
                    _scrubBoxProg = cthis.find('.scrubbar-box-prog').eq(0);
                    if(o.design_hideScrubBoxProg==='on'){
                        _scrubBoxProg.hide();
                    }
                }
                if(cthis.find('.vol-btn').length>0){
                    _volBtn = cthis.find('.vol-btn').eq(0);
                }
                if(cthis.find('.vol-bar-active').length>0){
                    _volBarActive = cthis.find('.vol-bar-active').eq(0);
                }
                if(cthis.find('.hd-btn').length>0){
                    _hdBtn = cthis.find('.hd-btn').eq(0);
                }
                if(cthis.find('.embed-btn').length>0){
                    _embedBtn = cthis.find('.embed-btn').eq(0);

                    if(o.embed_code==''){
                        _embedBtn.hide()
                    }
                }
                if(cthis.find('.download-btn').length>0){
                    _downloadBtn = cthis.find('.download-btn').eq(0);

                    if(o.disable_downloadbtn=='on'){

                        _downloadBtn.hide();
                    }
                    if(cthis.find('.feed-downloadtxt').length>0){

                        // -- tbc
                    }
                }
                if(cthis.find('.social-btn').length>0){
                    _socialBtn = cthis.find('.social-btn').eq(0);
                }
                if(cthis.find('.curr-time-holder').length>0){
                    _currTimeHolder = cthis.find('.curr-time-holder').eq(0);
                }
                if(cthis.find('.total-time-holder').length>0){
                    _totalTimeHolder = cthis.find('.total-time-holder').eq(0);
                }
                if(cthis.find('.btn-info').length>0){
                    _btnInfo = cthis.find('.btn-info').eq(0);
                }
                if(cthis.find('.logo-btn').length>0){
                    _logoBtn = cthis.find('.logo-btn').eq(0);

//                    console.info(cthis, cthis.attr('data-arg_logoimg'));
                    if(cthis.attr('data-arg_logoimg')){

                    }else{
                        _logoBtn.hide();
                    }
                }

                if(cthis.find('.info-window').length>0){

                    _infoWindow = cthis.find('.info-window').eq(0);

                    if(_infoWindow.find('.canvas-bg').length>0){
                        _infoWindowCanvasBg = _infoWindow.find('.canvas-bg').eq(0).get(0);
                    }
                }else{
                    if(_btnInfo){

                        _btnInfo.hide();
                    }
                }

                if(!_scrubBox){
                    o.settings_thumbnailDir='';
                }
                if(o.settings_thumbnailDir!==''){
                    if(String(o.settings_thumbnailDir).substr(String(o.settings_thumbnailDir).length-1)!='/'){
                        o.settings_thumbnailDir = o.settings_thumbnailDir + '/';
                    }

                    _scrubBox.addClass('has-image');
                }


                cue= o.cue;
                if(typeof cthis.attr('data-type')!='undefined' && cthis.attr('data-type')!=''){
                    o.type = cthis.attr('data-type');
                }

                theSrc = cthis.attr('data-source');

                if(o.settings_enableAutoHide=='on'){
                    setTimeout(function(){
                        _controlsCon.addClass('enable-auto-hide');
                    },100);

                }


                //console.info(cthis, theSrc);

                if(o.type=='detect' && theSrc.length>3 && ( theSrc.indexOf('.png') == theSrc.length-4 || theSrc.indexOf('.jpg') == theSrc.length-4 || theSrc.indexOf('.gif') == theSrc.length-4 )){
                    o.type = 'image';
                }
                if( o.type=='detect' && theSrc.length>3 && (theSrc.indexOf('.mp4') == theSrc.length-4 || theSrc.indexOf('.m4v') == theSrc.length-4 )){
                    o.type = 'video';
                }
                if( o.type=='detect' && theSrc.length>3 && (theSrc.indexOf('.mp3') == theSrc.length-4)){
                    o.type = 'audio';
                }


                if(o.type=='detect' && theSrc.indexOf('youtube.com/embed/') > -1 ){
                    var auxa = theSrc.split('youtube.com/embed/');
                    //console.info(auxa);
                    theSrc = auxa[1];
                    o.type = 'youtube';
                }

                if(o.type=='detect' && theSrc.indexOf('youtube.com/watch?v=') > -1 ){
                    theSrc = (get_query_arg(theSrc, 'v'));
                    o.type = 'youtube';
                }

                if(o.type=='detect' && theSrc.indexOf('vimeo.com/') > -1 ){

//                    console.info(theSrc, theSrc.split('vimeo.com/'));
                    var auxa = theSrc.split('vimeo.com/');
                    theSrc = auxa[1];
                    o.type='vimeo';
                }


                if(o.type=='detect' && o.settings_rtmpServer!=''){
                    o.type='video';
                }

                if(o.type=='normal' || o.type=='detect'){
                    o.type='video';
                }

                if(o.type=='image'){
                    cue='on';
                    o.settings_video_overlay = 'off';
                    _controlsCon.hide();
                }
                if(o.type=='vimeo'){
                    cue='on';
                    o.settings_video_overlay = 'off';
                    _controlsCon.hide();
                }

                if(o.settings_rtmpServer!='' && cthis.attr('data-sourcehsl') && (is_ios() || is_android())){
                    o.settings_video_overlay = 'off';

                }

                if(o.settings_video_overlay=='on' && (is_iPad==false || (is_iPad && o.type!='youtube') ) ){
                    _theMediaCon.after('<span class="video-overlay"></span>');
                    cthis.find('.video-overlay').eq(0).bind('click', handle_mouse);
                }

                //if(cid=='mainplayer'){ console.log(ad_time); }





                if(is_iPad || isAndroid){
                    o.autoplay='off';
                }

                if(o.type=='video' && isiPhone){
                    if(_hdBtn){
                        _hdBtn.remove();
                        _hdBtn=null;
                    }

                }
                if(o.type=='video' && o.settings_rtmpServer){
                    if(_hdBtn){
                        _hdBtn.remove();
                        _hdBtn=null;
                    }

                }
//                console.info(cthis, o.autoplay);

//                console.info($.parseJSON(cthis.attr('data-jsontest')));
                try{
                    ad_array = $.parseJSON(cthis.attr('data-ad_array'));
                }catch(err){
//                    console.info(err);
                }

                if(isiPhone || o.type=='vimeo' || o.type=='image'){
                    ad_array = [];
                }


//                console.info(cthis, ad_array);
//                console.info(navigator.userAgent);
//                console.info(isAndroid);
//                alert(isiPhone)

                if(_volBtn){
                    if(is_ios()){
                        _volBtn.hide();
                    }
                }

                if(_hdBtn){
                    if(o.type=='vimeo'){
                        _hdBtn.hide();
                    }
                }


                if(o.settings_disableVideoArray!='on'){
                    dzszvp_players_arr.push(cthis);
                }

                if(o.type=='video'){
                    if(o.settings_suggestedQuality=='hd720' || o.settings_suggestedQuality=='hd1080'){
                        o.settings_suggestedQuality='hd';
                    }else{
                        o.settings_suggestedQuality='sd';
                    }

                    //console.info(o.settings_suggestedQuality,cthis);
                    if(cthis.hasClass('zoomvideoplayer-hd')){
                        currQuality='hd';
                    }else{
                        currQuality='sd';
                    }

                    if(_hdBtn){
                        if(currQuality == 'sd' && (typeof cthis.attr('data-hd_source')=='undefined' || cthis.attr('data-hd_source')=='')){
                            _hdBtn.hide();
                            _hdBtn = null;
                        }
                    }


                    if(_hdBtn) {


                        if(currQuality=='sd'){
                            var aux='<div id="'+cid+'_hd" class="zoomvideoplayer zoomvideoplayer-hd '+ o.design_skin+'" data-source="'+cthis.attr('data-hd_source')+'"';

                            if(typeof cthis.attr('data-hd_sourceogg')!='undefined'){
                                aux+=' data-sourceogg="'+cthis.attr('data-hd_sourceogg')+'"';
                            }
                            aux+=' data-type="video"';


                            if(cthis.attr('data-ad_array')){
                                aux+=' data-ad_array='+"'"+cthis.attr('data-ad_array')+"'"+'';
                            }
                            if(cthis.attr('data-thumbnaildir')){
                                aux+=' data-thumbnaildir='+"'"+cthis.attr('data-thumbnaildir')+"'"+'';
                            }

                            if(cthis.attr('data-cover')){
                                aux+=' data-cover="'+cthis.attr('data-cover')+'"';
                            }
                            if(cthis.attr('data-arg_logoimg')){
                                aux+=' data-arg_logoimg="'+cthis.attr('data-arg_logoimg')+'"';
                            }
                            if(cthis.attr('data-arg_logolink')){
                                aux+=' data-arg_logolink="'+cthis.attr('data-arg_logolink')+'"';
                            }
                            if(typeof cthis.attr('data-ad_sourceogg')!='undefined' && cthis.attr('data-ad_sourceogg')!=''){
                                aux+=' data-ad_sourceogg="'+cthis.attr('data-ad_sourceogg')+'"';
                            }

                            aux+='>';


                            aux+='</div>';

                            var auxtest = cthis.appendOnce(aux, 'zoomvideoplayer-hd');

                            if(auxtest){
                                _videoPlayerHd = cthis.find('.zoomvideoplayer-hd').eq(0);

                                _videoPlayerHd.appendOnce('<div class="controls-con">'+_controlsCon.html()+'</div>','.controls-con');

                                var auxoptions = $.extend(true,{},o);;
                                auxoptions.con_videoplayer = cthis;
                                auxoptions.cue = 'on';
                                auxoptions.autoplay='off';
                                auxoptions.loop='off';
//                                console.info(o.autoplay);

                                _videoPlayerHd.zoomvideoplayer(auxoptions);

                            }



//                            console.info(o.settings_suggestedQuality);
                            if(o.settings_suggestedQuality=='hd'){
                                change_quality(o.settings_suggestedQuality);
                            }

                        }



                        _hdBtn.find('ul.hd-options li').each(function(){
                            var _t = $(this);

                            _t.removeClass('active');
                            if(_t.html() == currQuality){
                                _t.addClass('active');
                            }

                        })

                        _hdBtn.addClass('ready');
                    }
                }



                if(cthis.attr('data-cover')!=undefined && cthis.attr('data-cover')!=''){
                    cthis.prepend('<div class="cover-image" style="background-image: url('+cthis.attr('data-cover')+'); "></div>');

                    _coverImage = cthis.find('.cover-image').eq(0);
                }


                if(typeof cthis.attr('data-ad_source')!='undefined' && cthis.attr('data-ad_source')!=''){



                }


//                console.info(can_play_mp4());



                check_if_ready_init();

                //console.info(cthis.get(0));

                cthis.get(0).api_pause_media = pause_media;
                cthis.get(0).api_play_media = play_media;
                cthis.get(0).api_seek_to = seek_to;
                cthis.get(0).api_signal_ad_is_over = handle_ad_is_over;

                cthis.get(0).api_set_ad_array = function(arg){
                    ad_array = arg;
                };
                cthis.get(0).api_disable_thumbnailDir = function(){
                    o.settings_thumbnailDir = '';
                    if(_scrubBox){ _scrubBox.removeClass('has-image'); }
                };
                cthis.get(0).api_enable_thumbnailDir = function(){
                    if(_scrubBox && o.settings_thumbnailDir==='' && original_thumbnailDir!=''){
                        o.settings_thumbnailDir = original_thumbnailDir;
                        _scrubBox.addClass('has-image');
                    }
                };


                if(cthis.hasClass('zoomvideoplayer-is-ad') && (isAndroid || is_iPad)){
                    cthis.addClass('enable-play-btn-temporary-for-mobile');
                }



                if(o.settings_disableControls != 'on'){
                    cthis.get(0).api_destroy = function(){
                        destroyed=true;
                    };
                    cthis.get(0).api_reinit_skipad = function(){
//                        console.info('api_reinit_skipad');
                        reinit_skipad();
                        tick_counter_skipad();
                    }
                    cthis.get(0).api_play_media_reset_autoplay = function(){
                        hasAutoplayed = false;
                        play_media();
                    };

                    cthis.find('.play-btn').eq(0).bind('click', handle_mouse);
                    cthis.find('.pause-btn').eq(0).bind('click', handle_mouse);
                    cthis.find('.unmute-btn').eq(0).bind('click', handle_mouse);
                    cthis.find('.mute-btn').eq(0).bind('click', handle_mouse);
                    cthis.find('.vol-btn--icon').eq(0).bind('click', handle_mouse);
                    cthis.find('.vol-bar-con').eq(0).bind('mousedown', handle_mouse);
                    cthis.find('.fullscreen-btn').eq(0).bind('click', handle_mouse);
                    cthis.find('.scrubbar').eq(0).bind('click', handle_mouse);
                    cthis.find('.scrubbar').eq(0).bind('mousemove', handle_mouse);
                    cthis.find('.scrubbar').eq(0).bind('mouseleave', handle_mouse);
                    cthis.find('.cover-image').eq(0).bind('click', handle_mouse);
                    cthis.find('.btn-info').eq(0).bind('click', handle_mouse);
                    cthis.find('.info-window--back-btn').bind('click',handle_mouse);
                    if(_infoWindow){
                    }

                    if(o.settings_enableAutoHide=='on'){
                        cthis.bind('mousemove',handle_mouse);
                        cthis.bind('mouseleave',handle_mouse);
                    }


                    if(_hdBtn){
                        _hdBtn.undelegate('.hd-options--option', 'click');
                        _hdBtn.delegate('.hd-options--option', 'click', handle_mouse);
                    }

                    if(_socialBtn){

                        cthis.find('.social-btn--icon').eq(0).bind('click', handle_mouse);
                        cthis.delegate('.social-container--room','click', handle_mouse);
                    }

                    if(_embedBtn){
                        _embedBtn.find('textarea').bind('click', function(){
                            this.focus(); this.select();
                        })
                    }

                    document.addEventListener('fullscreenchange', change_fullscreen, false);
                    document.addEventListener('mozfullscreenchange', change_fullscreen, false);
                    document.addEventListener('webkitfullscreenchange', change_fullscreen, false);
//                    cthis.bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', change_fullscreen);
                }




                $(window).bind('resize', handle_resize);
                handle_resize();

            }

            function create_ad(args,ind){


//                console.info(cthis, 'create_ad');
                var aux='<div id="'+cid+'_ad_'+ind+'" class="zoomvideoplayer zoomvideoplayer-is-ad '+ o.design_skin+'" data-source="'+args.source+'"';

                if(args.sourceogg){
                    aux+=' data-sourceogg="'+args.sourceogg+'"';
                }

                if(args.ad_type){
                    aux+=' data-type="'+args.ad_type+'"';
                }
                if(args.ad_skip_delay){
                    aux+=' data-ad_skip_delay="'+args.ad_skip_delay+'"';
                }
                if(args.ad_link){
                    aux+=' data-ad_link="'+args.ad_link+'"';
                }

                aux+='>';


                aux+='</div>';

                var auxtest = cthis.appendOnce(aux, 'zoomvideoplayer-is-ad');

                if(auxtest){
                    _videoPlayerAd = cthis.children('.zoomvideoplayer-is-ad').eq(0);

                    _videoPlayerAd.appendOnce('<div class="controls-con">'+_controlsCon.html()+'</div>','.controls-con');

                    var auxoptions = $.extend(true,{},o);;
                    auxoptions.con_videoplayer = cthis;
                    auxoptions.cue = 'on';
                    auxoptions.autoplay='on';
                    auxoptions.settings_rtmpServer='';


//                                console.info(o.autoplay);

//                        console.info(cthis, _videoPlayerAd);
                    _videoPlayerAd.zoomvideoplayer(auxoptions);

                }

                setTimeout(function(){
                    _videoPlayerAd.addClass('active');

                    if(is_iPad||isAndroid){

                    }else{
                        _videoPlayerAd.get(0).api_play_media_reset_autoplay();
                        _videoPlayerAd.get(0).api_reinit_skipad();
                    }
                }, 100)
            }

            function check_if_ready_init(){
                if(o.type=='youtube'){

                    //console.info(window.YT, _global_youtubeIframeAPIReady);
                    if( (window.YT && window.YT.Player) || _global_youtubeIframeAPIReady){
                        init_readyControls();
                    }else{
                        inter_prepareYouTube = setInterval(check_if_ready_init, 500);
                    }
                }else{
                    init_readyControls();
                }
            }

            function init_readyControls(){
                //console.info('init_readyControls', cthis, o.autoplay);

                if(controls_inited){
                    return false;
                }



                //console.info('init_readyControls', cthis, o.autoplay);

                if(cue=='on'){
                    init_setupVideo();
                }else{

                }
                controls_inited = true;
            }

            function init_setupVideo(){
                //console.info('init_setupVideo', cthis, o.autoplay, o.type);

                if(o.type!=='audio') {
                    if (o.autoplay == 'on' || (o.autoplay == 'off' && cue == 'off')) {
                        cthis.children('.cover-image').fadeOut('fast');
                    }
                }





                if(inter_prepareYouTube>0){
                    clearInterval(inter_prepareYouTube);
                }

                //alert(o.type);

                if(o.type=='video'){

                    var videolayer = '';


//                    can_play_mp4 returns true for firefox on windowz, but ff for windowz cannot actually play that
//                    console.info(can_play_mp4(), !is_firefox(), o.settings_rtmpServer,o.settings_rtmpServer!='' && (is_safari() || is_ios()))
                    if(can_play_mp4() && !is_firefox() && (o.settings_rtmpServer=='' || (o.settings_rtmpServer!='' && (is_safari() || is_ios() || is_android() )))){
                        videolayer = '<video class="the-media" preload="metadata"';
                        videolayer+='>';
                        var aux_src = cthis.attr('data-source');

                        if(o.settings_rtmpServer!=''){
                            if(cthis.attr('data-sourcehsl')){
                                aux_src = cthis.attr('data-sourcehsl');
                            }
                        }

                        videolayer+='<source src="' + aux_src + '" ';

                        if(is_firefox()){
                            videolayer+=' type="video/mp4"';
                        }


                        videolayer+='/>';
                        videolayer+='</video>';
                    }else{

                        //console.info('test');
                        if(o.settings_rtmpServer=='' && typeof cthis.attr('data-sourceogg')!='undefined' && cthis.attr('data-sourceogg')!='' && is_ie8()==false){
                            videolayer = '<video class="the-media" preload="metadata"';
                            videolayer+='>';
                            videolayer+='<source src="' + cthis.attr('data-sourceogg') + '" />';
                            videolayer+='</video>';
                        }else{

                            //console.info('test2');
                            var str_streamServer = '';

                            console.info(o);
                            if(o.settings_rtmpServer!=''){
                                str_streamServer = '&streamserver='+ o.settings_rtmpServer+'&type=rtmp&type_rtmp_live='+ o.settings_rtmp_live;
                            }
                            videolayer+='<object class="the-media" type="application/x-shockwave-flash" data="'+ o.url_playerlight+'" width="100%" height="100%" id="fp_'+cid+'" style="visibility: visible; "><param name="movie" value="'+ o.url_playerlight+'"><param name="menu" value="false"><param name="allowScriptAccess" value="always"><param name="scale" value="noscale"><param name="allowFullScreen" value="true"><param name="wmode" value="opaque"><param name="flashvars" value="source=' + cthis.attr('data-source') + '&theid=fp_'+cid+str_streamServer+'"></object>';

                            isflash = true;
                        }

                        eval('window.fp_'+cid+'_setDuration = function(arg){ totalTime = arg; }');
                        eval('window.fp_'+cid+'_call_end = function(arg){ handleVideoEnd(); }');


                    }

                    _theMediaCon.append(videolayer);
                }
                if(o.type=='audio'){

                    var videolayer = '';


                    if(can_play_mp3()){
                        videolayer = '<audio class="the-media" preload';
                        videolayer+='>';
                        var aux_src = cthis.attr('data-source');


                        videolayer+='<source src="' + aux_src + '" />';
                        videolayer+='</audio>';
                    }else{

                        if(o.settings_rtmpServer=='' && typeof cthis.attr('data-sourceogg')!='undefined' && cthis.attr('data-sourceogg')!='' && is_ie8()==false){
                            videolayer = '<audio class="the-media" preload';
                            videolayer+='>';
                            videolayer+='<source src="' + cthis.attr('data-sourceogg') + '" />';
                            videolayer+='</audio>';
                        }else{

                            var str_streamServer = '';
                            videolayer+='<object class="the-media" type="application/x-shockwave-flash" data="'+ o.url_playerlight+'" width="100%" height="100%" id="fp_'+cid+'" style="visibility: visible; "><param name="movie" value="'+ o.url_playerlight+'"><param name="menu" value="false"><param name="allowScriptAccess" value="always"><param name="scale" value="noscale"><param name="allowFullScreen" value="true"><param name="wmode" value="opaque"><param name="flashvars" value="source=' + cthis.attr('data-source') + '&type=audio&theid=fp_'+cid+str_streamServer+'"></object>';

                            isflash = true;
                        }

                        eval('window.fp_'+cid+'_setDuration = function(arg){ totalTime = arg; }');
                        eval('window.fp_'+cid+'_call_end = function(arg){ handleVideoEnd(); }');


                    }

                    _theMediaCon.append(videolayer);
                }
                if(o.type=='image'){

                    var videolayer = '';
                    videolayer = '<div class="media-image" style="background-image: url('+theSrc+'); "></div>';
                    _theMediaCon.append(videolayer);
                }

                var player ;

                if(o.type=='youtube'){
//                    var videolayer = '<iframe id="ytplayer" class="the-media" type="text/html" width="100%" height="100%" src="https://www.youtube.com/embed/M7lc1UVf-VE?controls=0&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen>';
//
//                    _theMediaCon.append(videolayer);

                    _theMediaCon.append('<span id="the-media-'+cid+'"></span>')
                    player = new window.YT.Player('the-media-'+cid, {
                        height: '100%',
                        width: '100%',
                        playerVars: { 'autoplay': 0, controls: 0, 'showinfo': 0, 'playsinline' : 1, rel:0, 'autohide' : 1},//, 'playsinline' : 0, enablejsapi : 1
                        videoId: theSrc,
                        suggestedQuality: o.settings_suggestedQuality,
                        events: {
                            'onReady': yt_onPlayerReady,
                            'onStateChange': yt_onPlayerStateChange
                        }
                    });

                    if(is_iPad){
                        _controlsCon.css('pointer-events','none');
                    }


                }

                if(o.type=='vimeo'){

                    var str_autoplay = '';
//                    console.info(o.autoplay)
                    if(o.autoplay=='on' && o.cue=='on'){
                        str_autoplay='&amp;autoplay=1';
                    }

                    _theMediaCon.append('<iframe width="100%" height="100%" src="' + o.settings_httpprotocol + '//player.vimeo.com/video/' + theSrc + '?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ff9933'+str_autoplay+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen style=""></iframe>');




                    if (o.type == 'vimeo') {

                        if (window.addEventListener) {
                            window.addEventListener('message', vimeo_windowMessage, false);
                        }

                    }

                }



                _theMedia = cthis.find('.the-media').eq(0);
                _theMedia_ =_theMedia[0];

                if(o.type=='youtube'){
                    _theMedia_ = player;
                    _theMedia = $(_theMedia_);

                    if(_theMedia_.getDuration){
                        totalTime = _theMedia_.getDuration();
                    }
                }

                if(o.type=='vimeo'){
                    _theMedia = _theMediaCon.children('iframe').eq(0);
                    _theMedia_ =_theMedia[0];
                }




//                console.info(cthis, _videoPlayerAd);

//                if(_videoPlayerAd && ad_time==0){
//
//
//                    if(o.autoplay=='on' && is_iPad===false && is_android()===false){
//                        ad_videoHasToAutoplay = true;
//                    }
//                    pause_media();
//                    _videoPlayerAd.addClass('active');
//                    _videoPlayerAd.get(0).api_play_media_reset_autoplay();
//                    ad_playing=true;
//                }

                //console.info(cthis);

                if(o.type=='video' || o.type=='audio' || o.type=='image'){

//                    console.info(cthis, _theMedia_.duration);
                    if(_theMedia_ && typeof (_theMedia_.duration)!='undefined'){ totalTime = _theMedia_.duration; }

                    if(o.type=='audio'){
                        if(_theMedia_.loadedmetadata){
                            _theMedia_.loadedmetadata = function(){
                            }
                        }
                    }else{
                    }
                    init_readyall();


                    if(_theMedia_ && _theMedia_.addEventListener){ _theMedia_.addEventListener('ended', handleVideoEnd, false); }



                }



                //console.info('ceva',o.responsive_ratio);

                if(o.responsive_ratio=='detect'){
                    if(o.type=='video'){
                        if(_theMedia_){
                            responsive_ratio = _theMedia_.videoHeight / _theMedia_.videoWidth ;
                            if(_theMedia_.addEventListener){
                                _theMedia_.addEventListener('loadedmetadata',function(){
                                    //console.info(_theMedia_,'loaded');
                                    o.responsive_ratio = _theMedia_.videoHeight / _theMedia_.videoWidth ;

                                    responsive_ratio = Number(o.responsive_ratio);

                                    //console.info(responsive_ratio);
                                    handle_resize();
                                })
                            }
                        }


                    }

                }




            }

            function init_readyall(){
                //console.info(cthis,'init_readyall()');


                cthis.addClass('dzszvp-readyall');
                if(o.settings_ad_enable_visual_placement=='on'){
                    ad_setup_visual_placement();
                    inter_ad_enable_visual_placement = setInterval(ad_setup_visual_placement, 500);
                }
                if(totalTime>0){
                }


                if(cthis.hasClass('zoomvideoplayer-is-ad')){

                    if(o.type=='image'){
                        ad_skipad_time=0;
                    }
                    if(o.type=='video' || o.type=='youtube' || o.type=='vimeo'){
                        ad_skipad_time=1001;
                    }

                    if(typeof cthis.attr('data-ad_skip_delay')!='undefined'){
                        ad_skipad_time = Number(cthis.attr('data-ad_skip_delay')) ;
                    }

//                    console.info(cthis, ad_skipad_time);



                    if(ad_skipad_time!=1001) {
                        cthis.appendOnce('<div class="skipad-con"></div>', '.skinad-con');
                        _adSkipCon = cthis.find('.skipad-con').eq(0);
                    }
//                    console.info(ad_skipad_time);

//                    console.info(cthis, cthis.attr('data-adskip_delay'), ad_skipad_time);
//                    console.info(cthis, time_counter_skipad);
//                    console.info(isAndroid, is_iPad);

                    if(isAndroid||is_iPad){
                        if(o.type=='video' || o.type=='youtube'){
                            _adSkipCon.hide();
                        }

                    }


                    reinit_skipad();

                }




                inter_handle_frame = setInterval(handle_frame,30);

                if(_currTimeHolder){ _currTimeHolder.addClass('ready'); }
                if(_totalTimeHolder){ _totalTimeHolder.addClass('ready'); }


//                console.info(o.autoplay);
                if(o.autoplay=='on'){
                    play_media();
                }

                if (o.type == 'video'||o.type == 'audio') {
                    if(!isflash){
                        _theMedia_.onprogress = function(){
                            //console.info(_theMedia_);
                            if(_theMedia_.buffered && _theMedia_.buffered.length>0 && isNaN(_theMedia_.duration)==false){
                                bufferedLength = (_theMedia_.buffered.end(0) / _theMedia_.duration) * (_scrubBg.width() + 0);
                                //console.info(bufferedLength,_theMedia_.buffered.end(0),_theMedia_.duration,cthis);
                            }


                        }
                    }
                }



                setup_tags();
                handle_resize();

            }

            function reinit_skipad(){
//                console.info('reinit_skipad');
                if(inter_time_counter_skipad!=0){
                    clearInterval(inter_time_counter_skipad);
                }

                time_counter_skipad = ad_skipad_time;
                if(ad_skipad_time!=1001){
                    setTimeout(function(){
//                            console.info(cthis.find('.skipad-con').eq(0))
                        time_counter_skipad=0;
                        _adSkipCon.html('<div class="skipad">skip ad</div>');
                        _adSkipCon.children('.skipad').bind('click', function() {
                            handleVideoEnd();
                        })
                    }, ad_skipad_time*1000);

                    if(ad_skipad_time>0){
                        inter_time_counter_skipad = setInterval(tick_counter_skipad, 1000);
                    }
                }
            }

            function tick_counter_skipad(){

                if(time_counter_skipad>0){
                    time_counter_skipad= time_counter_skipad-1;
                    if(_adSkipCon){
                        _adSkipCon.html(dzszvg_translate_youcanskipto + time_counter_skipad);
                    }

                }else{
                    clearInterval(inter_time_counter_skipad);
                }
            }

            function setup_tags(){

//--normal video on modern browsers
                if (o.settings_enableTags == 'on') {
                    cthis.find('.dzstag-tobe').each(function() {
                        var _t = $(this);
                        var auxhtml = _t.html();
                        var w = 100;
                        var h = 100;
                        var acomlink = '';
                        if (_t.attr('data-width') != undefined) {
                            w = _t.attr('data-width');
                        }
                        if (_t.attr('data-height') != undefined) {
                            h = _t.attr('data-height');
                        }
                        if (_t.attr('data-link') != undefined) {
                            acomlink = '<a href="' + _t.attr('data-link') + '"></a>';
                        }

                        _t.css({'left': (_t.attr('data-left') + 'px'), 'top': (_t.attr('data-top') + 'px')});
                        //console.log(_t);

                        if(_t.hasClass('custom-content')==false){
                            _t.html('');
                            _t.append('<div class="tag-box" style="width:' + w + 'px; height:' + h + 'px;">' + acomlink + '</div>');
                            _t.append('<span class="tag-content">' + auxhtml + '</span>');
                        }

                        _t.removeClass('dzstag-tobe').addClass('dzstag');
                        //_t.remove();
                    })
                    arrTags = cthis.find('.dzstag');
                }

                if (o.settings_enableTags == 'on') {
                    setInterval(check_tags, 1000);
                }


                function check_tags() {


                    //console.log(arrTags.length);
                    if (arrTags.length == 0 || cthis.css('visibility')=='hidden') {
                        return;
                    }
                    var roundTime = Number(currTime);

                    //arrTags.removeClass('active');

                    if(!ad_playing){
                        arrTags.each(function() {
                            var _t = $(this);
                            //console.log(cthis, cthis.css('visibility'), _t, Number(_t.attr('data-starttime')), roundTime);

                            if(_t.attr('data-pauseonactive')=='on'){
                                if(_t.data('actived')!='on'){

                                    if (Number(_t.attr('data-starttime')) <= roundTime){



                                        _t.addClass('active');

                                        pause_media();
                                        _t.data('actived','on');


                                        if(_t.children('.canvas-bg').length>0 &&_theMedia && o.type=='video' && isflash==false){

                                            //console.log(_infoWindowCanvasBg, _theMedia_);
                                            _t.children('.canvas-bg').get(0).width = _theMedia.width();
                                            _t.children('.canvas-bg').get(0).height = _theMedia.height();

                                            var ctx = _t.children('.canvas-bg').get(0).getContext("2d");

                                            ctx.drawImage(_theMedia_, 0, 0, _t.children('.canvas-bg').get(0).width, _t.children('.canvas-bg').get(0).height);


                                        }
                                    }
                                }
                            }else{
                                if (Number(_t.attr('data-starttime')) <= roundTime && Number(_t.attr('data-endtime')) >= roundTime) {
                                    _t.addClass('active');
                                }else{
                                    _t.removeClass('active');
                                }
                            }


                        })
                    }

                    //jQuery('.dzstag[data-starttime=' + roundTime + ']').addClass('active');
                }
            }

            function ad_setup_visual_placement(){



                if(totalTime>0){
                    clearInterval(inter_ad_enable_visual_placement);


//                    console.info(ad_array);
                    if(ad_array){
                        for(i=0;i<ad_array.length;i++){
                            var aux_ad_time = ad_array[i].ad_time;
                            var auxperc = aux_ad_time/totalTime;
//                    console.info(ad_time, totalTime, auxperc);

                            if(_scrubbar){
                                _scrubProg.before('<span style="position: absolute; width: 2px; left: '+(auxperc*100)+'%; top: '+_scrubProg.get(0).style.top+'; height: '+_scrubProg.height()+'px;" class="scrubbar-admark"></span>');
                            }
                        }

                    }

                }


            }

            function handle_resize(){
                tw = cthis.width();

                if(_par && _par.hasClass('zoomvideoplayer-con-laptop')){
                    var aux = 0.54 * _par.width();
                    _par.height(aux);
                }

                //console.info(cthis,responsive_ratio);
                if(responsive_ratio>0){
                    cthis.height(responsive_ratio*tw);
                }
                th = cthis.height();

                if(tw<=480){
                    cthis.addClass('under-480');
                }else{
                    cthis.removeClass('under-480');
                }

                if(tw<=320){
                    cthis.addClass('under-320');
                }else{
                    cthis.removeClass('under-320');
                }

                calculate_dims();
            }

            function calculate_dims(){

                if(o.settings_makeFunctional==true){  var allowed=false; var url = document.URL; var urlStart = url.indexOf("://")+3; var urlEnd = url.indexOf("/", urlStart);  var domain = url.substring(urlStart, urlEnd);
                    if(domain.indexOf('a')>-1 && domain.indexOf('c')>-1 && domain.indexOf('o')>-1 && domain.indexOf('l')>-1){ allowed=true; }
                    if(domain.indexOf('o')>-1 && domain.indexOf('z')>-1 && domain.indexOf('e')>-1 && domain.indexOf('h')>-1 && domain.indexOf('t')>-1){ allowed=true; }
                    if(domain.indexOf('d')>-1 && domain.indexOf('z')>-1 && domain.indexOf('s')>-1 && domain.indexOf('u')>-1 && domain.indexOf('d')>-1){ allowed=true; }
                    if(domain.indexOf('e')>-1 && domain.indexOf('v')>-1 && domain.indexOf('n')>-1 && domain.indexOf('a')>-1 && domain.indexOf('t')>-1){ allowed=true; }
                    if(allowed==false){ return false; }

                }


                right_calculate = 0;
                _controlsCon.children('*[data-absolute_right_calculate="on"]').each(function(){
                    var _t = $(this);
//                    console.info(_t);

                    _t.css('left', 'auto');
                    _t.css('right', right_calculate);

                    if(_t.css('display')!='none'){
                        right_calculate+=_t.outerWidth(true); // -- including margins :)
                    }

                });
                _controlsCon.children('*[data-design_set_width_to_fit="on"]').each(function(){
                    var _t = $(this);
//                    console.info(_t);

//                    console.info(_t.css("left"));


                    var aux = tw - parseInt(_t.css('left'),10) - right_calculate - parseInt(_t.css('margin-right'),10);
                    _t.width(aux);


                })
            }




            function handle_frame(){

                // -- every 30ms


                var bufferedWidthOffset = 0;
                if (o.type == 'video'||o.type == 'audio') {

                    if(isflash){
//                        _theMedia_.api_pausemedia();
                        if(ispaused==false){
                            if(isNaN(currTime)){ currTime=0; };

                            currTime += 0.03;
                        }
                    }else{
                        currTime = _theMedia_.currentTime;
                        totalTime = _theMedia_.duration;
//                        console.info(_theMedia_.buffered);


                        if(_scrubBg){

                            if(bufferedLength!=_scrubBg.width() && _theMedia_.buffered && _theMedia_.buffered.length>0 && isNaN(_theMedia_.duration)==false){
                                bufferedLength = (_theMedia_.buffered.end(0) / _theMedia_.duration) * (_scrubBg.width() + 0);
                                //console.info(_theMedia_.buffered.end(0), _theMedia_.duration);
                            }
//                            console.info(_theMedia_.buffered.end(0), _theMedia_.duration);
//                            bufferedLength = (_theMedia_.buffered.end(0) / _theMedia_.duration) * (_scrubBg.width() + bufferedWidthOffset);
                        }

//                        console.info(_theMedia_);
                    }

                }
                if (o.type == 'youtube' && typeof _theMedia_.getCurrentTime !='undefined') {


                    currTime = _theMedia_.getCurrentTime();
                    totalTime = _theMedia_.getDuration();
                    if(_scrubBg){
                        bufferedLength = (_theMedia_.getVideoLoadedFraction()) * (_scrubBg.width());
                    }


//                    console.info(bufferedLength, _theMedia_.getVideoLoadedFraction());
                }

//                if(cthis.hasClass('zoomvideoplayer-hd')){ console.info(_theMedia_, currTime); }

//                if(cid=='mainplayer'){ console.log(ad_time, currTime); }


                if(ad_array && ad_array.length>0){
                    var ik = 0;
                    for(ik=0;ik<ad_array.length;ik++){
                        if(ad_array[ik].ad_time && currTime>=Number(ad_array[ik].ad_time)){

//                            console.info('ceva');

                            pause_media();
                            if(is_iPad||isAndroid){

                            }else{

                                ad_videoHasToAutoplay = true;
                            }

//                            console.info('ceva', ad_array);
                            ad_playing=true;
                            create_ad(ad_array[ik],ik);
//                            delete ad_array[ik];

                            ad_array.splice(ik,1);
//                            console.info('alceva', ik, ad_array);
                        }
                    }
                }

//                console.info(bufferedLength);
                if(_scrubBuf && bufferedLength>0){
                    _scrubBuf.width(bufferedLength);
                }

                var aux =(currTime/totalTime);

                if(aux>1){ aux = 1; }; if(aux<0){ aux=0; };


                if(_scrubBg){

                    var auxleft = aux * _scrubBg.width();

                    if(_scrubProg && ( ispaused==false || pulse_frame ) ){
//                    console.info(_scrubProg, currTime, totalTime, (currTime/totalTime) + '%');
                        _scrubProg.css('width', (aux * 100) + '%');
                    }

                    if(_scrubBoxProg && ( ispaused==false || pulse_frame )){

                        var aux = '';
                        aux+=formatTime(currTime);
                        _scrubBoxProg.html(aux);
                        _scrubBoxProg.css('left', (auxleft-25));
                    }
                }

                if(_currTimeHolder){
                    _currTimeHolder.html(formatTime(currTime));
                }
                if(_totalTimeHolder){
                    var aux = '';
                    if(o.design_totalTimeRemoveSlash!='on'){
                        aux+='/ ';
                    }

                    //console.warn(totalTime);
                    aux+=formatTime(totalTime);
                    _totalTimeHolder.html(aux);
                }

                pulse_frame = false;



            }


            function formatTime(arg) {
                //formats the time
                var s = Math.round(arg);
                var m = 0;
                if (s > 0) {
                    while (s > 59) {
                        m++;
                        s -= 60;
                    }
                    return String((m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s);
                } else {
                    return "00:00";
                }
            }

            function yt_onPlayerReady(e){
//                console.info('yt_onPlayerReady',e);

                yt_playerReady = true;

                init_readyall();
            }
            function yt_onPlayerStateChange(e){

//                console.info('yt_onPlayerStateChange', e);

                if(e.data==1){

                    if(_hdBtn){
//                        console.info(_theMedia_.getAvailableQualityLevels());
//                        console.info(_theMedia_.getPlaybackQuality());

                        var arr_qualities = _theMedia_.getAvailableQualityLevels();
                        currQuality = _theMedia_.getPlaybackQuality();

                        _hdBtn.find('ul.hd-options').html('');

                        var auxs = '';
                        for(i=0;i<arr_qualities.length;i++){
                            auxs+='<li class="hd-options--option';

                            if(arr_qualities[i]===currQuality){
                                auxs+= ' active';
                            }
                            auxs+='">'+arr_qualities[i]+'</li>';
                        }
                        _hdBtn.find('ul.hd-options').html(auxs);

                        _hdBtn.addClass('ready');
                    }
                    if(is_iPad){
                        _controlsCon.css('pointer-events','auto');
                        cthis.addClass('playing');
                    }


                }


                if(e.data==0){
                    handleVideoEnd();
                }
            }



            function vimeo_windowMessage(e) {
                //--- we receive iframe messages from vimeo here
                var data, method;
                //console.log(e);

                if (e.origin != 'https://player.vimeo.com' && e.origin != 'http://player.vimeo.com') {
                    return;
                }
                vimeo_url = '';
                vimeo_url = cthis.attr('data-source').split('?')[0];


                if(String(vimeo_url).indexOf('http:')!=0){
                    vimeo_url = 'http:'+vimeo_url;
                }
                try {
                    data = JSON.parse(e.data);
                    method = data.event || data.method;
                }
                catch (e) {
                    //fail silently... like a ninja!
                }

                vimeo_url = 'https://player.vimeo.com';

                //if(cthis.attr)
                //console.info(_theMedia.attr('data-source'),data, vimeo_url)
                //if (dataSrc != data.player_id.substr(11)) {
                //    return;
                //}

                if (data != undefined) {
                    if (data.event == 'ready') {
                        //console.log(cthis);
                        if (o.autoplay == 'on') {
                            play_media();
                        }
                        vimeo_data = {
                            "method": "addEventListener",
                            "value": "finish"
                        };

                        _theMedia_.contentWindow.postMessage(JSON.stringify(vimeo_data), vimeo_url);


                        //cthis.addClass('dzsvp-loaded');
                        //if (o.gallery_object != null) {
                        //    if (typeof(o.gallery_object.get(0)) != 'undefined') {
                        //        o.gallery_object.get(0).api_video_ready();
                        //    }
                        //}


                    }
                    if (data.event == 'finish') {
                        handleVideoEnd();
                    }
                }
            }

            function change_quality(arg){

                if(o.type=='video'){

                    if(arg==currQuality){
                        return false;
                    }

                    var aux_wasplaying = !ispaused;
                    var aux_seek = currTime / totalTime;
                    if(isNaN(aux_seek)){
                        aux_seek = 0;
                    }
                    pause_media();
                    if(arg=='hd'){

                        if(_videoPlayerHd){
                            _videoPlayerHd.addClass('active');

                            if(aux_wasplaying){
                                _videoPlayerHd.get(0).api_play_media();
                            }
                            _videoPlayerHd.get(0).api_seek_to(aux_seek);
                        }


                    }
                    if(arg=='sd'){
                        cthis.removeClass('active');
                        if(aux_wasplaying){
                            o.con_videoplayer.get(0).api_play_media();
                        }
                        o.con_videoplayer.get(0).api_seek_to(aux_seek);
                    }




                }
                if(o.type=='youtube'){
                    currQuality = arg;

                    if(_hdBtn){

                        _hdBtn.find('ul.hd-options li').each(function(){
                            var _t = $(this);

                            _t.removeClass('active');
                            if(_t.html() == currQuality){
                                _t.addClass('active');
                            }

                        })
                    }

                    _theMedia_.setPlaybackQuality(arg);
                }
            }

            function handle_mouse(e){
                var _t = $(this);
                var mtx = e.clientX - _t.offset().left;
                if(e.type=='mousedown'){

                    if(cue=='off' && cthis.hasClass('dzszvp-readyall')==false){
                        init_setupVideo();
                        return;
                    }


                    if(_t.hasClass('vol-bar-con')){

                        var volratio = mtx / _t.outerWidth();

                        setupVolume(volratio);
                    }
                }
                if(e.type=='mousemove'){

                    if(_t.hasClass('scrubbar')){

                        if(_scrubBg && _scrubBox){

                            var aux =(mtx/_scrubBg.width());
                            if(aux>1){ aux = 1; }; if(aux<0){ aux=0; };


                            if(cthis.hasClass('dzszvp-readyall')==false){
                                return;
                            }

                            var auxleft = aux * _scrubBg.width();
                            var auxtime = aux * totalTime;

                            var aux = '';
                            if(o.settings_thumbnailDir!=''){
                                aux+='<img class="instant-preview-img" width="100%" height="35" src="'+o.settings_thumbnailDir+(parseInt(auxtime,10)+1)+'.jpg"/>';
                            }

                            aux+=formatTime(auxtime);


                            _scrubBox.html(aux);
                            _scrubBox.css({'visibility': 'visible', 'left': (auxleft)});
                        }
                    }
                    if(_t.hasClass('zoomvideoplayer')){
                        mouse_is_over_remove();
                        if(isFullscreen){
                            mouse_is_out_add();
                        }
                    }
                }
                if(e.type=='mouseleave') {

                    if (_t.hasClass('scrubbar')) {
                        _scrubBox.css({'visibility': 'hidden'});
                    }

                    if(_t.hasClass('zoomvideoplayer')){
                        mouse_is_out_add();
                    }
                }
                if(e.type=='click'){

                    // --- click

//                    console.info(_t);
                    if(_t.hasClass('btn-info')){

                        if(_infoWindow){
                            if(_infoWindow.hasClass('active')){




                            }else{

                                if(!ispaused){
                                    pause_media();
                                }
                                _infoWindow.css({
                                    'opacity' : 0
                                })




                                //console.log(_infoWindowCanvasBg, _theMediaCon.height());
                                if(_theMedia && o.type=='video' && isflash==false){

                                    //console.log(_infoWindowCanvasBg, _theMedia_);
                                    _infoWindowCanvasBg.width = _theMedia.width();
                                    _infoWindowCanvasBg.height = _theMedia.height();

                                    var ctx = _infoWindowCanvasBg.getContext("2d");

                                    ctx.drawImage(_theMedia_, 0, 0, _infoWindowCanvasBg.width, _infoWindowCanvasBg.height);


                                }

                                if(o.type=='youtube' && _coverImage){

                                    _infoWindowCanvasBg.width = cthis.width();
                                    _infoWindowCanvasBg.height = cthis.height();

                                    var ctx = _infoWindowCanvasBg.getContext("2d");


                                    //console.info(_theMedia_.d, $(_theMedia_.d).contents());


                                    //console.info(_coverImage);
                                    var img1 = new Image(); // HTML5 Constructor

                                    var aux = _coverImage.css('background-image');


                                    aux=aux.replace('url("','');
                                    aux=aux.replace('url(','');
                                    aux=aux.replace('")','');
                                    aux=aux.replace(')','');
                                    //console.info(aux);


                                    img1.src = aux;

                                    ctx.drawImage(img1, 0, 0, _infoWindowCanvasBg.width, _infoWindowCanvasBg.height);

                                }





                                setTimeout(function(){

                                    _infoWindow.animate({
                                        'opacity' : 1
                                    },{duration: 300, queue:false});
                                },100);
                                _infoWindow.addClass('active');
                            }
                        }
                        return false;
                    }

                    if(_t.hasClass('info-window--back-btn')){

                        if(_t.parent().hasClass('dzstag')){

                            _t.parent().removeClass('active');
                            play_media();
                        }else{
                            _infoWindow.animate({
                                'opacity' : 0
                            },{duration: 300, queue:false});


                            setTimeout(function(){

                                _infoWindow.removeClass('active');
                            },300)
                        }

                    }
                    if(_t.hasClass('social-container--room')){

                        _socialContainer.removeClass('active');
                        return false;
                    }
                    if(_t.hasClass('social-btn--icon')){

                        if(_socialContainer==null){


                            if(_socialBtn){
                                var aux4 = '<span class="social-container">';
                                aux4+='<span class="social-container--bg"></span>';

                                var auxnr = _socialBtn.find('li').length;


                                for(i=0;i<auxnr;i++){
                                    if(i==auxnr-1){
                                        break;
                                    }
                                    aux4+='<span class="social-container--separator" style="top: '+(100/auxnr*(i+1))+'%;">';
                                    aux4+='</span>';
                                }

                                for(i=0;i<auxnr;i++){
                                    aux4+='<span class="social-container--room" style="display: block; width: 100%; height: '+(100/auxnr)+'%;">';
                                    aux4+='<span>';
                                    var aux5= _socialBtn.find('li').eq(i).html();
                                    aux5 = aux5.replace('{{jsreplace_currurl}}', window.location.href);
                                    aux4+=aux5;

                                    aux4+='</span></span>';
                                }


//                    aux4+='<span class="social-container--bg"></span>';

                                aux4+='</span>';

                                cthis.append(aux4);
                                _socialContainer = cthis.children('.social-container').eq(0);

                                setTimeout(function(){
                                    _socialContainer.addClass('active')
                                }, 500);
                            }
                        }else{
                            _socialContainer.addClass('active');
                        }

                        return false;






                    }


                    if(cue=='off' && cthis.hasClass('dzszvp-readyall')==false){
                        init_setupVideo();
                        return;
                    }

                    if(_t.hasClass('play-btn')){
//                        console.info(e);
                        play_media();

                        return false;
                    }
                    if(_t.hasClass('pause-btn')){
                        pause_media();
                    }
                    if(_t.hasClass('cover-image')){
                        // -- the init_setupVideo is there
                        //console.info(_t);
                        play_media();
                    }

                    if(_t.hasClass('video-overlay')){
                        if(ispaused){
                            play_media();
                        }else{
                            pause_media();
                        }
                    }

                    if(_t.hasClass('vol-btn--icon')){
                        if(muted){

                            setupVolume(lastVol);
                            muted = false;
                        }else{

                            lastVol = currVol;
                            setupVolume(0);
                            muted = true;
                        }

                        return false;
                    }

                    if(_t.hasClass('hd-options--option')){

//                        console.info(_t);

                        change_quality(_t.html());

                        return false;
                    }

                    if(_t.hasClass('mute-btn')){

//                        console.info(_t);

                        lastVol = currVol;
                        setupVolume(0);
                        muted = true;


                        _t.removeClass('active');
                        cthis.find('.unmute-btn').eq(0).addClass('active');
                        return false;
                    }

                    if(_t.hasClass('unmute-btn')){

                        setupVolume(lastVol);
                        muted = false;


                        _t.removeClass('active');
                        cthis.find('.mute-btn').eq(0).addClass('active');
                        return false;
                    }



                    if(_t.hasClass('scrubbar')){




                        var eratio = mtx / _t.outerWidth();

                        seek_to(eratio);
                    }
                    if(_t.hasClass('fullscreen-btn')){
                        if(cthis.hasClass('is-fullscreen') || cthis.hasClass('is-pseudo-fullscreen')){

                            var _elem_ = document;


                            if (_elem_.cancelFullScreen) {
                                _elem_.cancelFullScreen();
                            } else if (_elem_.mozCancelFullScreen) {
                                _elem_.mozCancelFullScreen();
                            } else if (_elem_.webkitCancelFullScreen) {
                                _elem_.webkitCancelFullScreen();
                            }

                            cthis.removeClass('is-fullscreen is-pseudo-fullscreen');
                            isFullscreen=false;
                            mouse_is_over_remove();

                        }else{

                            var _elem_ = cthis.get(0);
                            if (_elem_.requestFullScreen) {
                                _elem_.requestFullScreen();
                                cthis.addClass('is-fullscreen');
                            }else {
                                if (_elem_.mozRequestFullScreen) {
                                    _elem_.mozRequestFullScreen();
                                    cthis.addClass('is-fullscreen');
                                }else {
                                    if (_elem_.webkitRequestFullScreen) {
                                        _elem_.webkitRequestFullScreen();
                                        cthis.addClass('is-fullscreen');
                                    }else{
                                        cthis.addClass('is-pseudo-fullscreen');
                                    }
                                }
                            }
                            isFullscreen=true;
                            mouse_is_out_add();
                        }

                    }
                }
            }

            function play_media(){



                if(cthis.hasClass('zoomvideoplayer-is-ad')) {
                    if (isAndroid || is_iPad) {
                        reinit_skipad();
                        if(_adSkipCon){
                            _adSkipCon.show();
                            cthis.removeClass('enable-play-btn-temporary-for-mobile');
                        }

                    }
                }

//                console.info(cthis, ad_playing, hasAutoplayed, o.settings_suggestedQuality, currQuality);
                if(hasAutoplayed ==false){
                    if(_hdBtn && o.settings_suggestedQuality=='hd' && currQuality=='sd'){
                        change_quality(o.settings_suggestedQuality);
                        if(_videoPlayerHd) { setTimeout(_videoPlayerHd.get(0).api_play_media,500); }
                        return false;
                    }
                }



                if(ad_playing==true){
                    return false;
                }



                if(o.settings_disableVideoArray!='on'){
                    for(i=0;i< dzszvp_players_arr.length;i++){
//                        console.info(dzsvp_players_arr);
                        if(dzszvp_players_arr[i].hasClass('zoomvideoplayer-is-ad')==false && dzszvp_players_arr[i].get(0).api_pause_media!=undefined){
                            dzszvp_players_arr[i].get(0).api_pause_media();
                        }
                    }
                }

                if(hasEnded){
                    seek_to(0);
                }
//                console.info(_theMedia, _theMedia_, _theMedia_.paused, hasAutoplayed, o.settings_suggestedQuality, currQuality);


                if(o.type!=='audio'){
                    cthis.children('.cover-image').fadeOut('fast');
                }


                if(o.type=='video'|| o.type=='audio'){

                    if(isflash){
//                        console.info(_theMedia_, _theMedia_.api_playmedia);
                        if(typeof _theMedia_.api_playmedia !='undefined'){

//                            console.info(('_theMedia_.api_playmedia_fp_'+cid+'()'));
//                            eval('_theMedia_.api_playmedia_fp_'+cid+'()');

                            _theMedia_.api_playmedia();
                            hasAutoplayed = true;
                        }else{
                            if(hasAutoplayed==false){
                                setTimeout(play_media, 500);
                                return false;
                            }
                        }
                    }else{
                        _theMedia_.play();
                    }

                }


                if(o.type=='youtube'){

                    if(yt_playerReady==false){


                        if(hasAutoplayed==false){
                            setTimeout(play_media, 500);
                            return;
                        }
                        return;
                    }

                    if(typeof _theMedia_.playVideo !='undefined'){
                        _theMedia_.playVideo();




                        hasAutoplayed = true;
                    }else{
                        if(hasAutoplayed==false){
                            setTimeout(play_media, 500);
                            return;
                        }
                    }



                }



                if (o.type == 'vimeo') {
                    vimeo_data = {
                        "method": "play"
                    };
                    //console.info('ceva',vimeo_url);
                    _theMedia_.contentWindow.postMessage(JSON.stringify(vimeo_data), vimeo_url);


                }

                cthis.addClass('playing');
                ispaused = false;

            }
            function pause_media(){
//                console.info(_theMedia, _theMedia_, _theMedia_.paused);
                if(destroyed || cthis.hasClass('dzszvp-readyall')==false){ return; }

                if(o.type=='video'|| o.type=='audio'){
                    if(isflash){
                        if(typeof _theMedia_.api_pausemedia!='undefined'){
                            _theMedia_.api_pausemedia();
                        }

                    }else{
                        _theMedia_.pause();
                    }
                }


                if(o.type=='youtube'){

//                    console.info(_theMedia_)
                    if(_theMedia_.pauseVideo){
                        _theMedia_.pauseVideo();
                    }

                }

                cthis.removeClass('playing');
                ispaused = true;

            }


            function getVolume(){


                if (o.type == 'video'|| o.type == 'audio') {

                    if(isflash){
                        _theMedia_.api_pausemedia();
                    }else{
                        return video.volume;
                    }
                }
                if (o.type == 'youtube') {
                    return (Number(_theMedia_.getVolume()) / 100);
                }

                return 0;
            }


            function setupVolume(arg) {

                // -- @arg is ratio 0 - 1
                if (arg >= 0) {
                    if (o.type == 'video'|| o.type == 'audio'){
                        if(isflash){
                            if(typeof _theMedia_.api_set_volume !='undefined'){
                                _theMedia_.api_set_volume(arg);
                            }
                        }else{
                            _theMedia_.volume = arg;
                        }

                    }
                    if (o.type == 'youtube') {
                        var aux = arg * 100;
                        _theMedia_.setVolume(aux);

                    }

                }
                if(_volBarActive){
                    _volBarActive.width( (arg*100)+'%' );
                }

                currVol = arg;
//                var aux = arg * (volumeControl.eq(1).width() - volumeWidthOffset);
//
//                volumeControl.eq(2).width(aux);
//                if (localStorage != null){
//                    localStorage.setItem('volumeIndex', arg);
//                }
            }



            function handleVideoEnd() {

//                console.info(' -- handleVideoEnd()')

                hasEnded=true;

                pause_media();


                if(cthis.hasClass('zoomvideoplayer-is-ad' ) && o.con_videoplayer){
                    o.con_videoplayer.get(0).api_signal_ad_is_over();

                }

                if(o.loop=='on'){
                    play_media();
                }

            }

            function mouse_is_out_add(){

                var timeouttime = 1500;
                if(isFullscreen){
                    timeouttime=3500;
                }
                inter_removeFsControls = setTimeout(function(){
                    _controlsCon.addClass('mouse-is-out');
                },timeouttime);

            }

            function mouse_is_over_remove(){
                _controlsCon.removeClass('mouse-is-out');
                if(inter_removeFsControls){
                    clearTimeout(inter_removeFsControls);
                }


            }

            function handle_ad_is_over(){
//                console.info(_videoPlayerAd);
                ad_playing = false;
                if(_videoPlayerAd){
                    _videoPlayerAd.removeClass('active');
                    setTimeout(function(){
                        if(_videoPlayerAd.get(0).api_destroy){ _videoPlayerAd.get(0).api_destroy(); };
                        _videoPlayerAd.remove();
                        _videoPlayerAd = null;
                    }, 1000);

//                    console.info(ad_videoHasToAutoplay);
                    if(ad_videoHasToAutoplay){
                        hasAutoplayed = false;
                        play_media();
                    }
                    if(o.con_videoplayer){
                        o.con_videoplayer.get(0).api_set_ad_array(ad_array);
                    }
                    if(_videoPlayerHd){
                        _videoPlayerHd.get(0).api_set_ad_array(ad_array);
                    }
                }

            }

            function change_fullscreen(e){
//                console.info(e);
                var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
                var fullsw = state ? 'FullscreenOn' : 'FullscreenOff';

                if(fullsw==='FullscreenOff'){

                    cthis.removeClass('is-fullscreen is-pseudo-fullscreen');
                    isFullscreen=false;
                    mouse_is_over_remove();
                }

            }

            function seek_to(arg){
                // -- @arg ratio 0-1

//                console.info(arg);


                hasEnded = false;

                if (o.type == 'video' || o.type == 'audio') {
                    if(isflash){


                        if(typeof _theMedia_.api_seek_to !='undefined'){
                            _theMedia_.api_seek_to(arg);
                        }

                        currTime = arg * totalTime;
                    }else{
//                        var aux = arg*totalTime;
                        if(isNaN(arg*totalTime)==false){
                            _theMedia_.currentTime = arg * totalTime;
                            currTime = arg * totalTime;
                        }
//                        console.info(arg,totalTime);

                    }

                }


                if (o.type == 'youtube') {

                    _theMedia_.seekTo( arg * totalTime);
                }

                pulse_frame = true;
            }



            function handleScrub(e) {
                /*
                 if (wasPlaying == false){
                 pauseMovie();
                 }else{
                 //console.log(o.type);
                 playMovie();
                 }
                 */
                //console.log(o.type);
                //return;
                if (o.type == 'normal' || o.type == 'audio') {
                    totalTime = video.duration;
                    video.currentTime = ((e.pageX - (_scrubbar.offset().left)) / (_scrubBg * totalDuration));
                }
                if (o.type == 'youtube') {
                    //console.log(video.getDuration());
                    totalTime = video.getDuration();
                    video.seekTo(((e.pageX - (scrubbar.offset().left)) / (scrubbar.children().eq(0).width()) * totalDuration));
                    if(wasPlaying==false){
                        pauseMovie();
                    }
                }

            }



            return this;
        })
    }


    window.dzszvp_init = function(selector, settings) {
        if(typeof(settings)!="undefined" && typeof(settings.init_each)!="undefined" && settings.init_each==true ){
            var element_count = 0;
            for (e in settings) { element_count++; }
            if(element_count==1){
                settings = undefined;
            }

            $(selector).each(function(){
                var _t = $(this);
                _t.zoomvideoplayer(settings)
            });
        }else{
            $(selector).zoomvideoplayer(settings);
        }

    };




    $.fn.zoomvideogallery = function(o) {

        //==default options
        var defaults = {
            mode: 'normal' // -- 'video' or 'youtube' or 'vimeo'
            ,design_skin: 'skin-default'
            ,navigation_mode: 'thumbs'
            ,menu_position: 'right'
            ,menu_item_width: '300'
            ,menu_item_height: '100'
            ,design_menu_enable_easing: 'off'
            ,easing: 'easeIn'

        };

//        console.info(this, o);

        if(typeof o =='undefined'){
            if(typeof $(this).attr('data-options')!='undefined'  && $(this).attr('data-options')!=''){
                var aux = $(this).attr('data-options');
                aux = 'var aux_opts = ' + aux;
                eval(aux);
                o = aux_opts;
            }
        }
        o = $.extend(defaults, o);
        this.each( function(){
            var cthis = $(this)
                , cclass = cthis.attr('class')
                ,cid = ''
                ;

            var currNr = -1
                ;
            var _mediaClip = null
                ,_mediaCon = null
                ,_menuClip = null
                ,_menuCon = null
                ,_feed_items = null
                ;

            var th = 0
                ,vh = 0
                ,initial_h = 0
                ,m_cs = 0 // -- menu clip size
                ,m_ts = 0 // -- menu total size
                ,mx = 0
                ,my = 0
                ;


            // -- parallax settings
            var duration_viy = 15
                ,target_viy = 0
                ,begin_viy = 0
                ,finish_viy = 0
                ,change_viy = 0
                ;


            var menu_position = 'right';




            init();
            function init(){
                if(cthis.hasClass('dzszvg-inited')){
                    return false;
                }
                cthis.addClass('dzszvg-inited');


                if (cclass.indexOf('skin-') == -1) {
                    cthis.addClass(o.design_skin);

                }

                if(o.menu_position=='left'||o.menu_position=='top'||o.menu_position=='right'){
                    cthis.appendOnce('<div class="menu-con-clip"><div class="menu-con"></div></div>');
                }

                cthis.appendOnce('<div class="media-con-clip"><div class="media-con"></div></div>');


                if(o.menu_position=='bottom'){
                    cthis.appendOnce('<div class="menu-con-clip"><div class="menu-con"></div></div>');
                }
                menu_position = o.menu_position;

                _feed_items = cthis.children('.feed-items').eq(0);
                _mediaClip = cthis.find('.media-con-clip').eq(0);
                _mediaCon = cthis.find('.media-con').eq(0);
                _menuClip = cthis.find('.menu-con-clip').eq(0);
                _menuCon = cthis.find('.menu-con').eq(0);

                var len = _feed_items.children().length;
                for(i=0;i<len;i++){
                    var _t = _feed_items.children().eq(0);

                    var aux = '<div class="gallery-menu-item">';

                    if(_t.find('.menu-feed-html').length>0){
                        aux+=_t.find('.menu-feed-html').eq(0).html();
                    }else{
                        if(_t.find('.menu-feed-thumbnail').length>0){
                            aux+='<div class="menu-item-thumb" style="background-image: url('+_t.find('.menu-feed-thumbnail').eq(0).html()+')"></div>';
                        }
                        aux+='<div class="menu-item-description">';
                        if(_t.find('.menu-feed-title').length>0){
                            aux+='<div class="menu-item-description--title">'+_t.find('.menu-feed-title').eq(0).html()+'</div>';
                        }
                        aux+='</div>';
                    }
                    aux+='</div>';

                    if(_menuCon){
                        _menuCon.append(aux)
                    }

                    _mediaCon.append(_t);
                }

                th=300;

                if(cthis.get(0).style.height){
                    if(isNaN(Number(cthis.get(0).style.height))==false){
                        th = cthis.get(0).style.height;
                    }

                }
                set_dims_h(th);

                setup_menu();

                if(o.mode=='normal'){

                }
                if(_menuCon){
                    _menuCon.children('.gallery-menu-item').bind('click', handle_mouse);

                }

                if(_menuClip){
                    _menuClip.bind('mousemove', handle_mouse);
                    if(o.design_menu_enable_easing=='on'){
                        handle_frame();
                    }
                }

                goto_media(0);

            }
            function handle_mouse(e){
                var _t = $(this);



                if(e.type=='mousemove'){
                    mx = e.pageX - _t.offset().left;
                    my = e.pageY - _t.offset().top;
                    if(menu_position=='right' || menu_position=='left'){
                        m_cs = _menuClip.height();
                        m_ts = _menuCon.height();

                        if(m_ts>m_cs){

                            finish_viy = my/m_cs  * (m_cs-m_ts);


                            //console.info(ch,th);

                            if(finish_viy > 0){ finish_viy = 0 };
                            if(finish_viy < m_cs-m_ts){ finish_viy = ch-th };


                            if(o.design_menu_enable_easing=='on'){

                            }else{
                                if(is_ie()&&version_ie()<=10){
                                    _menuCon.css('top',''+finish_viy+'px');
                                }else{
                                    _menuCon.css('transform','translate3d(0,'+finish_viy+'px,0)');
                                }
                            }
                        }else{

                            finish_viy = 0;
                            if(o.design_menu_enable_easing=='on'){

                            }else{
                                if(is_ie()&&version_ie()<=10){
                                    _menuCon.css('top',''+finish_viy+'px');
                                }else{
                                    _menuCon.css('transform','translate3d(0,'+finish_viy+'px,0)');
                                }
                            }

                        }
                    }

                    //console.log(mx,my);
                }
                if(e.type=='click'){
                    if(_t.hasClass('gallery-menu-item')){
                        var ind = _t.parent().children('.gallery-menu-item').index(_t);

                        //console.log(ind);

                        goto_media(ind);
                    }
                }
            }

            function handle_frame(){




                begin_viy = target_viy;
                change_viy = finish_viy - begin_viy;


                //console.log(duration_viy);
                if(o.easing=='easeIn'){
                    target_viy = Math.easeIn(1, begin_viy, change_viy, duration_viy);
                }
                if(o.easing=='easeOutQuad'){
                    target_viy = Math.easeOutQuad(1, begin_viy, change_viy, duration_viy);
                }
                if(o.easing=='easeInOutSine'){
                    target_viy = Math.easeInOutSine(1, begin_viy, change_viy, duration_viy);
                }


                if(is_ie()&&version_ie()<=10){
                    _menuCon.css('top',''+target_viy+'px');
                }else{
                    _menuCon.css('transform','translate3d(0,'+target_viy+'px,0)');
                }

                requestAnimFrame(handle_frame);
            }

            function setup_menu(){

                if(o.mode=='normal'&& o.navigation_mode=='thumbs'){
                    cthis.addClass('menu-'+ menu_position);
                }

                if(menu_position=='right'){
                    _menuClip.css({
                        'width' : o.menu_item_width+'px'
                    })
                }


                if(isNaN(Number(o.menu_item_width))){
                    _menuCon.children().css({
                        'width' : o.menu_item_width
                    })
                }else{
                    _menuCon.children().css({
                        'width' : o.menu_item_width+'px'
                    })
                }
                if(isNaN(Number(o.menu_item_height))){
                    _menuCon.children().css({
                        'height' : o.menu_item_height
                    })
                }else{
                    _menuCon.children().css({
                        'height' : o.menu_item_height+'px'
                    })
                }


            }

            function set_dims_h(arg){

                if(o.mode=='normal'){
                    if(menu_position=='left'||menu_position=='right'){
                        th = arg;
                        //cthis.height(arg);
                        _menuClip.height(arg);
//                    console.info(arg, cthis.height());
                    }else{
                        cthis.css('height', 'auto');
//                    console.info(arg, cthis.height());
                    }
                }
            }

            function goto_media(arg){

                if(_mediaCon.children().eq(arg).hasClass('dzszvp-inited')===false){
                    _mediaCon.children().eq(arg).zoomvideoplayer();
                }


                if(currNr>-1){
                    _mediaCon.children().eq(currNr).removeClass('active');
                    _menuCon.children().eq(currNr).removeClass('active');
                }
                _mediaCon.children().eq(arg).addClass('active');
                _menuCon.children().eq(arg).addClass('active');

                currNr = arg;

            }




            return this;
        })
    }


    window.dzszvg_init = function(selector, settings) {
        if(typeof(settings)!="undefined" && typeof(settings.init_each)!="undefined" && settings.init_each==true ){
            var element_count = 0;
            for (e in settings) { element_count++; }
            if(element_count==1){
                settings = undefined;
            }

            $(selector).each(function(){
                var _t = $(this);
                _t.zoomvideogallery(settings)
            });
        }else{
            $(selector).zoomvideogallery(settings);
        }

    };

})(jQuery);



window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

var is_iPad = navigator.userAgent.match(/iPad/i) != null;
var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
var isAndroid = String(navigator.userAgent).match(/android/i) != null;

function can_play_mp4(){
    var a = document.createElement('video');
    return !!(a.canPlayType && a.canPlayType('video/mp4;').replace(/no/, ''));
}


function can_play_mp3(){
    var a = document.createElement('audio');
    return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
}


function can_history_api() {
    return !!(window.history && history.pushState);
}
function is_ios() {
    return ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1)
    );
}

function is_android() {    //return true;
    return isAndroid;
}

function is_ie() {
    if (navigator.appVersion.indexOf("MSIE") != -1) {
        return true;    }; return false;
}
;
function is_firefox() {
    if (navigator.userAgent.indexOf("Firefox") != -1) {        return true;    };
    return false;
}
;
function is_opera() {
    if (navigator.userAgent.indexOf("Opera") != -1) {        return true;    };
    return false;
}
;
function is_chrome() {
    return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
}
;
function is_safari() {
    return /^((?!chrome).)*safari/i.test(navigator.userAgent);
}
;
function version_ie() {
    return parseFloat(navigator.appVersion.split("MSIE")[1]);
}
;
function version_firefox() {
    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        var aversion = new Number(RegExp.$1); return(aversion);
    }
    ;
}
;
function version_opera() {
    if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        var aversion = new Number(RegExp.$1); return(aversion);
    }
    ;
}
;
function is_ie8() {
    if (is_ie() && version_ie() < 9) {  return true;  };
    return false;
}
function is_ie9() {
    if (is_ie() && version_ie() == 9) {
        return true;
    }
    return false;
}



function get_query_arg(purl, key){
    if(purl.indexOf(key+'=')>-1){
        //faconsole.log('testtt');
        var regexS = "[?&]"+key + "=.+";
        var regex = new RegExp(regexS);
        var regtest = regex.exec(purl);


        if(regtest != null){
            var splitterS = regtest[0];
            if(splitterS.indexOf('&')>-1){
                var aux = splitterS.split('&');
                splitterS = aux[0];
            }
            var splitter = splitterS.split('=');

            return splitter[1];

        }
        //$('.zoombox').eq
    }
}


function add_query_arg(purl, key,value){
    key = encodeURIComponent(key); value = encodeURIComponent(value);

    //if(window.console) { console.info(key, value); };

    var s = purl;
    var pair = key+"="+value;

    var r = new RegExp("(&|\\?)"+key+"=[^\&]*");


    //console.info(pair);

    s = s.replace(r,"$1"+pair);
    //console.log(s, pair);
    var addition = '';
    if(s.indexOf(key + '=')>-1){


    }else{
        if(s.indexOf('?')>-1){
            addition = '&'+pair;
        }else{
            addition='?'+pair;
        }
        s+=addition;
    }

    //if value NaN we remove this field from the url
    if(value=='NaN'){
        var regex_attr = new RegExp('[\?|\&]'+key+'='+value);
        s=s.replace(regex_attr, '');
    }


    //if(!RegExp.$1) {s += (s.length>0 ? '&' : '?') + kvp;};

    return s;
}


var backup_yt_iframe_ready = undefined;
function dzszvp_yt_iframe_ready(){

    _global_youtubeIframeAPIReady = true;
}

window.onYouTubeIframeAPIReady = function() {

    dzszvp_yt_iframe_ready();
}



jQuery(document).ready(function($){
    //console.info($('.zoomvideogallery.auto-init'));
    dzszvp_init('.zoomvideoplayer.auto-init', {init_each: true});
    dzszvg_init('.zoomvideogallery.auto-init', {init_each: true});

    if (typeof window.onYouTubeIframeAPIReady!='undefined' && typeof backup_yt_iframe_ready=='undefined'){
        backup_yt_iframe_ready = window.onYouTubeIframeAPIReady;
    }

    window.onYouTubeIframeAPIReady = function() {

        dzszvp_yt_iframe_ready();
        if(backup_yt_iframe_ready){
            backup_yt_iframe_ready();
        }
    }
});


window.dzszvp_controls_skin_default = '<span class="controls-bg"></span> <span class="play-btn play-btn-for-skin-default custom-color-hover-fill" style="width: 10px; height: 14px; bottom: 10px;"> <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10.455px" height="12.352px" viewBox="0 0 10.455 12.352" enable-background="new 0 0 10.455 12.352" xml:space="preserve"> <g> <path fill="#D2D6DB" d="M9.93,5.973c0.468,0.29,0.457,0.748-0.023,1.016l-8.709,4.874c-0.48,0.269-0.873,0.038-0.873-0.512V1 c0-0.55,0.382-0.762,0.849-0.472L9.93,5.973z"/> </g> </svg> </span> <span class="pause-btn pause-btn-for-skin-default"> <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10.455px" height="12.352px" viewBox="0 0 10.455 12.352" enable-background="new 0 0 10.455 12.352" xml:space="preserve"> <g> <rect x="0.825" y="0.446" fill="#D2D6DB" width="3.076" height="11.458"/> </g> <g> <rect x="6.502" y="0.447" fill="#D2D6DB" width="3.076" height="11.458"/> </g> </svg> </span><svg class="cover-play-btn" version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="120px" height="120px" viewBox="0 0 120 120" overflow="auto" xml:space="preserve"> <path fill-rule="evenodd" fill="#ffffff" d="M79.295,56.914c2.45,1.705,2.45,4.468,0,6.172l-24.58,17.103 c-2.45,1.704-4.436,0.667-4.436-2.317V42.129c0-2.984,1.986-4.022,4.436-2.318L79.295,56.914z M0.199,54.604 c-0.265,2.971-0.265,7.821,0,10.792c2.57,28.854,25.551,51.835,54.405,54.405c2.971,0.265,7.821,0.265,10.792,0 c28.854-2.57,51.835-25.551,54.405-54.405c0.265-2.971,0.265-7.821,0-10.792C117.231,25.75,94.25,2.769,65.396,0.198 c-2.971-0.265-7.821-0.265-10.792,0C25.75,2.769,2.769,25.75,0.199,54.604z M8.816,65.394c-0.309-2.967-0.309-7.82,0-10.787 c2.512-24.115,21.675-43.279,45.79-45.791c2.967-0.309,7.821-0.309,10.788,0c24.115,2.512,43.278,21.675,45.79,45.79 c0.309,2.967,0.309,7.821,0,10.788c-2.512,24.115-21.675,43.279-45.79,45.791c-2.967,0.309-7.821,0.309-10.788,0 C30.491,108.672,11.328,89.508,8.816,65.394z"/> </svg> <span data-absolute_right_calculate="on" class="fullscreen-btn fullscreen-btn-for-skin-default  custom-color-hover-fill" style="height: 14px; right: 0px; margin-right: 14px; bottom: 11px;"> <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10.031px" height="9.955px" viewBox="0 0 10.031 9.955" enable-background="new 0 0 10.031 9.955" xml:space="preserve"> <rect x="0.359" y="0.291" fill="#D2D6DB" width="1.391" height="2.983"/> <rect x="0.359" y="0.291" fill="#D2D6DB" width="2.983" height="1.391"/> <rect x="1.965" y="0.212" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -1.031 2.631)" fill="#D2D6DB" width="1.391" height="4.696"/> <rect x="8.312" y="6.557" fill="#D2D6DB" width="1.391" height="2.983"/> <rect x="6.72" y="8.149" fill="#D2D6DB" width="2.983" height="1.391"/> <rect x="6.707" y="4.923" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 17.778 7.1781)" fill="#D2D6DB" width="1.391" height="4.696"/> </svg> </span> <span data-absolute_right_calculate="on" class="vol-btn vol-btn-for-skin-default  custom-color-hover-fill" style="width: 45px; height: 14px; position:absolute; right: 45px; margin-right: 10px; bottom:10px;"> <span class="vol-btn--icon"> <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="7.375px" height="9.906px" viewBox="0 0 7.375 9.906" enable-background="new 0 0 7.375 9.906" xml:space="preserve"> <polygon fill="#D2D6DB" points="7.375,9.906 3.469,7.797 3.469,2.109 7.375,0 "/> <polygon fill="#D2D6DB" points="3.719,7.797 0,7.797 0,2.156 3.719,2.109 "/> </svg> </span> <span class="vol-bar-con" style="width: 27px; height: 6px; position:absolute; right: 0; top:6px;"> <span class="vol-bar-bg" style=""></span> <span class="vol-bar-active custom-color-bg" style="width: 100%;"></span> </span> </span> <span data-absolute_right_calculate="on" class="hd-btn hd-btn-for-skin-default" style="width: 14px; height: 14px; position:absolute; right: 45px; margin-right: 7px; bottom:10px;"> <span class="hd-btn--icon"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="11.047px" height="9.955px" viewBox="-1.016 0 11.047 9.955" enable-background="new -1.016 0 11.047 9.955" xml:space="preserve"> <g id="Layer_3"> <g> <path fill="#D2D6DB" d="M9.579,2.618c-0.081-0.05-0.173-0.076-0.266-0.076c-0.077,0-0.156,0.017-0.227,0.053L7.796,3.24V3.048 c0-0.836-0.681-1.518-1.517-1.518H0.714c-0.837,0-1.518,0.681-1.518,1.518v4.046c0,0.838,0.681,1.519,1.518,1.519h5.565 c0.836,0,1.517-0.681,1.517-1.519V6.9l1.291,0.646c0.07,0.037,0.149,0.055,0.227,0.055c0.093,0,0.185-0.026,0.266-0.075 c0.149-0.093,0.24-0.255,0.24-0.432V3.048C9.819,2.873,9.729,2.71,9.579,2.618z M1.727,5.831c-0.42,0-0.76-0.34-0.76-0.76 c0-0.42,0.339-0.759,0.76-0.759c0.417,0,0.758,0.339,0.758,0.759C2.485,5.491,2.144,5.831,1.727,5.831z"/> </g> </g> <g id="Layer_2"> <text transform="matrix(1 0 0 1 3.4883 5.7695)" fill="#E4C000" font-family="Open Sans" font-size="2.1451">HD</text> </g> </svg> </span> <span class="hd-btn--options"> <ul class="hd-options"> <li class="hd-options--option">hd</li> <li class="hd-options--option">sd</li> </ul> </span> </span> <a href="{{jsreplace_arg_downloadlink}}" data-absolute_right_calculate="on" class="download-btn download-btn-for-skin-default  custom-color-hover-fill" style="width: 14px; height: 14px; position:absolute; right: 45px; margin-right: 7px; bottom:10px;"> <span class="download-btn--icon"> <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10.031px" height="9.955px" viewBox="0 0 10.031 9.955" enable-background="new 0 0 10.031 9.955" xml:space="preserve"> <rect x="4.723" y="4.516" transform="matrix(-0.7072 -0.707 0.707 -0.7072 5.0959 16.188)" fill="#D2D6DB" width="2.353" height="5.045"/> <rect x="1.473" y="5.862" transform="matrix(-0.7073 -0.7069 0.7069 -0.7073 1.8471 14.8424)" fill="#D2D6DB" width="5.046" height="2.354"/> <rect x="3.734" y="0.217" fill="#D2D6DB" width="2.354" height="7.944"/> </svg> </span> <span class="download-btn--sidenote"> You can have a link here. For example to download the video. </span> </a> <span data-absolute_right_calculate="on" class="social-btn social-btn-for-skin-default  custom-color-hover-fill" style="width: 14px; height: 14px; position:absolute; right: 45px; margin-right: 7px; bottom:10px;"> <span class="social-btn--icon"> <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10.031px" height="9.955px" viewBox="0 0 10.031 9.955" enable-background="new 0 0 10.031 9.955" xml:space="preserve"> <g> <path fill="#D2D6DB" d="M9.389,2.791L7.238,0.63C6.836,0.224,6.131,0.22,5.721,0.627C5.613,0.732,5.531,0.861,5.495,0.965 c-0.35,0.732-0.728,1.19-1.211,1.465L4.167,2.487c-0.521,0.26-1.228,0.526-2.536,0.526c-0.143,0-0.28,0.028-0.412,0.082 C0.96,3.203,0.748,3.414,0.639,3.676c-0.107,0.261-0.107,0.56,0,0.819C0.695,4.63,0.773,4.748,0.872,4.846L2.61,6.583L0.557,9.46 l2.875-2.054L5.166,9.14c0.1,0.103,0.218,0.182,0.352,0.236C5.652,9.435,5.789,9.46,5.932,9.46c0.141,0,0.277-0.027,0.409-0.083 C6.607,9.269,6.814,9.06,6.922,8.798c0.057-0.13,0.083-0.271,0.083-0.412c0-1.31,0.267-2.016,0.524-2.537 c0.268-0.533,0.736-0.938,1.48-1.295c0.145-0.057,0.273-0.138,0.381-0.247C9.809,3.886,9.805,3.205,9.389,2.791z M6.568,5.371 c-0.44,0.881-0.639,1.81-0.644,3.01l1.294-3.489c1.149,0-3.539-0.985-2.689-1.387l0.127-0.057c0.751-0.376,1.325-1.017,1.819-2.06 L3.328,4.415C2.328,4.895,6.943,4.618,6.568,5.371z"/> </g> </svg> </span> <ul class="social-btn--options"> <li> <iframe src="//www.facebook.com/plugins/like.php?href={{jsreplace_currurl}}&amp;width=120&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;share=false&amp;height=21&amp;appId=269610766536363" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:120px; height:21px;" allowTransparency="true"></iframe> </li> <li> <div class="g-plusone" data-size="medium"></div> </li> <li> <a href="https://twitter.com/share" class="twitter-share-button">Tweet</a> </li> {{jsreplace_arg_othersocialicons}} </ul> </span> <span data-absolute_right_calculate="on" class="embed-btn embed-btn-for-skin-default" style="width: 14px; height: 14px; position:absolute; right: 45px; margin-right: 6px; bottom:10px;"> <span class="embed-btn--icon"> <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10.031px" height="9.955px" viewBox="0 0 10.031 9.955" enable-background="new 0 0 10.031 9.955" xml:space="preserve"> <g> <path fill="#D2D6DB" d="M5.828,8.339c-1.474,0-2.672-1.199-2.672-2.672c0-0.329-0.266-0.594-0.594-0.594 c-0.329,0-0.594,0.266-0.594,0.594c0,2.128,1.731,3.858,3.86,3.858c2.127,0,3.858-1.73,3.858-3.858S7.955,1.808,5.828,1.808 c-0.329,0-0.595,0.266-0.595,0.593c0,0.329,0.266,0.594,0.595,0.594c1.472,0,2.671,1.198,2.671,2.672 C8.499,7.14,7.3,8.339,5.828,8.339z"/> <g> <g> <path fill="#D2D6DB" d="M4.436,0.324c0.328,0,0.594,0.267,0.594,0.594S4.763,1.511,4.436,1.511H3.944H2.511l1.014,1.014 l2.43,2.429c0.231,0.232,0.231,0.609,0,0.84C5.843,5.905,5.694,5.967,5.534,5.967c-0.158,0-0.307-0.062-0.419-0.173l-2.43-2.43 L1.672,2.35v1.433v0.492c0,0.328-0.266,0.594-0.594,0.594c-0.327,0-0.594-0.267-0.594-0.594V0.324H4.436"/> </g> </g> </g> </svg> </span> <span class="embed-btn--sidenote"> <textarea><iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;width=110&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;share=false&amp;height=21&amp;appId=269610766536363" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:110px; height:21px;" allowTransparency="true"></iframe></textarea> </span> </span>  <span class="btn-info btn-info-for-skin-default  custom-color-hover-fill  " data-animprops="{}" data-design_set_width_to_fit="off" data-absolute_right_calculate="on" style="position: absolute; width: 14px; height: 14px; top: auto; bottom: 10px; margin: 0px 7px 0px 0px; font-size: 12px; left: auto; right: 162px;">                            <span class="btn-info--icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10.031px" height="9.955px" viewBox="0 0 10.031 9.955" enable-background="new 0 0 10.031 9.955" xml:space="preserve"><g id="Layer_2"></g><g id="Layer_3">	<g>		<path fill="#D2D6DB" d="M3.233,8.624c0.72,0.061,1.77-0.449,4.02-2.43c0.33-0.3,0.27,0.6,0.15,0.75c-0.15,0.15-3.3,3.42-5.13,2.13			c-0.96-0.659-0.57-2.28,0.69-4.05c1.021-1.5,1.59-2.25,1.8-2.4c0.24-0.18,0.75,0.42,0.48,0.81c-0.21,0.33-1.89,2.52-2.31,3.54			C2.483,7.995,2.603,8.564,3.233,8.624z M6.713,0.375c-0.479-0.24-1.05,0-1.29,0.48c-0.21,0.42-0.18,1.02,0.271,1.17			C6.623,2.354,7.522,0.735,6.713,0.375z"></path>	</g></g></svg></span>                                </span>  <span class="scrubbar scrubbar-for-skin-default" style="position: absolute; height: 14px; left: 36px; margin-right: 10px; bottom: 8px; width: 300px; " data-design_set_width_to_fit="on"> <span class="scrubbar-bg" style="position: absolute; width: 100%; left:0; top: 4px; height: 6px; "></span> <span class="scrubbar-buffered" style="position: absolute; width: 0%; left:0; top: 4px; height: 6px; "></span> <span class="scrubbar-prog custom-color-bg" style="position: absolute; width: 0%; left:0; top: 4px; height: 6px; "></span> <span class="scrubbar-box" style=""></span> <span class="scrubbar-box-prog" style=""></span> </span><a class="logo-btn" href="{{jsreplace_arg_logolink}}" style="position:absolute; right: 10px; top: 10px;"> <img src="{{jsreplace_arg_logoimg}}"/> </a> ';

window.dzszvp_controls_skin_playbig = '<span data-absolute_right_calculate="off" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: 70px; height: 70px; top: 50%; left: 50%; right: auto; bottom: auto; margin: -35px 0px 0px -35px; font-size: 12px;" class="play-btn play-btn-for-skin-playbig   builder-align-top-left">                                <span style="position: absolute; top:0; left:0; width: 100%; height: 100%; background-color: rgba(255,255,255,0.15);  border-radius: 50%; ">                                    <svg style="position:absolute; top:50%; left:50%; transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);" version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10.455px" height="12.352px" viewBox="0 0 10.455 12.352" enable-background="new 0 0 10.455 12.352" xml:space="preserve"><g>	<path fill="#D2D6DB" d="M9.93,5.973c0.468,0.29,0.457,0.748-0.023,1.016l-8.709,4.874c-0.48,0.269-0.873,0.038-0.873-0.512V1		c0-0.55,0.382-0.762,0.849-0.472L9.93,5.973z"></path></g></svg>                                </span>                            </span><span data-absolute_right_calculate="off" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: 70px; height: 70px; top: 50%; left: 50%; right: auto; bottom: auto; margin: -35px 0px 0px -35px; font-size: 12px;" class="pause-btn pause-btn-for-skin-playbig   builder-align-top-left">                                <span style="position: absolute; top:0; left:0; width: 100%; height: 100%; background-color: rgba(255,255,255,0.15);  border-radius: 50%; "><svg style="position:absolute; top:50%; left:50%; transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);" version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10.455px" height="12.352px" viewBox="0 0 10.455 12.352" enable-background="new 0 0 10.455 12.352" xml:space="preserve"><g>	<rect x="0.825" y="0.446" fill="#D2D6DB" width="3.076" height="11.458"></rect></g><g>	<rect x="6.502" y="0.447" fill="#D2D6DB" width="3.076" height="11.458"></rect></g></svg>                                </span>                            </span>';

window.dzszvp_controls_skin_pro = '<span data-absolute_right_calculate="off" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: 100%; height: 30px; top: auto; left: 0px; right: auto; bottom: 0px; margin: 0px; font-size: 12px;" class="controls-bg   builder-align-bottom-right"></span><span data-absolute_right_calculate="off" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: 100%; height: 10px; top: auto; left: 0px; right: auto; bottom: 30px; margin: 0px; font-size: 12px;" class="scrubbar scrubbar-for-skin-pro    builder-align-bottom-right">        <span class="scrubbar-bg" style="position: absolute; width: 100%; left:0; top: 0px; height: 100%; "></span>                                <span class="scrubbar-buffered" style="position: absolute; width: 0%; left:0; top: 0px; height: 100%; "></span>                                <span class="scrubbar-prog" style="position: absolute; width: 0%; left:0; top: 0px; height: 100%;"></span>                                <span class="scrubbar-box" style=""></span>                            </span><span data-absolute_right_calculate="off" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: 16px; height: 19px; top: auto; left: 10px; right: auto; bottom: 7px; margin: 0px; font-size: 12px;" class="play-btn play-btn-for-skin-pro   builder-align-bottom-right">                                <span class="play-btn-fig" style="width: 0; height: 0; border-style: solid;border-width: 5px 0 5px 10px;border-color: transparent transparent transparent #eeeeee; display: inline-block; "></span>                            </span><span data-absolute_right_calculate="off" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: auto; height: auto; top: auto; left: 33px; right: auto; bottom: 5px; margin: 0px; font-size: 12px;" class="curr-time-holder curr-time-holder-for-skin-pro   builder-align-bottom-right">                                00:00                                </span><span data-absolute_right_calculate="off" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: auto; height: auto; top: auto; left: 67px; right: auto; bottom: 5px; margin: 0px; font-size: 12px;" class="total-time-holder total-time-holder-for-skin-pro   builder-align-bottom-right">                                / 00:00                                </span><span data-absolute_right_calculate="off" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: 9px; height: 19px; top: auto; left: 10px; right: auto; bottom: 7px; margin: 0px; font-size: 12px;" class="pause-btn pause-btn-for-skin-pro   builder-align-bottom-right">                                <span class="pause-btn-fig-1" style="position:absolute; left:0; top:23%; width: 3px;height: 62%;background-color: #eeeeee;display: inline-block; "></span>                                <span class="pause-btn-fig-2" style="position:absolute; right:0; top:23%; width: 3px;height: 62%;background-color: #eeeeee;display: inline-block; "></span>                            </span><span data-absolute_right_calculate="off" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: 13px; height: 13px; top: auto; left: auto; right: 10px; bottom: 10px; margin: 0px; font-size: 12px;" class="fullscreen-btn fullscreen-btn-for-skin-pro   builder-align-bottom-right  custom-color-hover-fill">                                <span class="fullscreen-btn-fig-1" style="position:absolute; left:0; top:0; width: 0;height: 0;display: inline-block; border-style: solid;border-width: 0px 0 5px 5px;border-color: transparent transparent transparent #eeeeee;"></span>                                <span class="fullscreen-btn-fig-2" style="position:absolute; top:0; right:0; width: 0;height: 0;display: inline-block;border-style: solid;border-width: 0 5px 5px 0;border-color: transparent #eeeeee transparent transparent;"></span>                                <span class="fullscreen-btn-fig-3" style="position:absolute; left:0; bottom:0; width: 0;height: 0;display: inline-block;border-style: solid;border-width: 5px 0 0 5px;border-color: transparent transparent transparent #eeeeee;"></span>                                <span class="fullscreen-btn-fig-4" style="position:absolute; bottom:0; right:0; width: 0;height: 0;display: inline-block;border-style: solid;border-width: 0 0 5px 5px;border-color: transparent transparent #eeeeee transparent;"></span>                                <span class="fullscreen-btn-fig-circ" style="position:absolute; left:50%; top:50%;                                width: 4px;                                height: 4px;                                margin-left: -2px;                                margin-top:-2px;                                background-color: #eeeeee;                                border-radius: 50%;"></span>                            </span>';

window.dzszvp_controls_skin_avanti = '<span data-absolute_right_calculate="off" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: 100%; height: 40px; top: auto; left: 0px; right: auto; bottom: 0px; margin: 0px; font-size: 12px;" class="controls-bg   "></span><span data-absolute_right_calculate="off" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: 16px; height: 15px; top: auto; left: 14px; right: auto; bottom: 14px; margin: 0px; font-size: 12px;" class="play-btn play-btn-for-skin-avanti  custom-color-hover-fill  "><svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="13.75px" height="15.812px" viewBox="-1.5 -1.844 13.75 15.812" enable-background="new -1.5 -1.844 13.75 15.812" xml:space="preserve"><g>	<path fill="#D2D6DB" d="M11.363,5.662c0.603,0.375,0.592,0.969-0.028,1.317L0.049,13.291c-0.624,0.351-1.131,0.05-1.131-0.664		V-0.782c0-0.711,0.495-0.988,1.1-0.611L11.363,5.662z"></path></g></svg>                                </span><span data-absolute_right_calculate="off" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: 16px; height: 15px; top: auto; left: 15px; right: auto; bottom: 14px; margin: 0px; font-size: 12px;" class="pause-btn pause-btn-for-skin-avanti   custom-color-hover-fill "><svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="13.415px" height="16.333px" viewBox="0 0 13.415 16.333" enable-background="new 0 0 13.415 16.333" xml:space="preserve"><path fill="#D2D6DB" d="M4.868,14.59c0,0.549-0.591,0.997-1.322,0.997H2.2c-0.731,0-1.322-0.448-1.322-0.997V1.618	c0-0.55,0.592-0.997,1.322-0.997h1.346c0.731,0,1.322,0.447,1.322,0.997V14.59z"></path><path fill="#D2D6DB" d="M12.118,14.59c0,0.549-0.593,0.997-1.324,0.997H9.448c-0.729,0-1.322-0.448-1.322-0.997V1.619	c0-0.55,0.593-0.997,1.322-0.997h1.346c0.731,0,1.324,0.447,1.324,0.997V14.59z"></path></svg>                                </span><span data-absolute_right_calculate="on" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: 16px; height: 15px; top: auto; bottom: 13px; margin: 0px 15px 0px 0px; font-size: 12px; left: auto; right: 0px;" class="mute-btn mute-btn-for-skin-avanti active  custom-color-hover-fill  "><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16.097px" height="15.72px" viewBox="0 -2.914 16.097 15.72" enable-background="new 0 -2.914 16.097 15.72" xml:space="preserve"><g id="Layer_1">	<g id="Layer_1_2_">		<g id="nyt_x5F_exporter_x5F_info" display="none">		</g>		<g id="Layer_1_1_">			<path fill="#D2D6DB" d="M4.998-2.126c-0.316,0.314-0.53,0.741-0.635,1.268L3.738,2.273c-0.177,0.883-0.89,2.212-1.524,2.847				c-1.162,1.162-1.162,3.054,0,4.216l1.404,1.405c1.164,1.162,3.055,1.162,4.219,0c0.634-0.633,1.965-1.346,2.845-1.521				l3.132-0.627c0.527-0.104,0.953-0.32,1.27-0.634c0.631-0.629,0.832-1.788-0.22-2.839L7.835-1.907				C6.785-2.959,5.629-2.759,4.998-2.126z M7.053,6.289C5.829,6.599,6.328,6.556,5.478,7.407c-0.388,0.388,0.387,0.388,0,0				l-0.481,0.37c-0.386-0.385-0.386,0.386,0,0c0.853-0.851,1.88-0.268,2.19-1.492L7.053,6.289z M8.651,5.585				c0.03,0.031,0.058,0.061,0.077,0.09C8.697,5.682,8.658,5.693,8.614,5.702l3.07,2.399L8.781,3.522l-0.06,0.554				C8.728,4.033,8.74,3.993,8.749,3.96c0.026,0.024,0.056,0.052,0.089,0.082L8.651,5.585z"></path>		</g>		<g id="nyt_x5F_exporter_x5F_info_1_" display="none">		</g>	</g></g><g id="Layer_2">	<path opacity="0.7" fill="#1F0C00" d="M2.739,12.234c-0.163,0.16-0.396,0.19-0.522,0.063l-1.275-1.274		c-0.126-0.127-0.099-0.361,0.064-0.521l11.11-11.112c0.162-0.163,0.396-0.19,0.521-0.064L13.912,0.6		c0.129,0.126,0.099,0.36-0.063,0.522L2.739,12.234z"></path></g><g id="Layer_3">	<path fill="#D2D6DB" d="M2.766,11.413c-0.149,0.149-0.326,0.216-0.394,0.146l-0.691-0.692c-0.069-0.068-0.004-0.244,0.146-0.394		L12.078,0.222c0.147-0.149,0.324-0.214,0.392-0.146l0.692,0.691c0.069,0.068,0.003,0.245-0.146,0.395L2.766,11.413z"></path></g></svg>                                </span><span data-absolute_right_calculate="off" data-design_set_width_to_fit="off" data-animprops="{}" style="position: absolute; width: 16px; height: 15px; top: auto; left: auto; right: 0px; bottom: 13px; margin: 0px 15px 0px 0px; font-size: 12px;" class="unmute-btn unmute-btn-for-skin-avanti   "><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16.097px" height="15.72px" viewBox="0 -2.914 16.097 15.72" enable-background="new 0 -2.914 16.097 15.72" xml:space="preserve"><g id="Layer_1">	<g id="Layer_1_2_">		<g id="nyt_x5F_exporter_x5F_info" display="none">		</g>		<g id="Layer_1_1_">			<path fill="#D2D6DB" d="M4.998-2.126c-0.316,0.314-0.53,0.741-0.635,1.268L3.738,2.273c-0.177,0.883-0.89,2.212-1.524,2.847				c-1.162,1.162-1.162,3.054,0,4.216l1.404,1.405c1.164,1.162,3.055,1.162,4.219,0c0.634-0.633,1.965-1.346,2.845-1.521				l3.132-0.627c0.527-0.104,0.953-0.32,1.27-0.634c0.631-0.629,0.832-1.788-0.22-2.839L7.835-1.907				C6.785-2.959,5.629-2.759,4.998-2.126z M7.053,6.289C5.829,6.599,6.328,6.556,5.478,7.407c-0.388,0.388,0.387,0.388,0,0				l-0.481,0.37c-0.386-0.385-0.386,0.386,0,0c0.853-0.851,1.88-0.268,2.19-1.492L7.053,6.289z M8.651,5.585				c0.03,0.031,0.058,0.061,0.077,0.09C8.697,5.682,8.658,5.693,8.614,5.702l3.07,2.399L8.781,3.522l-0.06,0.554				C8.728,4.033,8.74,3.993,8.749,3.96c0.026,0.024,0.056,0.052,0.089,0.082L8.651,5.585z"></path>		</g>		<g id="nyt_x5F_exporter_x5F_info_1_" display="none">		</g>	</g></g><g id="Layer_2"></g><g id="Layer_3"></g></svg>                                </span><span data-absolute_right_calculate="off" data-design_set_width_to_fit="on" data-animprops="{}" style="position: absolute; height: 7px; top: auto; left: 45px; right: auto; bottom: 16px; margin: 0px 15px 0px 0px; font-size: 12px; width: 524px;" class="scrubbar scrubbar-for-skin-pro   ">        <span class="scrubbar-bg" style="position: absolute; width: 100%; left:0; top: 0px; height: 100%; "></span>                                <span class="scrubbar-buffered" style="position: absolute; width: 0%; left:0; top: 0px; height: 100%; "></span>                                <span class="scrubbar-prog custom-color-bg" style="position: absolute; width: 0%; left:0; top: 0px; height: 100%;"></span>                                <span class="scrubbar-box" style=""></span>                            </span>';