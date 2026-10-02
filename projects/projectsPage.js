import { projects } from "../data/projects.js";
import { header } from "../shared-scripts/header.js";
import {footer} from "../shared-scripts/footer.js"

function projectsPage(){    
    let html = ``;

    projects.forEach((project) => {
        html += `
        <div class="project-container">
            <div class="project-images-container">
                <img src="${project.firstImage}" alt="${project.description}" class="project-image-f">
                <img src=${project.lastImage} class="project-image-l">
            </div>
            <div class="project-name">${project.title}</div>
            <div class="project-description">${project.description}</div>
        </div>
        `
    })

    html =` 
        
        ${html}
    `
    return html;
}

document.querySelector('.header')
    .innerHTML = header('../');

document.querySelector('.projects-container')
    .innerHTML = projectsPage();

document.querySelector('.footer')
    .innerHTML = footer();
 