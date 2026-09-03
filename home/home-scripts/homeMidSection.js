export function homeAboutSection(){
    const html = `
        <h1> Pourquoi un site web</h1>

    <div class="advantages-about-section">
        <div class="advantage-about-container">
            <img src="images/icons/brand-icon.png" class="advantages-about-section-icon" />
            <div class="advantages-about-section-row">
            Une image de marque
            </div>
        </div>

        <div class="advantage-about-container">
            <img src="images/icons/24-hours-icon.png" class="advantages-about-section-icon" />
            <div class="advantages-about-section-row">
            Un store valable 24/24h 7/7j
            </div>
        </div>

        <div class="advantage-about-container">
            <img src="images/icons/growth.png" class="advantages-about-section-icon" />
            <div class="advantages-about-section-row">
            Des visiteurs convertis en acheuteurs
            </div>
        </div>

        <div class="advantage-about-container">
            <img src="images/icons/worldwide-icon.png" class="advantages-about-section-icon" />
            <div class="advantages-about-section-row">
            Une visibilité au national et a l&apos;international
            </div>
        </div>

        <div class="advantage-about-container">
            <img src="images/icons/ok-icon.png" class="advantages-about-section-icon" />
            <div class="advantages-about-section-last-row">
            Une presence professionelle et un profil credible
            </div>
        </div>

</div>`
    
    return html;
}

export function homePlansSection() {
    const html = `
        <h1> Plans & Pricing </h1>

        <div class="plan-advantages">
                            <div >Design adapté à vos besoins</div>
                            <div>100% responsive design</div>
                            <div>Amelioration de votre positionement web</div>
                            <div>
                                Ligne whatsapp incluse
                            </div>
                            <div>Jusqu’à 7 pages</div>
                            <div>Hebergement</div>
                            <div>Livraison entre 10 à 14 jours</div>
                            <div>Support apres livraison</div>
                        </div>
        
        <div class="cards-container">
           <div class="pricing-card-container">
                <div class="flip-card-inner">
                    <div class="pricing-card-front">
                        <div>Portfolio</div>
                    </div>

                    <div class="pricing-card-back">
                        <div class='card-back-price'>
                            2499.00 Dhs
                        </div>
                    </div>
                </div>
            </div >

            <div class="pricing-card-container">
                <div class="flip-card-inner">
                    <div class="pricing-card-front">
                        <div>Vitrine</div>
                    </div>

                    <div class="pricing-card-back">
                        <div class='card-back-price'>
                            2499.00 Dhs
                        </div>

                    </div>
                </div>
            </div >


            <div class="pricing-card-container">
                <div class="flip-card-inner">
                    <div class="pricing-card-front">
                            
                            <div>+</div>
                            <div>Nom De Domaine</div>
                    </div>

                    <div class="pricing-card-back">
                         <div class='card-back-price'>
                            2699.00 Dhs
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        `
        return html;
}
