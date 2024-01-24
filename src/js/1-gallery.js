import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    title: 'Hokkaido Flower',
    description: 'A field of beautiful pink flowers in Hokkaido, Japan.',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    title: 'Container Haulage Freight',
    description: 'A cargo ship carrying a large container.',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    title: 'Aerial Beach View',
    description: 'A beautiful beach viewed from above.',
  },
];

const galleryContainer = document.querySelector('.gallery');

function createGallery() {
  const galleryItems = images.map(image => {
    const li = document.createElement('li');
    li.classList.add('gallery-item');

    const a = document.createElement('a');
    a.classList.add('gallery-link');
    a.href = image.original;

    const img = document.createElement('img');
    img.classList.add('gallery-image');
    img.src = image.preview;
    img.alt = image.description;

    const details = document.createElement('div');
    details.classList.add('gallery-image-details');

    const title = document.createElement('h4');
    title.textContent = image.title;

    const description = document.createElement('p');
    description.textContent = image.description;

    details.appendChild(title);
    details.appendChild(description);

    a.appendChild(img);
    a.appendChild(details);
    li.appendChild(a);
    return li;
  });

  const galleryFragment = document.createDocumentFragment();
  galleryItems.forEach(item => {
    galleryFragment.appendChild(item);
  });

  galleryContainer.appendChild(galleryFragment);
}

createGallery();

SimpleLightbox.init({
  captionsFromAlt: true,
});
