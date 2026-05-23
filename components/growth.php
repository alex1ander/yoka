<section id="growth" class="section-container bg-image-container">
     <img class="bg-image figure" src="./assets/images/bg-growth.png" alt="">



    <div class="container bg-image-container">
        <div class="title-block">
            <h2>Proven Growth Trajectories</h2>
            <p class="tt-none">Properly executed campaigns multiply revenue by at least 2x</p>
        </div>
    </div>

    <div class="container container-full bg-image-container container-p0">
        <div class="content">

            <div class="place-for-slider anim-place">
                
                <div class="swiper growth-swiper">
                    <div class="swiper-wrapper">
                        <!--                         
                            <div class="card-software">
                                <img class="bg-image figure" src="./assets/images/bg-software.png" alt="">

                                <div class="content-card">
                                    <span class="big-numer">2.5<span class="small-text">x</span></span>
                                    <span class="big-text">GROWTH</span>
                                </div>
                            </div> -->
                        <?php for($i=0; $i< 4; $i++): ?>


                            <div class="swiper-slide">
                                <div class="card-image">
                                    <img src="./assets/images/card-growth-1.png" alt="">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="card-image">
                                    <img src="./assets/images/card-growth-2.png" alt="">
                                </div>
                            </div>


                        <?php endfor; ?>
                    </div>

                    <div class="growth-swiper-button-prev round-btn cp glass-effect">
                        <svg width="24" height="24">
                            <use href="#arrow-right"></use>
                        </svg>
                    </div>
                    <div class="growth-swiper-button-next round-btn cp glass-effect next-button">
                        <svg width="24" height="24">
                            <use href="#arrow-right"></use>
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
<script src="./assets/scripts/growth.js"></script>



