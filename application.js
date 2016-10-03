//////////////////////////////
// 
// author: lexyee
// 
//////////////////////////////


// document ready
$(document).ready(function(){

	$(document).mousemove(function(e) {
		var cWidth = $(document).width();
		var cHeight = $(document).height();
		
		$('#brush').css({'top': e.pageY+'px', 'left': e.pageX+'px'}).addClass('active');
    // $('.brush-overlay').css({'top': e.pageY+'px', 'left': e.pageX+'px'}).addClass('active');
    $('.brush-overlay').addClass('active');
    $('.brush-overlay').css('transform', 'translate(' + e.pageX*100/cWidth + 'px, ' + e.pageY*100/cHeight + 'px)');
    // $('.brush-overlay').css('transform', 'translate(' + tWidth + 'px, ' + tHeight + 'px)');
    
    console.log("X:" + e.pageX + "   Y:" + e.pageY + "cWidth:" + cWidth + "   cHeight" + cHeight);
  });

});