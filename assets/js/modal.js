//Toggle the modal with the legals

function toggleModal() {
  var element = document.getElementsByClassName("modal")[0];
  element.classList.toggle("is-active");
}

//Set dropdown as active onclick

var elements = document.getElementsByClassName("drop-item");

function toggleDropdown() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function(event) {
      this.classList.toggle("is-active");
    };
  }
}
