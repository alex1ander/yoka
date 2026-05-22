<section id="days" class="section-container bg-image-container">

    <img class="bg-image  pos-bottom" src="./assets/images/bg-days.png" alt="">
    <div class="container bg-image-container">

        <div class="title-block">
            <h3><span class="blue-text">The 7-Day</span> Testing Law</h3>
            <p class="tt-none opacity-1">A one-week testing period is the absolute law of performance marketing. As CPA drops, sales scale indefinitely.</p>
        </div>

        <div class="content">
            <div class="days-wrapper">
                <?php for($i = 0;$i < 14; $i++): ?>
                <div class="day">
                    <div class="info">
                        <div class="row">
                            <span class="label">Sales:</span>
                            <span class="value green">$120</span>
                        </div>
                        <div class="row">
                            <span class="label">CPA:</span>
                            <span class="value">$15.50</span>
                        </div>
                    </div>
                    <div class="date">
                        <span class="numer"><?= $i + 1?></span>
                        <div class="text">day</div>
                    </div>
                </div>
                <?php endfor; ?>
            </div>

            <div class="days-progress">
    <div class="days-progress__line"></div>
    <div class="days-progress__fill"></div>
</div>

        </div>
    </div>
</section>
<script src="./assets/scripts/days.js"></script>



