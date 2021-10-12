import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { createContext, useEffect, useState } from 'react';
import Marketing from './components/Marketing/Marketing';
import Testimonials from './components/Testimonials/Testimonials';
import FeaturedPRoducts from './components/FeaturedPRoducts/FeaturedPRoducts';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import DrinksDetails from './components/DrinksDetails/DrinksDetails';
import AuthProvider from './Context/AuthProvider';
import Login from './components/Header/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/private/PrivateRoute';
// out context Api

function App() {

  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route exact path="/drinks">
              <Products />
            </Route>

            <PrivateRoute path="/drinks_details/:id">
              <DrinksDetails />
            </PrivateRoute>

            <PrivateRoute path="/featured">
              <FeaturedPRoducts />
            </PrivateRoute>

            <Route path="/testimonials">
              <Testimonials />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
