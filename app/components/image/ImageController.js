import ImageService from "./ImageService.js";

//Private
const _imageService = new ImageService();

function _drawImage() {
  let image = _imageService.Image
  document.getElementById("bg-image").setAttribute('background', image.Template)
}


//Public
export default class ImageController {
  constructor() {
    _imageService.addSubscriber('images', _drawImage)
    _imageService.getImage()
  }

}

