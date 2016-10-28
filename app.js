// these first 10 codes fill the container with pixels, it was intended to be able to fill a dynamically sized
var newWidth = $(window).width();
$('.container').css("width", newWidth);
var width = parseInt($('.container').css("width"));
console.log(width + 'px');
var height = parseInt($('.container').css("height"));
var totalPixels = Math.ceil(height*width)/150;
console.log(height);
console.log(totalPixels);
for (var i = 0; i < totalPixels; i++) {
  console.log(i);
var tempdiv = $( "<div id='pixel" + i + "' class='pixel'></div>" );
  $('.container').append(tempdiv);
  }
  // $('.container').css("width") = width+'px';
  // $('.container').css("height") = $('.container').css("height");
  // $('.container').resizable('destroy');

// here I create the randomized colors on click of the randomize text
$('#randomize').click(randomizeColors);

var color ='';
var mouseCheck ='';
$(document).mousedown(function(){
  mouseCheck='down';
});

$(document).mouseup(function(){
  mouseCheck='up';
});

$('.pal').click(function(event){
  var thisdiv = '#' + event.target.id;
  // console.log($(thisdiv).css('backgroundColor'));

  // var te = event.target;
  //  console.log($(event.target).attr('class'));
   color = $(thisdiv).css('backgroundColor');
   $('#randomize').css('background-color', color)

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
