$('a[href*=#]:not([href=#])').click(function () {

    $('.active').removeClass('active');
    $(this).closest('li').addClass('active');
    var theClass = $(this).attr('class');
    $('.' + theClass).parent('li').addClass('active');

    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 500);

    return false;
});

//Stack menu when collapsed
$('#bs-example-navbar-collapse-1').on('show.bs.collapse', function() {
    $('.nav-pills').addClass('nav-stacked');
});

//Unstack menu when not collapsed
$('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function() {
    $('.nav-pills').removeClass('nav-stacked');
});
