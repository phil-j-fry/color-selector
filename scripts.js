/*    
  Further down the rabbit hole:
      1. We're manually binding a click handler to each swatch by its ID. Ideally we want to avoid ID's _if_ possible because they create
        nasty global variables that might break something later on down the line. How could we bind a handler to ALL potential swatches in fewer lines of code?
        What if I was to expand this color picker app to support 256 colors? How could I painlessly add more HTML without having to write more JS?
        What kind of selector could I iterate through to make this happen?
      
    */

$(document).ready(function(){
    $("#swatch").click(function () {
         var color = $( this ).css( "color" );
          $( "#placeholder" ).html( "You have chosen <span style='color:" + color + ";'><div id='placeholder'>Violet</div></span>" );
    });


    $("#swatch1").click(function () {
         var color = $( this ).css( "color" );
        	$( "#placeholder" ).html( "You have chosen <span style='color:" + color + ";'><div id='placeholder'>Purple</div></span>" );
    });


    $("#swatch2").click(function () {
         var color = $( this ).css( "color" );
        	$( "#placeholder" ).html( "You have chosen <span style='color:" + color + ";'><div id='placeholder'>Blue</div></span>" );
    });


    $("#swatch3").click(function () {
         var color = $( this ).css( "color" );
        	$( "#placeholder" ).html( "You have chosen <span style='color:" + color + ";'><div id='placeholder'>Aquamarine</div></span>" );
    });



    $("#swatch4").click(function () {
         var color = $( this ).css( "color" );
         $( "#placeholder" ).html( "You have chosen <span style='color:" + color + ";'><div id='placeholder'>Green</div></span>" );
    });



    $("#swatch5").click(function () {
         var color = $( this ).css( "color" );
        	$( "#placeholder" ).html( "You have chosen <span style='color:" + color + ";'><div id='placeholder'>Gold</div></span>" );
    });


    $("#swatch6").click(function () {
         var color = $( this ).css( "color" );
         $( "#placeholder" ).html( "You have chosen <span style='color:" + color + ";'><div id='placeholder'>Orange</div></span>" );
    });
});
