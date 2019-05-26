import QuoteService from "./QuoteService.js";


//Private
let _quoteService = new QuoteService()

function _drawQuote() {
  let quote = _quoteService.Quote
  document.getElementById('quote').innerHTML = quote.Template
}

function _mouseOver(event) {
  let quote = _quoteService.Quote
  document.getElementById('quote').innerHTML = quote.Author
}





//Public
export default class QuoteController {
  constructor() {
    _quoteService.addSubscriber("quotes", _drawQuote)
    _quoteService.getQuote()
  }

}
