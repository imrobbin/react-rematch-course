import React, { Fragment } from "react";
import GlobalStyles from "./globalStyles";
import Users from "./containers/Users";
import Header from "./containers/Header";
import Toasts from "./containers/Toasts";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyles />
      <Toasts />
      <Header />
      <Users />
    </Fragment>
  </Provider>
);

export default App;
