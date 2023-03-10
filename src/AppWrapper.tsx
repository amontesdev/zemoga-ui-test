import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./configureStore";

const AppWrapper: React.FC = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
