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
│  │	│    ├── Navbars 
│  │	│    │     ├── InstructorNavBar.jsx 
│  │	│    │     ├── NavBar.jsx 
│  │	│    │     └── NavBarLinks.jsx 
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

```

`src/components/common/Navbars/InstructorNavBar.jsx`
```jsx
import React from 'react';
import { ThunderboltFilled } from '@ant-design/icons';
// eslint-disable-next-line
import { Drawer, Menu, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line
import { ProfileIcon } from '../../pages/LandingInstructor/Icons';

const { Header } = Layout;

export default function InstructorNavBar() {
  return (
    <Header
      style={{
        backgroundColor: '#21C5B5',
        minHeight: '98px',
        lineHeight: '0',
        padding: '0',
      }}
    >
      <nav className="InstNavbar__mainNav">
        <div className="navbar__logo">
          <NavLink to="/">
            <h1 className="navbar__navTitle">
              {
                <ThunderboltFilled
                  style={{
                    color: '#EEEDD9',
                    fontSize: '1.8rem',
                  }}
                />
              }{' '}
              CODERHEROES
            </h1>
          </NavLink>
        </div>
        <div className="navbar__links">
          <NavLink className="navbar__navLink" to="/instructor">
            DASHBOARD
          </NavLink>
          <NavLink className="navbar__navLink" to="/instructor-all-classes">
            COURSES
          </NavLink>
          <NavLink className="navbar__navLink" to="/messages">
            MESSAGES
          </NavLink>
          <NavLink className="navbar__navLink" to="/">
            FEEDBACK
          </NavLink>
        </div>
        <div className="navbar__btns">
          <NavLink to="/">
            <button>LOGOUT</button>
          </NavLink>
        </div>
        <div className="navbar__profile">
          <ProfileIcon style={{ color: 'black', fontSize: 25 }} />
          <p>Name Here</p>
        </div>
      </nav>
    </Header>
  );
}

```

`src/components/common/Navbars/NavBar.jsx`
```jsx
import React, { useState, useEffect } from 'react';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  HomeOutlined,
  AliwangwangOutlined,
  LoginOutlined,
  LogoutOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import { Drawer, Menu, Layout } from 'antd';

import {
  ProfileIcon,
  HamburgerMenuIcon,
} from '../../pages/LandingInstructor/Icons';
import { NavLink, useHistory } from 'react-router-dom';

import NavBarLinks from './NavBarLinks';

import { connect } from 'react-redux';

import navLogo from '../../../img/navbar-logo.png';
import handleLogout from '../../../utils/logout.js';

import { useAuth0 } from '@auth0/auth0-react';

const { SubMenu } = Menu;
const { Header } = Layout;

function NavBar(props) {
  const [firstLogin, setFirstLogin] = useState(true);
  const [visible, setVisible] = useState(false);
  const [logoutRender, setLogoutRender] = useState(false);
  const [bgColor, setBgColor] = useState('#21c5b5');
  let { role_id } = props.user.currentUser;
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (role_id === 5) setBgColor('#9FB222');
    else if (role_id < 5 && role_id > 2) setBgColor('#21C5B5');
    else setBgColor('#FEAD2A');
  }, [role_id]);

  useEffect(() => {
    if (role_id <= 5) {
      setLogoutRender(true);
    } else if (role_id === undefined) {
      setLogoutRender(false);
    }
  }, [role_id]);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  if (firstLogin && role_id) {
    history.push('/dashboard');
    setFirstLogin(false);
  }

  return (
    <Header
      style={{
        backgroundColor: bgColor,
        minHeight: '98px',
        lineHeight: '0px',
        padding: '0',
      }}
    >
      <nav className="navbar__mainNav">
        <div className="navbar__logo">
          <NavLink to="/">
            <img className="nav-logo" src={navLogo} alt="logo" />
          </NavLink>
        </div>
        <NavBarLinks role_id={role_id} />
        <div className="navbar__btns">
          {logoutRender ? (
            <NavLink to="/" onClick={handleLogout}>
              <button className="navbar__btn">LOGOUT</button>
            </NavLink>
          ) : (
            <NavLink to="/">
              <button
                onClick={() =>
                  (window.location = 'mailto:brianne@coderheroes.com')
                }
                className="navbar__btn navbar__contact"
              >
                CONTACT US
              </button>
            </NavLink>
          )}
          {isAuthenticated ? (
            <NavLink to="/logout">
              <button className="navbar__btn navbar__login">LOGOUT</button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <button className="navbar__btn navbar__login">LOGIN</button>
            </NavLink>
          )}
          <NavLink to="/parent/family">
            <div className="navbar__profile">
              {!isAuthenticated ? (
                <ProfileIcon style={{ color: 'black', fontSize: 30 }} />
              ) : (
                <img
                  src={user.picture}
                  alt={user.name}
                  style={{
                    borderRadius: '100px',
                    width: '40px',
                  }}
                />
              )}
            </div>
          </NavLink>
        </div>
        <div className="navbar__hamburgerMenu">
          <HamburgerMenuIcon style={{ color: 'white' }} onClick={showDrawer} />
          <Drawer
            title="CoderHeroes"
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <Menu mode="inline">
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <NavLink to="/">Home</NavLink>
              </Menu.Item>
              {isAuthenticated ? (
                <Menu.Item key="3" icon={<LogoutOutlined />}>
                  <NavLink to="/logout">Logout</NavLink>
                </Menu.Item>
              ) : (
                <Menu.Item key="3" icon={<LoginOutlined />}>
                  <NavLink to="/login">Login</NavLink>
                </Menu.Item>
              )}
              <Menu.Item
                key="99"
                icon={
                  !isAuthenticated ? (
                    <ProfileIcon />
                  ) : (
                    <img
                      src={user.picture}
                      alt={user.name}
                      style={{
                        borderRadius: '100px',
                        width: '15px',
                      }}
                    />
                  )
                }
              >
                <NavLink to="/dev">My Dashboard</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<ContactsOutlined />}>
                <NavLink
                  to="/"
                  onClick={() =>
                    (window.location = 'mailto:brianne@coderheroes.com')
                  }
                  className="navbar__btn navbar__contact"
                >
                  Contact Us
                </NavLink>
              </Menu.Item>
              <SubMenu
                key="sub1"
                icon={<AliwangwangOutlined />}
                title="Social Links"
              >
                <Menu.Item key="7" icon={<FacebookOutlined />}>
                  <a
                    href="https://www.facebook.com/coderheroes"
                    className="navbar__socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </Menu.Item>
                <Menu.Item key="8" icon={<TwitterOutlined />}>
                  <a
                    href="https://twitter.com/coderheroes"
                    className="navbar__socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </Menu.Item>
                <Menu.Item key="9" icon={<InstagramOutlined />}>
                  <a
                    href="https://www.instagram.com/coderheroes/"
                    className="navbar__socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </Menu.Item>
                <Menu.Item key="10" icon={<YoutubeOutlined />}>
                  <a
                    href="https://www.youtube.com/channel/UC7vHHesa12tznVpgvnwbnKg"
                    className="navbar__socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>
                </Menu.Item>
                <Menu.Item key="11" icon={<LinkedinOutlined />}>
                  <a
                    href="https://www.linkedin.com/company/coderheroes/"
                    className="navbar__socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Drawer>
        </div>
      </nav>
    </Header>
  );
}

const mapStateToProps = state => {
  return { user: state.userReducer };
};

export default connect(mapStateToProps)(NavBar);

```

`src/components/common/Navbars/NavBarLinks.jsx`
```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBarLinks(props) {
  const { role_id } = props;
  if (role_id === 1 || role_id === 2) {
    return (
      <div className="navbar__links">
        <NavLink className="navbar__navLink" to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className="navbar__navLink" to="/admin-courses">
          Components
        </NavLink>
        <NavLink className="navbar__navLink" to="/admin-add-course">
          Utilities
        </NavLink>
        <NavLink className="navbar__navLink last_navLink" to="/">
          Pages
        </NavLink>
      </div>
    );
  } else if (role_id === 3) {
    return (
      <div className="navbar__links">
        <NavLink className="navbar__navLink" to="/dashboard">
          DASHBOARD
        </NavLink>
        <NavLink className="navbar__navLink" to="/instructor-all-classes">
          COURSES
        </NavLink>
        <NavLink className="navbar__navLink" to="/messages">
          MESSAGES
        </NavLink>
        <NavLink className="navbar__navLink last_navLink" to="/">
          FEEDBACK
        </NavLink>
      </div>
    );
  } else if (role_id === 4) {
    return (
      <div className="navbar__links">
        <NavLink className="navbar__navLink" to="/browse-programs">
          PROGRAMS
        </NavLink>
        <NavLink className="navbar__navLink" to="/browse-instructors">
          INSTRUCTORS
        </NavLink>
        <NavLink className="navbar__navLink" to="/parent-booking">
          BOOKING
        </NavLink>
        <NavLink className="navbar__navLink last_navLink" to="/">
          SCHOLARSHIPS
        </NavLink>
      </div>
    );
  } else if (role_id === 5) {
    return (
      <div className="navbar__links">
        <NavLink className="navbar__navLink" to="/">
          DASHBOARD
        </NavLink>
        <NavLink className="navbar__navLink" to="/">
          RESOURCES
        </NavLink>
        <NavLink className="navbar__navLink" to="/">
          PROGRESS
        </NavLink>
        <NavLink className="navbar__navLink last_navLink" to="/">
          ACHIEVEMENTS
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="navbar__links">
        <NavLink className="navbar__navLink" to="/browse-programs">
          PROGRAMS
        </NavLink>
        <NavLink className="navbar__navLink" to="/browse-instructors">
          INSTRUCTORS
        </NavLink>
        <NavLink className="navbar__navLink" to="/parent/booking">
          BOOKING
        </NavLink>
        <NavLink className="navbar__navLink last_navLink" to="/">
          SCHOLARSHIPS
        </NavLink>
      </div>
    );
  }
}

```

