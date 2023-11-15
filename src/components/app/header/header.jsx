import React from "react";
import logo from "../../../Images/logosss.png";
import "./header.css";
import { Anchor } from "antd";

const Header = React.memo(() => {
  const { Link } = Anchor;
  return (
    <Anchor bounds={0} affix={true} showInkInFixed={false} className={"header"}>
      <header className="background-second ">
        <nav>
          <div className="row padding-left-5 padding-right-5 gap-8 align-center nav">
            <div className="flex-1 column align-center">
              <img
                className="padding-2"
                style={{ height: "70px" }}
                src={logo}
                alt=""
              />
            </div>
            <div className="flex-1 column align-center">
              <Link
                className="font-title-1 color-white menu-paragraph"
                href="#main"
                title={"Главная"}
              ></Link>
            </div>
            <div className="flex-1 column align-center">
              <Link
                className="font-title-1 color-white menu-paragraph"
                href="#about"
                title={"О нас"}
              ></Link>
            </div>
            <div className="flex-1 column align-center">
              <Link
                className="font-title-1 color-white menu-paragraph"
                href="#advantage"
                title={"Преимущества"}
              ></Link>
            </div>
            <div className="flex-1 column align-center">
              <Link
                className="font-title-1 color-white menu-paragraph"
                href="#menu"
                title={"Меню"}
              ></Link>
            </div>
            <div className="flex-1 column align-center">
              <Link
                className="font-title-1 color-white menu-paragraph"
                href="#gallery"
                title={"Галерея"}
              ></Link>
            </div>
            <div className="flex-1 column align-center">
              <Link
                className="font-title-1 color-white menu-paragraph"
                href="#contacts"
                title={"Контакты"}
              ></Link>
            </div>
            <div className="flex-1 column align-center">
              <button className="button-1">
                <a
                  style={{ color: "inherit", transition: "0.1s" }}
                  className="font-button"
                  href="tel:+79874970418"
                >
                  Позвонить администратору
                </a>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </Anchor>
  );
});

export default Header;
