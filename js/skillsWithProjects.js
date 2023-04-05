let mySkills = [];
let myProjects=[]
let container_skills = document.querySelector(".container_skills");
let projects_front=document.querySelector(".projects_front")

async function initializeSkills() {
  mySkills = await respSkills();
  myProjects = await respProjects()
  generateSkills();
  generateProjects()

}

initializeSkills();

function createElementWithClass(type, elementClass) {
  const element = document.createElement(type);
  element.classList.add(elementClass);
  return element;
}

function generateSkills() { 
  mySkills.map((skills) => {
    let item_skills = createElementWithClass("div", "item_skills");
    let name_skills = createElementWithClass("p", "name_skills");
    let container_percentage = createElementWithClass(
      "section",
      "container_percentage"
    );
    let percentage = createElementWithClass("span", "percentage");
    let img_skills = createElementWithClass("img", "img_skills");

    name_skills.textContent = skills.skills;

    percentage.style.width = skills.percentage;
    img_skills.src = skills.img;

    container_percentage.appendChild(percentage);
    container_percentage.appendChild(img_skills);

    item_skills.appendChild(name_skills);
    item_skills.appendChild(container_percentage);

    container_skills.appendChild(item_skills);
  });
}

function generateProjects(){
  myProjects.map(projects=>{
     let item_projects=createElementWithClass("div","item_projects")
     let info_projects=createElementWithClass("div","info_projects")
     let category=createElementWithClass('p',"category")
     let repository=createElementWithClass("a","link")
     let demo=createElementWithClass("a","link")
     let article=createElementWithClass("a","link")

     item_projects.style.backgroundImage=`url(${projects.img})`
     category.textContent=projects.category
     repository.textContent="Repositorio"
     demo.textContent="Link demo"
     article.textContent=projects.name
     info_projects.appendChild(category)
     info_projects.appendChild(repository)
     info_projects.appendChild(demo)
     info_projects.appendChild(article)

     item_projects.appendChild(info_projects)


    projects_front.appendChild(item_projects)

    item_projects.addEventListener("mouseenter",()=>{
        info_projects.style.transform="translateY(0%)"
        setTimeout(() => {
          info_projects.style.gap="10px"
        }, 200);
       
    })

  })
}
