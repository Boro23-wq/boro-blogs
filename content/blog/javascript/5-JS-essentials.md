---
title: 5 Javascript essentials (Closures, Hoisting, Prototypes...)
description: Knowing them will aid your chances of writing understable Javascript code.
date: 2020-11-25
category: 'javascript'
draft: false
---

We are looking at the five most essential Javascript fundamentals that one must understand in order to deal with the intricacies of Javascript. Knowing this five great topics will surely help you write clean and comprehendible Javascript code.

## 1. Closures

A closure is simply the combination of a function along with references to its surrounding state (or the lexical environment). Sounds confusing? Let us try an example:

```javascript
let num = 10

function log_num() {
  console.log(num)
}

log_num()

// Output: 10
```

Notice the function `log_num` didn't receive any parameter when we call it. Although we don't pass any parameter we still get the output 10. That's essentially a closure. Due to lexical scoping used in Javascript, any function can reference variables within its scope and outside of it. And that is the main reason, `num` even though living outside of the function's scope, and due to how scope works in Javascript (top-down/lexical), the function `log_num` can reference the variable outside of its scope.

> The point to note here is that an inner function can access variables of its outer function but the outer function cannot access the variables defined within the inner function.

Taking the concept above, let us try another example to concretely understand the idea behind closures.

```javascript
function justAdd(x) {
  return function(y) {
    return x + y
  }

  const addTen = makeAdder(10)

  console.log(addTen(10))
}

// Output: 20
```

Notice the inner function doesn't get passed x, and still it can have reference to variable x due to lexical scoping. And that is essentially what closures are in simple terms.

## 2. Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

> Note: Hoisting only moves function declaration and not its assignment.

```javascript
foo()

function foo() {
  console.log('Foo!')
}

// Output: Foo
```

Notice what is a bit atypical here. We actually invoke the function even before we declare it. And that is exactly what Hoisting is. What Javascript actually does here is that the functions and variables that are declared, are moved to the top of their scope regardless of whether their scope is global or local.

But there's a little caveat to this mechanism. Let us know what is it with the following example:

```javascript
foo()

var foo = function() {
  console.log('Foo!')
}

// Output: undefined
```

Notice, how we define the function here and assign it to a variable. The variable `foo` will inevitably get hoisted. Thats, true. But it is not going to give us the intended result, but would throw an error saying `foo is not a function`.

Remember when I said only function declarations get hoisted and not its assignment. That is exactly what is happening here. Only the variable `foo` or the left part of the equal sign is getting hoisted and that essentially means if we call the variable foo, it will have no idea about the call since it was not hoisted earlier.

## 3. Callback Vs Promise

Both callback and promise can be used to handle asynchronous code in Javascript. While a callback only shows up when the process is completely done and there's no representative of the progress of the process whatsoever, while on the flipside, a promise will resolve a ticket representing a value that will reference to the future output, whether it will be resolved or not.

Lets dive into a code example to see both callback and promise in action:

```javascript
// Callback mechanism
function getNumber(cb) {
  setTimeout(() => {
    cb(5)
  }, 100)
}

getNumber(n => {
  console.log(n)
})

// Output: 5
```

Essentially what this function does is, it will give us the number 5 after 100 ms. And that is how callback works. It will log 5 in the output (or call back) after 100 ms is elapsed (or work is done).

```javascript
// Promise mechanism
function getNumberPromise() {
  return new Promise((resolve, reject) => {
    getNumber(resolve)
  })
}

const promise = getNumberPromise()

promise.then(n => console.log(n))
```

The difference between callback and a promise as we can see in the example above is that we didn't return anything in a callback. But with the promise mechanism we will immediately receive a promise object that we store in the `promise` variable that may well represent a future value.

Furthermore when we say `promise.then` in the last line, we log the value (or perform an operation) only after the promise is resolved and available. The key thing here is that right away we have some sort of token object that represents a possible future value which is not available when we use callbacks.

## 4. 'this' keyword in Javascript

The `this` keyword refers to an object, the object which is executing the current bit of Javascript code.

```javascript
const person = {
  name: 'Boro',
  sayName: function() {
    console.log(this.name)
  },
}

person.sayName()

// Output: Boro
```

When we call `person.sayName()` we get logged Boro since `this` references to the object `person`. But let us do a small change and see what happens to our code.

```javascript
const person = {
  name: 'Boro',
  sayName: function() {
    console.log(this.name)
  },
}

const logName = person.sayName
logName()

// Output: undefined
```

Here the function declaration is all same as the earlier example. But the only change is that instead of calling `person.sayName` directly we set it to a local variable and invoke the variable instead. Notice we get undefined this time even though the declaration is just the same. And, that's the whole point on how 'this' works. The 'this' keyword will take context of whoever is calling the function.

In the first example, while calling `person.sayName`, since person is actually the one calling the method sayName, 'this' in the sayName function becomes person itself. So this keyword will essentially look at the one calling the function.

But in the second example, since the variable `logName` is stored in a global context and there is no value as `global.sayName` therefore it would return undefined.

### Work around using 'bind' method

Here we explicitly told Javascript that we want to bind to the person object. Now when we go ahead and call the local variable sitting somewhere in the global context we still get the desired result since we technically said no matter who ever calls it always bind it to the person object.

```javascript
const person = {
  name: 'Boro',
  sayName: function() {
    console.log(this.name)
  },
}

const logName = person.sayName.bind(person)
logName()

// Output: Boro
```

> Note: 'this' doesn't work with arrow functions (this in arrow functions doesn't bind to anything).

## 5. Prototypes

Prototypes are the mechanism by which JavaScript objects inherit features and attributes from one another using inheritance. Let us take a quick example to demonstrate prototypes:

```javascript
const vehicle = {
  cost: function() {
    console.log('The car costs $95,000')
  },
}

const car = {
  company: 'Tesla',
}

Object.setPrototypeOf(car, vehicle)
car.cost()

// Output: The car costs $95,000
```

Here, the object called vehicle has a method called cost, that logs a statement. We have another object called car, that has a key called company and its value is Tesla. The most important thing to notice here is that the car itself doesn't have the method cost. But on the next line we sort of refer to the global object that exists within Javascript. We are saying that, let the car be a prototype of the type vehicle.

And because we did that, even though the car object doesn't have the method cost, `car.cost` prints the statement since it now inherits the method cost from vehicle.
