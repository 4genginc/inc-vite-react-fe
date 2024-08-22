import React, { useState } from 'react';
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

import { ExampleListPage } from './components/pages/ExampleList';
import { ProfileListPage } from './components/pages/ProfileList';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import { ImageList } from './components/pages/ImageList';

import { Footer } from '../src/components/common/Footer';
import { Header } from './components/common/Header';
import { HomePage } from './components/pages/Home';
import { LandingPage } from './components/pages/Landing';
import { LoadingComponent } from './components/common';
import { LoginPage } from './components/pages/Login';
import { NotFoundPage } from './components/pages/NotFound';


import { UserListPage } from './components/pages/UserList'


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

  const [users, setUsers] = useState([]);

  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/landing" component={LandingPage} />
      <Route
        path="/"
        exact
        component={() => <HomePage LoadingComponent={LoadingComponent} />}
      />
      <Route path="/images" component={ImageList} />
      <Route path="/example-list" component={ExampleListPage} />
      <Route path="/profile-list" component={ProfileListPage} />
      <Route path="/datavis" component={ExampleDataViz} />
      <Route path="/users"> <UserListPage users = { users } setUsers = { setUsers } /> </Route>
      <Route component={NotFoundPage} />
    </Switch>
  );
}
