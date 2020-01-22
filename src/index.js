const Enzyme = require("enzyme");

function configure(config = {}) {
  function findByTestId(id) {
    const selector = config.selector || "data-testid";

    if (config.hostNodes === false) {
      return this.find(`[${selector}="${id}"]`);
    }

    return this.find(`[${selector}="${id}"]`).hostNodes();
  }

  Enzyme.ReactWrapper.prototype.findByTestId = findByTestId;
  Enzyme.ShallowWrapper.prototype.findByTestId = findByTestId;
}

module.exports = {
  configure
};
