import Quote from "../../models/Quote.js";

// @ts-ignore

//Private

const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quotes: []
}

let _subscribers = {
	quotes: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}




//Public

export default class QuoteService {

	get Quote() {
		return new Quote(_state.quotes)
	}

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	getQuote() {
		_quoteApi.get()
			.then(res => {
				let data = new Quote(res.data)
				_setState("quotes", data)
			})
			.catch(err => console.log(err))
	}




}
