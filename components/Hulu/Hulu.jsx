import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";

const Hulu = ({ results }) => {
  return (
    <>
      <Header />

      <Nav />

      <Results results={results} />
    </>
  );
};

export default Hulu;
