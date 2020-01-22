# Enzyme Selectors 

Other testing libraries like [react-testing-library](https://github.com/testing-library/react-testing-library) have popularized testing react-components by locating them by specific html-attributes that enforce best pactices for accessability. This little module brings the convenience of those selectors to enzyme ✨.

## Setup

Install it by running
```
yarn add -D enzyme-selectors
```
Or if using npm instead of yarn:
```
npm i -D enzyme-selectors
```

<br />
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

This will add the following selectors to enzyme:


### `findByTestId(id)`



