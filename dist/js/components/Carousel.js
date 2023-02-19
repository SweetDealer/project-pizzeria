class Carousel {
    constructor(elem) {
        this.initCarousel(elem);
    }
    initCarousel(elem) {
         var flkty = new Flickity(elem, {
            // options
            cellAlign: 'left',
            contain: true
        });
    }
}

export default Carousel;