import Carousel from './components/carousel.js';
import { slides } from './data/slides.js'

customElements.define('custom-carousel', Carousel)
document.querySelector('custom-carousel').content = slides