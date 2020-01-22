import React, { FC } from "react";
import { mount, shallow } from "enzyme";
import { addSelectors } from "../src";

const Foo: FC = props => {
  return <div {...props}>foo</div>;
};

describe("selectors", () => {
  describe.each([
    ["mount", mount],
    ["shallow", shallow]
  ])("%s", (_, render: typeof mount) => {
    it("should find a component by it's testid", () => {
      addSelectors();
      const component = render(<Foo data-testid="foo" />);

      expect(component.findByTestId("foo").length).toBe(1);
    });

    it("should find a component by it's aria-label", () => {
      addSelectors();
      const component = render(<Foo aria-label="foo" />);

      expect(component.findByAriaLabel("foo").length).toBe(1);
    });
  });
});
