---
title: Find the Duplicate Number
description: Tortoise and Hare Cycle Detection Algorithm.
date: 2020-03-16
category: 'leetcode'
draft: false
---

Today we are going to look at one of my favorite coding question from [Leetcode](https://leetcode.com/), and that is finding the duplicate in an array. You are basically given an array of (n + 1) integers where each integer is between 1 to n (inclusive).

So according to the Pigeonhole principle there is atleast one number in the array that repeats twice, and we have the task of finding that number. If you haven't understood the problem quite yet, don't worry we would thoroughly look and comprehend the problem statement below.

## Problem Statement:

Given an array nums containing (n + 1) integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

**Example 1:**

```
Input: [1,3,4,2,2]
Output: 2
```

**Example 2:**

```
Input: [3,1,3,4,2]
Output: 3
```

**_Constraints:_**

- You must not modify the array (assume the array is read only).
- You must use only constant, O(1) extra space.
- Your runtime complexity should be less than O(n2).
- There is only one duplicate number in the array, but it could be repeated more than once.

## Lets get to solving...

You may imagine this is not really a hard problem until you have your eye on the constraints. Yes, you guessed it right. You are only allowed to solve this problem in constant space or O(1) space, and in no means you are allowed to modify the array. It is an immutable array.

If by any chance, you thought of sorting the array, you could possibly get the results undoubtedly, but that wouldn't itself be the most efficient solution. We are talking the most efficient solution here.

The most intuitive solution that one can imagine is possibly sorting the array and doing a linear scan to find the desired number. But, since I will be solving this in 3 different techniques, I wouldn't bother doing the sort for this problem. I have another one for you.

## APPROACH-1

#### Extra Space (Inefficient)

#### `Time-O(n)` | `Space-O(n)`

The idea behind this approach is to use a Set. We run through the array and put the items of the array into the Set, and since a set only contains unique values, therefore the next time we see a number already in the set, we know that we have found the number we have been looking for.

But whats the problem with this approach? The problem is that a Set takes up extra space and we would no longer be able to solve this problem in O(1) space.

```javascript
var findDuplicate = function(nums) {
  let set = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i])
    } else {
      return nums[i]
    }
  }
}
```

Let us look at another approach that seems a bit better.

## APPROACH-2

#### Array Manipulation (Inefficient)

#### `Time-O(n)` | `Space-O(1)`

The idea behind this approach is to iterate through the array and convert all the items in the array to its negative. And while we iterate, if we run through a number that is already a negative that means we have reached a point of endless loop, and essentially found the number we have been looking for.

But guess, what's the problem with this approach. This time we don't have a Set so we don't have to worry about doing it in O(1) space. But the problem is that we have altered the items in the array which we weren't supposed to. The array is immutable, REMEMBER?

In the next approach we are going to look at how we can solve this problem without violating any rules, but, before that let us have a look at the solution code for this approach.

```javascript
var findDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i])] > 0) {
      nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])]
    } else return Math.abs(nums[i])
  }

  return 0
}
```

It is finally time that we look at the most efficient solution. Let us straight get into it.

## APPROACH-3

#### 🚀 Floyd's Cycle Detection Algorithm (Optimised)

#### `Time-O(n)` | `Space-O(1)`

The idea behind this approach is to use the **"Floyd's Cycle Detection Algorithm"** aka **"Tortoise and Hare approach"**. If you don't already know what a Floyd Cycle Detection Algorithm essentially means, I would recommend you to visit this [link](https://cs.stackexchange.com/questions/10360/floyds-cycle-detection-algorithm-determining-the-starting-point-of-cycle).

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let tortoise = nums[0]
  let hare = nums[tortoise]

  while (tortoise != hare) {
    tortoise = nums[tortoise]
    hare = nums[nums[hare]]
  }

  tortoise = 0

  while (tortoise != hare) {
    tortoise = nums[tortoise]
    hare = nums[hare]
  }

  return hare
}
```

That is it. That's a wrap for this problem. We now know three different techniques to solve the problem for finding the duplicate in an array. Next time you encounter the same problem you wouldn't miss your shot. Happy Coding.
