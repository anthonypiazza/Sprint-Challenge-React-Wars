# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Functional Components and Class Components. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency ReactJS Fundamentals and your command of the concepts and techniques in the Function Components and Class Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a JS library that was built to simplify the creation of large-scale web applications that take in a lot of changing data. 
Facebook first created the library to help with their own scalability issues. 

- [ ] What does it mean to _think_ in react?

To think in React means to consider the flow of data when coding the application. You must be sure to link state and props correctly from parent to child components and consider which component requires which props/imports.

- [ ] Describe state.

State is known as the 'heart of the application' as it holds the data that you will refer to throughout the app.

- [ ] Describe props.

Props is a reference call from child components to the parent components state. In order to call props 'properly' you must define props on the child element you wish to call it on when you declare it in the parent file's JSX render.

- [ ]  What are side effects, and how do you sync effects in a React component to state or prop changes?

-----A side effect is anything that affects something outside the scope of the function being executed
     i.e) API calls, timeouts, loggers, DOM manipulation

-----We can sync side effects with state/props changes by passing in a dependency array as the second argument to the effect hook that specifies for the useEffect hook to only fire when a certain prop/state changes

-----If an array is not passed in after the callback function, the effect will fire after any changes creating an endless loop bc each time it fires it triggers itself again due to no change restrictions
 
-----If you only want useEffect to fire on an initial mount -> set dependency array to empty array (once useEffect has fired once it will never be empty again so useEffect will not refire)

## Project Set Up
Project Set Up
Follow these steps to set up and work on your project:

 Create a forked copy of this project.
 Add PM as collaborator on Github.
 Clone your OWN version of Repo (Not Lambda's by mistake!)
 Create a new Branch on the clone: git checkout -b <firstName-lastName>.
 Change directories into ./starwars (cd starwars) and run yarn install or npm install to retrieve all needed dependencies.
 Once you have installed the node_modules, run yarn start or to get your server up and running.
 With the server up and running, open Chrome and head over to localhost:3000 and view your beautiful app. Maybe it's not that pretty... yet, your goal is to ensure this project becomes a thing of beauty. Follow these steps for completing your project.
 Implement the project on this Branch, committing changes regularly.
 Push commits: git push origin <firstName-lastName>.
Follow these steps for completing your project:

 Submit a Pull-Request to merge Branch into master (student's Repo).
 Add your Project Manager as a Reviewer on the Pull-request.
 PM then will count the HW as done by merging the branch back into master.
Minimum Viable Product
Your finished project must include all of the following requirements:

 Fetch a list of Star Wars characters from the Star Wars API (or SWAPI) and render them to the screen.
 Follow the documentation to learn how to fetch a list of "people". However, don't spend too long on this. Here is a link for you to follow if you've looked around the docs for about 15 minutes or so and haven't found where to go - Secret Link to Awesomeness 🤫
 Set the data you fetch to state
 Map over the list and render a component for each character on the page
 You must have at least one element for each star wars character in the data set
 The elements must be styled with either SemanticUI or styled-components - don't rely on browser default styles
 Finally, add at least two snapshot tests
Required best practices:

 Consistent naming. Examples: variables, functions, classes, and files.
 Consistent spacing. Examples: line breaks, around arguments and before/after functions.
 Consistent quotation usage.
 Spell-check.
 Schedule time to review, refine and reassess your work.
It is better to submit a challenge that meets MVP than one that attempts too much and fails.

Stretch Problems
 Build a pagination system that will allow you to load the next page of data

console.log() the data coming back from the server
Notice that there are next and previous fields that give you a URL
You can build a function that will get characters called getCharacters that you can use dynamically to get the next or previous set of characters. You would need to supply it with the proper fields, and you'll need to set up more state to do this
 Build another app from scratch that looks very similar to this one. Inside of your main App component fetch some data in this same fashion from this url https://dog.ceo/dog-api/#all you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.