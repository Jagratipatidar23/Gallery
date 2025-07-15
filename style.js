const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;

galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    openLightbox(img.src);
  });
});

function openLightbox(src) {
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
}

function filterImages(category) {
  galleryItems.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}