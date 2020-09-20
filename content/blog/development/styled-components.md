---
title: Styled Components in React
description: CSS in JavaScript, a unique way of styling components.
date: 2020-09-10
category: 'development'
draft: false
---

<img  height="250px" width="100%" src="https://styled-components.com/syntax-highlight-example.jpg">

The simplest and general way of writing CSS style sheets were the only appropriate way to paint any modern apps. That is basically the traditional method of styling at document level - creating a `style.css` file and referencing it back to the HTML.

But there's certainly a better way of styling your HTML pages now and that is using styled components. From very old and basic `.css` files to `.scss` files and now to `styled-components`.

Styled components essentially means writing CSS inside of JavaScript. We can still use CSS/SCSS files that would be compiled back into CSS modules. But why do we need one?

Well, when the application grows and expands theres's certainly lot more points to concern being a developer. Worrying about dedicating a specific folder to encapsulate all the CSS related files, identifying how to scope them and making very sure that there's no clashes in namespaces. These are few of the many problems that styled-components are effectively tackling. And encapsulating CSS in JavaScript also means no more extensive HTTP requests to fetch all the CSS assets beforehand.

## Why Styled Components?

Styled Components enables writing CSS in JavaScript using template literals and it essentiall removes the overhead of mapping components and styles together.

Styled Components was created to handle the following reasons:

- Styled Components automatically monitors components to be rendered on a webpage and very rightly only injects the critically required styles. This also means there is no additional overhead of an extra HTTP request for fetching the CSS assets.

- Styled Components generates unique class names for your styles. Developers now don't have to worry about namespace clashes.

```javascript
<div className="texts View-sadj kssytz">
<Title className="">
    <h2 className="title View-ttyus hhyat">
        ...
        ...
    </h2>
</Title>
```

- Adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.

- Effectively maintain styles affecting your component.

- Automatic vendor prefixing: write your CSS to the current standard and let Styled Components handle the rest.

## Features of Styled-components

### 1. Passing Props:

Props in styled components acts the same way as props passed into any React component.

```javascript
const buttonStyles = css`
background-color: black
color: white;
`

const invertedButtonStyles = css`
  background-color: white;
  color: black;
`

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;
`

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles
  }

  return props.inverted ? invertedButtonStyles : buttonStyles
}
```

### 2. Dynamically Changing Elements:

We can dynamically change elements using styled components like so. Here in the example as you can see we can convert a `span` element to act as `link` passing the 'as' prop available for us.

```javascript
export const CustomText = styled.span`
  color: white;
  background-color: black;
`

return <CustomText as="a">CustomText is now changed to a link!</CustomText>
```

Now, although `CustomText` is only a span, it will behave as a link.

### 3. Leveraging Themes:

Themes allow us to maintain consistency through making styles available to all our different components. We can now define a common styling and apply it to any component we want.

```javascript
const theme = {
    color: {
        dark: '#000000'
        medium: '#cfcfcf'
        light: '#ffff'
    }
}

const CustomText = styled.h2`
    font-color: ${props => props.theme.color.dark}
`

render(
    <div>
        <ThemeProvider theme={theme}>
            <CustomText>I am a dark text!</CustomText>
        </ThemeProvider>
    </div>
);
```

### 4. Automatic Vendor Prefixes:

Now we dont have to worry about prefixing our CSS classes; styled component does that for us. Just write your CSS and let styled-components handle the rest.

## References

- [Building a react component library using styled components](https://medium.com/@fionnachan/building-a-react-component-library-with-styled-components-input-field-c79c789387ad)
- [Getting most out of styled components.](https://blog.cloudboost.io/getting-the-most-out-of-styled-components-7-must-know-features-acba3cc15b5)
