import React from "react";
import Container from "@material-ui/core/Container";
import { Provider } from "react-redux";
import "./App.scss";
import configureStore from "../store/index";
import Home from "../pages/Home";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <Home />
      </Container>
    </Provider>
  );
}

export default App;
