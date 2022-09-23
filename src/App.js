import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

function App() {
  const [pages] = useState([
    { name: "About Me" },
    { name: "My Portfolio" },
    { name: "Contact Me" },
    { name: "My Resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Navbar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </Header>
      <main>
        <Page currentPage={ currentPage } ></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
