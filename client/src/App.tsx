import { lazy, Suspense } from 'react';

import {
  CssBaseline,
  Container,
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const Users = lazy(() => import('./pages/Users'));

function App() {

  return (
    <Router>
      <CssBaseline />

      <Suspense fallback={<span>Loading...</span>}>
        <Header />
        <main>
          <Container maxWidth="sm">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/search' component={Search} />
              <Route path='/users' component={Users} />
            </Switch>
          </Container>
        </main>
      </Suspense>

    </Router>
  );
}

export default App;
