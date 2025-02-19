async function loadTemplate(path) {
    const response = await fetch(path);
    const template = await response.text();
    return template;
}

export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML("afterbegin", template);
    if (callback) {
      callback(data);
    }
  }

export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate("partials/header.html");
    const headerElement = document.querySelector(".headerElement");
    const footerTemplate = await loadTemplate("partials/footer.html");
    const footerElement = document.querySelector(".footerElement");
  
    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
  }