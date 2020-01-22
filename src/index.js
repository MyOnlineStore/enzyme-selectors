const Enzyme = require("enzyme");

function addSelectors() {
  function findByTestId(id) {
    return this.find(`[data-testid="${id}"]`).hostNodes();
  }

  function findByAriaLabel(label) {
    return this.find(`[aria-label="${label}"]`).hostNodes();
  }

  Enzyme.ReactWrapper.prototype.findByTestId = findByTestId;
  Enzyme.ReactWrapper.prototype.findByAriaLabel = findByAriaLabel;

  Enzyme.ShallowWrapper.prototype.findByTestId = findByTestId;
  Enzyme.ShallowWrapper.prototype.findByAriaLabel = findByAriaLabel;
}

module.exports = {
  addSelectors
};
