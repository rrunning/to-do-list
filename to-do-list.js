
// document.addEventListener('keypress', enterKey);

function addItem() {
	var element = document.createElement("li");
	var input = document.getElementById('item').value;
	document.body.appendChild(element).innerHTML = input;
	clearForm()

}

function enterKey(peanut) {
	if (peanut.keyCode == 13 || peanut.which == 13){
		addItem()
	}
}

function clearForm() {
	document.getElementById('item').value = '';
}