// Chronos - Minimalist Watch Storefront

const watches = [
  {
    name: "Obsidian",
    image: "../src/assets/images/black watch.webp",
    alt: "Black Watch",
    description: "Bold, minimalist black timepiece with Swiss movement.",
  },
  {
    name: "Marble",
    image: "../src/assets/images/white watch.webp",
    alt: "White Watch",
    description: "Elegant, clean white watch for timeless sophistication.",
  },
];

const offerWatches = document.getElementById("offerWatches");

document.addEventListener("DOMContentLoaded", function () {
  renderWatches();
  updateLogoForTheme();
});

function renderWatches() {
  if (!offerWatches) return;
  offerWatches.innerHTML = watches
    .map(
      (watch) => `
    <div class="product-card">
      <div class="product-image">
        <img src="${watch.image}" alt="${watch.alt}" />
      </div>
      <div class="product-info">
        <h3 class="product-title">${watch.name}</h3>
        <p class="product-desc">${watch.description}</p>
      </div>
    </div>
  `
    )
    .join("");
}

function updateLogoForTheme() {
  const isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const logoImg = document.getElementById("logo-img");
  const ogMeta = document.getElementById("og-image-meta");
  const twitterMeta = document.getElementById("twitter-image-meta");
  const darkLogo = "../src/assets/images/Dark Chronos Logo.webp";
  const lightLogo = "../src/assets/images/Light Chronos Logo.webp";
  const logoToUse = isDark ? lightLogo : darkLogo;
  if (logoImg) logoImg.src = logoToUse;
  if (ogMeta) ogMeta.setAttribute("content", logoToUse);
  if (twitterMeta) twitterMeta.setAttribute("content", logoToUse);
}
