var got = {
    currentHouse: 'stark',
    currentSeason: 1,
    livingMembersChart: null,
    importanceChart: null,
    slider: null,
    slider_api: null,
    houses: {
        stark: 'House Cup',
        targaryen: 'School Cup',
        lannister: 'College Cup',
        baratheon: 'Operations',
        tyrell: 'Design',
        whiteWalkers: 'Web & App'
    },
    colors: {
        stark: '#3C3C3C',
        targaryen: '#C62B19',
        lannister: '#911104',
        baratheon: '#EEAC00',
        tyrell: '#488C29',
        whiteWalkers: '#C4C4C2'
    }
}


got.bindEvents = function() {
    $('body').on('click', '.js-got-tab', function(e) {
        var tab = $(this).data('house')
        got.Tabs.change(tab)
        var sTop = $('#got-data').position().top
        $('html, body').animate({
            scrollTop: sTop - 40
        })
    })
    $('body').on('click', '.js-scroll-to', function(e) {
        var sTop = $('#got-data').position().top
        $('html, body').animate({
            scrollTop: sTop - 40
        })
    })
    $('body').on('click', '.js-goto-power-rankings', function(e) {
        var sTop = $('#power-rankings').position().top
        $('html, body').animate({
            scrollTop: sTop - 40
        })
    })
    $('body').on('click', '.js-got-season', function(e) {
        var season = $(this).data('season')
        got.currentSeason = season
        $('.js-got-season').removeClass('is-active')
        $(this).addClass('is-active')
        got.init()
    })
    $('.js-got-view-members').on('click', function() {
        var sTop = $('#got-house-members').position().top
        $('html, body').animate({
            scrollTop: sTop - $('.got-tabs.is-sticky').height() - 20
        })
    })

    $('.js-person-dropdown-value').on('click', got.People.showDropdown)
    $('.js-table-dropdown-value').on('click', got.Table.showDropdown)
    // $('.js-person-dropdown-item').on('click', got.People.changePerson)
    $('body').on('click', '.js-person-dropdown-item', got.People.changePerson)
    $('body').on('click', '.js-table-dropdown-item', got.Table.changeSeason)
    $(window).on('load scroll', got.setFixedHeader)
    $(window).on('load resize', got.configSlider)
    $('.js-vote-item').on('click', got.voteItem)
}


new Chart(document.getElementById("house-cup-bar"), {
    type: 'horizontalBar',
    data: {
      labels: ["Red Pheonix", "Green Griffins", "Blue Dragons"],
      datasets: [
        {
          label: "Current Score ",
          backgroundColor: ["#fc0c00", "#00a305","#0f189b"],
          data: [6518,5831,5420]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Score of each house'
      },
      scales: {
        yAxes: [{
         barPercentage: 0.45

        }],
         xAxes:[{
            gridLines: {
            display:false
        },
          ticks: {
             min: 0,
             beginAtZero: true,
           }
    }]
    }
    }
});

new Chart(document.getElementById("college-cup-bar"), {
    type: 'horizontalBar',
    data: {
      labels: ["College1", "College2", "College3"],
      datasets: [
        {
          label: "Current Score ",
          backgroundColor: ["#fc0c00", "#00a305","#0f189b"],
          data: [24,52,73]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Score of Top-3 colleges'
      },
      scales: {
        yAxes: [{
            barPercentage: 0.45
        }],
        xAxes:[{
            gridLines: {
            display:false
        },
          ticks: {
             min: 0,
             beginAtZero: true,
           }
    }]
    }
    }
    
});                            

got.init = function() {

    if (got.sliderActive) {
        got.sliderActive = false
        got.slider_api.destroy()
        $('.glide__wrapper').css('height', 'auto')
    }

    // Setup Data
    if (got.livingMembersChart) {
        got.livingMembersChart.destroy()
    }

    if (got.importanceChart) {
        got.importanceChart.destroy()
    }

    
    // // Setup people
    // var people = got.data[got.currentHouse].people
    // var dropdown = ''
    // for (var x in people) {
    //     dropdown += '<a class="got-person-dropdown__item  js-person-dropdown-item" data-index="' + x + '">' + people[x].name + '</a>'
    // }
    // $('.js-person-dropdown-items').html(dropdown)

    // // Init first person in list
    // got.People.changePerson(0, true)
    // got.Table.changeSeason('week1', true)

    // // IF no episodes
    // if (!got.data[got.currentHouse].data || typeof got.data[got.currentHouse].data[got.currentSeason - 1] === 'undefined') {
    //     return
    // }

    //const episodes = got.data[got.currentHouse].data[got.currentSeason - 1].episodes
    // const powerRankingData = []
    // const livingMembersData = []
    // const importanceData = []

    // for (var x in episodes) {
    //     powerRankingData.push(episodes[x].ranking)
    //     livingMembersData.push(episodes[x]['living_family'])
    //     importanceData.push(episodes[x].importance)
    // }

    // var labels = []
    // for (var x = 1; x <= episodes.length; x++) {
    //     labels.push(x)
    // }

    var type = 'line'
    var fill = false
    var backgroundColor = got.colors[got.currentHouse]
    var borderColor = got.colors[got.currentHouse]

    var options = function(data, maxOverride) {
        var max

        if (maxOverride) {
            max = maxOverride
        } else {
            max = data.reduce(function(a, b) {
                return Math.max(a, b);
            })
        }
        
        return {
            tooltips: {
                enabled: false
            },
            scales: {
                xAxes: [{
                    gridLines: { display: false },
                }],
                yAxes: [{
                    gridLines: { color: '#eee' },
                    ticks: { 
                        min: 0,
                        max
                    }
                }]
            },
            legend: { display: false }
        }
    }


    var winsChange = 0

    if (got.currentSeason === 1) {
      //  winsChange = parseInt(powerRankingData[powerRankingData.length - 1])
    } else {
        var previousSeasonEpisodes = got.data[got.currentHouse].data[got.currentSeason - 2].episodes
        var previousSeasonFinal = parseInt(previousSeasonEpisodes[previousSeasonEpisodes.length - 1].ranking)
        winsChange = parseInt(powerRankingData[powerRankingData.length - 1]) - previousSeasonFinal
    }


    var start = parseInt($('#power-ranking-number').text())
    //got.People.count($('#power-ranking-number'), parseInt(powerRankingData[powerRankingData.length - 1]) || 0, start)
    //got.People.count($('#power-ranking-change'), winsChange || 0, parseInt($('#power-ranking-change').text()))

    // var ctx2 = document.getElementById('myChart2').getContext('2d');
    // got.livingMembersChart = new Chart(ctx2, { 
    //     type, 
    //     data: { 
    //         labels, 
    //         datasets: [{ fill, backgroundColor, borderColor, data: livingMembersData }] 
    //     }, 
    //     options: options(livingMembersData, 25)
    // });

    // var ctx3 = document.getElementById('myChart3').getContext('2d');
    // got.importanceChart = new Chart(ctx3, { 
    //     type: 'bar', 
    //     data: { 
    //         labels, 
    //         datasets: [{ fill, backgroundColor, borderColor, data: importanceData }] 
    //     }, 
    //     options: options(importanceData) 
    // });

    got.configSlider()
}


got.configSlider = function() {
    var wWidth = window.innerWidth

    if (wWidth < 768) {
        if (got.sliderActive) {
            return
        } 
        else {
            got.slider = $('#Glide').glide({
                type: "carousel",
                autoplay: false,
                autoheight: true,
                paddings: 10
            });

            got.slider_api = got.slider.data('glide_api');
            got.sliderActive = true
        }
    }
    else {
        if (got.slider_api && got.sliderActive) {
            got.sliderActive = false
            got.slider_api.destroy()
            $('.glide__wrapper').css('height', 'auto')
        }
    }
}



got.setFixedHeader = function() {
    var sTop = $(window).scrollTop()
    
    if (sTop >= 550) {
        $('.got-tabs').addClass('is-sticky')
    } else {
        $('.got-tabs').removeClass('is-sticky')
    }
}



got.Tabs = {
    active: 'stark',
    change: function(tab) {
        if (got.Tabs.active === tab) {
            return
        }

        got.Tabs.active = tab
        got.currentHouse = tab
        
        $('.js-got-tab').removeClass('is-active')
        $('.js-got-tab[data-house="' + tab + '"]').addClass('is-active')
        $('.js-got-house').text(got.houses[got.currentHouse])
        $('.got').attr('data-house', tab)

        got.init()
    }
}



got.People = {
    showDropdown: function(e) {
        var $dropdown = $('.js-person-dropdown-items') 

        if (!$dropdown.is(':visible')) {
            const handler = function() {
                $dropdown.slideUp(100)
                $(window).off('click', handler)
            }

            $dropdown.slideDown(100)
            setTimeout(function() { 
                $(window).on('click', handler)
            }, 1)
        }
    },
    changePerson: function(e, indexAsParam) {
        var person

        if (indexAsParam) {
            person = got.data[got.currentHouse].people[e]
        } else {
            person = got.data[got.currentHouse].people[$(this).data('index')]
        }


        $('.js-person-dropdown-value').text(person.name)
        $('.js-person-status').text(person.status)
        $('.js-person-location').text(person['current_location'])
        $('.js-person-powerRanking').text(person['power_ranking'])
        $('.js-person-totalWins').text(person['total_wins'])
        $('.js-person-survival').text(person['probability_of_survival'])
        $('.js-person-survival-progress').css('width', 'calc(' + person['probability_of_survival'] + ' - 6px)')
        $('.got-progress-bar__value').css({
            color: person['probability_of_survival'] === '0%' ? 'white' : '#222',
            left: person['probability_of_survival'] === '0%' ? '20px' : '50%'
        })

        $('.js-person-dropdown-items').slideUp(100, function() {
            
            if (!isNaN(person['power_ranking']) && person['power_ranking'] !== '-' && person['power_ranking'] !== '') {
                got.People.count($('.js-person-powerRanking'), person['power_ranking'])
            }
            if (parseInt(person['total_wins']) > 0) {
                got.People.count($('.js-person-totalWins'), person['total_wins'])
            }
        })

        var affiliations = ''
        if (person['house_affiliations'][0] === 'none') {
            affiliations = '<p class="got-person__value got-person__value--small">None</p>'
        } else {
            for (var x in person['house_affiliations']) {
                affiliations +=
                    '<div class="js-got-tab  got-person__icon  got-person__icon--' + person['house_affiliations'][x] + '" data-house="' + person['house_affiliations'][x] + '">' +
                    '<p class="got-person__tooltip">' + person['house_affiliations'][x] + '<p>' +
                    '</div>'
            }
        }

        $('.js-person-affiliations').html(affiliations)


        setTimeout(function() {
            $('#got-house-members').css({
                backgroundImage: 'url(' + person.photo.url + ')'
            })
        }, 100)

        ga('send', 'event', 'Microsite - View Character', person.name)

    },
    count: function($el, num, start) {
        var target = start ? start : 0
        var interval = num < 20 ? 50 : 20

        if (target === num) {
            return
        }

        var direction = target < num ? 'up' : 'down'

        $el.text(target)
        var t = setInterval(function() {
            if (direction === 'up') {
                $el.text(target + 1)
                target = target + 1
            } else {
                $el.text(target - 1)
                target = target - 1
            }

            if (target === parseInt(num)) {
                clearInterval(t)
            }
        }, interval)
    }
}


got.Table = {
    showDropdown: function(e) {
        var $dropdown = $('.js-table-dropdown-items') 

        if (!$dropdown.is(':visible')) {
            const handler = function() {
                $dropdown.slideUp(100)
                $(window).off('click', handler)
            }

            $dropdown.slideDown(100)
            setTimeout(function() { 
                $(window).on('click', handler)
            }, 1)
        }
    },
    changeSeason: function(e, indexAsParam) {
        const week = $(this).data('option')
        const data = indexAsParam ? got.data.powerRankings[e] : got.data.powerRankings[week]

        if (!indexAsParam) {
            $('.js-table-dropdown-value').text($(this).text())
        }

        var html = ''
        for (var x = 0; x < data.length; x++) {

            var changeClass = 'got-table__change '
            if (data[x].change !== '-' && parseInt(data[x].change) > 0) {
                changeClass += 'is-positive'
            }
            if (data[x].change !== '-' && parseInt(data[x].change) < 0) {
                changeClass += 'is-negative'
            }
            
            html += '' +
                '<div class="got-table__row">' +
                    '<span class="got-table__num">' + (parseInt(x) + 1) + '</span> ' +
                    '<span class="' + changeClass + '">' + data[x].change + '</span> ' +
                    '<span class="got-table__photo" style="background-image: url(' + data[x].photo + ');"></span> ' +
                    '<div class="got-table__info">' +
                        '<span class="got-table__name">' + data[x].name + '</span> ' +
                        '<p class="got-table__description">' + data[x].details + '</p>' +
                    '</div>' +
                '</div>'
        }
        $('.js-table-body').html(html)
        $('.js-table-dropdown-items').slideUp(100)
    }
}



got.voteItem = function() {
    var $item = $(this)
    var item = $item.data('item')

    $('.js-vote-item').each(function() {
        if (item === $(this).data('item')) {
            $(this).addClass('is-selected')
        } else {
            $(this).fadeOut(200)
        }
    })

    ga('send', 'event', 'Microsite Vote', item)

    setTimeout(function() {
        $item.fadeOut(100, function() {
            $('.got-vote__success').fadeIn(200)
        })
    }, 500)
}

got.bindEvents()
