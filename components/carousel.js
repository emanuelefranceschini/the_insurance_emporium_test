import '../utils/flickity.pkgd.min.js'
import '../utils/flickity.js'

// Reusable Carousel Component
class Carousel extends HTMLElement {
  constructor() {
    super()
    this._content = []
  }

  updateContent() {
    this.innerHTML = `<div class='carousel'>
        ${this._content
          .map(
            (slide) => `
          <div style='background: url(${slide.img});' class='slide'>
            <div class='slide-content-wrapper'>
              <div class='slide-content'>
                <pre class='title'>${slide.preTitle}</pre>
                <pre class='text'>${slide.preText}</pre>
                <button>${slide.button}</button>
              </div>
            </div>
          </div>
              `
          )
          .join('')}
      </div>
    `

    const flkty = new Flickity('.carousel', {
      autoPlay: 5000,
      selectedAttraction: 0.015,
      friction: 0.22,
      wrapAround: true,
      prevNextButtons: false,
      bgLazyLoad: true
    })
  }

  get content() {
    return this._content
  }

  set content(content) {
    this._content = content
    this.updateContent()
  }
}

export default Carousel
