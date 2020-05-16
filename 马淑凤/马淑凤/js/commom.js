(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			if(clientWidth >= 1200) {
				docEl.style.fontSize = '';
				
			} else if(clientWidth <= 640) {
				docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
				
				
			} else if(clientWidth <= 1200) {
				docEl.style.fontSize = '100px';
				
			}
		};

	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


//window.onresize = function (ev) {
//    ev.stopPropagation();
//    window.location.href = window.location.href;
//}

