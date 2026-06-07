# Ročníková práce: Webová prezentace PcObchod

Komplexní, plně optimalizovaná webová prezentace pro lokální IT servis a prodejnu PcObchod (pobočky Varnsdorf a Rumburk). Projekt je zaměřen na prezentaci poskytovaných služeb (Apple servis, Android servis, IT servis, EET pokladny) a splňuje přísná kritéria moderního, přístupného a rychlého webu bez použití jakýchkoliv cizích knihoven či frameworků.

* **Autor:** Jakub Petřík
* **Předmět:** Webové technologie (2. ročník)
* **Živá ukázka (GitHub Pages):** [https://jaky97.github.io/pcobchod.cz/](https://jaky97.github.io/pcobchod.cz/)

---

## 1. Technické specifikace

* **Základní technologie:** Čisté HTML5, CSS3 a Vanilla JavaScript (ES6+).
* **Nástroje a IDE:** Visual Studio Code.
* **Omezení:** V projektu nebyly použity žádné JavaScriptové frameworky (React, Vue) ani CSS frameworky (Bootstrap, Tailwind). Veškeré rozvržení a interaktivita jsou napsány „pod kapotou“.
* **AI Asistence:** Projekt vznikal za podpory AI modelů. **Claude** byl využit jako primární nástroj pro technické úpravy, generování pokročilejších JS struktur a optimalizaci kódu. **Gemini** sloužil pro veškerou konzultaci, revizi architektury a závěrečnou kontrolu standardů.

---

## 2. Adresářová struktura

```plaintext
├── images/                   # Složka s optimalizovanými grafickými podklady
│   ├── logo_new.webp
│   ├── service-apple.webp
│   ├── service-android.webp
│   ├── servis_new.webp
│   ├── eet.webp
│   ├── vdf_prodejna.webp
│   ├── rbk_prodejna.webp
│   └── favicon.ico
├── fonts/                    # Lokálně stažené fonty pro zajištění soukromí a rychlosti
│   └── Oswald-VariableFont_wght.ttf
├── index.html                # Hlavní sémantická stránka prezentace
├── style.css                 # Kompletní stylování s Media Queries (Mobile First)
├── script.js                 # Logika pro asynchronní načítání a scroll animace
└── README.md                 # Tato technická dokumentace

```

3. Technický rozbor & Oblasti optimalizace
Výkon (Performance)
Teoretický popis: Výkon webu je maximalizován kompletním převedením všech obrázků do moderního úsporného formátu .webp. Dále byl implementován pokročilý asynchronní Lazy Loading nejen pro obrázky, ale také pro náročné mapové iframe prvky Google Map. Místo klasického atributu src se využívá data-src, který JS načte až ve chvíli, kdy uživatel na dané místo reálně doscrolluje. Tím se drasticky snížil počet úvodních HTTP požadavků.

Kódový výstřižek (Asynchronní lazy loading v JavaScriptu):
```
document.addEventListener("DOMContentLoaded", () => {
    const lazyMedia = document.querySelectorAll("img[data-src], iframe[data-src]");

    const mediaObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const media = entry.target;
                media.src = media.dataset.src; // Přehodí data-src do klasického src
                observer.unobserve(media);     // Přestane prvek sledovat
            }
        });
    });

    lazyMedia.forEach(media => mediaObserver.observe(media));
});
```

SEO (Search Engine Optimization)
Teoretický popis: Stránka obsahuje validní HTML5 kód a plnou sémantickou strukturu. V hlavičce webu jsou nastaveny klíčové meta tagy (description, keywords, robots), definice autora a kanonická URL adresa (canonical), která zabraňuje penalizaci za duplicitu obsahu. Nadpisy striktně dodržují hierarchii <h1> a <h2>. Obrázky obsahují popisné atributy alt.

Kódový výstřižek (SEO hlavička v index.html):

```
<meta name="description" content="PcObchod - servis Apple, Android, IT a EET pokladny ve Varnsdorfu a Rumburku.">
<meta name="keywords" content="servis telefonu, apple servis, android servis, IT servis, EET pokladny, Varnsdorf, Rumburk">
<meta name="author" content="PcObchod">
<meta name="robots" content="index, follow">
<link rel="canonical" href="[https://jaky97.github.io/pcobchod.cz/](https://jaky97.github.io/pcobchod.cz/)">
```

Přístupnost (Accessibility)
Teoretický popis: Web je navržen tak, aby splňoval základní standardy WCAG. Použitý font Oswald je dostatečně čitelný a velikosti písem jsou nastaveny responzivně pomocí jednotek em. Barevné schéma (červená, šedá, bílá) zaručuje vysoký kontrast textu vůči pozadí, což usnadňuje čtení slabozrakým lidem. Všechny obrázky mají vyplněný alternativní text pro čtečky obrazovky.

Kódový výstřižek (Definice barevných proměnných pro vysoký kontrast v CSS):

```
:root {
    --main: linear-gradient(to bottom right, rgb(255, 0, 0), rgb(135, 45, 45));
    --main2: rgb(240, 240, 240);
    --secondary: rgb(68, 68, 68);
    --bg: rgb(235, 235, 235);
    --txt: rgb(0, 0, 0);  
}
```

Sociální sítě (Open Graph & Twitter Cards)
Teoretický popis: Do hlavičky webu byly integrované Open Graph meta tagy pro sociální sítě jako Facebook či LinkedIn a také specifické tagy pro Twitter Cards. Při sdílení odkazu na sociálních sítích se tak automaticky vygeneruje vizuálně atraktivní karta s logem firmy, správným titulkem a popisem služeb.

Kódový výstřižek (Open Graph integrace):

```
<meta property="og:title" content="PcObchod - servis a opravy">
<meta property="og:description" content="Specializujeme se na opravy telefonů, počítačů a EET pokladny.">
<meta property="og:image" content="images/logo_new.webp">
<meta property="og:url" content="[https://jaky97.github.io/pcobchod.cz](https://jaky97.github.io/pcobchod.cz)">
<meta property="og:type" content="website">
```

UI/UX & Responzivní design
Teoretický popis: Rozvržení webu (layout) plně využívá moderní CSS Flexbox s vlastnostmi jako flex-direction: column pro mobilní zobrazení a flex-direction: row pro desktopy. Web je plně responzivní. Na mobilních zařízeních (do 768px) se dvousloupcový layout automaticky skládá pod sebe, zmenšuje se logo a velikost písma, aby byl web na mobilu maximálně intuitivní a pohodlně ovladatelný.

Kódový výstřižek (Media Query zajišťující responzivitu):

```
@media (max-width: 768px) {
    .info { width: 100%; padding: 0 10px; }
    .infobox, .infobox2 { flex-direction: column; align-items: center; text-align: center; }
    .location { width: 100%; flex-direction: column; align-items: center; padding: 0 10px; }
    #logo { width: 40%; }
    .txt { font-size: 1.2em; }
}
```

AI Integrace & Dynamické prvky
Teoretický popis: Za pomoci AI byl navržen a implementován skript využívající IntersectionObserver pro plynulé animace. Prvky služeb a poboček jsou při načtení stránky skryté (mají nulové opacity a jsou posunuté dolů). Jakmile uživatel na stránce dojede k danému prvku, JavaScript mu přidá třídu .show, čímž se spustí plynulá CSS transformace.

Kódový výstřižek (Scroll animace vyvinutá s AI)

```
const containers = document.querySelectorAll('.infobox, .infobox2, .VDF, .RMB');

const appearanceObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Animuje se to pouze jednou
        }
    });
}, {
    threshold: 0.15 // Spustí se při 15% viditelnosti prvku
});

containers.forEach(container => appearanceObserver.observe(container));
```

4. AI Deník (Záznam vývoje)
Během vývoje byly kombinovány dva AI modely, což vedlo k efektivnímu a čistému kódu.

Fáze 1: Technické úpravy a optimalizace (Claude)
Použitý prompt: „Mám napsaný HTML základ pro web servisu elektroniky. Potřebuji vytvořit čistý JavaScript, který zajistí asynchronní lazy loading pro obrázky a Google Maps iframy až ve chvíli, kdy na ně uživatel narazí. Zároveň chci, aby se boxy se službami plynule objevily (fade-in efekt ze zdola) při scrollování a animovaly se jen jednou. Nepoužívej žádné knihovny, pouze čisté API prohlížeče.“

Přínos: Claude vygeneroval optimální řešení pomocí IntersectionObserver pro obě úlohy a navrhl správné CSS třídy pro počáteční a koncový stav animace (.show).

Fáze 2: Konzultace a kontrola standardů (Gemini)
Použitý prompt: „Zkontroluj prosím moji hlavičku index.html a CSS styly z hlediska SEO standardů, Open Graph protokolů a přístupnosti. Obsahuje kód vše potřebné pro ročníkovou práci zaměřenou na moderní webové technologie? Pokud ne, navrhni chybějící meta tagy.“

Přínos: Gemini zkontroloval kompletní sémantiku hlavičky, potvrdil správnost použití canonical odkazu a doporučil správné strukturování barevných proměnných v :root pro dodržení kontrastu
