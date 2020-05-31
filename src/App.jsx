import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import configureStore from './store/index';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import CartModal from './components/CartModal/CartModal';

const store = configureStore();

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Container maxWidth="xl">
          <NavBar />
          <SearchBar />
          <Switch>
            <Route path="/items/:id">
              <ProductDetailsPage />
            </Route>
            <Route path="/">
              <ProductListingPage />
            </Route>
          </Switch>
          <CartModal/>
        </Container>
      </Provider>
    </Router>
  );
}

export default App;
