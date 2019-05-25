import ImageService from "./ImageService.js";

//Private
const _imageService = new ImageService();

function _drawImage() {
  let image = _imageService.Image
  document.getElementById("bg-image").setAttribute('background', image.Template)
}

// function _drawApod() {
//   // 1. get the information
//   let apod = _apodService.Apod
//   // 2. render info to the dom
//   document.querySelector('#apod-data').innerHTML = apod.Template
//   document.querySelector('.apod-bg').style.backgroundImage = `url('${apod.img}')`
// }






//Public
export default class ImageController {
  constructor() {
    _imageService.addSubscriber('images', _drawImage)
    _imageService.getImage()
  }

}

