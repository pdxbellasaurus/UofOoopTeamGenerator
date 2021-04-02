# Team Profile Generator

## Overview

The Team Profiler Generator is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so the application includes a unit test for every part of the code and it passes each test.

The application uses [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user and [Jest](https://www.npmjs.com/package/jest) for running the unit tests in the `_tests_` directory.

The Team Profiler Generator application is invoked by using the following command:

```
node index.js
```

The unit tests are invoked is invoked by using the following command:

```
npm test
```

The application collects the following inputs from the user:

My Team Details:
* Manager
    * name, employee ID, email address and office number
* Engineer
    * name, ID, email and GitHub username
* Intern
    * name, ID, email and school

## Application Appearance

### The following is an image of the appearance of the command-line application:

<img src="https://user-images.githubusercontent.com/74746211/113387883-02db8e80-9342-11eb-8bbf-c9b17cacf02b.png" alt="Team Page Generator Command-line app" width="600">

## Application Functionality

### Walkthrough video that demonstrates all of the tests passing the application's functionality:

[Walkthrough video that demonstrates its functionality and all of the tests passing](https://user-images.githubusercontent.com/74746211/113387737-bdb75c80-9341-11eb-997c-83f91a551403.mp4)

### The following image shows and [links](./dist/team.html) to a mock-up of the generated HTML’s appearance and functionality:

<a href="./dist/team.html"><img src="https://user-images.githubusercontent.com/74746211/113388239-b2186580-9342-11eb-9983-8f73e7c5dd2a.png" alt="HTML webpage titled “My Team” features three boxes listing employee names, titles, and other key info" width="600"></a>

-----------
UofOoopTeamGenerator

Week 10 Homework | Object-Oriented Programming

© 2021 PDXbellasaurus :sauropod:
