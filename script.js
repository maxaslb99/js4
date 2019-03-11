// $( ".open" ).click(function() {
//     $( ".first-part" ).addClass("hide-left");
//     $( ".second-part" ).addClass("hide-right");
//     $( ".scroll" ).removeClass("scroll");
//     $('.open').addClass('remove')
//   });
$( ".start" ).click(function() {
  $( ".start" ).fadeOut(3000)
  $( ".word" ).css( "transform", "rotate(20deg)" );
  $( ".spin" ).css( {"opacity": "1",
                      "z-index": "101"} );

  setTimeout(function(){
      $( ".next p" ).css( {"display": "initial" } );
        $( ".lack p" ).css( {"display": "initial" } );
    $( ".word, .spin" ).css( {"transition": "5s"} );
  }, 8000);

})
$( ".next" ).click(function() {
  $( ".next" ).fadeOut(3000)
  $( ".word" ).css( "transform", "rotate(1155deg)" );
  $( ".spin" ).css( {"opacity": "1",
                      "z-index": "101"} );

  setTimeout(function(){
      $( ".next p" ).css( {"display": "initial" } );
    $( ".word, .spin" ).css( {"transition": "1s"} );
  }, 8000);
})

$( ".lack" ).click(function() {
  $( ".lack, .spin" ).fadeOut(3000)
  $( ".next" ).fadeOut(3000)
  $( ".content" ).css( {"display": "flex"});
  $( ".content" ).css( {"transition": "1s"})
 })



$( ".hovering-card" ).hover(
  function() {
    let $cards = $( ".hovering-card" );
    let count = $cards.length;
    let step = 60/count;
    for (let i = 0; i < count; i++) {
      let angle = -15 + Math.floor( step*i );
      $cards.eq(i).css( "transform", "rotate("+angle+"deg)" );
    }
  }, function() {
    $( ".hovering-card" ).css( "transform", "rotate(0deg)" );
  }
);

$( ".hovering-card" ).click(
  function() {
    let $cards = $( ".hovering-card" );
    $cards.removeClass("hovering-card")
    let count = $cards.length;
    let step = 15;
    for (let i = 0; i < count; i++) {
      let angle = -20 + Math.floor( step*i );
      $cards.eq(i).css( "transform", "translateX("+angle+"vw)" );
    }
  }
);

generator = function (start_x, start_y, direction = 1, x_step = 3, y_step = 150){
  cards_collector = $( ".cards-collector:first" );
  console.log(cards_collector)
  let a = 1;
  let b = 10;
  let c = start_y;
  let x = Math.random()*50 + start_x - 25;
  let offset = Math.sqrt(Math.abs((start_y*b-c)/a))+start_x;
  let delay = 0;
  let height = $("body").height();
  let width = $("body").width();

  while ((x<width+100)&&(x>-100)) {
    x = x + x_step*direction;
    let y = a*(x-offset)*(x-offset)+c;
    y = y/b;
    let new_card = $("<div class='card'></div>");
    console.log(height+new_card.height())
    if (y<(height+400)){
      new_card.css({"top": y+"px",
                   "left": x+"px",
                  "display": "none"});
      $( ".cards-collector" ).append(new_card);
      new_card.delay(delay).fadeIn(0)
      delay = delay + 100;}
    else {
      c = c + y_step;
      offset = x+direction*Math.sqrt(Math.abs((y*b-c)/a));
    }
  }}
setTimeout(function()
  {
      generator(1800, 100, -1);

  }, 1000);
setTimeout(function()
  {
      generator(0, 100);

  }, 5000);
setTimeout(function()
  {
      generator(600, 300, -1);

  }, 10000);
setTimeout(function()
  {
      generator(600, 0);

  }, 8000);
// let numberOfItems = $( ".date-js" ).length;
// let index = 0;
// let y_scale = 0;
// let x_scale = 0;
//
// setInterval(function() {
//   index = Math.floor( 20*Math.random() );
//   y_scale =  Math.floor( 1000*Math.random() );
//   x_scale =  Math.floor( 1000*Math.random() );
//   $( ".date-js" ).eq( index ).css( "top", y_scale + "px" );
//   $( ".date-js" ).eq( index ).css( "left", x_scale + "px" );
// }, 200);
