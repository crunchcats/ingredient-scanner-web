const translations = {
  en: {
    metaTitle: "Bloodsugar Guide",
    metaDescription:
      "Bloodsugar Guide helps you check food labels for sweeteners that may affect blood sugar.",
    language: "Language",
    downloadOptions: "Download options",
    appPreview: "App preview",
    appName: "Bloodsugar Guide",
    heroTitle: "Point at the ingredients list.",
    heroText:
      "Scan a food label and see whether the ingredients include sweeteners that may affect blood sugar.",
    iosCta: "iOS coming soon",
    androidCta: "Android coming soon",
    mockBrand: "Bloodsugar Guide",
    mockTitle: "Point at ingredients list",
    mockLabelTitle: "Ingredients",
    mockLabelLineOne: "Oats",
    mockLabelLineTwo: "Salt",
    mockLabelLineThree: "Natural flavor",
    mockLabelLineFour: "Sweetener",
    mockStatus: "Scanning ingredients list...",
    mockVerdict: "Great choice",
    mockVerdictText:
      "This product is unlikely to cause a large blood sugar spike.",
    mockImpact: "Glucose impact",
    mockHigh: "High",
    mockModerate: "Moderate",
    mockLow: "Low",
    howKicker: "How it works",
    howTitle: "A quick check while you shop.",
    stepOneTitle: "Open the scanner",
    stepOneText:
      "The camera starts right away, so there is no scan button to find.",
    stepTwoTitle: "Point at ingredients",
    stepTwoText:
      "Hold the label in good light and keep the text inside the frame.",
    stepThreeTitle: "Check the result",
    stepThreeText:
      "The app shows a simple glucose impact bar with more detail available.",
    downloadKicker: "Download",
    downloadTitle: "Install on your phone.",
    iosTitle: "iPhone",
    iosText:
      "When the iOS version is available, open the App Store or TestFlight link on your iPhone, install the app, then allow camera access.",
    iosLink: "iOS download coming soon",
    androidTitle: "Android",
    androidText:
      "When the Android version is available, open the Play Store or APK link on your phone, install the app, then allow camera access.",
    androidLink: "Android download coming soon",
  },
  da: {
    metaTitle: "Blodsukker Guiden",
    metaDescription:
      "Blodsukker Guiden hjælper dig med at tjekke varedeklarationer for sødestoffer, der kan påvirke blodsukkeret.",
    language: "Sprog",
    downloadOptions: "Downloadmuligheder",
    appPreview: "Forhåndsvisning af appen",
    appName: "Blodsukker Guiden",
    heroTitle: "Peg på ingredienslisten.",
    heroText:
      "Scan en varedeklaration og se, om ingredienserne indeholder sødestoffer, der kan påvirke blodsukkeret.",
    iosCta: "iOS kommer snart",
    androidCta: "Android kommer snart",
    mockBrand: "Blodsukker Guiden",
    mockTitle: "Peg på ingredienslisten",
    mockLabelTitle: "Ingredienser",
    mockLabelLineOne: "Havre",
    mockLabelLineTwo: "Salt",
    mockLabelLineThree: "Naturlig aroma",
    mockLabelLineFour: "Sødestof",
    mockStatus: "Scanner ingredienslisten...",
    mockVerdict: "Godt valg",
    mockVerdictText:
      "Produktet giver sandsynligvis ikke en stor stigning i blodsukkeret.",
    mockImpact: "Påvirkning af blodsukker",
    mockHigh: "Høj",
    mockModerate: "Moderat",
    mockLow: "Lav",
    howKicker: "Sådan virker det",
    howTitle: "Et hurtigt tjek, mens du handler.",
    stepOneTitle: "Åbn scanneren",
    stepOneText:
      "Kameraet starter med det samme, så du skal ikke lede efter en scan-knap.",
    stepTwoTitle: "Peg på ingredienserne",
    stepTwoText:
      "Hold etiketten i godt lys, og sørg for at teksten er inden for rammen.",
    stepThreeTitle: "Tjek resultatet",
    stepThreeText:
      "Appen viser en enkel blodsukkerbjælke med mulighed for flere detaljer.",
    downloadKicker: "Download",
    downloadTitle: "Installer på din telefon.",
    iosTitle: "iPhone",
    iosText:
      "Når iOS-versionen er klar, åbner du App Store- eller TestFlight-linket på din iPhone, installerer appen og giver adgang til kameraet.",
    iosLink: "iOS-download kommer snart",
    androidTitle: "Android",
    androidText:
      "Når Android-versionen er klar, åbner du Play Store- eller APK-linket på din telefon, installerer appen og giver adgang til kameraet.",
    androidLink: "Android-download kommer snart",
  },
};

const savedLanguage = localStorage.getItem("preferredLanguage");
const browserLanguage = navigator.language.toLowerCase().startsWith("da")
  ? "da"
  : "en";
const initialLanguage = savedLanguage || browserLanguage;

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language;
  document.title = dictionary.metaTitle;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria");
    element.setAttribute("aria-label", dictionary[key]);
  });

  document.querySelectorAll("[data-lang-choice]").forEach((button) => {
    const isActive = button.getAttribute("data-lang-choice") === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("preferredLanguage", language);
}

document.querySelectorAll("[data-lang-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.getAttribute("data-lang-choice"));
  });
});

applyLanguage(initialLanguage);
