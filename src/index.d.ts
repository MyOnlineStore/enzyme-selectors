import * as enzyme from "enzyme";

type AddSelectors = () => void;
type DebugBy = (query: string) => string;

declare const addSelectors: AddSelectors;

declare module "enzyme" {
  interface ReactWrapper {
    /**
     * Find components by their `data-testid` value
     * @name findByTestId
     * @param {string} id id to match
     * @example
     * const component = mount(
     *  <div>
     *   <div data-testid="foo">foo</div>
     *  </div>
     * );
     *
     * component.findByTestId('foo');
     */
    findByTestId<P, S, C>(id: string): ReactWrapper<P, S, C>;

    /**
     * Find components by their `aria-label` value
     * @name findByAriaLabel
     * @param {string} label label to match
     * @example
     * const component = mount(
     *  <div>
     *   <button aria-label="Close">&times;</button>
     *  </div>
     * );
     *
     * component.findByAriaLabel('Close');
     */
    findByAriaLabel<P, S, C>(label: string): ReactWrapper<P, S, C>;

    /**
     * Find components by their `placeholder` value
     * @name findByPlaceholderText
     * @param {string} text text to match
     * @example
     * const component = mount(
     *  <div>
     *   <input type="text" placeholder="Name" />
     *  </div>
     * );
     *
     * component.findByPlaceholderText('Name');
     */
    findByPlaceholderText<P, S, C>(text: string): ReactWrapper<P, S, C>;

    /**
     * Find components by their `alt` value
     * @name findByAltText
     * @param {string} text text to match
     * @example
     * const component = mount(
     *  <div>
     *    <img alt="foo" />
     *  </div>
     * );
     *
     * component.findByAltText('foo');
     */
    findByAltText<P, S, C>(text: string): ReactWrapper<P, S, C>;

    /**
     * Find components by their `title` value
     * @name findByTitle
     * @param {string} title title to match
     * @example
     * const component = mount(
     *  <div>
     *    <a href="https://..." title="foo">Go</a>
     *  </div>
     * );
     *
     * component.findByTitle('foo');
     */
    findByTitle<P, S, C>(title: string): ReactWrapper<P, S, C>;

    /**
     * Find components by their `role` value
     * @name findByRole
     * @param {string} role role to match
     * @example
     * const component = mount(
     *  <div>
     *      <button role="Close">&times;</button>
     *  </div>
     * );
     *
     * component.findByRole('Close');
     */
    findByRole<P, S, C>(role: string): ReactWrapper<P, S, C>;

    /**
     * Debug components with an `alt` text
     * @name debugByAltText
     * @param {string} query
     * @returns {string}
     */
    debugByAltText: DebugBy;

    /**
     * Debug components with an `alt` text
     * @name debugByAltText
     * @param {string} query
     * @returns {string}
     */
    debugByAriaLabel: DebugBy;

    /**
     * Debug components by attribute (values)
     * @name debugByAttribute
     * @param {string} attribute
     * @param {string} value
     */
    debugByAttribute: DebugBy;

    /**
     * Debug components with a `placeholder`
     * @name debugByPlaceholderText
     * @param {string} query
     * @returns {string}
     */
    debugByPlaceholderText: DebugBy;

    /**
     * Debug components with a `role` attribute
     * @name debugByRole
     * @param {string} query
     * @returns {string}
     */
    debugByRole: DebugBy;

    /**
     * Debug components with a `data-testid` attribute
     * @name debugByTestId
     * @param {string} query
     * @returns {string}
     */
    debugByTestId: DebugBy;

    /**
     * Debug components with a `title` attribute
     * @name debugByTitle
     * @param {string} query
     * @returns {string}
     */
    debugByTitle: DebugBy;
  }

  interface ShallowWrapper {
    /**
     * Find components by their `data-testid` value
     * @name findByTestId
     * @param {string} id id to match
     * @example
     * const component = mount(
     *  <div>
     *   <div data-testid="foo">foo</div>
     *  </div>
     * );
     *
     * component.findByTestId('foo');
     */

    findByTestId<P, S, C>(id: string): ShallowWrapper<P, S, C>;

    /**
     * Find components by their `aria-label` value
     * @name findByAriaLabel
     * @param {string} label label to match
     * @example
     * const component = mount(
     *  <div>
     *   <button aria-label="Close">&times;</button>
     *  </div>
     * );
     *
     * component.findByAriaLabel('Close');
     */
    findByAriaLabel<P, S, C>(label: string): ShallowWrapper<P, S, C>;

    /**
     * Find components by their `placeholder` value
     * @name findByPlaceholderText
     * @param {string} text text to match
     * @example
     * const component = mount(
     *  <div>
     *   <input type="text" placeholder="Name" />
     *  </div>
     * );
     *
     * component.findByPlaceholderText('Name');
     */
    findByPlaceholderText<P, S, C>(text: string): ShallowWrapper<P, S, C>;

    /**
     * Find components by their `alt` value
     * @name findByAltText
     * @param {string} text text to match
     * @example
     * const component = mount(
     *  <div>
     *    <img alt="foo" />
     *  </div>
     * );
     *
     * component.findByAltText('foo');
     */
    findByAltText<P, S, C>(text: string): ShallowWrapper<P, S, C>;

    /**
     * Find components by their `title` value
     * @name findByTitle
     * @param {string} title title to match
     * @example
     * const component = mount(
     *  <div>
     *    <a href="https://..." title="foo">Go</a>
     *  </div>
     * );
     *
     * component.findByTitle('foo'); // returns <a href="https://..." title="foo">Go</a>
     */
    findByTitle<P, S, C>(title: string): ShallowWrapper<P, S, C>;

    /**
     * Find components by their `role` value
     * @name findByRole
     * @param {string} role role to match
     * @example
     * const component = mount(
     *  <div>
     *      <button role="Close">&times;</button>
     *  </div>
     * );
     *
     * component.findByRole('Close'); // returns <button role="Close">&times;</button>
     */
    findByRole<P, S, C>(role: string): ShallowWrapper<P, S, C>;

    /**
     * Debug components with an `alt` text
     * @name debugByAltText
     * @param {string} query
     * @returns {string}
     */
    debugByAltText: DebugBy;

    /**
     * Debug components with an `alt` text
     * @name debugByAltText
     * @param {string} query
     * @returns {string}
     */
    debugByAriaLabel: DebugBy;

    /**
     * Debug components by attribute (values)
     * @name debugByAttribute
     * @param {string} attribute
     * @param {string} value
     */
    debugByAttribute: DebugBy;

    /**
     * Debug components with a `placeholder`
     * @name debugByPlaceholderText
     * @param {string} query
     * @returns {string}
     */
    debugByPlaceholderText: DebugBy;

    /**
     * Debug components with a `role` attribute
     * @name debugByRole
     * @param {string} query
     * @returns {string}
     */
    debugByRole: DebugBy;

    /**
     * Debug components with a `data-testid` attribute
     * @name debugByTestId
     * @param {string} query
     * @returns {string}
     */
    debugByTestId: DebugBy;

    /**
     * Debug components with a `title` attribute
     * @name debugByTitle
     * @param {string} query
     * @returns {string}
     */
    debugByTitle: DebugBy;
  }
}

export { addSelectors };
