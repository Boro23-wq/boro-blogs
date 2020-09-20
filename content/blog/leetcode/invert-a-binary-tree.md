---
title: Invert a binary tree
description: Invert a binary tree recursively using pre-order traversal.
date: 2020-08-17
category: 'leetcode'
draft: false
---

#### <ins class="sub-easy">LEETCODE EASY</ins>

This problem was inspired by the original tweet by Max Howell from Google:

> 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f\*\*\* off.

## What is inverting a binary tree anyway?

A Binary Tree inversion, simply means swapping the left and the right child​.

![binary-tree](https://www.educative.io/api/edpresso/shot/5074915612950528/image/6228354095120384)

## Algorithm for Inverting

- Check if there is atleast one node. If only one node, return the node.
- Recursively call for inversion on the left-subtree of the current node.
- Also, recursively call for inversion on the right-subtree of the current node.
- Finally, swap the left and right sub-tree.

We perform a **_pre-order_** traversal of the tree where at every node we swap its left and right child node before eventually inverting the left and the right sub-tree.

## Solution code :

#### JAVA

```java
class Node
{
	int data;
	Node left = null, right = null;

	Node(int data) {
		this.data = data;
	}
}

class Main
{
	public static void preorder(Node root)
	{
		if (root == null) {
			return;
		}

		System.out.print(root.data + " ");
		preorder(root.left);
		preorder(root.right);
	}

	public static void swap(Node root) {
		if (root == null) {
			return;
		}

		Node temp = root.left;
		root.left =  root.right;
		root.right = temp;
	}

	public static void invertBinaryTree(Node root)
	{
		if (root == null)
			return;

		swap(root);

		invertBinaryTree(root.left);

		invertBinaryTree(root.right);
	}

	public static void main(String[] args)
	{
		Node root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);
		root.right.left = new Node(6);
		root.right.right = new Node(7);

		invertBinaryTree(root);
		preorder(root);
	}
}
```

## Complexity Analysis

For the above recursive approach, the Time Complexity is O(n)</ins>, where 'n' is the number of nodes we have to traverse, while the Space Complexity is O(h)</ins>, ('h' recursive calls to the call stack) where 'h' is the height of the tree.
