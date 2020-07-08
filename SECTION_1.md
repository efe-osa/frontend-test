# Section 1: Quiz

This section tests your general theoritical knowledge of Javascript, placing focus on ES6 concepts.

## Instructions
Provide an answer to each of the questions below. To select an answer just place an 'x' in the square bracket of the option you're selecting.


### Question 1

What is a Generator function?

- [ ] Generators are functions you can use to generate Promises.
- [ ] Generators are constructor functions.
- [ ] Generators are functions you can pause, exit, and later re-enter without losing context.
- [ ] Generators are functions used to build data streams.


### Question 2

How can you create a custom iterable object?

- [ ] You need to implement the Symbol.iterator yourself on the respective object and
- [ ] assign a generator function to expose the values in the collection.
- [ ] All objects are iterable by default, so you can use the for...of loop to iterate over them from the start.
- [ ] You cannot create custom iterable objects, only built-in objects like Array, Set, and Map are iterable.
- [ ] You inherit the prototype of a built-in.


### Question 3

What does the following code snippet do?

```
const initialArray = [1, -3, 55, 3, null, 1, -3, 15, undefined];
const processedArray = Array.from(new Set(initialArray));

```

- [ ] It creates a bi-dimensional Array by grouping duplicates into their own Array.
- [ ] It creates a new Array with no duplicates.
- [ ] The code does not work, it will throw an error. It filters initialArray for positive values.


### Question 4
Is there anything wrong with the following code snippet?

```
class AwesomeList extends Array { 
    constructor(collection) {
        this.collection = ...collection; 
    }
}

let myAwesomeList = new AwesomeList("123");
```

- [ ] You are trying to extend a built-in reference type, and that is not allowed in JavaScript. The code snippet should work properly.
- [ ] You are extending the Array reference type, but supplying to the constructor a String.
- [ ] You need to call the super() method first


### Question 5

What are the states of a `Promise`?

- [ ] pending, final, refused
- [ ] pending, done, rejected
- [ ] pending, fulfilled, rejected
- [ ] loading, done, refused


### Question 6

You have 2 API endpoints which you can call using GET, but one can be either slower or faster to resolve than the other. How can you choose between the two to fetch the data you need in the fastest way possible?

- [] You have to pick between the two, based on previous experience.
- [ ] You cannot do this in native JavaScript, you would probably need to use a library that handles Promises.
- [ ] You can use the Promise.all method to compare resolution times of the 2 calls against each other and get the result from the one that resolves first.
- [ ] You can use the Promise.race method to race the 2 calls against each other and get the result from the one that resolves first.


### Question 7

How can you wait for 2 HTTP calls to resolve before using the response from both calls?

- [ ] You can use the Promise.all method to supply an Array of Promises which get handled and if both get succesfully resolved, you can use the results from the Promises.
- [ ] You can use the Promise.race on the call you know is faster in order to speed up the HTTP call - and then use the result from that Promise into another Promise.
- [ ] You cannot do this in native JavaScript; you would probably need to use a library that handles Promises.
- [ ] You do one HTTP call and afterwards you do the other HTTP call.

### Question 8

Why is `class` considered syntactic sugar?

- [ ] Because it is a specially designed syntax to make writing prototypal style code in a way similar to classic OOP syntax.
- [ ] It is not actually syntactic sugar, it is a new way to create objects in JS. It is a faster way to write constructor functions.
- [ ] It is a faster way to write IIFEs.


### Question 9

Why is `let` an improvement over `var`?

- [ ] let has the same issues as var: variable leaking, easy to redeclare.
- [ ] let gives you immutability features, while var does not.
- [ ] let is better than var because it allows reassignment.
- [ ] let is an improvement because it introduces the block scope visibility.


### Question 10

How can you avoid using `hasOwnProperty` when iterating over the owned keys of an object?

- [ ] You cannot avoid using hasOwnProperty if you want to iterate over the keys owned by an object and avoid iterating over inherited prototypes.
- [ ] You can use the for ... of loop.
- [ ] You can use a classic for loop.
- [ ] You can extract the owned keys into an Array with Object.keys and iterate over with Array.forEach.

