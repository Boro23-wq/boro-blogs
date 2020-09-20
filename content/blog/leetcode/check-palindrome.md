---
title: Palindrome Check (Rearrange Palindrome)
description: Check for palindromes in a string.
date: 2020-04-04
category: 'leetcode'
draft: false
---

## Problem Statement:

Given a string, determine if there is a way to arrange the string such that the string is a palindrome. If such arrangements exists, return the palindrome (there may be many arrangements - return just one). Otherwise return false if no such palindrome exists.

**Example-1:**

```javascript
Input: racecar
Output: racecar
```

> Since 'racecar' is a palindrome.

**Example-2:**

```javascript
Input: racecara
Output: false
```

> Since 'racecara' can't be arranged to form a palindrome.

Let us dive into the solution code to understand how can we solve this problem.

## Solution:

#### `Time - O(n)` | `Space - O(n)`

#### Step 1:

> Let us consider input as **'racecar'** for this example.

```javascript
let set = [...s].reduce((acc, curr) => {
  acc[curr] = acc[curr] ? (acc[curr] += 1) : 1
  return acc
}, {})
```

Here, in Step 1, the number of occurences of each character is stored in the set. The output will look something like:

> set --> { r : 2, a : 2, c : 2, e : 1}

#### Step 2:

In Step 2, we use two variables odd_char and palindrome to keep track of the string.

```javascript
let odd_char = ''
let palindrome = ''
```

#### Step 3:

```javascript
for (let c in set) {
  if (set[c] % 2 === 0) {
    palindrome += c.repeat(Math.floor(set[c] / 2))
  } else if (odd_char === '') {
    odd_char += c
    palindrome += c.repeat(Math.floor(set[c] / 2))
  } else {
    return false
  }
}
```

#### In Step 3:

- We check for all the keys (i.e. the characters in the set), if the occurences are even (which we can get from the 'value' of the key-value pair) we add it to the palindrome variable (occurences / 2) times.

</br>

- (occurences / 2) times since we only want to add half of the string characters so we can mirror the second half to reconstruct a palindrome.

</br>

- While if its odd, we add it to the odd_char variable and also add it to the palindrome string (occurences / 2) times.

</br>

**Note**: For a string to be a palindrome, the string should contain even number of occurences of the same character except one, which can be placed in between the string to form a palindrome.

- If there is a second character that has odd occurrences, it cannot be added to the odd_char variable since we can't form palindromes with strings having two or more characters occuring in odd numbers.

#### Step 4:

```javascript
return (
  palindrome +
  odd_char +
  palindrome
    .split('')
    .reverse()
    .join('')
)
```

In Step 4, we return palindrome + odd_char + reverseOf(palindrome) to form the palindrome string. If we don't find any string we would return **false**.

## Complete Code:

```javascript
var findPalindrome = function(s) {
  let set = [...s].reduce((acc, curr) => {
    acc[curr] = acc[curr] ? (acc[curr] += 1) : 1
    return acc
  }, {})

  let odd_char = ''
  let palindrome = ''

  for (let c in set) {
    // if even count add it to palindrome
    if (set[c] % 2 === 0) {
      palindrome += c.repeat(Math.floor(set[c] / 2))
      //if odd add to the odd_char and also to the palindrome,
      //and add the extra letter to the palindrome
    } else if (odd_char === '') {
      odd_char += c
      palindrome += c.repeat(Math.floor(set[c] / 2))
    } else {
      return false
    }
  }
  return (
    palindrome +
    odd_char +
    palindrome
      .split('')
      .reverse()
      .join('')
  )
}

findPalindrome('nolemonnomelon') // nnoolemameloonn
// findPalindrome("racecar") // racecar
// findPalindrome("mygym") //mygym
// findPalindrome("nogymn") // false
// findPalindrome("racecara") // false
```
