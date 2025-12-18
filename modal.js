// src/scripts/modal.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalPanel = document.getElementById('modal-panel');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Elementy v modalu
    const mImageContainer = document.getElementById('modal-image-container');
    const mTitle = document.getElementById('modal-title');
    const mCategory = document.getElementById('modal-category');
    const mDesc = document.getElementById('modal-desc');
    const mPrev = document.getElementById('prev-image');
    const mNext = document.getElementById('next-image');
    const mCurrentIdx = document.getElementById('current-index');
    const mTotalImg = document.getElementById('total-images');

    let currentGallery = [];
    let currentImageIndex = 0;

    function openModal(data) {
        // Naplnění daty
        mTitle.textContent = data.title;
        mCategory.textContent = data.category;
        mDesc.textContent = data.fullDesc;
        
        // Galerie
        currentGallery = data.gallery && data.gallery.length > 0 ? data.gallery : [data.mainImage];
        currentImageIndex = 0;
        updateGalleryImage();

        // Zobrazení modalu
        modal.classList.remove('hidden');
        // Timeout pro animaci
        setTimeout(() => {
            modalBackdrop.classList.remove('opacity-0');
            modalPanel.classList.remove('opacity-0', 'scale-95');
        }, 10);
        document.body.style.overflow = 'hidden'; // Zamezí scrollování stránky
    }

    function closeModal() {
        modalBackdrop.classList.add('opacity-0');
        modalPanel.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    }

    function updateGalleryImage() {
        mImageContainer.style.backgroundImage = `url('${currentGallery[currentImageIndex]}')`;
        mCurrentIdx.textContent = currentImageIndex + 1;
        mTotalImg.textContent = currentGallery.length;
        
        // Skrytí šipek pokud je jen jedna fotka
        if(currentGallery.length <= 1) {
            mPrev.classList.add('hidden');
            mNext.classList.add('hidden');
        } else {
            mPrev.classList.remove('hidden');
            mNext.classList.remove('hidden');
        }
    }

    // Event Listenery pro karty
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const data = JSON.parse(card.dataset.project);
            openModal(data);
        });
    });

    // Event Listenery pro Modal
    if(closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if(modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    
    // Klávesa ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
        // Šipky pro galerii
        if (!modal.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });

    // Galerie navigace
    function showPrevImage(e) {
        if(e) e.stopPropagation();
        if(currentGallery.length > 1) {
            currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
            updateGalleryImage();
        }
    }
    function showNextImage(e) {
        if(e) e.stopPropagation();
        if(currentGallery.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
            updateGalleryImage();
        }
    }

    if(mPrev) mPrev.addEventListener('click', showPrevImage);
    if(mNext) mNext.addEventListener('click', showNextImage);
});