document.addEventListener("DOMContentLoaded", function(){
	const el = document.querySelector('.button');
	const on = document.querySelector('.on-wrapper');
	const off = document.querySelector('.off-wrapper');

	function toggleClassButton(event){
		event.preventDefault();
		if(on.classList.contains('active') || off.classList.contains('on-active')){
			on.classList.remove('active');
			on.classList.add('off-active');
			off.classList.remove('on-active');
		}else if(on.classList.contains('off-active')){
			off.classList.add('on-active');
			off.classList.remove('active');
			on.classList.remove('off-active');
		}else{
			on.classList.add('active');
			off.classList.add('active', 'on-active');
		}
	}
	el.addEventListener('click', toggleClassButton);
});