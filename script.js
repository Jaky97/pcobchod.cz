document.addEventListener("DOMContentLoaded", () => {
    // Vybere úplně všechny img a iframe, které mají data-src
    const lazyMedia = document.querySelectorAll("img[data-src], iframe[data-src]");

    const mediaObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const media = entry.target;
                // Přehodí data-src do klasického src, čímž se médium načte
                media.src = media.dataset.src; 
                observer.unobserve(media); // Přestane prvek sledovat
            }
        });
    });

    lazyMedia.forEach(media => mediaObserver.observe(media));
});

// Kód pro animaci při skrolu
const containers = document.querySelectorAll('.infobox, .infobox2, .VDF, .RMB');

const appearanceObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Animuje se to jen jednou
        }
    });
}, {
    threshold: 0.15 // Spustí se, když je 15 % kontejneru vidět na obrazovce
});

containers.forEach(container => appearanceObserver.observe(container));