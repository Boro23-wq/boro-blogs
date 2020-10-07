---
title: history.push not re-rendering component
description: How history.push haunted me for several days.
date: 2020-10-07
category: 'development'
draft: false
---

![](./assets/bug.png)

I had been trying to solve a severe bug (for several weeks fyi), which eventually comprehended to be a really stupid missing piece that delayed my moment of exaltation pretty much for several weeks (3 weeks to be precise).

You know what the best part is? It wasn't just me who was perplexed with this bug, but few other that had spent a great amount of time in scrutiny.

The bug was with `react-router` package and the community discussing the fix can be found in the link below:

> [history.push not re-rendering component.](https://github.com/ReactTraining/react-router/issues/7415)

## What was the bug all about really?

Well here's the gist. Let us imagine we have two components, `CreateProduct` and `AllProducts` component. The 'CreateProduct' component essentially creates a Product (through forms) and sents a POST request to the backend API for persistent storage. It then uses history props passed in tacitly by react-router to push to a new location (i.e. to AllProducts).

The 'AllProducts' component then lists all the products that have been created through the form in 'CreateProduct' component.

But the problem was when we redirect to the 'AllProducts' component from CreateProduct the most recent item that have been created doesn't show up but all the previous products are.

- The bug was `history.push` redirected me to the desired page but wasn't re-rendering the component with the new data that arrived, and hence we didn't see the new data in the list.
- But only after a force refresh that new data was available on the list.

## Components

The `AllProducts` component had a `useEffect` that ran but couldn't find any new data drilled into the component and hence it wasn't re-rendering the component.

```javascript
const AllProducts = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);
```

A look from `CreateProduct` component. This is where we made a POST request to the backend API for storing the data, and as you can see we have a history.push method right in the `.then` promise resolver.

```javascript
    axios
      .post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        history.push('/allproducts');
      })
  };

```

## Possible Solutions

If you used the `history` npm package for session storage a possible solution could be looking to install a particular version of history compatible with react-router as mentioned below.

```bash
$ npm list history
npm list v1.13.0
warning Filtering by arguments is deprecated. Please use the pattern option instead.
├─ history@5.0.0
├─ react-router-dom@5.2.0
│  └─ history@4.10.1
└─ react-router@5.2.0
   └─ history@4.10.1

$ npm i history@4.10.1
```

Few of them suggests that using `history@4.10.1` with `react-router-dom@5.2.0` happens to solve the issue.

And few other suggests that to prevent calling `history.push` on render we can wrap it around useEffect. But none of them worked for me. I relentlessly tried every single fix that might budge this bug down but unfortunately it didn't happen.

## What worked for me?

We have the same `AllProducts` component here. As the [React Docs](https://reactjs.org/docs/hooks-effect.html) suggests that `useEffect` hook API accepts a second argument.

> You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to useEffect.

```javascript
const AllProducts = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);
```

We pass an empty array as a second argument for React to re-render only when certain value changes. It turns out I didn't pass the products list inside the `useEffect` as a second parameter and React knew nothing about new data being drilled until it was forcefully refreshed.

And once I passed the products inside the `useEffect` like so

```javascript
const AllProducts = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, [products]);
```

everything worked out as normal and the `AllProducts` component was now re-rendering everytime it received a new data.

AS SIMPLE AS THAT!

## Conclusion

I very rightly know it was a stupid missing piece on my part and it took me atleast a few weeks to figure it out, but you know what, that's what coding teaches you. It teaches one to be resilient and push enough to resolve a bug until your mad and stop coding forever.

Happy Coding!
