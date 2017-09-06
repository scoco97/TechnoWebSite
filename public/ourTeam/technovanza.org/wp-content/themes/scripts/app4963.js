var $ = $ || jQuery
var app = {}


app.bindEvents = function() {
    $('.js-close-top-bar').on('click', app.closeTopBar)
    $('.js-filter').on('click', app.showFilter)
    $('.js-goto-signup').on('click', app.gotoSignup)
    $('.js-goto-content').on('click', app.gotoContent)
    $('.js-open-nav').on('click', app.openNav)
    $('.js-close-nav').on('click', app.closeNav)
}


app.closeTopBar = function() {
    $('.top-bar').slideUp(100, function() {
        $('.header').removeClass('header--top-bar')
    })
}


app.showFilter = function() {
    const $filter = $(this)

    if (!$filter.hasClass('is-active')) {
        const handler = function() {
            $filter.removeClass('is-active')
            $(window).off('click', handler)
        }

        $filter.addClass('is-active')
        setTimeout(function() { 
            $(window).on('click', handler)
        }, 1)
    }
}


app.gotoSignup = function(e) {
    e.preventDefault()
    const signupPosition = $('#signup').offset().top
    $('html, body').animate({
        scrollTop: signupPosition - 30
    })
}


app.gotoContent = function(e) {
    e.preventDefault()
    const hasTabs = $('.tabs').length
    const contentPosition = $('#content').offset().top
    const scrollTo = hasTabs > 0 ? contentPosition - 30 : contentPosition

    $('html, body').animate({
        scrollTop: scrollTo
    })
}


app.openNav = function(e) {
    $('.nav').addClass('is-active')
}


app.closeNav = function(e) {
    $('.nav').removeClass('is-active')
}


app.bindEvents();
