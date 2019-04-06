$('pre').wrap('<div class="toggle"><p>Toggle Code</p></div>')
$(".toggle").click(function() { 
    $('pre').toggle();

});