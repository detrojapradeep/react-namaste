import React from "react";
import ReactDOM from "react-dom/client";

// Package.json is configuration for NPM
// ^ caret means do automatic minor upgrades for the package
// ~ tilde means do it for major updgrades

// Package lock. json keeps track of the exact dependency installed with SHA Hash codes for validity
const heading = <h1 id="heading"> This is a new JSX Tag</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
