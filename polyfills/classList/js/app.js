$(function(){
	var ctn = document.getElementById("results");
	console.log(ctn)

	ctn.innerHTML = "<p>Hello</p>";

	if("classList" in document.createElement("_")){
		ctn.innerHTML = "<p>Hello: class list works</p><p>The classes on this element are: <em>" + ctn.classList + "</em></p>";

		ctn.classList.add("new-class");

		ctn.innerHTML += "<p>Added a class: <em>" + ctn.classList + "</em></p>";
		
		ctn.classList.remove("new-class");

		ctn.innerHTML += "<p>Removed a class: <em>" + ctn.classList + "</em></p>";
		
		ctn.classList.toggle("new-class");

		ctn.innerHTML += "<p>Toggle a class: <em>" + ctn.classList + "</em></p>";
		
		ctn.innerHTML += "<p>Contains a class 'new-class': <em>" + ctn.classList.contains("new-class") + "</em></p>";
	}
	else {
		ctn.innerHTML = "<p style='color:red;'>Not working</p>";
	}
});