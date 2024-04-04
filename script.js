const main=document.querySelector("main")
const load=document.getElementById("load")
load.style.display="inline-block"
var i = 0;
var txt = '<RUPAM/>';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    load.innerText += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()
setTimeout(()=>{
	load.style.display="none"
},2000)





var t=1
let menu=document.getElementById('menu')
let menu2=document.getElementById("menu2")
menu.addEventListener("click",function (){
	console.log("click")
	if(t==1)
	{
		menu.classList="fa-solid fa-x fa-xl"
		t=0
		menu.style.transform="rotate(360deg)"
		menu.style.transition="0.5s"
			menu2.style.display="flex"		
	}
	else{
		menu.classList="fa-solid fa-bars fa-xl"
		t=1
		menu2.style.display="none"
		menu.style.transform="rotate(-360deg)"
		menu.style.transition="0.5s"
	}
})

const date= document.getElementById("date")
function getDate(){
	const yr=new Date().getFullYear()
	
	date.innerText=yr
}
getDate()









/* const scriptURL = 'https://script.google.com/macros/s/AKfycbzcHhWDpO6ebB_CkMMpt9sAK2UzSvaDTfKL-P5fchr668VUqL-iFRei3hpJGTo335xD/exec'
			const form = document.forms['feedback_portfolio']
		  
			form.addEventListener('submit', (e) => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
				alert("Thank you! your form is submitted successfully.")
			})
 */
