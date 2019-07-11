import React from "react";

// Stateless Functionnal Component
const NavBar = props => {
  let button = null;
  if (props.display !== "") {
    button = (
      <button onClick={event => props.onBack(event)} style={{ float: "left" }}>
        Back
      </button>
    );
  }

  return (
    <nav className="navbar navbar-light bg-light">
      {button}
      <div style={{ margin: "auto" }}>
        <h4>Simple Weather Application</h4>
      </div>
    </nav>
  );
};

export default NavBar;
