let thingsToLoad = 3;

function handleWhenLoaded() {
  thingsToLoad--;

  if (thingsToLoad <= 0) {
    let modalElement = document.querySelector(".modal");
    modalElement.style.display = "flex";
  }
}
