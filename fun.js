function google_search(id){
	this.content = document.getElementById(id).value;
	if (this.content != "") {
		this.search = "http://118.174.27.112/#newwindow=1&q="+this.content;
	if(!+[1,]) {
		this.search = "http://118.174.27.112/search?newwindow=1&q=" + this.content + "&cad=h";
	}
		window.open(search);
		this.content = document.getElementById(id).value = "";
	}
}