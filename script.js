// tombol get in touch
const contactBtn = document.querySelector('.contact-btn');

if (contactBtn) {
    contactBtn.addEventListener('click', function(){
        const nomorWA = '6285748334229'; 
        
        // Pesan otomatis 
        const pesan = 'Halo Surya! Tadi sempat mampir lihat portofolio kamu, keren banget. Mau ngobrol santai nih, barangkali ada peluang kolaborasi atau project bareng. Ada waktu senggang kah?';
        
        const waUrl = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
        
        window.open(waUrl, '_blank');
    });
}

// untuk tombol resume view CV
const resumeBtn = document.querySelector('.resume-btn');

if (resumeBtn) {
    resumeBtn.addEventListener('click', function(){

        window.open('Resume/CV_AchmadSurya.pdf', '_blank');
    });
}

// btn-scrol ke atas
const backToTopBtn = document.getElementById('backToTopBtn');

if (backToTopBtn) {
    window.addEventListener ('scroll', function(){
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function(){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    });
}

