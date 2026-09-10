export function header() {

    const html = `
        <div class='brand-container'>
            <div>
                <h1 class="full-name">Hajar El Adnani</h1>
                <div class='job-title'>Web Developper - FreeLancer</div>
            </div>
            <img src="images/icons/logoicon.png" class="logo-icon"/>
        </div>
        <div class="menu-bar">
            <a href="index.html" class="navigation-link" >Acceuil</a>
            <a href="projects.html" class="navigation-link">R&eacute;alisations</a>
            <a href="contact.html" class="navigation-link">Contact</a>
        </div>

        <div class="menu-bar-icons">
            <a href="index.html" class="navigation-link" ><img src="images/icons/home-icon.png" class="menu-icons" title="Home"/></a>
            <a href="projects.html" class="navigation-link"><img src="images/icons/work-icon.png" class="menu-icons" title="Work"/></a>
            <a href="contact.html" class="navigation-link"><img src="images/icons/contact-icon.png" class="menu-icons-contact" title="Contact"/></a>
        </div>
        
    `
    return html;
}