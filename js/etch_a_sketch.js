$(document).ready(function () {
    var defaultSize = 16;
    var color = "black";
    var userSize = defaultSize;
    
    makeGrid(defaultSize);
    
    $('.square').hover( function() {
            $(this).css('background-color', color);
        }, function () {}    
    );

    $('#resetGrid').click( function() {
            $('#grid-border').empty();
            makeGrid(userSize);
            $('.square').hover(
                function() {
                $(this).css('background-color', color);
                }, function () {
            });
    });
    
    $('#setGrid').click( function () {
        userSize = prompt("Select a grid size between 3 and 64");
        while (userSize < 2 || userSize > 65) {
            userSize = prompt("Select a grid size between 3 and 64");
        };
        $('#grid-border').empty();
        makeGrid(userSize);
        $('.square').hover(
            function() {
            $(this).css('background-color', color);
            }, function () {
        });
    });

    
});

function makeGrid(side) {
    for (i = 1; i <= side * side; i++) {
        $('#grid-border').append('<div class="square"></div>');
    };
    
    $('#grid-border').width(side * 17);
    $('#grid-border').height(side * 17);
};