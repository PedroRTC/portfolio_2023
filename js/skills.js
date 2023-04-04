
let mySkills=[]

let container_skills=document.querySelector(".container_skills")



async function initializeSkills(){
  mySkills = await respSkills()
  generateSkills()
}

initializeSkills()

function createElementWithClass(type, elementClass) {
  const element = document.createElement(type);
  element.classList.add(elementClass);
  return element;
}



function generateSkills(){
  mySkills.map(skills=>{
     let item_skills= createElementWithClass("div","item_skills")
     let name_skills= createElementWithClass("p","name_skills")
     let container_percentage=createElementWithClass("section","container_percentage")
     let percentage=createElementWithClass("span","percentage")
     let img_skills=createElementWithClass("img","img_skills")


     name_skills.textContent=skills.skills

     percentage.style.width=skills.percentage
     img_skills.src=skills.img

   
     container_percentage.appendChild(percentage)
     container_percentage.appendChild(img_skills)

     item_skills.appendChild(name_skills)
     item_skills.appendChild(container_percentage)
    

     container_skills.appendChild(item_skills)

  })
} 