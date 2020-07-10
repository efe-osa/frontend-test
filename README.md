# Hola! :wave:,

First of, thank you for considering Reliance Health as a place to work. We pride ourselves on the beautiful things we can do with technology, and we'll absolutely love you have you join us in our journey to reshape healthcare across Africa.

Frontend Engineers at Reliance Health are responsible for the client facing applications that our users interact it. 
These dashboards are mostly built with React, so thats what you're required to use to solve this assessment.

The assessment is divided into two sections.

- A quiz section (10 questions, 15mins)
- A coding section (6 questions, 3 hrs 45mins)

So, you have a maximum of 4 hours to complete the assessment and upload your submission. Feel free to submit in less :sunglasses:.

### Ready?
Awesome! Clone this repo to your local machine, and jump right in.

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

---

# Section 2: Code
This is where you get your hands dirty. The tasks below try to simulate a real-life work flow as a frontend developer, focusing on using React as your major tool. Judgement will be made not solely on completion of the tasks, but also other factors such as: Knowledge of fundamental javascript concepts, code refactoring and optimization, use of best practices etc.

## SET UP:
If for some reason you haven't cloned this repo already, do it now

And then:
```
npm install
npm run start
```

## API
API docs can be found [here](https://pro-zone.herokuapp.com/documentation/v1.0.0)

Use any of the following tokens to authenticate the requests:

| user| token|
| ----- | ------ |
|1|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk0MTgzMzUwLCJleHAiOjE1OTY3NzUzNTB9.SS17FWeuomLQxAqyIEiPk0hTjLcKjh91XpM6U2X7dkM|
|2|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTk0MTg1NDczLCJleHAiOjE1OTY3Nzc0NzN9.BNp8WsyYR0WucmfuCxg_hrVZXTrgj0--lwTnyO-IBBg|

## Instructions:
PLEASE NOTE: You're not to use any external libraries, other than the ones already provided.

### Task 1 (JSON Search):
Write a function that searches through the input array / object
and returns the appropriate string path leading to the input query, if found.
Reference: `/utils/utils.js`

### Task 2 (Client Side Filter):
Add functionality to the input field, such that any input provided, filters the available providers based on their Name, address or Type. 
Hint: The JSON search function you wrote earlier should come in handy here.
Reference: `/layouts/ExplorePage.jsx`

### Task 3 (Component):
#### TASK 3a:
Complete the Gallery component to include functionality
On click on left or right arrows, the gallery should change its image
On click of the thumbnails, the image selected should be updated as well
On click of the "Read more" button in the selected Image, it should redirect to the Selected Provider View.

Heres what it should look like when you're done:
<br>
![alt text](src/gallery.gif "Gallery Component")



#### Task 3b:
Write tests for the Gallery component. Tests should be written in the Gallery.spec.js file in the __tests__ folder.
Reference: `/components/ProviderGallery.js`

### Task 4 (Component):
On the Explore Page, onClick of a view preference, write functionality to all switching across the different view options (Gallery, List, Grid) based on whatever the user selects.
Reference: `/layouts/ExplorePage.jsx`

### Task 5 (Form Submission)
Complete the NewProviderForm to allow creation of new Providers.
Reference:
`/components/forms/NewProviderForm.jsx`

### Task 6 (View / Edit Provider)
Add functionality in all places necessary to navigate to a new route for viewing a selected provider.
Add functionality to edit provider details (Name, Address, Description, Type, Active Status)
Add functionality to upload images for the provider.
Use existing styles, or add new ones if you want to :)
Reference:
`/layouts/ViewProvider.jsx`


### All Done?
Awesome! Feel free to improve and optimize the codebase however you like. Ensure you mention whatever optimization you made in the submission mail though, along with the thought process behind it as well.


### Submission
Once you're done with your assessment, push your submission to a github repo, head over to [this link](rel.hm/jpx5o) and provide your submission url. You can also include any of information you think we need to know in the email (Interesting stuff you did, constraints, suggestions etc.). 

Best of luck! :v:

