import React from "react";

const App = () => {
  const greeting = "Hello C07, welcome to ReactJS";
  return <Headline value={greeting}></Headline>;
};
const Headline = ({ value }) => {
  return <h2>{value}</h2>;
};

export default App;
