document.addEventListener("DOMContentLoaded", function(){
	const el = document.querySelector('.btn-burger');
	const el2 = document.querySelector('.sidebar');

    function toggleClassButton(event){
		event.preventDefault();
		el2.classList.toggle('active');
	}

    el.addEventListener('click', toggleClassButton);
});