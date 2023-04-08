let carrossel = document.querySelectorAll(".carrossel");

let carrossel_description = document.querySelector(".carrossel_description");
let item_menu_description = document.querySelectorAll(".item_menu_description");

let container_projects = document.querySelector(".container_projects");
let item_menu_projects = document.querySelectorAll(".menu_projects button");

let button_left = document.querySelectorAll(".button_left");
let button_right = document.querySelectorAll(".button_right");
let button_center = document.querySelector(".button_center");

item_menu_description.forEach((item_description) => {
  item_description.addEventListener("click", effectDescriptionAbout);
  item_description.addEventListener("click", () => {
    let class_item_description = "selection";
    selectItem(item_description, class_item_description);
  });
});

item_menu_projects.forEach((item_projects) => {
  item_projects.addEventListener("click", () => {
    let class_item_projects = "selection_projects";
    selectItem(item_projects, class_item_projects);
  });
});

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

function effectDescriptionAbout() {
  carrossel_description.style.transform = "scale(0)";
  carrossel_description.style.opacity = "0.1";
  setTimeout(() => {
    carrossel_description.style.transform = "scale(1)";
    carrossel_description.style.opacity = "1";
  }, 400);
}

function categoryItemsMenu(left, right, container, center) {
  for (let index = 0; index < 2; index++) {
    left[index].addEventListener("click", () => {
      container[index].scrollBy(-1000, 0);
    });

    right[index].addEventListener("click", () => {
      container[index].scrollBy(1000, 0);
      if (container[index].scrollLeft == "1000") {
        container[index].scrollBy(0, 0);
      }
    });
  }

  center.addEventListener("click", () => {
    if (carrossel_description.scrollLeft < "300") {
      carrossel_description.scrollBy(300, 0);
    } else if (carrossel_description.scrollLeft == "300") {
      carrossel_description.scrollBy(0, 0);
    } else if (carrossel_description.scrollLeft >= "1000") {
      carrossel_description.scrollBy(-600, 0);
    }
  });
}

categoryItemsMenu(button_left, button_right, carrossel, button_center);
