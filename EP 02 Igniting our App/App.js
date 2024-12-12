import React from "react";
import ReactDOM from "react-dom/client";

// Package.json is configuration for NPM
// ^ caret means do automatic minor upgrades for the package
// ~ tilde means do it for major updgrades
// Package lock. json keeps track of the exact dependency installed with SHA Hash codes for validity
// JSX => Babel transpiles it to React.createElement (JS Object) => Rendered into HTML Element
// React FC => A JS Function that returns a peice of JSX(or React Element)

const heading = <h1 id="heading">This is a new JSX Tag</h1>;
console.log(heading);

const FunctionalHeading = () => (
  <h1 id="heading">This is a React Functional Component Heading</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalHeading />);
