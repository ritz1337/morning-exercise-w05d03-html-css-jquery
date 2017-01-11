console.log('Hello');

var $container = $( '.container' )
var $left = $( '.left' )
var $middle = $( '.middle' )
var $right = $( '.right' )
var $small = $( '.small' )

$container.click( function( evt ) {
  $small.css( 'background', getRandomColor() )
  $container.css( 'background', getRandomColor() )
})
$left.click( function( evt ) {
  $left.siblings().css( 'background', getRandomColor() )
  evt.stopPropagation()
})
$middle.click( function( evt ) {
  $container.css( 'background', getRandomColor() )
  evt.stopPropagation()
})
$right.click( function( evt ) {
  $right.siblings().css( 'background', getRandomColor() )
  evt.stopPropagation()
})



//from stack exchange
function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++ ) {
       color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}
