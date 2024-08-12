import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import './styles/index.less';
import 'antd/dist/antd.less';

import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { Header } from './components/common/Header';
import { HomePage } from './components/pages/Home';
import { LandingPage } from './components/pages/Landing';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import { LoadingComponent } from './components/common';
import { ImageList } from './components/pages/ImageList';

import { Footer } from '../src/components/common/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
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
);

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/landing" component={LandingPage} />
      <Route path="/images" component={ImageList} />
      <Route
        path="/"
        exact
        component={() => <HomePage LoadingComponent={LoadingComponent} />}
      />
      <Route path="/example-list" component={ExampleListPage} />
      <Route path="/profile-list" component={ProfileListPage} />
      <Route path="/datavis" component={ExampleDataViz} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
