# 00-Reading-Test-Specs
<hr>

### Overview

The proper workflow (and best practice) for TDD (Test Driven Development) is to first write tests, then create the code that passes the tests.  To become familiar with reading tests, we are taking an opposite approach for the first series of tests in TestFirst.

#### Hello Function

For each test spec (a spec is an individual test) replace the `FILL_ME_IN` sections of the tests with the values the passing code would return.

The code that passes the tests is located in the `hello.js` file.  Based on that code, replace all the areas that say FILL_ME_IN with the expected value.  Don't forget to make the expected value the proper data type, a string, boolean, array, etc should reflect the proper syntax.

#### Add Function

The add function adds two numbers together.  The first spec passes but the second doesn't.  Our Test Spec is using a global variable and adding the return value from the add function on to it's value.
How can you "re-assign" the global variable to 0 after each Test Spec?  Review the [beforeEach](https://jasmine.github.io/2.0/introduction.html#section-Setup_and_Teardown) function, add an assignment expression in the `beforeEach` code block that re-assigns the global variable `returnValue` back to 0.
 
<hr>

