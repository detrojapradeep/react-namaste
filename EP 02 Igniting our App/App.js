// Package.json is configuration for NPM
// ^ caret means do automatic minor upgrades for the package
// ~ tilde means do it for major updgrades

// Package lock. json keeps track of the exact dependency installed with SHA Hash codes for validity

import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "I am a react element"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
