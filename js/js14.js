document.addEventListener("DOMContentLoaded", function(){
	let allLinks = Array.prototype.slice.call(document.querySelectorAll('.fire'));
	allLinks.forEach((item) => {
		item.innerHTML = spanText(item.innerHTML);
	});
});

function spanText(text) {
	let textarr = text.split("");
	let newArr = textarr.map((i)=>{
		if(i === ' ') {
			i = '&nbsp;'
		}
		return i;
	});
    return "<span class='char'>" + newArr.join("<\/span><span class='char'>") + "<\/span>";
}
