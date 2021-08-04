/** @format */

// import Navbar from "./components/nav/navbar";
import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/nav/navbar";
import Sidebar from "./components/side-bar/side-bar";
import HomePage from "./pages/homepage/home";
import AboutPage from "./pages/about/about";
import WorkPage from "./pages/works/works";
import ContactPage from "./pages/contact/contactPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/theme/global-styles";
import { lightTheme, darkTheme } from "./components/theme/theme";
import Footer from "./components/footer/footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div>
          <Navbar toggle={toggle} theme={themeToggler} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/works" component={WorkPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
