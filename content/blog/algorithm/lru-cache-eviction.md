---
title: Cache Eviction Policy - LRU
description: Least Recently Used cache eviction policy.
date: 2020-03-21
category: 'algorithm'
draft: false
---

![](./assets/lru-cache.png)

If you are a Computer Science or an IT student you are very likely familiar with the word 'cache', or if your not one, you may have still heard of the word. Well the other day, I was on a problem that had me implement an LRU Cache essentially. LRU stands for Least Recently Used, and that is one of the many eviction policies a cache depends on.

Now you might ask what are these _Eviction Policies_ that we are talking about ?

As we all know everything has a limit, and the same way caches have bounds too. That essentially means we can't store infinite amount of information on a cache at a time.

If the cache hits its bound (doesn't have empty space), we are supposed to pursue any of the eviction policies, so they can accept more items and the items that are not frequently used are laid off from the cache in order to free some room.

So a great way to understand a cache is to know how it works and what eviction policies it follows. So today, we have for you the "Least Recently Used Eviction Policy", that we are going to discuss and probably implement as well on another blog that will be a follow-up after this blog.

## Overview:

A Least Recently Used (LRU) Cache organizes items in order of use, the most recently used item will always appear towards the head of the cache and the least recently used item will appear towards the tail end (if you can imagine a cache as an array of blocks)

## Advantages:

- Fast access.
- Since LRU cache organizes items in order (most-recently used to least-recently used), accessing items in a cache takes O(1) time.
- Super fast updates. Each time an item is accessed, updating the cache takes O(1) time again.

## Disadvantages

- Space heavy.
- An LRU cache tracking (n) items requires a doubly linked list of length (n), and a hash map holding (n) items.
- That's O(n) space.

## Why do we need cache?

Cache is important because it improves the speed of data retrieval. It stores program instructions and data that are used repeatedly in the operation of programs that the CPU is likely to need next.

And also reading data from a cache takes less time than reading it from a hard disk.

## LRU Eviction Policy:

> Note : An LRU cache is implemented using a HashMap and Doubly Linked List under the hood.

Let us cement the knowledge of LRU Cache using the following example.

<br/>

![lru-cache](./assets/LRU-Cache-1.png)

<br/>

> Let us assume 'n' = 3, where ('n' --> cache size/limit).

<br/>

The LRU Eviction Policy follows the steps below:

- Since, at first we don't have items in the cache, it is repesented in the figure as Head and Tail nodes pointing to each other.

<br/>

- Now, we are adding '1', and since '1' is the very first item in the cache and will be the head of the linked list.

<br/>

- Again, we add '2' to the cache, now since '2' has been accessed very recently, 2 now becomes the head of the linked list. At the same time, 1 is moved further right towards the tail of the linked list.

<br/>

- Now we retrieve '1' again. Since, we have accessed '1', '1' moves towards the head on the third iteration and '2' moves further towards the right (tail end).

<br/>

- We add '3' again and this time, '1' and '2' moves further towards the right to make space for '3' in the head.

<br/>

- Now, we try to add another item '4' yet again. But this time if you notice the cache has a limit of '3' and since the cache already has '3' items in it, it has to remove one in order to make space for another.

<br/>

- In this case the last item '2' will be evicted or thrown out since it appears to be least recently used amongst the three.

<br/>

- Now, '4' occupies the head of the linked list.

<br/>

And that is all regarding the LRU eviction policy. LRU cache basically removes items that are not recently used to make room for items that is or will be frequently used.

An LRU cache is an efficient cache data structure that can be used to figure out what we should evict when the cache is full. The goal is to always have the least-recently used item accessible in **O(1)** time.

<br/>

> There are certainly a lot more eviction policies defined for caches, but we sticked with LRU since it's a very common technique that comes up in coding interviews often.
