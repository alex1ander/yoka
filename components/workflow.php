<section id="workflow" class="section-container bg-image-container">

    <div class="container container-full bg-image-container container-p0">

        <div class="title-block">
            <h3>THE <span class="blue-text">CREATIVE</span> WORKFLOW</h3>
        </div>

            <div class="workflow-wrapper">

                <div class="cards-wrapper">
                    <?php for($i = 0; $i < 3; $i++): ?>
                        <div class="card-wrapper">
                        <div class="workflow-card">
                            <div class="image-wrapper">
                                <img src="./assets/images/workflow-1.png" alt="">
                            </div>
                            <div class="text-wrapper">
                                <h4>Analyze Product Touchpoints</h4>
                                <ul>
                                    <li class="text">Core features mapped</li>
                                    <li class="text">Value proposition defined</li>
                                    <li class="text">Competitor blind spots isolated</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="card-wrapper">
                        <div class="workflow-card">
                            <div class="image-wrapper">
                                <img src="./assets/images/workflow-2.png" alt="">
                            </div>
                            <div class="text-wrapper">
                                <h4>Analyze Product Touchpoints</h4>
                                <p class="text">We map the exact pain points of your target audience and transform them into visual triggers that drive action</p>
                            </div>
                        </div>
                    </div>
                    <?php endfor; ?>
                </div>

                <div class="timeline-wrapper">
                    <?php for($i = 0; $i < 30; $i++): ?>
                        <div class="time-block">
                            <div class="minute-line"><span class="minute-numer"><?= $i > 0 ? $i . ' min' : '' ?></span></div>
                            <div class="line"></div>
                            <div class="line"></div>
                            <div></div>
                        </div>
                    <?php endfor; ?>
                </div>


                <div class="player-line">
                    <svg width="14" height="22">
                        <use href="#reck"></use>
                    </svg>
                </div>
            </div>

    </div>

    <div class="place-for-btn">
        <a href="#" class="btn btn--blue btn-hover">
           DISCUSS YOUR CAMPAIGN
        </a>
    </div>
</section>
<script src="./assets/scripts/workflow.js"></script>



