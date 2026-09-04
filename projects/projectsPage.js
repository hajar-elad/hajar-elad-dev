import { projects } from "../data/projects.js";
import { header } from "../shared-scripts/header.js";

function projectsPage(){    
    let html = ``;

    projects.forEach((project) => {
        html += `
        <div class="project-container">
        <div class="project-images-container">
        <img src="${project.firstImage}" class="project-image-f">
        <img src=${project.lastImage} class="project-image-l">
        </div>
        <div class="project-name">${project.title}</div>
        </div>
        `
    })

    html =` 
        <h1 class="Project-Page-title">Projects</h1> 
        ${html}
    `
    return html;
}

document.querySelector('.header')
    .innerHTML = header();

document.querySelector('.projects-page-section')
    .innerHTML = projectsPage();
 