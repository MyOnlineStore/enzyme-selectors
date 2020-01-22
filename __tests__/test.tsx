import React from "react";
import "../src";
import { mount } from "enzyme";
import { configure } from "../src";

const Foo = props => <div {...props} />;

describe("types", () => {
  it("should find a component by it's testid", () => {
    configure();
    const component = mount(<Foo data-testid="foo" />);

    expect(component.findByTestId("foo").length).toEqual(1);
  });
});
