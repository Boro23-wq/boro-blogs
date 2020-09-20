---
title: Coin Change (Leetcode - 322, 158)
description: An essence of Dynamic Programming.
date: 2020-08-05
category: 'leetcode'
draft: false
---

The Leetcode Coin change problem has two different variants that we are going to discuss today.

- The first problem entails minimum number of given coins as denominations required to make up a given amount.
- The second problem entails all possible combination of coins given as denominations to make up a given amount.

## Problem Statement - 1:

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

**Example 1:**

```
Input: coins = [1, 2, 5], amount = 11
Output: 3
```

<i>Explanation: 11 = 5 + 5 + 1`</i>

**Example 2:**

```
Input: coins = [2], amount = 3
Output: -1
```

_Note:_
You may assume that you have an infinite number of each kind of coin.

---

## Efficient Solution (Bottom-Up Approach):

#### `Time - O(A * C)` | `Space - O(A)`

```javascript
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const memo = new Array(amount + 1)
  memo.fill(amount + 1)
  memo[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        memo[i] = Math.min(memo[i], 1 + memo[i - coins[j]])
      }
    }
  }

  return memo[amount] > amount ? -1 : memo[amount]
}
```

## Problem Statement - 2:

You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount.

_(You may assume that you have infinite number of each kind of coin.)_

**Example 1:**

```javascript
Input: (amount = 5), (coins = [1, 2, 5])
Output: 4
```

<i>Explanation: there are four ways to make up the amount: <br/>
5 = 5, 5 = 2+2+1, 5 = 2+1+1+1, 5 = 1+1+1+1+1.</i>

**Example 2:**

```javascript
Input: (amount = 3), (coins = [2])
Output: 0
```

<i>Explanation: the amount of 3 cannot be made up just with coins of 2.</i>

**Example 3:**

```javascript
Input: (amount = 10), (coins = [10])
Output: 1
```

<i>Explanation: The amount '10' can only be made up using just '1', 10 coin that is available.</i>

**_Note:_** _You can assume that:_

- 0 <= amount <= 5000
- 1 <= coin <= 5000
- the number of coins is less than 500
- the answer is guaranteed to fit into signed 32-bit integer

## Efficient Solution (Bottom-Up Approach):

#### `Time - O(n)` | `Space - O(m \* n)`

```javascript
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const n = coins.length
  const dp = Array(amount + 1).fill(0)

  dp[0] = 1

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      /** dp[j] -> combinations for the current amount 'j' without using the current coin.
      dp[j - coins[i]] -> combinations after using the current coin.**/
      dp[j] = dp[j] + dp[j - coins[i]]
    }
  }

  return dp[amount]
}
```

The above solutions can also be solved using Top down approach but I have only implemented Bottom up approach since they are more effecient and easy to understand.
