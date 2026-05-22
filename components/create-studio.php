<section id="create-studio" class="section-container bg-image-container">
     <img class="bg-image figure" src="./assets/images/bg-creative.png" alt="">



    <div class="container bg-image-container">
        <object class="bg-image creative" data="./assets/icons/creative.svg" type="image/svg+xml"></object>
        <div class="title-block">
            <h2>Ad Creative Studio</h2>
            <p class="tt-none">The blueprint of a successful campaign</p>
        </div>
        <div class="place-for-btn">
            <a href="#" class="btn btn--blue btn-hover">
                GET A CUSTOM PROPOSAL
            </a>

            <div class="btn-transparent">
                <span>EXPLORE FULL PORTFOLIO</span>
                <div class="circle">
                    <svg width="24" height="24">
                        <use href="#play"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <div class="container container-full bg-image-container container-p0container container-full bg-image-container container-p0">
        <div class="content">

            <div class="place-for-slider">
                
                <div class="swiper create-swiper">
                    <div class="swiper-wrapper">

                        <?php for($i=0; $i< 16; $i++): ?>
                        <div class="swiper-slide">
                            <div class="create-card">
                                <div class="image-wrapper">
                                    <img src="./assets/images/create-<?= ($i % 4) + 1;?>.png" alt="">
                                </div>
                                <span class="card-text">Healthcare</span>
                            </div>
                        </div>
                        <?php endfor; ?>

                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
<script src="./assets/scripts/create-studio.js"></script>



