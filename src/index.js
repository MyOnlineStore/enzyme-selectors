const Enzyme = require("enzyme");
const chalk = require("chalk");

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

  function debugByAttribute(attr, value) {
    let report = "\n\n";
    let component = null;

    if (value) {
      component = this.find(`[${attr}="${value}"]`);
    } else {
      component = this.find(`[${attr}]`);
    }

    component.hostNodes().map(node => {
      const html = node.debug();
      const parts = html.split(value);

      const styled = parts.reduce((acc, part, index) => {
        if (index === parts.length - 1) {
          return `${acc}${chalk.dim(part)}`;
        }

        return `${acc}${chalk.dim(part)}${chalk.green(chalk.bold(value))}`;
      }, "");

      report += `${styled}\n\n`;
    });

    return report;
  }

  function debugByTestId(id) {
    return this.debugByAttribute("data-testid", id);
  }

  function debugByAriaLabel(label) {
    return this.debugByAttribute("aria-label", label);
  }

  function debugByPlaceholderText(text) {
    return this.debugByAttribute("placeholder", text);
  }

  function debugByAltText(text) {
    return this.debugByAttribute("alt", text);
  }

  function debugByTitle(title) {
    return this.debugByAttribute("title", title);
  }

  function debugByRole(role) {
    return this.debugByAttribute("role", role);
  }

  const applied = [
    debugByAltText,
    debugByAriaLabel,
    debugByAttribute,
    debugByPlaceholderText,
    debugByRole,
    debugByTestId,
    debugByTitle,
    findByAltText,
    findByAriaLabel,
    findByPlaceholderText,
    findByRole,
    findByTestId,
    findByTitle
  ];

  applied.forEach(item => {
    Enzyme.ReactWrapper.prototype[item.name] = item;
    Enzyme.ShallowWrapper.prototype[item.name] = item;
  });
}

module.exports = {
  addSelectors
};
