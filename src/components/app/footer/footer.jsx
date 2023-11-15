import React from "react";

const Footer = React.memo(() => {
  return (
    <footer className="background-info color-white padding-3 row justify-content-center">
      <span className="font-body-3">
        © Суворов, ресторан русской и европейской кухни. 2022.
      </span>
    </footer>
  );
});

export default Footer;
