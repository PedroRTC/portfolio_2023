let items_menu_bottom=document.querySelectorAll(".items_menu_bottom")

let carrossel = document.querySelectorAll(".carrossel");

let carrossel_description = document.querySelector(".carrossel_description");
let item_menu_description = document.querySelectorAll(".item_menu_description");

let container_projects = document.querySelector(".container_projects");
let item_menu_projects = document.querySelectorAll(".menu_projects button");

let button_left = document.querySelectorAll(".button_left");
let button_right = document.querySelectorAll(".button_right");
let button_center = document.querySelector(".button_center");


items_menu_bottom.forEach(item_bottom => {
   item_bottom.addEventListener("click",()=>{
    let class_menu_bottom="class_menu_bottom"
    selectItem(item_bottom,class_menu_bottom)
   })
});

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

function selectItem(it, classItem) {
  it.classList.add(classItem);
  it.addEventListener("click", removeItem(it, classItem));
}

function removeItem(it, classItem) {
  let itemSelection = document.querySelectorAll(`.${classItem}`);
  for (const i of itemSelection) {
    if (i) {
      i.classList.remove(classItem);
      it.classList.add(classItem);
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
    });
  }

  center.addEventListener("click", () => {
    if (carrossel_description.scrollLeft < "300") {
      carrossel_description.scrollBy(300, 0);
    } else if (carrossel_description.scrollLeft == "300") {
      carrossel_description.scrollBy(0, 0);
    } else if (carrossel_description.scrollLeft >= "650") {
      carrossel_description.scrollBy(-300, 0);
    }
  });
}

categoryItemsMenu(button_left, button_right, carrossel, button_center);
