// Reusable Carousel Component
class Carousel extends HTMLElement {
  constructor() {
    super()
    this._content = []
  }

  updateContent() {}

  get content() {
    return this._content
  }

  set content(content) {
    this._content = content
    this.updateContent()
  }
}

export default Carousel