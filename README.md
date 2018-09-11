## React - generate viewport sizes in css variables to use throughout app

This package helps you inject css variables that are equal to the viewport height and width into the body tag.

## Support

-   Any browser that support _CSS Style Declaration setProperty_ [See here](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)
-   Anything that supports css variables.

## Installation

To install the package:

```bash
npm install react-css-sizes --save
```

To use package in your component of choice include this at the top.:

```javascript
import ReactCssSizes from 'react-css-sizes';
```

Include the component in your layout file or component of choice add this in your render function:

```javascript
class MyClass {
    render() {
        return (
            <div>
                <ReactCssSizes />
            </div>
        );
    }
}
```

This will append two css variables on the body tag and will update on resizing the window.

`--app-height` and `--app-width`

In your CSS you will be able to use the following:

```css
.selector {
    height: var(--app-height, 100vh);
}
```

## Why?

Sometimes you just need to use javascript to get a more accurate reading of the viewport height.

Some browsers and mobile browsers read 100vh larger than the actual visible viewport (due to browser bar and footer), this will help cover those.
