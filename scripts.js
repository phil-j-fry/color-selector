/* pull the color and name of the color swatch */

$(document).ready(function(){
    $('div.frame').click(function () {
         var color = $( this ).css( "color" );
         var name = $( this ).attr('id');
          $( "#placeholder" ).html( "You have chosen <span style='color:" + color + ";'><div id='placeholder'> "+ name +"</div></span>" );
    });
});