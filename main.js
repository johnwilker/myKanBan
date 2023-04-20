/** Help */
function log(message) {
  console.log('> ' + message);
}

/* Cutting line bigger than 15 letters */

// const text = document.querySelectorAll(".card p");
// const limit = 15;

// for ( let p of text ) {
//   const aboveLimit = p.innerText.length > limit;
//   const dotsOrEmpty = aboveLimit ? "..." : "";
//   p.innerText = p.innerText.substring(0, limit) + dotsOrEmpty;
// }

/* Drag and Drop Zone*/

const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach( card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
})

function dragstart(){
  // log('CARD: Start dragging');
  dropzones.forEach( dropzone => dropzone.classList.add('highlight'));
  this.classList.add('is-dragging')
}

function drag(){
  // log('CARD: Is dragging');
}

function dragend(){
  // log('CARD: Stop dragging');
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"))
  this.classList.remove("is-dragging")
}

/* Place where we will drop cards */
dropzones.forEach( dropzone => {
  dropzone.addEventListener('dragenter', dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
})

function dragenter() {
  // log('CARD: Enter the dropzone');
}

function dragover() {
  // log("CARD: Over dropzone");
  this.classList.add('over');
  const cardBeingDragged = document.querySelector('.is-dragging');

  this.appendChild(cardBeingDragged)
}

function dragleave() {
  // log("CARD: Leaved in the dropzone");
  this.classList.remove("over")
}

function drop() {
  // log("CARD: Dropped");
  this.classList.remove('over');
}
