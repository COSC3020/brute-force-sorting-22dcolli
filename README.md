[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Note: I consulted Ishita Patel on how to best adress the feedback given

Answer:

Best Case:I believe that logically the best case scenario would be if the given array happened to be in the correct order already, then the algorithm would just have to go through and check one time, which would have the runtime in the best case be $\Theta(n)$.

Worst Case:I think the worst case would be if the program had to generate every single possible variation of the given array to find the correct one, we observe that with every new element that is in our array, the possible permutations increases by another factor. I believe that this would mean the complexity would then be factorial because for say an array of 5 elements there are different combinations of those 5 elements, or put more simply $5!$. This lead me to the conclusion the complexity would be $\Theta(n!)$, however you also have to take into account that for each new permutation, you have to check over every single other previous permutation to see if it matched any of them, then you also have to check to see if the new permutation is the correct one before moving on. I believe that leaves us with $\Theta(n * n!)$ instead of the innitial $\Theta(n!)$ I thought was correct.

Random: I believe that the complexity would also be infinite if the permutations happened randomly, because statistically it is possible for the correct permutation to simply never appear.
