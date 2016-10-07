	var input = document.getElementById('item')
	

function addItem(inputValue) {
	var dumbSpaceDeletingVariable = inputValue.trim();
	if(dumbSpaceDeletingVariable === '') {
		alert('Enter your To-Do item!');
		return;
	}
	var element = document.createElement("li");
	element.innerHTML = inputValue;
	element.setAttribute('class', 'list-item')
	element.addEventListener('click', crossOffItem);
	document.getElementById('list').appendChild(element);
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
	for(var i = 0; i < stringItems.length; i++){
		addItem(stringItems[i])
	}
}

function crossOffItem(event) {
	var target = event.target || event.srcElement;
	target.classList.toggle('strike-through');
}

