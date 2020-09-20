---
title: Hoisting in JavaScript
description: Why do you need to know hoisitng for writing clean code...
date: 2020-02-29
category: 'javascript'
draft: false
---

![](./assets/hoisting.gif)

We are here again, trying to understand another quirk involved with Javascript. What is this time ? Last time we covered what are called closures in Javascript and how functions can form closures.

Today we have another one for you to gasp, and (drumrolls) it is 'Hoisting'. If you already have heard abou what hoisting essentially is, I would still recommend you to read till the end, as we look to spin up really good examples and cement the knowledge of hoisting today.

## What is Hoisting?

Well, if you can remember Hoisting as Hosting (just a wordplay) or to present or to put it on the top for everyone to be able to use it. In Javascript it really means to present. Want to know how?

Named functions (a function with a name) or any variable declarations are essentially hoisted on top of the document even before the code returns anything.

Let us take an example:

```javascript
var a = 'First'
console.log(a)
```

> Output : 'First'

```javascript
console.log(b)
var b = 'Second'
```

> What do you think gets logged here? Any idea?

<br/>

What do you infer about the examples above?

> Well typically, you would say the first example will log the value 'a' i.e. 'First' and the second example would throw an error because it tried to access a variable before it was declared.

<br/>

Yes, you are right, but not really! This is where hoisting comes into play. Just know, any named function or variable declaration in a program will be hoisted or presented at the top so as to make it accessible from anywhere in the program.

Got a hint for the solution yet? Yes, you got it right this time. The second example will log 'b' or 'Second' as well in the output because the variable 'b' is hoisted and it doesn't really matter if it gets called before it is declared.

**I have another set of examples coming for you. Let us try to know it together.**

```javascript
console.log(hoisting())

function hoisting() {
  return 'This function is hoisted!'
}
```

What do you think gets logged</ins> in here ?
And an another one...

```javascript
console.log(hoisting())

var hoisting = function {
  return "This function is hoisted!"
}
```

And here ?

As you wouldn't imagine the first function would actually retun the value from the function. And guess what the second function returns ?

It valiantly throws an error</ins> (Reference error specfically) because it has no idea what it needs, and because it is an anonymous</ins> function (a function without a name), it wouldn't be hoisted and hence the function can't be accessed before it has been declared.

So how can we make the second code make sense? Well, just call it after it has been declared like the code below.

```javascript
var hoisting = function {
  return "This function is hoisted!"
}

console.log(hoisting())
```

And now we are talking. But why do you think I have introduced you to the concept of named</ins> and anonymous</ins> functions here.

Let me take a quick example here. Let us imagine we have 1000 lines of Javascript code with named functions. In that case, when the Javascript code runs in the browser, it would look to hoist every function and variable at first before even executing the meat of the code.

What does that mean? That essentially means one has to wait a few milli-seconds before the actual code stacks up and runs but the wait wouldn't make sense to you. In other words, hoisting in the browser takes up some space and to avoid this quirky</ins> behaviour we must always avoid writing code that are hoisted.

Simple answer to the problem ? Write anonymous</ins> function codes as much as possible or declare and initialize variables before you call it.

---

With this, we have a very good understanding of what a Hoisting possibly can be and how can we avoid them.

I hope this article gives you a fine introduction to the concept of hoisting in JavaScript. We will be back with another fun concept very soon. Till then, Cheers!
