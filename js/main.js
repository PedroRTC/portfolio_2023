

let item_menu_description=document.querySelectorAll(".item_menu_description")
let carrossel_description=document.querySelector(".carrossel_description")




function effectDescriptionAbout(){
  item_menu_description.forEach(element => {
      element.addEventListener("click",changeContent)
  });

  function changeContent(){
     carrossel_description.style.transform="scale(0)"
     carrossel_description.style.opacity="0.1"
     setTimeout(() => {
        carrossel_description.style.transform="scale(1)"
        carrossel_description.style.opacity="1"
     }, 400);
  }
}


effectDescriptionAbout()