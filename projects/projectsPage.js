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
        <h1 class="project-page-title">Projects & TEMPLATES </h1> 
        <h2 class="project-page-title-second">Site Vitrine - Site Cataog</h2>
        ${html}
    `
    return html;
}

document.querySelector('.header')
    .innerHTML = header('../');

document.querySelector('.projects-page-section')
    .innerHTML = projectsPage();

document.querySelector('.footer')
    .innerHTML = footer();
 