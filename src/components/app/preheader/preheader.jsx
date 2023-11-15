import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faVk } from "@fortawesome/free-brands-svg-icons";
import "./preheader.css";

const Preheader = React.memo(() => {
  return (
    <div
      className="preheader padding-left-3 justify-content-between padding-right-3 background-info "
      id="main"
    >
      <div className="row justify-content-between gap-12">
        <a href="tel:+79874970418" className="preheader-icon-block">
          <div className="row gap-8 color-white align-center justify-content-center">
            <FontAwesomeIcon icon={faPhone} size="1x" />
            <p className="font-body-3 ">+7 (987) 497-04-18</p>
          </div>
        </a>
        <a href="mailto:suvorov_83@list.ru" className="preheader-icon-block">
          <div className="row gap-8 color-white align-center justify-content-center">
            <FontAwesomeIcon className="icons" icon={faEnvelope} size="1x" />
            <p className="font-body-3 ">suvorov_83@list.ru</p>
          </div>
        </a>
      </div>
      <div className="row align-center justify-content-between gap-12">
        <a
          href="https://vk.com/restoran.suvorov"
          className="preheader-icon-block row align-center gap-8 color-white"
        >
          <FontAwesomeIcon className="color-white" size="1x" icon={faVk} />
          <p className="font-body-3 ">vk.com/restoran.suvorov</p>
        </a>
        <a
          className="preheader-icon-block row align-center gap-8 color-white"
          href="https://www.instagram.com/restoran.suvorov"
        >
          <FontAwesomeIcon
            className="color-white"
            size="1x"
            icon={faInstagram}
          />
          <p className="font-body-3 ">restoran.suvorov</p>
        </a>
      </div>
    </div>
  );
});

export default Preheader;
