const travelList = [];
function addImageToList(event) {
  travelList.push(event.target);
}

document.querySelector('.your-classname').addEventListener('click', addImageToList);
