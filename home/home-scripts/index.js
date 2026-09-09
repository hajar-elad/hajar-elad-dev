import { header } from "../../shared-scripts/header.js";
import { homeTopSectionAdvantages } from "./homeTopSection.js";
import { homeAboutSection } from "./homeMidSection.js";
import { homePlansSection } from "./homeMidSection.js";
import { footer } from "../../shared-scripts/footer.js";

const logoIcon = './images/icons/logoIcon.png';
 
document.querySelector('.header')
    .innerHTML = header();

document.querySelector('.home-advantages-section')
    .innerHTML = homeTopSectionAdvantages();

document.querySelector('.home-about-section')
    .innerHTML = homeAboutSection();

document.querySelector('.home-plans-section')
    .innerHTML = homePlansSection();

document.querySelector('.footer')
    .innerHTML = footer();

