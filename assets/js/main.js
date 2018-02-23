$(function () {
    // add `target="_blank"` into all outer links.
    var host = document.location.host;
    $('a[href]').each(function() {
        var re = new RegExp(host, 'g');
        if ($(this).attr('href').match(/(\/\/|mailto:)/) && !$(this).attr('href').match(re)) {
            $(this).attr('target', '_blank');
        }
    });

    // toggle sidebar on small screen
    function showSidebar(duration) {
        $('#content').css('width', $(window).outerWidth());
        $('#sidebar').animate({'margin-left': '-1px'}, duration);
        $('#content').animate({'padding-left': $('#sidebar').outerWidth()}, duration);
    }
    function hideSidebar(duration) {
        $('#sidebar').animate({'margin-left': $('#sidebar').outerWidth() * -1}, duration);
        $('#content').animate({'padding-left': '-1px'}, duration);

        // reset css
        setTimeout(function () {
            $('#content').css('width', '');
            $('#content').css('padding-left', '');
        }, duration);
    }
    $('#sidebar-toggler').on('click', function () {
        console.log(parseInt($('#sidebar').css('margin-left')));
        if (parseInt($('#sidebar').css('margin-left')) < -1) {
            showSidebar(300);
        } else if (parseInt($('#sidebar').css('margin-left')) == -1) {
            hideSidebar(300);
        }
    });
    $(window).on('resize', function () {
        if (parseInt($('#sidebar').css('margin-left')) == -1) {
            hideSidebar(300);
            setTimeout(function () {
                $('#sidebar').css('margin-left', '');
            }, 300)
        } else {
            $('#sidebar').css('margin-left', '');
        }
    });
});
