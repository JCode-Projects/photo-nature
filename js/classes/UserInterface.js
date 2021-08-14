import { galleryContainer, body } from '../selectors.js';

export default class UserInterface {
    async getImages(limit = null) {
        try {
            const images = await fetch("/data.json");
            this.addImagesHTML(await images.json(), limit);
        } catch (error) {
            console.log(error);
        }
    }

    addImagesHTML(data, limit) {
        let i = 1;
        for(let image of data) {
            const { jpg, webp, title, description } = image;

            const imageDiv = document.createElement('div');
            imageDiv.classList.add('gallery__photo');
            imageDiv.dataset.cy = 'image';
            imageDiv.innerHTML = `
                <div class="gallery__photo__image">
                    <picture>
                        <source srcset="${webp}" type="image/webp">
                        <source srcset="${jpg}" type="image/jpeg">
                        <img src="${webp}" alt="${title}" loading="lazy">
                    </picture>
                </div>
                <div class="gallery__photo__info">
                    <h2>${title}</h2>
                    <p>${description}</p>
                    <a data-cy="show-image" href="#">See More</a>
                </div>
            `;

            imageDiv.querySelector("a").addEventListener('click', e => this.modalImage(e, image));

            galleryContainer.appendChild(imageDiv);

            if(limit && limit == i) break;
            i++;
        }
    }

    modalImage(e, { jpg, webp, title, description }) {
        e.preventDefault();
        const modalDiv = document.createElement("div");
        modalDiv.classList.add('modal-image');

        modalDiv.innerHTML = `
            <div class="modal-image__container container">
                <h2>${title}</h2>
                <picture>
                    <source srcset="${webp}" type="image/webp">
                    <source srcset="${jpg}" type="image/jpeg">
                    <img src="${webp}" alt="${title}">
                </picture>
                <p>${description}</p>
                <a data-cy="hidden-image" href="#">Cerrar</a>
            </div>
        `;

        modalDiv.querySelector('a').addEventListener('click', e => {
            e.preventDefault();
            modalDiv.classList.add('hide');

            setTimeout(() => {
                modalDiv.remove();
            }, 500);
        })

        body.appendChild(modalDiv);
    }
}