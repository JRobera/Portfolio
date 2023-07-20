import { createContext, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import Header from "./sections/Header/Header";
import Home from "./sections/Home/Home";
import Portfolio from "./sections/Portfolio/Portfolio";
import Contact from "./sections/Contact/Contact";
import About from "./sections/About/About";

export const AppContext = createContext();

function App() {
  const { ref: homeRef, inView: homeIsVisible } = useInView({
    threshold: 0.2,
  });
  const { ref: aboutRef, inView: aboutIsVisible } = useInView({
    threshold: 0.2,
  });
  const { ref: portfolioRef, inView: portfolioIsVisible } = useInView({
    threshold: 0.1,
  });
  const { ref: contactRef, inView: contactIsVisible } = useInView({
    threshold: 0.1,
  });

  return (
    <AppContext.Provider
      value={{
        homeIsVisible,
        aboutIsVisible,
        portfolioIsVisible,
        contactIsVisible,
      }}
    >
      <Header />
      <Home homeRef={homeRef} homeIsVisible={homeIsVisible} />
      <About aboutRef={aboutRef} aboutIsVisible={aboutIsVisible} />
      <Portfolio
        portfolioRef={portfolioRef}
        portfolioIsVisible={portfolioIsVisible}
      />
      <Contact contactRef={contactRef} contactIsVisible={contactIsVisible} />
      <footer className="footer">
        <div className="footer-text">
          <p>
            Copyright &copy; {new Date().getFullYear()} by Robera | All Rights
            Reserved.
          </p>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <box-icon name="up-arrow-alt"></box-icon>
          </a>
        </div>
      </footer>
    </AppContext.Provider>
  );
}

export default App;
