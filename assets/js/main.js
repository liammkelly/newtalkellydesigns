$( document ).ready(function() {

    $( "#menuBtn" ).click(function() {
        console.log('click');
        $( "#navArea" ).animate({
            height: 100
        }, 1000, function() {
            console.log('boo')
        });
    });

});