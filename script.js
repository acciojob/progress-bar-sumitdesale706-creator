//your JS code here. If required.
let heading = document.querySelector("h1");
heading.innerText = "1";
var currC = 1;

let progressBar = document.querySelector(".bar");
let circles = document.querySelectorAll(".circle");

let next = document.querySelector("#next");
let previous = document.querySelector("#prev");

previous.disabled = true;

next.addEventListener("click", () => {
	  currC++;
	  heading.innerText = `${currC}`;
	
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

	    currC--;
        heading.innerText = `${currC}`;
	
		circles[currC].classList.remove("active");

	    if(currC <= 1){
			 previous.disabled = true;
			 currC == 1;
			 heading.innerText = `${currC}`;
		}
});


