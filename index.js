

$("li").hover(
    function() {
        $("li").removeClass( "hover" );
        $( this ).addClass( "hover" );
    },    function() {
        $( this ).removeClass( "hover" );

    }
    );