document.addEventListener("DOMContentLoaded", function(){
	const el = document.querySelector('.ufowrapper');
	const ellight = document.querySelector('.light');
	const radiob = document.querySelectorAll('.planet__answer');
	const radiobanimal = document.querySelectorAll('.animal__answer');
	const titelPlanet = document.querySelector('.planet__header');
	const titelAnimal = document.querySelector('.animal__header');
	const buttonplace = document.querySelector('.button');
	const btn = document.querySelector('button');
	const wrapper = document.querySelector('.wrapper-no5');
	const animal = document.querySelector('.animal');

	//loop the radio-buttons, and set them to checked
	for (let i = 0, length = radiob.length; i < length; i++){
		radiob[i].querySelector('input').checked = false;
		radiob[i].addEventListener('click', function (event) {
			event.preventDefault();
			let x = event.currentTarget.querySelector('input');
			x.checked = true;

			let content = x.value;
			titelPlanet.innerHTML = content + ' is done';

			if(content){
				wrapper.classList.add('planetIsHidden');
				setTimeout(()=>{ 
					wrapper.classList.add('animalIsVisible');
				}, 1000);
			}
		}, false);
	}
	//loop the radio-buttons, and set them to checked
	for (let i = 0, length = radiobanimal.length; i < length; i++){
		console.log(radiobanimal[i]);
		radiobanimal[i].querySelector('input').checked = false;
		radiobanimal[i].addEventListener('click', function (event) {
			event.preventDefault();
			let x = event.currentTarget.querySelector('input');
			x.checked = true;
			
			let content = x.value;
			titelAnimal.innerHTML = 'your buddy is a ' + content;

			if(content){
				buttonplace.classList.add('visible');
			}
		}, false);
		radiobanimal[i].addEventListener('mouseover', function (event) {
			el.classList.add('beamerisvisible');
		}, false);
		radiobanimal[i].addEventListener('mouseout', function (event) {
			el.classList.remove('beamerisvisible');
		}, false);

	}
	
	//when scrolled, get the new position for the cursor
	function recursive_offset(aobj) {
	 let currOffset = {
	   x: 0,
	   y: 0
	 } 
	 let newOffset = {
	     x: 0,
	     y: 0
	 }    
	 if (aobj !== null) {

	   if (aobj.scrollX) { 
	     currOffset.x = aobj.scrollX;
	   }

	   if (aobj.scrollY) { 
	     currOffset.y = aobj.scrollY;
	   } 

	   if (aobj.visualViewport!==undefined && aobj.visualViewport.offsetLeft) { 
	     currOffset.x -= aobj.visualViewport.offsetLeft;
	   }else if(aobj.offsetLeft){
	   		currOffset.x -= aobj.offsetLeft;
	   }

	   if (aobj.visualViewport!==undefined && aobj.visualViewport.offsetTop) { 
	     currOffset.y -= aobj.visualViewport.offsetTop;
	   }else if(aobj.offsetTop){
	   		currOffset.y -= aobj.offsetTop;
	   }

	   if (aobj.parentNode !== undefined) { 
	      newOffset = recursive_offset(aobj.parentNode);   
	   }

	   currOffset.x = currOffset.x + newOffset.x;
	   currOffset.y = currOffset.y + newOffset.y; 
	 }
	 return currOffset;
	}

	function mousefollow(event){
		let offsetpos = recursive_offset(this); //get the x-position, when scrolled
	    posX = event.clientX+offsetpos.x;
	    posY = event.clientY+offsetpos.y;
		el.style.top = event.clientY+offsetpos.y + "px";
		el.style.left = event.clientX+offsetpos.x + 50 + "px";
	}

	function clickshoot(event){
		event.preventDefault();
			if(ellight.classList.contains('shoot')){
				ellight.classList.remove('shoot');
				ellight.classList.add('shoot2');
			}else{
				ellight.classList.add('shoot');
				ellight.classList.remove('shoot2');
			}
			
		}

	function addclassWrapper(cursorclass){
		if(ellight.classList.contains('shoot2')){
			ellight.classList.remove('shoot2');
			ellight.classList.remove('shoot');
		}else if(ellight.classList.contains('shoot')){
			ellight.classList.remove('shoot');
		}
		el.classList.add(cursorclass);
	}

	function removeclassWrapper(cursorclass){
		if(ellight.classList.contains('shoot2')){
			ellight.classList.remove('shoot2');
			ellight.classList.remove('shoot');
		}
		el.classList.remove(cursorclass);
	}

	function addclasstobody(classname, classname2){
		setTimeout(()=>{ 
			wrapper.classList.toggle(classname);
		}, 500);
		btn.classList.toggle(classname2)
	}
	//get the place of the cursor to let the svg follow the mouse	
	window.addEventListener('mousemove', (event)=>{
		mousefollow(event);
	});
	//adding classes to let the marsmen shoot
	window.addEventListener('click', clickshoot);
	//adding class to wrapper, when moved over button to change ufo-element by click
	buttonplace.addEventListener('mouseover', ()=>{
		addclassWrapper('cursoralienarm');
	}, false)
	buttonplace.addEventListener('mouseleave', ()=>{
		removeclassWrapper('cursoralienarm')
	}, false);
	btn.addEventListener('click', ()=>{
		addclasstobody('sendit', 'btnclicked');
	}, false)
});