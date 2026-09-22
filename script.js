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
	
		 for(let i = 0; i < 5; i++){
		    if(i + 1 <= currC){
				 circles[i].classList.add("active");
			}else{
				 circles[i].classList.remove("active");
			}

			if(currC == 5){
				 currC == 1;
		         next.disabled = true;
		         previous.disabled = false;
			}
		 }
});

previous.addEventListener("click", () => {
	     circles[currC - 1].classList.remove("active");
	     currC--;

	     if(currC == 1){
			   next.disabled = false;
		       previous.disabled = true;
		 }
});

