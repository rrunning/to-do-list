


function addItem() {
	var item = getElementById('item').value;
	var element = document.createElement('li');
	item.appendChild(element)
	document.getElementById('list').appendChild(element)

}