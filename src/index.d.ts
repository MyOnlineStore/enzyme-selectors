import * as enzyme from "enzyme";

type AddSelectors = () => void;

declare const addSelectors: AddSelectors;

declare module "enzyme" {
  interface ReactWrapper {
    findByTestId<P, S, C>(id: string): ReactWrapper<P, S, C>;
    findByAriaLabel<P, S, C>(label: string): ReactWrapper<P, S, C>;
  }

  interface ShallowWrapper {
    findByTestId<P, S, C>(id: string): ShallowWrapper<P, S, C>;
    findByAriaLabel<P, S, C>(label: string): ShallowWrapper<P, S, C>;
  }
}

export { addSelectors };
