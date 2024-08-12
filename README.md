# Basic Vite React SPA 

You can find the deployed project at [https://main.d31jepblfu2bff.amplifyapp.com](https://main.d31jepblfu2bff.amplifyapp.com).

## Contributors

|                                              [Mate 1](https://github.com/rjgeng)                                        |                                                       [Mate 2](https://github.com/weijiexi)                                                      |                                                         [Mate 3](https://github.com/mingjungeng)                                         |                                                       [Mate 4](https://github.com/shuhangeng)                                                 |                                                      [Mate 5](https://github.com/JakeHappel)                                                   |
|:-----------------------------------------------------------------------------------------------------------------------:| :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
|       [<img src="https://rfagora.s3.amazonaws.com/pics/rjgeng.jpeg" width = "200" />](https://github.com/rjgeng)        | [<img src="https://rfagora.s3.amazonaws.com/pics/weijiexi.jpeg" width = "200" />](https://github.com/weijiexi)                                   | [<img src="https://rfagora.s3.amazonaws.com/pics/mingjungeng.jpeg" width = "200" />](https://github.com/mingjungeng)                     | [<img src="https://avatars.githubusercontent.com/u/107777649?v=4" width = "200" />](https://github.com/leila-ayad)                                      | [<img src="https://avatars.githubusercontent.com/u/107879414?v=4" width = "200" />](https://github.com/JakeHappel)                             |
|                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/rjgeng)                   |                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/weijiexi)                              |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/mingjungeng)                           |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/leila-ayad)                              |                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/JakeHappel)                              |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/rjgeng/) |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/wxi76)         |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/mingjungeng)  |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://github.com/leila-ayad)             |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://github.com/JakeHappel)                |

<br>
<br>

## Tech stack

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v18.3.1--alpha.2-blue.svg)
![react-router-dom](https://img.shields.io/badge/react--router--dom-v^5.2.0-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
![Less](https://img.shields.io/badge/Less-v^1.17.0-ff69b4.svg)
![antd](https://img.shields.io/badge/antd-v^4.4.3-green.svg)
![redux](https://img.shields.io/badge/redux-v^4.1.2-yellow.svg)
![redux-thunk](https://img.shields.io/badge/redux--thunk-v^2.4.0-yellow.svg)
![Axios](https://img.shields.io/badge/Axios-v^1.7.2-yellow.svg)
![Okta](https://img.shields.io/badge/Okta-v^3.0.2-red.svg)
![Stripe](https://img.shields.io/badge/Stripe-2.6.3-yellow)

- Clone the repo to install it as your own remote.
- run: `npm install` to download all dependencies.
- run: `npm run dev` to start your local development server.

> When using Okta for authentication, the app will need to run locally on port 3000.

### Key Features

- Antdesign for component base
- File scaffolding to organize pages and components
- File scaffolding to organize styles
- React router to handle project routing
- Okta to handle user authentication
- Less for global and component base styles
- Redux for global state management

#### Front end deployed to `Aws Amplify` at [https://main.d31jepblfu2bff.amplifyapp.com](https://main.d31jepblfu2bff.amplifyapp.com).

#### [Back end](https://github.com/4genginc/inc-node-js-be) built using:

- Docker
- Node.js
- Express
- Okta interaction

# APIs

## Authentication API here

For authentication we're using Okta. The Okta flow can be found here: [OktaFlow](https://developer.okta.com/docs/guides/implement-grant-type/authcode/main/#grant-type-flow).

## Payment API here

We are currently working on implementing Stripe for payment processing. The documentation for Stripe can be found here: [Stripe](https://stripe.com/docs/api).

## Misc API here

No misc API's currently being used.

# Installation Instructions

- git clone
- npm install
- npm run dev

## Other Scripts

  * test - runs tests in **tests** directory 
  * eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Documentation

See [Backend Documentation](https://github.com/4genginc/inc-node-js-be#readme) for details on the backend of our project.

## Testing your Components

- You will be using [Vitest]() along side with [React Testing Library]() to test your application.
- Please put all of your tests for your code in `__tests__` folder.
- You should get into the habit of ensuring that you have coverage for your code _before submitting a pull-request_.

### Running your tests

- When writing tests run the command:
  - `cd into` the root of this directory
  - `npm test` to run your test suite
    - _if you're prompted_ select `a` to run tests in watch mode. This will re-run your test suite when you save any file in your application.
  - In your terminal you will see a test runner that looks something like this:
    ![Test screenshot](https://tk-assets.lambdaschool.com/bc9ca7b9-4fce-45de-9a16-705cbec062d8_ScreenShot2020-06-25at7.52.52AM.png)
  - When you're not actively writing tests its best to close that terminal window so that you don't keep running tests when your files are saved.

### Coverage

> 💡 Code coverage should be a good goal to have and a good starting place. But every application will be different.

- [Kent Dodds put it nicely](https://kentcdodds.com/blog/common-testing-mistakes#mistake-number-2-100-code-coverage). Strive for solid coverage as we strive to hand you over well-tested code in which we have extreme confidence.

- To run a coverage report for your application simply run `npm run coverage`.
- You should see a print out in your console that looks like this:
  ![code coverage](https://tk-assets.lambdaschool.com/5abec98b-2b61-483f-bd85-71002a9f755a_ScreenShot2020-06-25at7.59.14AM.png)

## Login and Authentication w/ Okta.

- The `LoginContainer.js` file in `src/pages/Login` includes a widget that is provided to us by Okta.
- This widget is the key to `user authentication and management` within your application.
- You don't have to manage ANY users because we're letting Okta do this for us :)
- This component is heavily documented with comments but it'd be REALLY good to read through [the docs here](https://github.com/okta/okta-signin-widget) to get a good understanding of the configuration we're doing with the widget itself.
- You'll also want to learn a bit about how to style this widget to meet your app's concerns.

## Utils

- `Utils` directory is for any of the business logic that your application may need to use.
- Simple one-off _helper_ functions that you may need can be defined in this directory.
- Any reusable logic or handlers or config files can also be used here.
- **REMINDER do not** check any sensitive information into git
