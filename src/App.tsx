import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setRulingsList } from "./actions";
import "./App.scss";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import { State } from "./reducers";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const { rulingsList } = useSelector((state: State) => state);

  useEffect(() => {
    dispatch(setRulingsList(rulingsList));
  }, []);

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Content />
      <hr role="separator" />
      <Footer />
    </div>
  );
};

export default App;
