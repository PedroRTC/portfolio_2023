let item_menu_description0 = document.getElementsByClassName("item_menu_description")[0];
let item_menu_description = document.querySelectorAll(".item_menu_description");
let carrossel_description = document.querySelector(".carrossel_description");

item_menu_description0.classList.add("selection");

item_menu_description.forEach((item_description) => {
  item_description.addEventListener("click", effectDescriptionAbout);
  item_description.addEventListener("click", () => {
    selectItem(item_description);
  });
});

function effectDescriptionAbout() {
  carrossel_description.style.transform = "scale(0)";
  carrossel_description.style.opacity = "0.1";
  setTimeout(() => {
    carrossel_description.style.transform = "scale(1)";
    carrossel_description.style.opacity = "1";
  }, 400);
}

function selectItem(item) {
  item.classList.add("selection");
  item.addEventListener("click", removeItem(item));
}

function removeItem(item) {
  let itemSelection = document.querySelectorAll(".selection");
  for (const i of itemSelection) {
    if (i) {
      i.classList.remove("selection");
      item.classList.add("selection");
    }
  }
}
