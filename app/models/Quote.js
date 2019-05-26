export default class Quote {
  constructor(data) {
    this.body = data.body || data.quote.body
    this.author = data.author || data.quote.author
  }

  get Template() {
    return `
    <p>${this.body}</p>
    `
  }

  get Author() {
    return `
    <p>${this.author}</p>
    `
  }
}