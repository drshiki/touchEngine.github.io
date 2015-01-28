document.write("\
<html>\
<head>\
<title>Welcome to Dam's page</title>\
<script type = \"text/javascript\" language=\"javascript\" src = \"fun.js\"> </script>\
<link rel = stylesheet type = \"text/css\" href = \"index.css\"/>\
</head>\
<body id = \"body_style\">\
<div id = \"first_containter\">\
<div id = \"comment_area_1\">\
<script type=\"text/javascript\">\
var disqus_shortname = 'damhjame'; // required: replace example with your forum shortname\
(function () {\
var s = document.createElement('script'); s.async = true;\
s.type = 'text/javascript';\
s.src = '//' + disqus_shortname + '.disqus.com/count.js';\
(document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);\
}());\
</script>\
</div>\
<h1 id = \"head_pic\"> </h1>\
<input id = \"search_box\" class = \"search_box\" type = \"text\" name = \"search_box\" maxlength = 255>\
<input id = \"search_button\" class = \"search_button\" type = \"button\" name = \"search_button\" value = \"search\" onclick = google_search(\"search_box\")>\
<div id = \"normal_second_containter\">")