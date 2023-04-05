


function fetchJson(url) {
    return fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        new Error(response.statusText);
      }
    });
  }

  function respSkills(){
    return fetchJson("json/skills.json")
  }

  function respProjects(){
    return fetchJson("json/projects.json")
  }