//your JS code here. If required.
var currC = 1;

let progressBar = document.querySelector(".bar");
let circles = document.querySelectorAll(".circle");

let next = document.querySelector("#next");
let previous = document.querySelector("#prev");

previous.disabled = true;

next.addEventListener("click", () => {
	  currC++;
	  previous.disabled = false;
		 if(currC <= 5){
			  circles[currC-1].classList.add("active");
		 }

		 if (currC == 5){ 
				next.disabled = true; 
		 }
});

previous.addEventListener("click", () => {
	     next.disabled = false;
	
	     circles[currC-1].classList.remove("active");
	     currC--;

	     if(currC == 1){
		       previous.disabled = true;
		 }
});


