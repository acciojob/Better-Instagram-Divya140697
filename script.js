//your code here
// script.js
const items = document.querySelectorAll('.item');

let draggedItem = null;

function handleDragStart() {
  draggedItem = this;
  this.classList.add('dragging');
}

function handleDragEnd() {
  this.classList.remove('dragging');
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDragEnter() {
  this.classList.add('over');
}

function handleDragLeave() {
  this.classList.remove('over');
}

function handleDrop() {
  if (draggedItem !== this) {
    // Swap the background images
    const tempBg = this.style.backgroundImage;
    this.style.backgroundImage = draggedItem.style.backgroundImage;
    draggedItem.style.backgroundImage = tempBg;
  }
}

items.forEach(item => {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragend', handleDragEnd);
  item.addEventListener('dragover', handleDragOver);
  item.addEventListener('dragenter', handleDragEnter);
  item.addEventListener('dragleave', handleDragLeave);
  item.addEventListener('drop', handleDrop);
});
