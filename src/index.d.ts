import * as enzyme from "enzyme";

type AddSelectors = () => void;

declare const addSelectors: AddSelectors;

declare module "enzyme" {
  interface ReactWrapper {
    /**
     * Find components by their `data-testid` value
     * @param id id to match
     * @example
     * const component = mount(
     *  <div>
     *   <div data-testid="foo">foo</div>
     *  <div>
     * );
     *
     * component.findByTestId('foo'); // returns <div data-testid="foo">foo</div>
     */
    findByTestId<P, S, C>(id: string): ReactWrapper<P, S, C>;

    /**
     * Find components by their `data-testid` value
     * @param label label to match
     * @example
     * const component = mount(
     *  <div>
     *   <button aria-label="Close">&times;</button>
     *  <div>
     * );
     *
     * component.findByAriaLabel('Close'); // returns <button aria-label="Close">&times;</button>
     */
    findByAriaLabel<P, S, C>(label: string): ReactWrapper<P, S, C>;

    /**
     * Find components by their `placeholder` value
     * @param text text to match
     * @example
     * const component = mount(
     *  <div>
     *   <input type="text" placeholder="Name" />
     *  <div>
     * );
     *
     * component.findByPlaceholderText('Name'); // returns <input type="text" placeholder="Name" />
     */
    findByPlaceholderText<P, S, C>(text: string): ReactWrapper<P, S, C>;

    /**
     * Find components by their `alt` value
     * @param text text to match
     * @example
     * const component = mount(
     *  <div>
     *    <img alt="foo" />
     *  <div>
     * );
     *
     * component.findByAltText('foo'); // returns <img alt="foo" />
     */
    findByAltText<P, S, C>(text: string): ReactWrapper<P, S, C>;

    /**
     * Find components by their `title` value
     * @param title title to match
     * @example
     * const component = mount(
     *  <div>
     *    <a href="https://..." title="foo">Go</a>
     *  <div>
     * );
     *
     * component.findByTitle('foo'); // returns <a href="https://..." title="foo">Go</a>
     */
    findByTitle<P, S, C>(title: string): ReactWrapper<P, S, C>;

    /**
     * Find components by their `role` value
     * @param role role to match
     * @example
     * const component = mount(
     *  <div>
     *      <button role="Close">&times;</button>
     *  <div>
     * );
     *
     * component.findByRole('Close'); // returns <button role="Close">&times;</button>
     */
    findByRole<P, S, C>(role: string): ReactWrapper<P, S, C>;
  }

  interface ShallowWrapper {
    /**
     * Find components by their `data-testid` value
     * @param id id to match
     * @example
     * const component = mount(
     *  <div>
     *   <div data-testid="foo">foo</div>
     *  <div>
     * );
     *
     * component.findByTestId('foo'); // returns <div data-testid="foo">foo</div>
     */
    findByTestId<P, S, C>(id: string): ShallowWrapper<P, S, C>;

    /**
     * Find components by their `data-testid` value
     * @param label label to match
     * @example
     * const component = mount(
     *  <div>
     *   <button aria-label="Close">&times;</button>
     *  <div>
     * );
     *
     * component.findByAriaLabel('Close'); // returns <button aria-label="Close">&times;</button>
     */
    findByAriaLabel<P, S, C>(label: string): ShallowWrapper<P, S, C>;

    /**
     * Find components by their `placeholder` value
     * @param text text to match
     * @example
     * const component = mount(
     *  <div>
     *   <input type="text" placeholder="Name" />
     *  <div>
     * );
     *
     * component.findByPlaceholderText('Name'); // returns <input type="text" placeholder="Name" />
     */
    findByPlaceholderText<P, S, C>(text: string): ShallowWrapper<P, S, C>;

    /**
     * Find components by their `alt` value
     * @param text text to match
     * @example
     * const component = mount(
     *  <div>
     *    <img alt="foo" />
     *  <div>
     * );
     *
     * component.findByAltText('foo'); // returns <img alt="foo" />
     */
    findByAltText<P, S, C>(text: string): ShallowWrapper<P, S, C>;

    /**
     * Find components by their `title` value
     * @param title title to match
     * @example
     * const component = mount(
     *  <div>
     *    <a href="https://..." title="foo">Go</a>
     *  <div>
     * );
     *
     * component.findByTitle('foo'); // returns <a href="https://..." title="foo">Go</a>
     */
    findByTitle<P, S, C>(title: string): ShallowWrapper<P, S, C>;

    /**
     * Find components by their `role` value
     * @param role role to match
     * @example
     * const component = mount(
     *  <div>
     *      <button role="Close">&times;</button>
     *  <div>
     * );
     *
     * component.findByRole('Close'); // returns <button role="Close">&times;</button>
     */
    findByRole<P, S, C>(role: string): ShallowWrapper<P, S, C>;
  }
}

export { addSelectors };
