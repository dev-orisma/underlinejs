console.log("underline: ", $(".underline"));
$(".underline").each(function (i,elm) {
	var myRe = /(\u0E24\u0E32)|[\u0E01-\u0E2E][\u0E31\u0E34-\u0E37\u0E47-\u0E4E]*(\u0E38|\u0E39)+[\u0E31\u0E34-\u0E37\u0E47-\u0E4E]*|[jpqyg\u0E0D-\u0E10\u0E24\u0E26\u0E45\u0E46]+/g;
	var str = elm.innerHTML;
	  str = str.replace(myRe , "</span></span>"+'$&'+"<span><span>");
	var outstr = "<span><span>"+str+"</span></span>";
	console.log("outstr: ", outstr);
	 elm.innerHTML = outstr;
});