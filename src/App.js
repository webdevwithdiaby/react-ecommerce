import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/home.component";
import ShopPage from "./pages/shop/shop.component";
import ContactPage from "./pages/contact/contact.component";
import SignInPage from "./pages/signin/signin.component";
import Footer from "./components/footer/footer.component";
import CheckoutPage from "./pages/checkout/checkout.component";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
