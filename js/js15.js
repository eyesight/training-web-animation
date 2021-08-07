document.addEventListener("DOMContentLoaded", () => {
	const point = document.querySelector('.point');
	const pointCordinates = document.querySelector('.point-cordinates');
	const pointCordinatesEnd = document.querySelector('.point-end');
	const lastTitel = document.querySelector('.lastTitle');
	const posEnd = { left: 'calc(100% - 55px)', top: 'calc(100% - 55px)' };
	let pointcord = getCoords(pointCordinates);
	addCSSToElement(point, pointcord.left + 'px', pointcord.top + 'px');

	window.addEventListener('scroll', (e) => {
		pointcord = getCoords(pointCordinates);
		pointcordend = getCoords(pointCordinatesEnd);
		console.log(pointcord);
		if (window.scrollY > 10) {
			addCSSToElement(point, posEnd.left, posEnd.top);
			addClass(point, 'animated');
		}

		if (window.scrollY < 5) {
			addCSSToElement(point, pointcord.left + 'px', pointcord.top + 'px');
			removeClass(point, 'animated');
		}

		if (elementInViewport(lastTitel)) {
			addCSSToElement(point, pointcordend.left + 'px', pointcordend.top + 'px');
			removeClass(point, 'animated');
		}
	});

	window.addEventListener('resize', () => {
		point.style.position = 'absolute';
		point.style.left = 'auto';
		point.style.bottom = '7px'
		point.style.top = 'auto';
		pointcord = getCoords(point);
	});
});

function addClass(el, className) {
	if (el.classList) el.classList.add(className);
	else if (!hasClass(el, className)) el.className += " " + className;
}

function getCoords(elem) {
	let box = elem.getBoundingClientRect();
	return {
		top: box.top,
		left: box.left,
		right: box.width + box.left,
		bottom: box.height + box.top
	};
}

function addCSSToElement(elem, left, top, position = 'fixed') {
	elem.style.left = left;
	elem.style.top = top;
	elem.style.position = position;
}

function removeClass(el, className) {
	if (el.classList) el.classList.remove(className);
	else if (hasClass(el, className)) {
		var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
		el.className = el.className.replace(reg, " ");
	}
}

function elementInViewport(el) {
	var top = el.offsetTop;
	var left = el.offsetLeft;
	var width = el.offsetWidth;
	var height = el.offsetHeight;

	while (el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}

	return (
		top >= window.pageYOffset &&
		left >= window.pageXOffset &&
		(top + height) <= (window.pageYOffset + window.innerHeight) &&
		(left + width) <= (window.pageXOffset + window.innerWidth)
	);
}