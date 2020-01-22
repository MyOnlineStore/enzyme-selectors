import * as enzyme from "enzyme";

type Configure = (config?: { hostNodes?: boolean; selector?: string }) => void;

declare const configure: Configure;

declare module "enzyme" {
  interface ReactWrapper {
    findByTestId<P, S, C>(id: string): ReactWrapper<P, S, C>;
  }
  interface ShallowWrapper {
    findByTestId<P, S, C>(id: string): ShallowWrapper;
  }
}

export { configure };
