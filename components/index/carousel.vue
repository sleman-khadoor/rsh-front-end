<template>
    <div class="h-100">
        <div id="carouselExampleCaptions" class="carousel slide p-0 h-100"  data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" class="active" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" class="rounded-8" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" class="rounded-8" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner rounded-4 h-100">
            <div class="carousel-item h-100 active">
            <img src="@/assets/img/new.png" class="d-block w-100" alt="..." width="400" height="448">
            <div class="carousel-caption d-block  text-start">
                <span class="font-large ff-meduim">First slide label</span>
                <p class="font-small ff-regular">Some representative placeholder content for the first slide.</p>
            </div>
            </div>
            <div class="carousel-item h-100">
            <img src="@/assets/img/new.png" class="d-block w-100" alt="..." width="400" height="448">
            <div class="carousel-caption d-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
            </div>
            <div class="carousel-item h-100">
            <img src="@/assets/img/new.png" class="d-block w-100" alt="..." width="400" height="448">
            <div class="carousel-caption d-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
<style scoped>
.carousel-item {
      position: relative;
}
.carousel-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Black with 0.75 opacity */
}
.carousel-item img {
    width: 100%;
    /* height: auto; */
    object-fit: cover; /* Ensures the image covers the entire area */
}
.carousel-inner {
    position: relative; /* Ensure the overlay covers the entire carousel */
}
</style>