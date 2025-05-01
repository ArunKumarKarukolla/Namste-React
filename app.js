import React from "react";
import ReactDOM from "react-dom";

// React element
// jsx is react element

const Title = () => (
  // react component
  <h1 className="root"> Namste raect from Arun</h1>
);

// React Component
// raect component is return jsx

const Headingcomponent = () => (
  <div id="container">
    <Title />
    <h1>Namste React functional component </h1>;
  </div>
);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Headingcomponent />);

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a
//div with class “title”)

const element = React.createElement(
  "div" ,
   {className:"title"} , // div with class "title"
  React.createElement("h1",null,"headong1"),
  React.createElement("h2",null,"headong2"),
  React.createElement("h3",null,"headong3")
);
const root =ReactDOM.createElement(document.getElementById("root"));
root.render(element);
