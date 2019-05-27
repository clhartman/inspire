export default class Quote {
  constructor(data) {
    this.body = data.body || data.quote.body
    this.author = data.author || data.quote.author
  }

  get Template() {
    return `
    <p>${this.body} ~ ${this.author}</p>
    `
  }

  get Author() {
    return `
    <p>${this.author}</p>
    `
  }
}