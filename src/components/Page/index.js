import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";
import PageContent from "../PageContent";

const Page = ({ currentPage }) => {
  const renderPage = () => {
    if (currentPage.name === "About Me") {
      document.title = "About Me";
      return <About />;
    }
    if (currentPage.name === "My Portfolio") {
        document.title = "My Portfolio";
      return <Portfolio />;
    }
    if (currentPage.name === "Contact Me") {
        document.title = "Contact Me";
      return <Contact />;
    }
    if (currentPage.name === "Resume") {
        document.title = "Resume";
      return <Resume />;
    }
  };

  return (
    <>
      <PageContent>{renderPage()}</PageContent>
    </>
  );
};

export default Page;
