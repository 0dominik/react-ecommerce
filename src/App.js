import React from 'react';
import { GlobalStyle } from './theme/globalStyles';
import { PrivateRoute } from './components/atoms/PrivateRoute';
import { Navigation } from './components/organisms/Navigation';
import { Menu } from './components/organisms/Menu';
import { Home } from './components/organisms/Home';
import { Products } from './components/organisms/Products';
import { Product } from './components/organisms/Product';
import { Cart } from './components/organisms/Cart';
import { Search } from './components/organisms/Search';
import { Login } from './components/organisms/Login';
import { Register } from './components/organisms/Register';
import { NotFound } from './components/organisms/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products/:category' component={Products} />
        <Route path='/product/:slug' component={Product} />
        <PrivateRoute path='/cart' exact component={Cart} />
        <Route path='/search' exact component={Search} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
      <Navigation />
      <Menu />
    </Router>
  );
};
