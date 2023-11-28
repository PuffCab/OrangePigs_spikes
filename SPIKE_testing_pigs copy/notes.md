# TESTING

The process of developing a software/app/website at a big scale is long and complex, with frequently many actors involved. To be able to check that a software does what is supposed to, or if the latest addition to the codebase _breaks the code_, introduces a new bug in an unexpected place, reduces the performance of the app, or impacts the user experience in any aspect, the need of introducing, became a necessitiy since the early days of the software industry.
The same way any manufacturing company has its own Quality Assurance protocols and measures, to assure the quality of every product, Software companies started to develop some sort of testing since early.
Already in 1997 a unit test frameworknamed JUnit was released.
Google started to implement automated testing around 2006.

Tests can be implemented in many ways, but after years of using them, some practices have been proved as quite effective and beneficial for the process software developing : __Test Driven Development (TDD)__ and __Behaviour-Driven Development (BDD)__.

## Behaviour-Driven Development (BDD)

Focuses on defining the behaviour of a software from a user's perspective, addressing user's needs and specifying how the software should function.
Tests are defined as the same time as the features are planned, therefore, if those tests are passed, the features are also correct.
Tests should be defined using simple, but precise words.
For example:

```text
FEATURE : Submit message Button
    A user should be able to send a text message by clicking on a button. The newly sent message should appear at the bottom of the message list on the screen.

SCENARIO: User Inputs Text
GIVEN the user is on a page displaying a list of messages and an input field
AND the user has entered a some text
WHEN the user clicks the 'send' button
THEN the message is displayed at the bottom of the previous messages.
```

It evolved from TDD, which aims to create clean code that satisfies the requirements.

Usually, a well designed BDD testing is built vertically, involving every stakeholder in the process, technical and non technical, from  product owners, managers, business analysts, devs, testers/QA engineers, scrum masters, customer support, etc... .

Both BDD and TDD offer a modern and effective way of establishing a robust testing framework. THe choice between any of them is basically a strtegic decision of the organization.

Since TDD is more focused on the process of developing software, and can be done by just developers, we will direct our focus towards it.

## Test-Driven Development - TDD

TDD is a software development methodology that emphasizes writing tests before writing the actual code.
The primary goal of TDD is to ensure that the codebase is reliable, maintainable, and correctly implements the desired functionality.

### TDD process

1- __Unit Test Creation__: In this step, a developer writes a test case that defines the expected behavior of a specific piece of functionality. This test initially fails because the code to fulfill that functionality hasn't been implemented yet.

2- __To Write the Code__: Once the test is in place, the developer writes the minimum amount of code required to make the test pass. The focus is on making the test case pass, rather than creating a complete solution at this stage.

3-__Code Refactoring__: After the test case passes, the developer can refactor the code to improve its design, structure, and efficiency, while ensuring that all tests still pass. Refactoring helps maintain the code's quality and readability.

This cycle repeats for every new feature, bug fix, or enhancement that needs to be implemented. By continuously writing tests and then implementing code to satisfy those tests, TDD promotes a few key benefits:

 -__Better Code Quality__: TDD encourages developers to thoroughly think through requirements before writing code, resulting in more well-designed and well-structured solutions.

 -__Improved Test Coverage__: TDD ensures that most if not all of the codebase is covered by tests. This helps identify and fix issues early in the development process.

 -__Early Bug Detection__: Since tests are written before the code, any bugs or discrepancies are detected early in the development cycle, making them easier and less costly to fix.

 -__Clearer Specifications__: Writing tests acts as a form of documentation and serves as clear specifications for the desired behavior of the code.

 -__Confidence in Refactoring__: With a comprehensive test suite, developers can confidently refactor and modify code without fear of introducing new bugs or breaking existing functionality.

 -__Support for Collaboration__: TDD provides a common language between developers, testers, and stakeholders, as the tests act as a common reference for expected behavior.

While TDD can have a learning curve and might appear slower initially due to writing tests first, it can lead to faster development, reduced debugging time, and more maintainable code in the long run.

### Types of TDD: ATDD and DTDD

1. __Acceptance TDD (ATDD)__ : is very similar to BDD (Behaviour-Driven Development). The key distinction lies in their primary focus, being mainly accuracy of the requirements in ATDD, and while BDD is more focused on user behaviour.

2. __Developer TDD (DTDD)__ : a more basic approach in which the developer writes the unit test before writting the code to pass it.

### Caveat of TDD

- Maintainability and resources
- More tests !== better code
- Understanding of what to test, and what for is complex.

## Types of Tests

Regardless of any of the previous approaches to testing, these are some of the types of tests that could be performed in a code base:

- __Unit tests__: Unit tests focus on testing individual components or functions of the software in isolation. These tests help verify that each piece of code (e.g., functions, methods, classes) works correctly. Unit tests are typically written and executed by developers and are often automated.
Some of the common libraries for this tests: Jest , React testing library, Enzyme, Vitest

- __Integration tests__: Integration tests check how different components or modules of the software work together when combined. They ensure that the integrated parts of the application function as expected. Integration tests can uncover issues that unit tests might miss.
Some libraries: Jest , React testing library, Enzyme, Spring Boot Test

- __Functional Tests__: Functional tests evaluate the software's functionality by testing it against the specified requirements and user expectations. These tests ensure that the software performs its intended functions correctly. Functional tests are often written in a way that simulates user interactions with the application, like the login of an user using a form.
Some libraries: Selenium, Cypress, Appium.

- __End-to-end (E2E)__ tests: Like the Functional Tests, these tests verify that the application is working correctly from the user's perspective, by simulating user actions and checking that the expected output is produced, but including the whole process(e.g. verify the functioning of a chat would require to test navigating to the url, login, navigate to chat, create/send/modfiy/delete/reply a message, and finally logging out ).
They are usually performed by technical testing teams or quality assurance (QA).
Some libraries: Pupeteer, Cypress.

- __Snapshot tests__: These tests take a snapshot of the rendered component and compare it to a reference snapshot(like comparing it to a previous picture). If the component has changed in a way that is not expected, the test will fail.
Some libraries: Jest, React testing library, vitest

- __Regression Tests__: tests performed to ensure that new code changes or feature additions do not introduce new bugs or regressions into the existing functionality of the software. They help maintain the software's stability over time.
Some libraries: TestNG, Selenium.

- __Security Tests__: Security tests evaluate the software's vulnerabilities and weaknesses related to security (e.g. unauthorized user access).
Some libraries: Burp suite, OWASP ZAP.

- __Load Tests__: they simulate the expected load on the software to assess its scalability and performance under peak usage conditions.
Some libraries: APache JMeter, Locust.

- __Compatibility Tests__: to check how the software performs on different platforms, devices, browsers, or operating systems.
Some libraries: Sauce Labs, BrowserStack.

- __Accessibility Tests__: these tests assess the software's compliance with accessibility standards to ensure that it can be used by individuals with disabilities.
Some libraries: axe-core, WAVE(Web Accessibility Evaluation Tool).

- __Acceptance Tests__: Acceptance tests, also known as user acceptance tests (UAT), are conducted to determine if the software meets the acceptance criteria defined by the stakeholders, such as product owners or end-users. They ensure that the software fulfills its intended purpose.

- __Performance Tests__: Performance tests assess how well the software performs under different conditions, such as heavy loads, high traffic, or resource constraints. These tests help identify performance bottlenecks and optimize the software's performance.

- __Usability Tests__: Usability tests assess the software's user-friendliness and overall user experience. They involve real users interacting with the software to provide feedback on its user interface, navigation, and ease of use.

- __Exploratory Tests__: Exploratory testing is an unscripted approach where testers explore the software to discover unexpected issues, defects, or usability problems. Testers use their creativity and domain knowledge during exploratory testing.

- __Alpha and Beta Tests__: Alpha and beta tests involve releasing early versions of the software to a limited group of internal or external users for real-world testing and feedback before the final release.

- __Smoke Tests__: Smoke tests are quick, basic tests performed to check if the software build is stable enough for more comprehensive testing. They help identify critical issues early in the development cycle.

- __Sanity Tests__: Sanity tests are a subset of tests performed to quickly check specific functionalities after code changes. They ensure that basic functionality remains intact.

The choice of which types of tests to use depends on the project's requirements, goals, and the specific aspects of the software being developed. Effective testing strategies often involve a combination of these test types to comprehensively evaluate the software.

[jest](https://jestjs.io/)
[Vitest](https://vitest.dev/)
[react testing library](https://testing-library.com/docs/)
[cypress](https://docs.cypress.io/guides/overview/why-cypress)

## Setup

1. install as dev dependecies (`npm install --save-dev`) the following packages: `vitest` , `@testing-library/react` , `@testing-library/jest-dom`.
After that, the `package.json` should be similar to this :

 ```json
  ,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.1.3",
    "@testing-library/react": "^14.0.0",
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "vite": "^4.4.5",
    "vitest": "^0.34.6"
  }

```

2. Inside `src/` , create a `test` folder , and insde a `setup.js` file -> `src/test/setup.js`.

3. Update `vite.config.ts` file, to add a `test:{}` object property.

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals:true,
    environment: 'jsdom',
    setupFiles:['./src/test/setup.js']
  }
})
```

4. Inside `setup.js` , import _jest_ -> `import "@testing-library/jest-dom"`.

5. Create a new script in `package.json` to start testing, running _vitest_.

 ```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "vitest"
  },
 ```

 when executing `npm run test` , we will execute _vitest_ in our terminal. From there we can check the result of the tests, repeat them, and other options.

6. Optionally, install VSCode extension [__Vitest__](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer). It is a test runner, to help us run them and check the output.

7. Create a file with the extension `.test.jsx` (or `.tsx` for TS) to write the tests. e.g. to write tests for the `App.jsx` component, create a `App.test.jsx` file. Those files will be executed by our test runner.

8. To organise our tests, two of the most common ways are:

   1. Next to the component file. Create a folder for each component, inside will be the component file and the test file: e.g. we create a Home folder inside src `src/Home` and inside `Home.jsx` and `Home.test.jsx`.

   2. Inside `src`, create a `__test__` folder and put the test files inside.

## Structure of a Test

```javascript
//import dependencies needed
import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
//import components/elemenst that are gonna be tested
import App from "./App"

// Test declaration, what the the test should do. 
//Written in an assertive way: "renders...", "loads...", "should display..."
test("renders text vite + React in Header element", () => {
  // ARRANGE 
    render(<App />);

  // ACT
    const headerText = screen.getByText("Vite + React");

  // ASSERT
    expect(headerText).toBeInTheDocument()
})
```

Inside the same file, we can group tests by using the method `describe()`. E.g. grouping the tests made for the navigation bar of a component.

```javascript
describe("testing MyNavbar", () => {
  //"it()" is an alias for "test()", to make it more readble. No different functionalities.
  it("should render nav element", () => {
    render(<MyNavbar />);
    const nav = screen.getByRole("nav");
    expect(nav).toBeInTheDocument()
  })

  it("should render 3 links", () => {
  render(<MyNavbar />);
  const links = screen.getAllByRole("link");
  expect(links.length).toBe(3)
 })
})
```

## Some methods for testing

- __Testing with events__

```javascript
test("should input.....", () => {
  render(<Home />);

//select the element by role, or test-id, or textConten, or any other
  const textInput = screen.getByRole("textbox");

  //we fire the event, and later we reproduce the content of the event's object {target: {value:...}}
  fireEvent.change(textInput, { target: { value: "hello" } });
  expect(nameInput.value).toBe("hello");

  const button = screen.getByRole("button");
  fireEvent.click(button)  //button is clicked

  const check = screen.getByRole("checkbox");
  fireEvent.change(check, { target: { checked: true } }); //checkbox is checkd
  expect(check.checked).toBe(true);

});

```

More [info]("https://testing-library.com/docs/dom-testing-library/api-events/")

- __Testing Async Code__

We might have code that is asynchronous , like a modal that takes some time to appear (e.g. using `setTime0ut()`), or something that changes after a `fetch()` is finished.
We can make our `expect()` wait until the previous process finished.

```javascript
test("a modal is visible after clicking on the button", async () => {
  render(<Home />);

//this modal depends of an asynchronous event triggered when we click a button
  const modal = screen.getByTestId("my-modal");

  const button = screen.getByRole("button");
  fireEvent.click(button) 

 await waitFor(() => {
    expect(modal).toContain("user logged in");
  });

});

```

⚠️Be careful!⚠️ , the method `waitFor` can take an object of optional options as second parameter `waitFor(()=>{}, {})` in which we can finetune the behaviour of it. One of those options is `timeout`. And the default value, if not specified otherwise, is 1000ms. Therefore , if we use a `setTimeOut()` with a different duration, we need to specify that amount of time as option

 ```javascript
 await waitFor(() => {
    expect(modal).toContain("user logged in");
  }, {timeout:2000});
 
 ```

-__Snapshot Tests__

This type of test is possibly the quickest and simplest to make.
When run for the first time, takes picture of the HTML structure of a component/element, and stores it in a `__snapshots__` folder. The successive times it runs, it will compare the current DOM structure of that component with the one in the snapshot.

```javascript
test("navbar  snapshot", () => {
  const { container } = render(<MyNavbar />);
  expect(container).toMatchSnapshot();
});
```
