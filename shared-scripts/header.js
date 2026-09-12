export function header(route) {

    const html = `
        <div class='brand-container'>
            <div>
                <h1 class="full-name">Hajar El Adnani</h1>
                <div class='job-title'>Web Developper - FreeLancer</div>
            </div>
            <img src="${route}images/icons/logoicon.png" class="logo-icon"/>
        </div>
        <div class="menu-bar">
            <a href="${route}" class="navigation-link" >Acceuil</a>
            <a href="${route}projects/" class="navigation-link">R&eacute;alisations</a>
            <a href="${route}contact/" class="navigation-link">Contact</a>
        </div>

        <div class="menu-bar-icons">
            <a href="${route}" class="navigation-link" ><img src="${route}images/icons/home-icon.png" class="menu-icons" title="Home"/></a>
            <a href="${route}projects/" class="navigation-link"><img src="${route}images/icons/work-icon.png" class="menu-icons" title="Work"/></a>
            <a href="${route}contact/" class="navigation-link"><img src="${route}images/icons/contact-icon.png" class="menu-icons-contact" title="Contact"/></a>
        </div>
        
    `
    return html;
}