var color ='';
var mouseCheck ='';

$('.pal').click(function(event){
  var thisdiv = '#' + event.target.id;
  // console.log($(thisdiv).css('backgroundColor'));

  // var te = event.target;
  //  console.log($(event.target).attr('class'));
   color = $(thisdiv).css('backgroundColor');
  // console.log($(this).css('backgroundColor'));
})

$('.pixel').click(function(){
  $( this ).css( "background-color", color );
});

$('.pixel').mouseenter(function(){
  if(mouseCheck === 'down'){
    $( this ).css( "background-color", color)
  }
});

$(document).mousedown(function(){
  mouseCheck='down';
});

$(document).mouseup(function(){
  mouseCheck='up';
});
// console.log($('.pc').length);
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function randomizeColors(){
  for (var i = 0; i < $('.pc').length; i++) {
    var tempColor = getRandomColor();
    var thisdiv = '#' + $('.pc')[i].id;
    console.log(thisdiv);
    $(thisdiv).css( "background-color", tempColor)
  }
}

randomizeColors();
