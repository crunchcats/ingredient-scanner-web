// pilot.html only. Loaded after script.js, whose `translations` it reads.

// Which phone the page is open on. An iPad asking for the desktop site says it
// is a Mac, and gives itself away by having a touch screen.
const userAgent = navigator.userAgent;
const device = /Android/i.test(userAgent)
  ? "android"
  : /iPhone|iPad|iPod/i.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    ? "ios"
    : "desktop";

// styles.css shows the QR codes on a computer only; on a phone the button
// beside each one already opens the store.
document.documentElement.dataset.device = device;

const platformButtons = [...document.querySelectorAll("[data-platform-choice]")];
const platformPanels = [...document.querySelectorAll("[data-platform]")];

function showPlatform(platform) {
  platformButtons.forEach((button) => {
    const isActive = button.getAttribute("data-platform-choice") === platform;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  platformPanels.forEach((panel) => {
    panel.hidden = panel.getAttribute("data-platform") !== platform;
  });
}

platformButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showPlatform(button.getAttribute("data-platform-choice"));
  });
});

// The phone's own platform first. On a computer, the one the address names
// (pilot.html#android), else iPhone.
const namedInAddress = location.hash.slice(1).toLowerCase();
showPlatform(
  device !== "desktop"
    ? device
    : namedInAddress === "android"
      ? "android"
      : "ios",
);

// "Copy" beside a code. The label confirms for a moment, in the page's language.
document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const label = (key) =>
      (translations[document.documentElement.lang] || translations.en)[key];
    try {
      await navigator.clipboard.writeText(button.getAttribute("data-copy"));
    } catch {
      return; // No clipboard access: the code is on screen to type.
    }
    button.textContent = label("codeCopied");
    setTimeout(() => {
      button.textContent = label("copyCode");
    }, 2000);
  });
});
