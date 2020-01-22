import React from "react";
import { mount, shallow } from "enzyme";
import { configure } from "../src";

const Foo = props => {
  return <div {...props}>foo</div>;
};

describe("findByTestId", () => {
  describe.each([
    ["mount", mount],
    ["shallow", shallow]
  ])("%s", (_, render) => {
    it("should find a component by it's testid", () => {
      configure();
      const component = render(<Foo data-testid="foo" />);

      expect(component.findByTestId("foo").length).toBe(1);
    });

    it("should allow alternative selectors to be configured", () => {
      configure({
        selector: "data-test-id"
      });

      const component = render(<Foo data-test-id="foo" />);

      expect(component.findByTestId("foo").length).toBe(1);
    });
  });

  describe("mount", () => {
    it("should return wrapping react components with selector when hostNodes is false", () => {
      configure({
        hostNodes: false
      });

      const component = mount(<Foo data-testid="foo" />);
      expect(component.findByTestId("foo").length).toBe(2);
    });
  });
});
