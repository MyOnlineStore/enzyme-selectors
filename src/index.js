const Enzyme = require("enzyme");

function addSelectors() {
  function findByTestId(id) {
    return this.find(`[data-testid="${id}"]`).hostNodes();
  }

  function findByAriaLabel(label) {
    return this.find(`[aria-label="${label}"]`).hostNodes();
  }

  function findByPlaceholderText(text) {
    return this.find(`[aria-label="${text}"]`);
  }

  function findByAltText(text) {
    return this.find(`[alt="${text}"]`);
  }

  function findByTitle(title) {
    return this.find(`[title="${title}"]`);
  }

  function findByRole(role) {
    return this.find(`[role="${role}"]`);
  }

  Enzyme.ReactWrapper.prototype.findByTestId = findByTestId;
  Enzyme.ReactWrapper.prototype.findByAriaLabel = findByAriaLabel;
  Enzyme.ReactWrapper.prototype.findByPlaceholderText = findByPlaceholderText;
  Enzyme.ReactWrapper.prototype.findByAltText = findByAltText;
  Enzyme.ReactWrapper.prototype.findByTitle = findByTitle;
  Enzyme.ReactWrapper.prototype.findByRole = findByRole;

  Enzyme.ShallowWrapper.prototype.findByTestId = findByTestId;
  Enzyme.ShallowWrapper.prototype.findByAriaLabel = findByAriaLabel;
  Enzyme.ShallowWrapper.prototype.findByPlaceholderText = findByPlaceholderText;
  Enzyme.ShallowWrapper.prototype.findByAltText = findByAltText;
  Enzyme.ShallowWrapper.prototype.findByTitle = findByTitle;
  Enzyme.ShallowWrapper.prototype.findByRole = findByRole;
}

module.exports = {
  addSelectors
};
