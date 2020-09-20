---
title: Max Contiguous Subarray Sum (Kadane's Algorithm)
description: Cubic time to Linear time using Kadanes Algorithm.
date: 2020-08-03
category: 'leetcode'
draft: false
---

Today we are looking at a very easy and convenient coding question to introduce you to the essence of Dynamic Programming and how can one implement dynamic programming to optimise complexities.

We are going to approach the problem step-by-step and we will identify solutions as bad as a cubic time or quadratic time solution and optimise them to give us a solution in linear time.

## Problem Statement:

Given an integer array 'nums', find the contiguous subarray **(containing at least one number)** which has the largest sum and return its 'sum'.

_Example:_

```java
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6

Explanation: [4,-1,2,1] has the largest sum = 6.
```

> **_Follow up:_** If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

## Approach-1

#### `CUBIC TIME - O(n^3)`

```java
/*
      The outer 2 'for' loops will look through
      all possible windows in the array.

      We fix 'left' value and move 'right' value
      from that 'left' fixed value.

      Once we hit the rightmost end we now move the 'left' value by one
      and yet again move 'right' from the 'left'.
    */
    for (int left = 0; left < n; left++) {
      for (int right = left; right < n; right++) {
        // Let's investigate this window
        int windowSum = 0;

        // this loop takes care of all the items
        // within the left and the right bound
        for (int k = left; k <= right; k++) {
          windowSum += nums[k];
        }

        // Find the max
        maximumSubArraySum = Math.max(maximumSubArraySum, windowSum);
      }
    }

    return maximumSubArraySum;
  }
}
```

Here in Approach-1 we see, for every window we do the same repitive checks which is not optimal. Let us look at Approach-2 for a better efficiency.

## Approach-2

#### `QUADRATIC TIME - O(n^2)`

```java
class Solution {
  public int maxContiguousSubarraySum(int[] nums) {
    int n = nums.length;
    int maximumSubArraySum = Integer.MIN_VALUE;

    for (int left = 0; left < n; left++) {
      int runningWindowSum = 0;

      for (int right = left; right < n; right++) {
        runningWindowSum += nums[right];

        // Does this window has the best sum we have seen so far?
        maximumSubArraySum = Math.max(maximumSubArraySum, runningWindowSum);
      }
    }

    return maximumSubArraySum;
  }
}
```

Here in Approach-2, we do repititive checks as well. Well, how can we avoid this repitive checks that makes our algorithm perform slower. The answer for this is Dynamic Programming.

- The intuition behind Dynamic Programming is that we can reuse overlapping subproblems and solving these subproblems can help us solve the bigger problem.

</br>

- Dynamic Programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming.

</br>

- The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later.

</br>

Let us implement our solution using Dynamic Programming on our next approach.

## Approach-3

#### `LINEAR TIME - O(n)`

> Heavy comments for you to understand what goes through each step.

```java
class Solution {
  public int maxContiguousSubarraySum(int[] nums) {

    // The best maximum seen so far is the first
    // element.

    //  The the best max ending at the first element
    // is...the first element itself.

    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];

    // We will loop through all the items in the array from index
    // 1 onward.
    for (int i = 1; i < nums.length; i++) {

      maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);

      // Did we beat the 'maxSoFar' with the 'maxEndingHere'?
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
  }
}
```

</br>

And there we go, we have solved the problem to find max contiguous subarray sum using Dynamic Programming. We have seen how we can optimise a cubic time solution to something as good as a linear time. So, next time you encounter a recursive problem that needs to perform repititive tasks, don't hesitate to use Dynamic Programming.

Happy Coding.
