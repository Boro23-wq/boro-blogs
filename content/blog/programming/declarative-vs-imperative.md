---
title: Declarative VS Imperative Code
description: What you want VS How to do in order to get what you want...
date: 2020-01-26
category: 'programming'
draft: false
---

Telling what you want VS Telling how to do in order to get what you want.

> In Layman terms, declarative programming is 'What' or 'What you want?' and imperative programming is 'How' or 'How you want', as simple as that.

<br/>

**But No! Don't stop here there's something even more to it. Let us dig in.**

In simple words an imperative program consists of explicit commands and instructions for the computer to perform tasks on. Basically imperative programming explicitly describes how you want it to get what you want and focuses on describing how a program operates. Sounds interesting? Uhm, what else?

<br/>

Lets take a quick example to understand the ridge here.

> If you want your friend to draw a landscape for you and it doesn't really matter what canvas size they use,what colors they use or how they do it, than it is **declarative**.

On the contrary:

> I f you want the landscape to look a certain way, if you want them to use pastels and should be a night sky, that is imperative because you explicitly talk through how you want the picture to shape.

<br/>

Let us take a look at declarative and imperative code side-by-side to have a good grasp of what both of these actually mean.

## Imperative

An imperative code would look something like the code highlighted below:

> Here we have a collection and we look for the odd ones:

```javascript
List < int > collection = new List< int > { 1, 2, 3, 4, 5 };
```

_With imperative programming we explicitly declare what we want_

```javascript
List results = new List();
foreach(var num in collection){
    if (num % 2 != 0)
    results.Add(num);
}
```

**Here we are saying:**

- Create a collection.
- Loop througheach of the element in the collection.
- Perform operations to check if the number is odd and add to results.

## Declarative

With declarative programming, we need to only write code that describes what you would want, but not necessarily how to get it. Take a look at the code below:

```javascript
var results = collection.where(num => num % 2 != 0)
```

Here, we're saying give us everything that's odd, but did not specify if to loop through the elements the collection. We also didn't specify to check the items, if they are odd, or add it to the result collection eventually.

### Advantages of declarative programming:

1. It minimizes mutability.
2. Immutable objects are generally much easier to work with. Such objects can only be in one state, which cannot be modified across threads.
3. Reduces state side-effects and discourages usage of variables in favor of constructs, such as pipelines or higher-order functions.
4. It leads to clean and understable code and are more maintanable and can be scaled very easily as well.

<br/>

That is it lads, that is what a declarative and imperative code really means under the covers.

Thank You for making it till the end. Cheers!
