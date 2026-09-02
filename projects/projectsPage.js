import { projects } from "../data/projects.js";

function projectsPage(){    
    let html = ``;

    projects.forEach((project) => {
        html += `
        <img src="${project.firstImage}" class="work-image-f">
        <img src=${project.lastImage} class="work-image-l">
        <div>${project.title}</div>
        `
    })

    return html;
}

document.querySelector('.projects-page')
    .innerHTML = projectsPage();
 