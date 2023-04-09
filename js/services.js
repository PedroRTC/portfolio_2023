let item_services = document.querySelectorAll(".item_services");

item_services.forEach((element) => {
  element.addEventListener("click", () => showServices(element));
});

function showServices(element) {
  let container_all_services = createElementWithClass(
    "div",
    "container_all_services"
  );
  let all_services = createElementWithClass("section", "all_services");
  let close_services=createElementWithClass("button","close_services")
  let title_services = createElementWithClass("h4", "title_services");
  let list_services = createElementWithClass("div", "list_services");

  close_services.textContent="X"

  

  if (element.classList.value.includes("front")) {
    title_services.textContent = "Front end";
    list_services.innerHTML=`<p>Portfólio</p><p>Cardapío virtual</p><p>Landing page</p><p>pagina de conteúdo</p>`
  } else {
    title_services.textContent = "Design gráfico";
    list_services.innerHTML = `<p>Pánfleto</p><p>Convite</p><p>Logotípo</p><p>Cardapío</p><p>Cartão de visita</p><p>design de site</p>`;
  }

  all_services.appendChild(close_services)
  all_services.appendChild(title_services);
  all_services.appendChild(list_services);
  container_all_services.appendChild(all_services);
  window.document.body.appendChild(container_all_services);

  close_services.addEventListener("click",()=>removeServices(container_all_services))
}



function removeServices(container_all_services){
    window.document.body.removeChild(container_all_services)
}