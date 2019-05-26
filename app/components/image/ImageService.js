import Image from "../../models/Image.js";

// @ts-ignore
//Private

const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	images: []
}

let _subscribers = {
	images: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}


//Public
export default class ImageService {

	get Image() {
		return new Image(_state.images)
	}

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	getImage() {
		imgApi.get()
			.then(res => {
				let data = new Image(res.data)
				_setState('images', data)
			})
		//.catch(err => console.log(err))
	}

}
