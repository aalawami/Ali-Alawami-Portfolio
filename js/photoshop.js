document.getElementById('main-portfolio').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        const src = event.target.getAttribute('data-src');
        const alt = event.target.getAttribute('alt');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');

        lightboxImg.src = src;
        lightboxCaption.innerHTML = alt;
        lightbox.classList.remove('hidden');
    }
});

document.getElementById('lightbox-close').addEventListener('click', function () {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
});
