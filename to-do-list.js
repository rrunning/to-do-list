	var input = document.getElementById('item')
	

function addItem(inputValue) {
	var element = document.createElement("li");
	element.innerHTML = inputValue;
	element.addEventListener('click', crossOffItem)
	document.body.appendChild(element)
	clearForm()

}

function enterKey(peanut) {
	if (peanut.keyCode == 13 || peanut.which == 13){
		stringSplitting()
	}
}

function clearForm() {
	document.getElementById('item').value = '';
}


function stringSplitting(){
	var stringSplitter = input.value;
	var stringItems = stringSplitter.split(',');
	console.log(stringItems);
	for(var i = 0; i < stringItems.length; i++){
		addItem(stringItems[i])
	}
}

function crossOffItem() {
	
}

