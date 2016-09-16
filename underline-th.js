(function($){
	$.fn.underline = function(){
		this.each(function (i,elm) {
			var myRe = /(\u0E24\u0E32)|[\u0E01-\u0E2E][\u0E31\u0E34-\u0E37\u0E47-\u0E4E]*(\u0E38|\u0E39)+[\u0E31\u0E34-\u0E37\u0E47-\u0E4E]*|[jpqyg()\u0E0D-\u0E10\u0E24\u0E26\u0E45\u0E46]|[\u005B]|[\u005D]+/g;
			var str = elm.innerHTML;
			var openTag= "<span class='underline-border'><span class='underline-text'>";
			var closeTag= "</span></span>";
			str = str.replace(myRe , closeTag + "<span class='non-underline'>"+'$&'+"</span>" + openTag);
			var outstr = openTag + str + closeTag + "<span style='clear:both;'></span>";
			outstr = outstr.replace(  openTag + closeTag ,'' );
			elm.innerHTML = outstr;
		});
	};
})(jQuery);