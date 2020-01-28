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

    it("should find a component by it's alt text", () => {
      addSelectors();
      const component = render(<img alt="foo" />);
      expect(component.findByAltText("foo").length).toBe(1);
    });

    it("should find a component by it's aria-label", () => {
      addSelectors();
      const component = render(<Foo aria-label="foo" />);
      expect(component.findByAriaLabel("foo").length).toBe(1);
    });

    it("should find a component by it's placeholder", () => {
      addSelectors();
      const component = render(<input type="text" placeholder="foo" />);
      expect(component.findByPlaceholderText("foo").length).toBe(1);
    });

    it("should find a component by it's role", () => {
      addSelectors();
      const component = render(<button role="foo" />);
      expect(component.findByRole("foo").length).toBe(1);
    });

    it("should find a component by it's title", () => {
      addSelectors();
      const component = render(<a href="https://1234.com" title="foo" />);
      expect(component.findByTitle("foo").length).toBe(1);
    });
  });
});

describe("util", () => {
  describe.each([
    ["mount", mount],
    ["shallow", shallow]
  ])("%s", (_, render: typeof mount) => {
    describe.each([
      ["debugByAltText", "alt"],
      ["debugByAriaLabel", "aria-label"],
      ["debugByPlaceholderText", "placeholder"],
      ["debugByRole", "role"],
      ["debugByTestId", "data-testid"],
      ["debugByTitle", "title"]
    ])("%s", (fn: string, attr: string) => {
      addSelectors();
      it("should generate a debug report for all occurences", () => {
        const component = render(
          <div {...{ [attr]: "one" }}>
            <div {...{ [attr]: "two" }}>
              <div {...{ [attr]: "three" }}>
                <div {...{ [attr]: "four" }}>
                  <div {...{ [attr]: "double" }}></div>
                  <div {...{ [attr]: "double" }}></div>
                </div>
              </div>
            </div>
          </div>
        );

        expect(component[fn]()).toMatchSnapshot(`${render.name}:${fn}:all`);
      });

      it("should generate a debug report for all occurences", () => {
        const component = render(
          <div {...{ [attr]: "one" }}>
            <div {...{ [attr]: "two" }}>
              <div {...{ [attr]: "three" }}>
                <div {...{ [attr]: "four" }}>
                  <div {...{ [attr]: "double" }}></div>
                  <div {...{ [attr]: "double" }}></div>
                </div>
              </div>
            </div>
          </div>
        );

        expect(component[fn]("two")).toMatchSnapshot(
          `${render.name}:${fn}:single`
        );
      });
    });
  });
});
