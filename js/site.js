$(document).ready(function () {

    // Share hack
    setTimeout(function () {
        $('.ya-share2__container_mobile').removeClass('ya-share2__container_mobile');
    }, 10);

    // Ресайз окна
    $(window).resize(function () {
        $('.ui-dialog-content').dialog('option', 'position', { my: 'center', at: 'center', of: window });
    });

    // Общие настройки ajax
    $.ajaxSetup({
        type: 'POST',
        async: true,
        dataType: 'json'
    });

    // Ввод только чисел
    function enterOnlyNumbers(input, event) {
        var isMinus = ((event.keyCode == 109) || (event.keyCode == 189)) ? true : false;

        if (!event.shiftKey) {
            if (isMinus && !input.val()) {
                return true;
            } else {
                return (((event.keyCode > 47) && (event.keyCode < 58))
                    || ((event.keyCode > 95) && (event.keyCode < 106))
                    || ((event.keyCode > 111) && (event.keyCode < 124))
                    || (event.keyCode == 8) || (event.keyCode == 46)
                    || (event.keyCode == 37) || (event.keyCode == 39)
                    && !isMinus) ? true : false;
            }
        } else {
            return false;
        }
    }

    // Преобразование слова рядом с цифрой
    function wordCount($n, $words) {
        var $x = ($xx = $n % 100) % 10;
        return $words[((($xx > 10) && ($xx < 15)) || !$x || (($x > 4) && ($x < 10))) ? 2 : (($x == 1) ? 0 : 1)];
    }

    // Инициализация подсказок
    $(document).tooltip({ track: true });

    // Инициализация слайдера
    $('#slider').slider({
        min: $('#slider').data('min'),
        max: $('#slider').data('max'),
        value: $('#slider').data('val'),
        range: 'min',
        create: function (event, ui) {
            var words = $('#slider-val').data('words').split(',');
            $('#slider-val').text($('#slider').data('val') + ' ' + wordCount($('#slider').data('val'), words));
        },
        slide: function (event, ui) {
            var words = $('#slider-val').data('words').split(',');
            $('#slider-val').text(ui.value + ' ' + wordCount(ui.value, words));

            if (ui.value > 1) {
                $('#number-unique label').fadeIn(200);
            } else {
                $('#number-unique label').fadeOut(200);
            }
            $('#wkwin-count, #ytwin-count').val(ui.value);
        }
    });

    // Сброс подсветки полей с ошибками
    $('form').on('focus', '.err', function () {
        $(this).removeClass('err');
    });

    // Открыть меню в шапке
    $('#header .menu-init').click(function () {
        $(this).toggleClass('hvr');
        $('#header .menu').toggleClass('hvr');
    });

    // Перейти на случайную страницу
    $('#button.main').click(function () {
        var pageList = {
            1: '/number/',
            2: '/password/',
            3: '/question/',
            4: '/ask/',
            5: '/fact/',
            6: '/ticket/',
            7: '/saying/',
            8: '/doings/',
        };
        var page = Math.floor(8 * Math.random()) + 1;

        location = pageList[page];
    });

    // Выбор типа диапазона чисел
    $('#number-from input[name="from"]').change(function () {
        var wrap = $('#number-from');
        var from = $(this).val();

        wrap.find('label').removeClass('sel');
        $(this).closest('label').addClass('sel');

        wrap.find('li').removeClass('sel');
        wrap.find('li.number-from-' + from).addClass('sel');
    });

    // Выбор исключить числа
    $('#number-exclude input[type="checkbox"]').change(function () {
        $(this).parent().next('textarea').toggleClass('sel');
    });

    // Сгенерировать число
    $('#button.number').click(function () {
        var caption = $('#caption');
        var container = $('#number');
        var save = $('#number-save');

        var count = ($('#slider').length) ? $('#slider').slider('value') : 1;
        var from = $('#number-from input[name="from"]:checked').val();
        var start = parseInt($('#number-start').val());  // Parse as integer
        var end = parseInt($('#number-end').val());  // Parse as integer
        var list = $('#number-list').val();
        var exclude = $('#number-exclude input').is(':checked') ? 1 : 0;
        var excludeList = $('#number-exclude textarea').val();
        var unique = $('#number-unique input').is(':checked') ? 1 : 0;


        var randomNumber = getRandomNumber(start, end);
        console.log('randomNumber', randomNumber)

        if (exclude) {
            console.log('exclude')
            if (excludeList.includes(randomNumber)) {
                // console.log('excludeList', excludeList)
                randomNumber = getRandomNumber(start, end);
                if (excludeList.includes(start)) {
                    showNumber(end)
                } else {
                    showNumber(start)
                }
            } else {
                showNumber(randomNumber)
            }
        } else {
            showNumber(randomNumber)
        }

        function showNumber(num) {
            if (count > 1) {
                caption.text(caption.data('mtxt'));
                container.attr('class', 'multi').css('min-height', container.height());
                container.html('<span class="cur"></span>');

                for (var i = 0; i < count; i++) {
                    $('<span> ' + num === undefined ? 'Введите число!' : isNaN(num) ? list[0] : num + '</span>,')
                        .css({ 'opacity': 0 })
                        .appendTo(container.find('.cur'))
                        .delay(250 / count * (i + 1))
                        .animate({ 'opacity': 1 }, 200);
                }

                setTimeout(function () { container.css('min-height', '') }, 250);

                save.html('<span>' + save.data('mtxt') + '</span>');
            } else {
                caption.text(caption.data('txt'));
                container.attr('class', 'single');

                var numberArray = String(num === undefined ? 'Введите число!' : isNaN(num) ? list[0] : num).split('');

                var html = '<span class="new">';
                for (var i = 0; i < numberArray.length; i++) {
                    html += '<span>' + numberArray[i] + '</span>';
                }
                html += '</span>';

                container.find('.new').attr('class', 'cur');
                container.find('.cur').remove();
                container.append(html);

                var i = 1;
                container.find('.new span').each(function () {
                    $(this)
                        .delay(parseInt(200 / numberArray.length) * i)
                        .animate({ 'bottom': 0 }, 200, 'easeOutQuint');
                    i++;
                });

                save.html('<span>' + save.data('txt') + '</span>');
            }
        }

        function getRandomNumber(min, max) {
            if (from === 'range') {
                console.log('range')
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            console.log('list', list)
            var count = list[Math.floor(Math.random() * list.length)];
            // console.log('count.length', count.length)
            if (count === ' ') {
                return list[0];
            }
            return count;

        }
    });

    // Окно api чисел
    $('#number-api').click(function () {
        $('#api-dialog').dialog({
            width: 'auto',
            modal: true,
            draggable: false,
            closeText: ''
        });
    });

    // Окно сохранения чисел
    $('body').on('click', '#number-save span', function () {
        $('#pay-dialog').dialog({
            width: 'auto',
            modal: true,
            draggable: false,
            closeText: ''
        });
    });

    // Ввод диапазона чисел
    $('#number-start, #number-end').keydown(function (e) {
        return enterOnlyNumbers($(this), e);
    });


    // Выбор времени определения победителя
    var tz = new Date().getTimezoneOffset();
    $('#ytwin-tz, #santa-tz').val(tz);


    // Таймер
    var timer = $('#timer');
    if (timer.length) {
        function tickLottTimer() {
            var wait = parseInt(timer.attr('data-wait'));
            var diff = wait - 1;
            var days = Math.floor(diff / 86400);
            var hours = Math.floor((diff -= days * 86400) / 3600);
            var minutes = Math.floor((diff -= hours * 3600) / 60);
            var seconds = diff - minutes * 60;

            if (wait == 0) {
                timer.text('');
                return false;
            }

            var daysWords = ['день', 'дня', 'дней'];
            var hoursWords = ['час', 'часа', 'часов'];
            var minutesWords = ['минуту', 'минуты', 'минут'];
            var secondsWords = ['секунду', 'секунды', 'секунд'];

            timer.text(
                (!days ? '' : days + ' ' + wordCount(days, daysWords) + ' ') +
                ((!days && !hours) ? '' : hours + ' ' + wordCount(hours, hoursWords) + ' ') +
                ((!days && !hours && !minutes) ? '' : minutes + ' ' + wordCount(minutes, minutesWords) + ' ') +
                seconds + ' ' + wordCount(seconds, secondsWords)
            ).attr('data-wait', wait - 1);

            if ((wait - 1) <= 0) {
                location.reload();
                return false;
            }

            setTimeout(tickLottTimer, 1000);
        }

        tickLottTimer(true);
    }

    // Показать правила
    $('#contest-rules .show-text').click(function () {
        $('#contest-rules .text').stop(true, true).slideToggle();
    });

    // Спинер страницы спасибо
    $('.donate-form .spinner').keydown(function (e) {
        return enterOnlyNumbers($(this), e);
    }).spinner();

    // Табы в лк
    $('#profile').find('.tabs').tabs({});

    // Работа с контентом в лк
    $('#profile').find('[data-toggle="init-delete"]').click(function () {
        var type = $(this).closest('table').data('type');
        var hash = $(this).closest('tr').data('hash');
        var dlg = $('#delete-' + type);

        dlg.dialog({
            width: '260',
            modal: true,
            draggable: false,
            closeText: ''
        });
        dlg.find('.button').attr('data-hash', hash);
    });

    /* Управление в лк */
    $('#delete-number .button, #delete-contest .button').click(function () {
        var type = $(this).attr('data-type');
        var hash = $(this).attr('data-hash');
        var profile = $('#profile');
        var dlg = $('#delete-' + type);

        $.ajax({
            url: "/my/delete/",
            data: { type: type, hash: hash },
            success: function (data) {
                if (data.ok) {
                    profile.find('[data-type="' + type + '"] [data-hash="' + hash + '"]').remove();
                    if (profile.find('[data-type="' + type + '"] tr').length <= 1) {
                        profile.find('[data-type="' + type + '"]').hide().next('p').show();
                    }
                }

                dlg.dialog('close');
            }
        });
    });

    /* Галерея */
    $('a.colorbox').colorbox({
        maxWidth: '95%',
        maxHeight: '95%',
        initialWidth: 200,
        initialHeight: 200,
        opacity: .7
    });

    /* Показать весь текст */
    $('.show-text-all').click(function () {
        $(this)
            .closest('.text-wrap').hide()
            .next('.text-all').show();

        return false;
    });

    $('#ytwin-comments ul').each(function () {
        var elem = $(this);

        if (elem.find('.text').length > 1) {
            var maxW = 0;
            elem.find('.text').each(function () {
                if ($(this).width() > maxW) {
                    maxW = $(this).width();
                }
            });
            elem.find('.text').width(maxW + 10);
        }
    });

    if ($('#doings').length) {
        function progressDoings() {
            var doings = $('#doings');
            var count = doings.find('.item').length;
            var check = doings.find('.item.checked').length;
            var progress = doings.find('.progress');

            progress.find('.bar').width(Math.round(100 * check / count) + '%');
            progress.find('.text span').text(check + '/' + count);
        }

        function getDoingsHash() {
            var doings = $('#doings');
            var count = doings.find('.item').length;

            var h = '';
            doings.find('.item').each(function () {
                h += $(this).is('.checked') ? '1' : '0';
            });
            h = h.match(/.{1,10}/g);

            for (var i in h) {
                h[i] = "0".repeat((count < 10 ? count : 10) - h[i].length) + h[i];
                h[i] = parseInt(h[i] + '', 2).toString(36);
                h[i] = h[parseInt(i) + 1] ? "0".repeat(2 - h[i].length) + h[i] : h[i];
                count -= 10;
            }

            return h.join('');
        }

        function initDoingHash() {
            var doings = $('#doings');
            var count = doings.find('.item').length;

            var url = new URL(location);
            var h = url.searchParams.get('h');

            if (h) {
                h = h.match(/.{1,2}/g);
                for (var i in h) {
                    h[i] = h[parseInt(i) + 1] ? "0".repeat(2 - h[i].length) + h[i] : h[i];
                    h[i] = parseInt(h[i] + '', 36).toString(2);
                    h[i] = "0".repeat((count < 10 ? count : 10) - h[i].length) + h[i];
                    count -= 10;
                }
                h = h.join('').split('');
            } else {
                h = [1];
            }

            for (var i in h) {
                if (h[i] == '1') {
                    doings.find('.item:eq(' + i + ')').click();
                }
            }
        }

        $('#doings .item').click(function () {
            $(this).toggleClass('checked');
            progressDoings();
        });

        $('#button.doings').click(function () {
            $('#doings .item').removeClass('checked');
            progressDoings();
        });

        $('#doings-share').on('click', 'a', function (e) {
            var elem = $(this);

            var url = new URL(elem.attr('href'));
            url.searchParams.set('url', location.origin + '/doings/?h=' + getDoingsHash());
            elem.attr('href', url.toString());
        });

        initDoingHash();
    }

    $('#santa-actions')
        .on('click', '.add:not(.disable)', function () {
            $('.field .list').each(function () {
                var elem = $(this).find('li:last').clone();
                elem.find('input').val('');
                $(this).append(elem);
            });

            $('.del, .add').removeClass('disable');
            if ($('.field .names li').length >= 50) {
                $('.add').addClass('disable');
            }
        })
        .on('click', '.del:not(.disable)', function () {
            $('.field .list').each(function () {
                $(this).find('li:last').remove();
            });

            $('.del, .add').removeClass('disable');
            if ($('.field .names li').length <= 2) {
                $('.del').addClass('disable');
            }
        });

    $('.account .signin, .account .signup').submit(function () {
        $(this).find('[type="submit"]').attr('value', 'go');
    });

    $('.account .subscribe .pay').hover(function () {
        $(this).closest('.plan').addClass('plan-bg');
    }, function () {
        $(this).closest('.plan').removeClass('plan-bg');
    });

    $('#footer').on('click', '.support a', function () {
        ym(2274313, 'reachGoal', 'ab1_click_' + $(this).data('ab1'));
    });
});