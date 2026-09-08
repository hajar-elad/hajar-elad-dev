import { header } from "../shared-scripts/header.js";

function contactSection(){
    const html = `
                <div class="location">
                <div class="find-us">
                <div>TROUVEZ-MOI ICI </div>
                <a href="https://www.google.com/maps/dir//Bd+de+Bourgogne+Casablanca+20250/@33.5962093,-7.6482737,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0xda7d2fb130ffd4f:0x82911cb5524c97c8!2m2!1d-7.6482737!2d33.5962093?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank">
                    <img class="location-icon" src="">
                </a>
                </div>
                <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13292.981608305588!2d-7.650100005468616!3d33.5989366461897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2f3c5917987%3A0x193194fbb00eed9c!2sBourgogne%2C%20Casablanca%2020250%2C%20Morocco!5e0!3m2!1sen!2sus!4v1785174923646!5m2!1sen!2sus" 
                    style="border:0;" allowfullscreen="" loading="lazy" 
                referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>

            <div class="contact-us">  
            <div> Contact:</div>
            <div class="phone-nbr">
                <a href="https://wa.me/212701131213" target="_blank" title="Nous sommes joignable sur whatsapp">
                    <img src="" class="whatsapp-icon">
                </a>
                <div>00212 701 13 12 13</div>
            </div>
            <div class="email">
                <a href="mailto:hajar.elad@gmail.com">
                    <img src="" class="email-icon">
                </a>
                <div>hajar-elad@gmail.com</div>
            </div>
            <div class="email-colab">
                <div>Collaborations:</div>
                <a href="mailto:hajar.elad@gmail.com">
                    <img src="" class="email-icon">
                </a>
                <div>hajar.elad.collabs@gmail.com</div>
            </div>
            </div>`;
    
    return html;
}

document.querySelector('.header')
    .innerHTML = header();

document.querySelector('.contact-section')
    .innerHTML = contactSection();