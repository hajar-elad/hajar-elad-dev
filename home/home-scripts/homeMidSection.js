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
        <div class="models-container">
            <div class="model-container">
                <h2 class="model-name">Site Vitrine</h2>
                <div class="model-description">
                   Un site web vitrine ou portfolio represente les produits, services et activites d une 
                   entreprise. C est le premier point de contact pour les clients.
                </div>
            </div>
            <div class="model-container">
                <h2 class="model-name">Site Catalog</h2>
                <div class="model-description">
                Un site web catalog se situe a mi-chemin entre un site vitrine et e-commerce, On 
                presente une liste de produits statics (image, description,
                caracteristiques..). 
                <div>Le site ne propose pas de paiement en ligne et la commande est 
                finalisee aupres du commer&ccedil;ant.
                </div>
            </div>
            </div>
        </div>
        
        <div class="cards-container">
           <div class="pricing-card-container">
                <div class="flip-card-inner">
                    <div class="pricing-card-front">
                        <div>Portfolio</div>
                        <div>Vitrine</div>
                    </div>

                    <div class="pricing-card-back">
                        <div class="plan-advantages">
                            <div >Design adapté à vos besoins &#10004;</div>
                            <div>100% responsive design &#10004;</div>
                            <div>Optimisation de votre positionnement web &#10004;</div>
                            <div>Ligne whatsapp incluse &#10004;</div>
                            <div>Jusqu’à 7 pages &#10004;</div>
                            <div>Categorie de produits &#10060;</div>
                            <div>System de trie par produit &#10060;</div>
                            <div>Hebergement &#10004;</div>
                            <div>Livraison entre 10 à 14 jours &#10004;</div>
                            <div>Support apres livraison &#10004;</div>
                        </div>
                        <div class='card-back-price'>
                            2199.00 Dhs
                        </div>
                    </div>
                </div>
            </div >

            <div class="pricing-card-container">
                <div class="flip-card-inner">
                    <div class="pricing-card-front">
                        <div>Catalog</div>
                    </div>

                    <div class="pricing-card-back">
                        <div class="plan-advantages">
                            <div >Design adapté à vos besoins &#10004;</div>
                            <div>100% responsive design &#10004;</div>
                            <div>Optimisation de votre positionnement web &#10004;</div>
                            <div>Ligne whatsapp incluse &#10004;</div>
                            <div>Jusqu’à 7 pages &#10004;</div>
                            <div>Categorie de produits &#10004;</div>
                            <div>System de trie par produit &#10004;</div>
                            <div>Hebergement &#10004;</div>
                            <div>Livraison entre 14 à 21 jours &#10004;</div>
                            <div>Support apres livraison &#10004;</div>
                        </div>
                        <div class='card-back-price'>
                            2699.00 Dhs
                        </div>

                    </div>
                </div>
            </div >


           <!-- <div class="pricing-card-container">
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
            </div> -->

            
        </div>
        `
        return html;
}
