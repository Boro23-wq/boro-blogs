---
title: First Missing Positive
description: Breeze through a leetcode hard problem.
date: 2020-03-06
category: leetcode
draft: false
---

Hey there! Ever tried to solve a leetcode hard problem before? If not, we have one for you to challenge your mind. Grab your tea and lets spill the beans, shall we ?

## The problem says:

**Given an unsorted integer array, find the smallest missing positive integer.**

**Example 1:**

```javascript
Input: [1, 2, 0]
Output: 3
//since 3 is the smallest missing positive number in the array
```

**Example 2:**

```javascript
Input: [3, 4, -1, 1]
Output: 2
//since we don't have a 2 between 1 and 3 and hence 2 is the smallest missing positive number
```

**Example 3:**

```javascript
Input: [7, 8, 9, 11, 12]
Output: 1
//well we have a lot of numbers missing here but since the smallest is 1 we don't care about the rest and return 1
```

> **Note:** Your algorithm should run in O(n) time and should use constant extra space.

<br/>

Well, this is not really a hard problem if you can imagine what goes in here. But, the fact that we are supposed to solve this using constant space makes it one of the hard problems that you can find on leetcode.

## Approach-1 :

#### 🐌 (Inefficient)

#### `Time - O(n)` |`Space - O(n)`

This approach is inefficient because it uses a Set that has a linear space complexity (because in the worst case we may have to store all the items in the Set).

```javascript
var firstMissingPositive = function(nums) {
  //copy all the items in nums to the Set
  let set = new Set(nums)
  let i = 0
  //loop through the set and check existence of a number
  while (++i) {
    if (!set.has(1)) return i
  }
}
```

## Approach-2 :

#### 🚀 (Efficient)

#### `Time - O(n)` |`Space - O(1)`

This approach is efficient because it doesn't uses an extra space in the form of a Set that we used in the earlier approach.

The idea behind this approach is that we compare if the position of the items are correct. Since in an array of non-negative integers 1 will always be at index 0 and so on... The very first index that doesn't match its item is the required number.

> Heavy comments for you to understand what goes through each step.

```javascript
var firstMissingPositive = function(nums) {
  let numsLength = nums.length
  let index = 0

  while (index < numsLength) {
    //STEP 1: check for edge cases
    const currentNumber = nums[index]
    const targetIndex = nums[index] - 1

    //we don't care about the negative numbers and the numbers that are greater than the length of the array itself
    if (currentNumber > numsLength || currentNumber <= 0) {
      index++
      continue
    }

    //STEP: 2
    //check if the number is in its target position
    //if it is continue or if it is not than swap or rearrange the numbers
    //and bring into its original position
    if (index !== targetIndex && nums[targetIndex] !== currentNumber) {
      let temp = currentNumber
      nums[index] = nums[targetIndex]
      nums[targetIndex] = temp
    } else {
      index++
    }
  }

  index = 0
  while (index < numsLength) {
    // nums --> [1,2,0]
    //check if the number matches its index
    //nums[0] === 1 (this means the number is present)
    //nums[1] === 2 (number present again)
    //nums[2] === 0 (since the number should have been 3 and not 0, hence we return the number 3 itself)
    if (nums[index] !== index + 1) {
      return index + 1
    }
    index++
  }
  //if none of the conditions above are met
  //that means the array has to look something like this where nums -> [1,2,3]
  //this means all the number is in its own position
  //therefore just return the number next to 3 which is 4
  return numsLength + 1
}
```

## Approach-3 :

#### 🚀 (Efficient)

#### `Time - O(n)` |`Space - O(1)`

The idea behind this approach:

1. Convert the non-positive numbers or numbers greater than 'n' to 1.<br>

2. Check for positive numbers and turn them into negative by adding a '-'.<br>

3. Run a loop through the array again and the first positive number will be the number missing on the list.<br>

4. If none of the above steps holds true that means all the numbers are already there in the array in its original position and the next positive missing number would be the next to the last item in the array.<br>

```javascript
var firstMissingPositive = function(nums) {
  if (nums === null || nums.length === 0) return 1

  let n = nums.length,
    containsOne = false

  //STEP 1
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      containsOne = true
    } else if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 1
    }
  }

  if (containsOne === false) return 1

  //STEP 2
  for (let i = 0; i < n; i++) {
    let index = Math.abs(nums[i]) - 1
    //check for positive numbers and flip their sign
    if (nums[index] > 0) {
      nums[index] = -nums[index]
    }
  }

  //STEP 3
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1
    }
  }

  return n + 1
}
```

Thanks for sticking till the end. If you have scratched your head enough and got through this, you probably want another one from leetcode. Happy Coding. Cheers!
