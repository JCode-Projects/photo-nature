import UserInterface from './classes/UserInterface.js';
import { allPhotosContainer, galleryContainer } from './selectors.js';
const UI = new UserInterface();

window.onload = () => {
    allPhotosContainer ? UI.getImages() : galleryContainer ? UI.getImages(6) : null;
}