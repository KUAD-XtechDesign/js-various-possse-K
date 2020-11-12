$(function(){
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });

 $("#contents").on("click",function(){
   $("#back").addClass("anime")
 })

})


