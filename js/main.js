let item_menu_description = document.querySelectorAll(".item_menu_description");
let carrossel_description = document.querySelector(".carrossel_description");

let item_menu_projects = document.querySelectorAll(".menu_projects button");

item_menu_projects.forEach((item_projects) => {
  item_projects.addEventListener("click", () => {
    let class_item_projects = "selection_projects";
    selectItem(item_projects, class_item_projects);
  });
});

item_menu_description.forEach((item_description) => {
  item_description.addEventListener("click", effectDescriptionAbout);
  item_description.addEventListener("click", () => {
    let class_item_description = "selection";
    selectItem(item_description, class_item_description);
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

function selectItem(item, classItem) {
  item.classList.add(classItem);
  item.addEventListener("click", removeItem(item, classItem));
}

function removeItem(item, classItem) {
  let itemSelection = document.querySelectorAll(`.${classItem}`);
  for (const i of itemSelection) {
    if (i) {
      i.classList.remove(classItem);
      item.classList.add(classItem);
    }
  }
}
