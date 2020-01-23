# Enzyme Selectors

Other testing libraries like [react-testing-library](https://github.com/testing-library/react-testing-library) have popularized testing react-components by locating them by specific html-attributes that enforce best pactices for accessibility. This module brings the convenience of those selectors to enzyme ✨.

## Setup

Install it by running:

```
yarn add -D enzyme-selectors
```

Or if using npm instead of yarn:

```
npm i -D enzyme-selectors
```

After installation, you should configure the selectors. If you already have enzyme configured this will be easy (if you haven't configured enzyme yet, follow their [installation guide](https://airbnb.io/enzyme/docs/installation/) before continuing). In the setup file where you configure Enzyme you can add the following lines:

```diff
   const Enzyme = require("enzyme");
   const Adapter = require("enzyme-adapter-react-16");
+  const { configure } = require("enzyme-selectors");

   Enzyme.configure({
     adapter: new Adapter()
   });

+  configure();
```

That's it, You are now ready to start using the selectors in your tests 🎉.

## Selectors

> All selectors apply to `mount` as well as `shallow`

After installing and configuring the following selectors will be added to enzyme:

### `findByTestId`

Find components by their `data-testid` value

Params:

`id`: id to match

```jsx

const component = mount(
<div>
<div data-testid="foo">foo</div>
<div>
);

component.findByTestId('foo'); // returns <div data-testid="foo">foo</div>
```

### `findByAriaLabel`

Find components by their `aria-label` value

Params:

`label`: label to match

```jsx

const component = mount(
<div>
<button aria-label="Close">&times;</button>
<div>
);

component.findByAriaLabel('Close'); // returns <button aria-label="Close">&times;</button>
```

### `findByPlaceholderText`

Find components by their `placeholder` value

Params:

`text`: text to match

```jsx

const component = mount(
<div>
<input type="text" placeholder="Name" />
<div>
);

component.findByPlaceholderText('Name'); // returns <input type="text" placeholder="Name" />
```

### `findByAltText`

Find components by their `alt` value

Params:

`text`: text to match

```jsx

const component = mount(
<div>
<img alt="foo" />
<div>
);

component.findByAltText('foo'); // returns <img alt="foo" />
```

### `findByTitle`

Find components by their `title` value

Params:

`title`: title to match

```jsx

const component = mount(
<div>
<a href="https://..." title="foo">Go</a>
<div>
);

component.findByTitle('foo'); // returns <a href="https://..." title="foo">Go</a>
```

### `findByRole`

Find components by their `role` value

Params:

`role`: role to match

```jsx

const component = mount(
<div>
<button role="Close">&times;</button>
<div>
);

component.findByRole('Close'); // returns <button role="Close">&times;</button>
```
