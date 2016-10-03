//////////////////////////////
// 
// author: lexyee
// 
//////////////////////////////


// document ready
$(document).ready(function(){

	$(document).mousemove(function(e) {
    $('#brush').css({'top': e.pageY+'px', 'left': e.pageX+'px'}).addClass('active');
    $('.brush-overlay').css({'top': e.pageY+'px', 'left': e.pageX+'px'}).addClass('active');
    console.log("X:" + e.pageX + "   Y:" + e.pageY);
  });

});