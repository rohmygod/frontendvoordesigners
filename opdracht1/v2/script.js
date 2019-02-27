const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');



// fill listeners //
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//Loop through de empties and call drag events //
for(const empty of empties) {
	empty.addEventListener('dragover', dragOver); //als je over de box dragged//
	empty.addEventListener('dragenter', dragEnter); //als je de box enterd//
	empty.addEventListener('dragleave', dragLeave); //als je uit de box dragged//
	empty.addEventListener('drop', dragDrop); //als je m laat vallen in de box//
}



// drag functions //
function dragStart () {
	this.className += ' hold';
	setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd () {
	this.className = 'fill';
}

function dragOver (e) {
	e.preventDefault(); //zorgt ervoor dat de drop functie ook werkt//

}


function dragEnter (e) {
	e.preventDefault();
	this.className += ' hovered'; //zorgt er voor dat als je entered de css class gebeurd//
	
}


function dragLeave () {
	this.className = 'empty'; //dit vervang entered als je weer uit de box gaat//
}


function dragDrop () {
	this.className = 'empty';
	this.append(fill); //zorgt ervoor dat je de fill toevoegd aan de empty waar je m in dropt//
}