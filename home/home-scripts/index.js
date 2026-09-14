import { header } from "../../shared-scripts/header.js";
import { footer } from "../../shared-scripts/footer.js";

const logoIcon = './images/icons/logoIcon.png';
 
document.querySelector('.header')
    .innerHTML = header('./');

document.querySelector('.footer')
    .innerHTML = footer();

