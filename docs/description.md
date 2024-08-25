# Project description

-   Structure
```
/vite-react-js
├── src 
│  ├── __test__ 
│  │	├── ExampleListContainer.test.jsx 
│  │	├── FormButton.test.jsx 
│  │	├── FormInput.test.jsx 
│  │	├── List.test.jsx 
│  │	├── LoadingComponent.test.jsx 
│  │	├── NotFoundPage.test.jsx 
│  │	├── Readme.md 
│  │	├── RenderExampleListPage.test.jsx 
│  │	├── RenderHomePage.test.jsx
│  │	└── setupTests.jsx
│  ├── api 
│  │	├── Data.jsx 
│  │	└── index.jsx  
│  ├── assets 
│  │	├── react.svg
│  │	└── vite.svg 
│  ├── components 
│  │	├── common 
│  │	│    ├── Footer 
│  │	│    │     ├── FooterContainer.jsx 
│  │	│    │     ├── index.jsx 
│  │	│    │     └── RenderFooterPage.jsx 
│  │	│    ├── Header 
│  │	│    │     ├── HeaderContainer.jsx 
│  │	│    │     ├── index.jsx 
│  │	│    │     └── RenderHeaderPage.jsx 
│  │	│    ├── Button.jsx 
│  │	│    ├── FormButton.jsx 
│  │	│    ├── FormInput.jsx 
│  │	│    ├── index.jsx 
│  │	│    ├── List.jsx 
│  │	│    └── LoadingComponent.jsx 
│  │	└── pages 
│  │	     ├── ExampleList 
│  │	     │     ├── ExampleListContainer.jsx 
│  │	     │     ├── index.jsx 
│  │	     │     └── RenderExampleListPage.jsx 
│  │	     ├── Home 
│  │	     │     ├── HomeContainer.jsx 
│  │	     │     ├── index.jsx 
│  │	     │     └── RenderHomePage.jsx 
│  │	     ├── Landing 
│  │	     │     ├── LandingContainer.jsx 
│  │	     │     ├── index.jsx 
│  │	     │     └── RenderLandingPage.jsx 
│  │	     ├── Login 
│  │	     │     ├── index.jsx 
│  │	     │     ├── LoginContainer.jsx 
│  │	     │     └── RanderLoginPage.jsx 
│  │	     ├── NotFound 
│  │	     │     ├── index.jsx 
│  │	     │     └── NotFoundPage.jsx 
│  │	     ├── ProfileList 
│  │	     │     ├── index.jsx 
│  │	     │     ├── ProfileListContainer.jsx 
│  │	     │     └── RenderProfileListPage.jsx 
│  │	     └── template 
│  │	           ├── Redux-connect 
│  │	           └── Redux-useSelectore 
│  ├── state 
│  │	├── actions 
│  │	│    ├── authActions.jsx 
│  │	│    └── usersAction.jsx 
│  │	└── reducers 
│  │	     ├── authReducer.jsx 
│  │	     ├── index.jsx 
│  │	     └── usersReducer.jsx 
│  ├── styles 
│  │	├── Footer 
│  │	│    └── index.less
│  │	├── Landing 
│  │	│    └── index.less
│  │	├── inc-site-theme.js
│  │	├── index.less
│  │	├── theme-overrides.less
│  │	└── variables.less 
│  ├── utils 
│  │	├── oktaConfig.jsx
│  │	└── Readme.md 
│  └── index.jsx
├── index.html
├── .env 
├── .eslintrc.cjs 
├── package.json 
├── vitest.config.js 
└── …
```
