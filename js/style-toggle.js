// Switch between default CSS and alternative CSS
const styleToggleBtn = document.getElementById("style-toggle");
const altStyleLink = document.getElementById("alt-style");
const defaultStyleLinks = document.querySelectorAll('link[data-theme="default"]');

if (styleToggleBtn && altStyleLink) {
  styleToggleBtn.addEventListener("click", () => {
    const useAlt = altStyleLink.disabled;

    altStyleLink.disabled = !useAlt;
    defaultStyleLinks.forEach((link) => {
      link.disabled = useAlt;
    });
  });
}
