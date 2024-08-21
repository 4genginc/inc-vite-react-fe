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
│  │	│    ├── FooterCH 
│  │	│    │     ├── DesktopFooter.jsx 
│  │	│    │     ├── index.jsx 
│  │	│    │     └── MobileFooter.jsx 
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
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Corrected import
import rootReducer from './state/reducers';

// Apply middleware to the Redux store
const store = createStore(
  rootReducer, 
  applyMiddleware(thunk)
);

// import { Footer } from '../src/components/common/Footer';
import { Header } from './components/common/Header';
import { HomePage } from './components/pages/Home';
import { LandingPage } from './components/pages/Landing';
import { LoadingComponent } from './components/common';
import { LoginPage } from './components/pages/Login';
import { NotFoundPage } from './components/pages/NotFound';

import Footer from './components/common/FooterCH/index.jsx';

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

`src/components/common/FooterCH/DesktopFooter.jsx`
```jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import ScrollToTop from '../../../utils/scrollToTopHelper.jsx';

const { Title } = Typography;

function DesktopFooter() {
  return (
    <div className="footer_container">
      <Row justify="space-evenly">
        <Col className="about_column">
          <Title
            className="title"
            style={{ color: '#ffffff', fontWeight: '400' }}
            level={3}
          >
            About
          </Title>
          <div>
            <ul>
              <li>
                <Link
                  className="footer__nav-link footer__text"
                  to="/about-coderheroes"
                >
                  About CoderHeroes
                </Link>
              </li>
              <li>
                <Link
                  className="footer__nav-link footer__text"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="footer__nav-link footer__text"
                  to="/terms-and-conditions"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="footer__nav-link footer__text"
                  to="/press-inquiries"
                >
                  Press Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="services_column">
          <Title
            className="title"
            style={{ color: '#ffffff', fontWeight: '400' }}
            level={3}
          >
            Services
          </Title>
          <div>
            <ul>
              <li>
                <Link className="footer__nav-link footer__text" to="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="footer__nav-link footer__text" to="/site-map">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="contact_column">
          <Title
            className="title"
            style={{ color: '#ffffff', fontWeight: '400' }}
            level={3}
          >
            Contact
          </Title>
          <div>
            <ul>
              <li
                onClick={() =>
                  (window.location = 'mailto:brianne@coderheroes.com')
                }
                className="navbar__btn navbar__contact"
              >
                brianne@coderheroes.com
              </li>
              <li>
                <ScrollToTop>
                  <Link
                    className="footer__nav-link footer__text"
                    to="/browse-programs"
                  >
                    Find a Program
                  </Link>
                </ScrollToTop>
              </li>
            </ul>
          </div>
        </Col>
        <Col
          className="socialMedia_column"
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <Title
            className="title"
            style={{
              color: '#ffffff',
              marginBottom: '0px',
              fontWeight: '400',
            }}
            level={1}
          >
            CoderHeroes
          </Title>
          <Row style={{ justifyContent: 'space-evenly' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/coderheroes/"
            >
              <FacebookOutlined
                style={{
                  color: '#ffffff',
                  fontSize: '40px',
                }}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/coderheroes/"
            >
              <TwitterOutlined style={{ color: '#ffffff', fontSize: '40px' }} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/coderheroes/"
            >
              <InstagramOutlined
                style={{
                  color: '#ffffff',
                  fontSize: '40px',
                }}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UC7vHHesa12tznVpgvnwbnKg/"
            >
              <YoutubeOutlined
                style={{
                  color: '#ffffff',
                  fontSize: '40px',
                }}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/coderheroes/"
            >
              <LinkedinOutlined
                style={{
                  color: '#ffffff',
                  fontSize: '40px',
                }}
              />
            </a>
          </Row>
          <span
            className="footer__text"
            aria-label="CoderHeroes copyright 2022"
          >
            Copyright © 2022 Coderheroes Inc.
          </span>
        </Col>
      </Row>
    </div>
  );
}

export default DesktopFooter;
```

`src/components/common/FooterCH/index.jsx`
```jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';
import { Layout } from 'antd';

const { Footer } = Layout;
function MainFooter() {
  return (
    <>
      {/* Display for Desktop (is hidden at 900px screen width or below) */}

      <Footer
        className="desktop-footer"
        style={{
          padding: '40px',
          backgroundColor: '#6A0C49',
        }}
      >
        <DesktopFooter />
      </Footer>
      {/* Display for Mobile (only visible when screen width is below 900px) */}
      <Footer
        className="mobile-footer"
        style={{
          backgroundColor: '#6A0C49',
        }}
      >
        <MobileFooter />
      </Footer>
    </>
  );
}
export default MainFooter;
```

`src/components/common/FooterCH/MobileFooter.jsx`
```jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import ScrollToTop from '../../../utils/scrollToTopHelper.jsx';

const { Title } = Typography;

function MobileFooter() {
  return (
    <div className="footer-content">
      <Row justify="space-evenly">
        <Col className="services_column">
          <Title
            className="title"
            style={{ color: '#ffffff', fontWeight: '400' }}
            level={3}
          >
            Services
          </Title>
          <div>
            <ul>
              <li>
                <Link className="footer__nav-link footer__text" to="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="footer__nav-link footer__text" to="/site-map">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="about_column">
          <Title
            className="title"
            style={{ color: '#ffffff', fontWeight: '400' }}
            level={3}
          >
            About
          </Title>
          <div>
            <ul>
              <li>
                <Link
                  className="footer__nav-link footer__text"
                  to="/about-coderheroes"
                >
                  About CoderHeroes
                </Link>
              </li>
              <li>
                <Link
                  className="footer__nav-link footer__text"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="footer__nav-link footer__text"
                  to="/terms-and-conditions"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="footer__nav-link footer__text"
                  to="/press-inquiries"
                >
                  Press Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="contact_column">
          <Title
            className="title"
            style={{ color: '#ffffff', fontWeight: '400' }}
            level={3}
          >
            Contact
          </Title>
          <div>
            <ul>
              <li
                onClick={() =>
                  (window.location = 'mailto:brianne@coderheroes.com')
                }
                className="navbar__btn navbar__contact"
              >
                brianne@coderheroes.com
              </li>
              <li>
                <ScrollToTop>
                  <Link
                    className="footer__nav-link footer__text"
                    to="/browse-programs"
                  >
                    Find a Program
                  </Link>
                </ScrollToTop>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Divider style={{ color: '#ffffff' }} />
      <Row
        className="social_media_icons_container"
        style={{
          justifyContent: 'space-between',
          maxWidth: '250px',
          margin: 'auto',
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/coderheroes/"
        >
          <FacebookOutlined
            className="social_media"
            style={{
              color: '#ffffff',
              fontSize: '40px',
            }}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/coderheroes/"
        >
          <TwitterOutlined
            className="social_media"
            style={{
              color: '#ffffff',
              fontSize: '40px',
            }}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/coderheroes/"
        >
          <InstagramOutlined
            className="social_media"
            style={{
              color: '#ffffff',
              fontSize: '40px',
            }}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UC7vHHesa12tznVpgvnwbnKg/"
        >
          <YoutubeOutlined
            className="social_media"
            style={{
              color: '#ffffff',
              fontSize: '40px',
            }}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/coderheroes/"
        >
          <LinkedinOutlined
            className="social_media"
            style={{
              color: '#ffffff',
              fontSize: '40px',
            }}
          />
        </a>
      </Row>
      <Row className="footer__title--container">
        <Title
          className="footer__title--copyright"
          style={{
            color: '#ffffff',
            fontSize: '36px',
            margin: 'auto',
            marginBottom: '10px',
            fontWeight: '400',
            textAlign: 'center',
          }}
          level={1}
        >
          © 2022 CoderHeroes
        </Title>
      </Row>
    </div>
  );
}

export default MobileFooter;

```

`src/utils/scrollToTopHelper.jsx`
```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

// Define prop types for the component
ScrollToTop.propTypes = {
  children: PropTypes.node,
};

export default ScrollToTop;
```

