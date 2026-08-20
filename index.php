<?php

require __DIR__ . '/Views/layout/header.php';

?>


<!-- ===================================================== HERO ====================================================== -->
<section class="hero"> <!-- Decorative horizontal line -->
    <div class="hero-line" id="heroLine"></div> <!-- Decorative circles -->
    <div class="hero-circle" id="heroCircle">
        <div class="hero-circle-inner"></div>
    </div> <!-- Location -->
    <div class="hero-location" id="heroLocation"> Kolkata — 22.57° N </div> <!-- Main Hero -->
    <div class="hero-content">
        <h1 class="hero-title"> <span class="hero-word"> <span class="hero-word-inner" id="heroWord1"> CITY </span> </span> <span class="hero-word"> <span class="hero-word-inner" id="heroWord2"> EXPLORER </span> </span> </h1> <!-- CTA -->
        <div class="hero-cta" id="heroCTA"> <a href="#destinations" class="explore-button"> Explore the city <span class="explore-arrow"> → </span> </a> </div>
    </div> <!-- Description -->
    <div class="hero-description" id="heroDescription"> Discover places worth remembering. Explore cities through their streets, people, food and stories. </div> <!-- Scroll indicator -->
    <div class="scroll-indicator" id="scrollIndicator"> <span class="scroll-line"></span> Scroll to explore </div>
</section> <!-- ===================================================== INTRO SECTION ====================================================== -->
<section class="section intro-section" id="destinations">
    <div class="section-container">
        <div class="intro-grid"> <!-- LEFT -->
            <div>
                <div class="section-number"> 01 — DISCOVER </div>
                <h2 class="section-title"> Cities have stories. </h2>
            </div> <!-- RIGHT -->
            <div class="intro-content">
                <p class="section-text"> Every city has its own rhythm. From hidden cafés and old streets to crowded markets and quiet corners, there is always something waiting to be discovered. </p>
                <div class="mt-10"> <a href="#" class="explore-button"> Start exploring <span class="explore-arrow"> → </span> </a> </div>
            </div>
        </div>
    </div>
</section> <!-- ===================================================== CITY CARDS ====================================================== -->
<section class="cities-section">
    <div class="cities-grid"> <!-- KOLKATA --> <a href="#" class="city-card group">
            <div class="city-graphic">
                <div class="city-circle"></div>
                <div class="city-circle-small"></div>
            </div>
            <div class="city-card-content">
                <div class="city-card-number"> 01 </div>
                <div class="city-card-title"> Kolkata </div>
            </div>
        </a> <!-- MUMBAI --> <a href="#" class="city-card group">
            <div class="city-graphic">
                <div class="city-circle"></div>
                <div class="city-circle-small"></div>
            </div>
            <div class="city-card-content">
                <div class="city-card-number"> 02 </div>
                <div class="city-card-title"> Mumbai </div>
            </div>
        </a> <!-- DELHI --> <a href="#" class="city-card group">
            <div class="city-graphic">
                <div class="city-circle"></div>
                <div class="city-circle-small"></div>
            </div>
            <div class="city-card-content">
                <div class="city-card-number"> 03 </div>
                <div class="city-card-title"> Delhi </div>
            </div>
        </a> </div>
</section> <!-- ===================================================== FINAL CTA ====================================================== -->
<section class="final-section">
    <div class="final-container">
        <div class="final-label"> 02 — YOUR NEXT JOURNEY </div>
        <h2 class="final-title"> Where will you go? </h2>
        <div class="final-link-wrapper"> <a href="#" class="final-link"> Explore destinations <span> → </span> </a> </div>
    </div>
</section>












<?php

require __DIR__ . '/Views/layout/footer.php';

?>