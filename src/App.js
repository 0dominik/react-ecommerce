import { GlobalStyle } from './theme/globalStyles';
import { PrivateRoute } from './components/atoms/PrivateRoute';
import { Sidebar } from './components/organisms/Sidebar';
import { Menu } from './components/organisms/Menu';
import { Home } from './components/pages/Home';
import { Products } from './components/pages/Products';
import { Product } from './components/pages/Product';
import { Cart } from './components/pages/Cart';
import { Search } from './components/pages/Search';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { NotFound } from './components/pages/NotFound';
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
      <Sidebar />
      <Menu />
    </Router>
  );
};
