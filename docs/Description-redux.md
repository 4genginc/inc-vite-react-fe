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
│  │	├── ProfileListContainer.test.jsx 
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
│  │	     ├── Landing 
│  │	     │     ├── LandingContainer.jsx 
│  │	     │     ├── index.jsx 
│  │	     │     └── RenderLandingPage.jsx 
│  │	     ├── Login 
│  │	     │     ├── index.jsx
│  │	     │     ├── LoginContainer.jsx  
│  │	     │     └── RanderLoginPage.jsx 
│  │	     └── NotFound 
│  │	           ├── index.jsx 
│  │	           └── NotFoundPage.jsx 
│  ├── state 
│  │	├── actions 
│  │	│    └── authActions.jsx 
│  │	└── reducers 
│  │	     ├── authReducer.jsx 
│  │	     └── index.jsx 
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
│  │	├── README.md
│  │	└── scrollToTopHelper.jsx 
│  └── index.jsx
├── index.html
├── .env 
├── .eslintrc.cjs 
├── package.json 
├── vitest.config.js 
└── …
```

`index,html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>4G ENG, INC.</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
  </body>
</html>
```

`src/index.jsx`
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import './styles/index.less';
import 'antd/dist/antd.less';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './state/reducers';

const store = createStore(rootReducer);

import { Footer } from '../src/components/common/Footer';
import { Header } from './components/common/Header';
import { HomePage } from './components/pages/Home';
import { LandingPage } from './components/pages/Landing';
import { LoadingComponent } from './components/common';
import { LoginPage } from './components/pages/Login';
import { NotFoundPage } from './components/pages/NotFound';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Layout
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}
        >
          <Header />
          <App />
          <Footer />
        </Layout>
      </React.StrictMode>
    </Router>    
  </Provider>
);

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/landing" component={LandingPage} />
      <Route
        path="/"
        exact
        component={() => <HomePage LoadingComponent={LoadingComponent} />}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
```

`src/state/actions/authActions.jsx`
```jsx
import axios from 'axios';

// Action Types
export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action Creators
export const setUsername = username => ({
  type: SET_USERNAME,
  payload: username
});

export const setPassword = password => ({
  type: SET_PASSWORD,
  payload: password
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});

// Thunk for handling login
export const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('http://localhost:8000/api/auth/login', credentials);
    const { token, role, username: userResp } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("username", userResp);
    dispatch(loginSuccess({ token, role, username: userResp }));
    // Add navigation redirection here if needed
  } catch (error) {
    dispatch(loginFailure(error.response ? error.response.data : error.message));
  }
};
```

`src/state/reducers/authReducer.jsx`
```jsx
import {
  SET_USERNAME,
  SET_PASSWORD,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/authActions';

const initialState = {
  username: '',
  password: '',
  isSubmitting: false,
  error: null,
  userData: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case LOGIN_REQUEST:
      return { ...state, isSubmitting: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, isSubmitting: false, userData: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, isSubmitting: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
```

`src/state/reducers/index.jsx`
```jsx
import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
```

`src/components/pages/Login/index.jsx`
```jsx
export { default as LoginPage } from './LoginContainer.jsx';
```

`src/components/pages/Login/LoginContainer.jsx`
```jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import RenderLoginPage from './RanderLoginPage.jsx';

function LoginContainer() {
  return (
    <>
      <RenderLoginPage />
    </>
  );
}

export default LoginContainer;
```

`src/components/pages/Login/RanderLoginPage.jsx`
```jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUsername, setPassword, login } from '../../../state/actions/authActions';
import { FormButton, FormInput } from '../../common';

// Define the component with a named function
function RenderLoginPage({ username, password, isSubmitting, error, setUsername, setPassword, login }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ username, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          labelId="username"
          name="username"
          placeholder="Username"
          value={username}
          handleInput={handleChange}
          disabled={isSubmitting}
        />
        <FormInput
          labelId="password"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          handleInput={handleChange}
          disabled={isSubmitting}
        />
        <FormButton
          buttonText={isSubmitting ? 'Logging in...' : 'Log in'}
          isDisabled={isSubmitting}
          classType="primary"
        />
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </form>
    </div>
  );
}

RenderLoginPage.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  error: PropTypes.string,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
  password: state.auth.password,
  isSubmitting: state.auth.isSubmitting,
  error: state.auth.error
});

const mapDispatchToProps = {
  setUsername,
  setPassword,
  login
};

// Named connected component
const ConnectedRenderLoginPage = connect(mapStateToProps, mapDispatchToProps)(RenderLoginPage);

// Export named connected component
export default ConnectedRenderLoginPage;
```

`package.json`
```json
{
  "name": "site-spa-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "license": "MIT",
  "repository": "github:Lambda-School-Labs/labs-spa-starter",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "generate-less-variables": "node generate-less-variables.js",
    "preview": "vite preview",
    "test": "vitest",
    "coverage": "vitest run --coverage",
    "lint": "eslint 'src/**/*.{js,jsx,ts,tsx}' --fix",
    "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,scss}'"
  },
  "dependencies": {
    "@okta/okta-react": "^6.9.0",
    "antd": "^4.24.16",
    "axios": "^1.7.2",
    "consola": "^3.2.3",
    "less": "^4.2.0",
    "less-loader": "^12.2.0",
    "plotly.js": "^2.34.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-plotly.js": "^2.6.0",
    "react-redux": "^9.1.2",
    "react-router-dom": "^5.3.4",
    "redux": "^5.0.1",
    "vite-plugin-style-import": "^2.0.0",
    "vite-plugin-theme": "^0.8.6"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^1.6.1",
    "@testing-library/jest-dom": "^6.4.8",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.5.2",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "eslint": "^8.57.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-react": "^7.34.3",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "eslint-plugin-storybook": "^0.8.0",
    "git-up": "^7.0.0",
    "git-url-parse": "^14.1.0",
    "husky": "^8.0.0",
    "jsdom": "^24.1.1",
    "kleur": "^4.1.5",
    "lint-staged": "^15.2.7",
    "parse-url": "^9.2.0",
    "prettier": "^3.3.3",
    "prompts": "^2.4.2",
    "prop-types": "^15.8.1",
    "vite": "^5.4.1",
    "vite-plugin-imp": "^2.4.0",
    "vitest": "^2.0.4",
    "yaml": "^2.5.0"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ],
    "src/**/*.{css,scss}": [
      "prettier --write"
    ]
  }
}
```