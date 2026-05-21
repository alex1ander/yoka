<section id="core-expertise" class="section-container">

    <div class="container container-full bg-image-container container-p0">

        <div class="title-block">
            <h2>CORE EXPERTISE</h2>
            <p>PRECISION ENGINEERED</p>
        </div>

        <div class="content">

            <div class="place-for-slider">
                
                <div class="swiper ce-swiper">
                    <div class="swiper-wrapper">


                        <?php for($i=0; $i<5; $i++) : ?>
                        <div class="swiper-slide">
                        <div class="card-service">

                            <div class="layer-bg">
                                <img class="desktop" src="./assets/images/bg-<?= ($i % 3) + 1 ?>.png" alt="">
                                <img class="mobile" src="./assets/images/bgm-<?= ($i % 3) + 1 ?>.png" alt="">
                            </div>

                            <div class="card-content">
                                <div class="card-icon">
                                    <svg width="32" height="32">
                                        <use href="#calendar"></use>
                                    </svg>
                                </div>

                                <h3>Web Development</h3>
                                <p>High-performance scalable ecosystems & enterprise solutions</p>

                                <div class="tags">
                                    <span class="tag">Learn More</span>
                                    <span class="tag">See More</span>
                                </div>
                            </div>

                        </div>
                    </div>
                        <?php endfor; ?>


                    </div>
                </div>

                <div class="place-for-pagination">
                    <div class="swiper-pagination ce-pagination"></div>
                </div>

            </div>

            <div class="place-for-btn">
                <a href="#" class="btn btn--blue btn-hover">
                    Discus the project 
                    <svg width="24" height="24">
                        <use href="#play"></use>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>
<script src="./assets/scripts/ce-sliders.js"></script>