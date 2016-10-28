var color ='';

$('.pal').click(function(event){
  // console.log(event.target);
  // var te = event.target;
  //  console.log($(event.target).attr('class'));
   color = $(event.target).attr('class');
})

$('.pixel').click(function(){
$( this ).css( "background-color", color );

})
