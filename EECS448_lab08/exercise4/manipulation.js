function change() {
	let bdRed = document.getElementById("bdRed").value;
	let bdGreen = document.getElementById("bdGreen").value;
	let bdBlue = document.getElementById("bdBlue").value;
	let width = document.getElementById("width").value;
	document.getElementById("text").style.borderColor = 'rgb(' + bdRed + ',' + bdBlue + ',' + bdGreen + ')';
	document.getElementById("text").style.borderWidth = width + 'px';

	let bcgRed = document.getElementById("bcgRed").value;
	let bcgGreen = document.getElementById("bcgGreen").value;
	let bcgBlue = document.getElementById("bcgBlue").value;
	document.getElementById("text").style.backgroundColor = 'rgb(' + bcgRed + ',' + bcgBlue + ',' + bcgGreen + ')';

}
