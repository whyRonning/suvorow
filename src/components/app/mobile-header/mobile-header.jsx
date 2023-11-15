import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Anchor } from "antd";
import logo from "../../../Images/logo1.png";
import "./mobile-header.css";

export const MobileHeader = (props) => {
  const { Link } = Anchor;
  return (
    <div>
      <div style={{ padding: "-52px" }}></div>
      <Anchor
        className={"background-second mobile-header"}
        bounds={0}
        affix={true}
        showInkInFixed={false}
      >
        <div>
          <div
            className={
              "row justify-content-between align-center padding-right-5"
            }
          >
            <img
              className=" header-logo"
              style={{ height: "105px" }}
              src={logo}
              alt=""
            />
            <FontAwesomeIcon
              className="color-white"
              size={"2x"}
              icon={!props.isOpen ? faBars : faTimes}
              onClick={() => props.setOpenFun()}
            />
          </div>

          <header className={props.isOpen ? "mobilemenu" : "hidemenu"}>
            <nav
              className={
                "column width-100 gap-8 padding-bottom-3 padding-top-3"
              }
            >
              <div className="flex-1 align-center column">
                <div
                  onClick={() => props.setOpenFun()}
                  style={{ width: "fit-content" }}
                >
                  <Link
                    className="font-title-1 color-black menu-paragraph"
                    href="#main"
                    title={"Главная"}
                  ></Link>
                </div>
              </div>
              <div className="flex-1 align-center column">
                <div
                  onClick={() => props.setOpenFun()}
                  style={{ width: "fit-content" }}
                >
                  <Link
                    className="font-title-1 color-black menu-paragraph"
                    href="#about"
                    title={"О нас"}
                  ></Link>
                </div>
              </div>
              <div className="flex-1 align-center column">
                <div
                  onClick={() => props.setOpenFun()}
                  style={{ width: "fit-content" }}
                >
                  <Link
                    className="font-title-1 color-black menu-paragraph"
                    href="#advantage"
                    title={"Преимущества"}
                  ></Link>
                </div>
              </div>
              <div className="flex-1 align-center column">
                <div
                  onClick={() => props.setOpenFun()}
                  style={{ width: "fit-content" }}
                >
                  <Link
                    className="font-title-1 color-black menu-paragraph"
                    href="#menu"
                    title={"Меню"}
                  ></Link>
                </div>
              </div>
              <div className="flex-1 column align-center">
                <div
                  onClick={() => props.setOpenFun()}
                  style={{ width: "fit-content" }}
                >
                  <Link
                    className="font-title-1 color-white menu-paragraph"
                    href="#gallery"
                    title={"Галерея"}
                  ></Link>
                </div>
              </div>
              <div className="flex-1 column align-center">
                <div
                  onClick={() => props.setOpenFun()}
                  style={{ width: "fit-content" }}
                >
                  <Link
                    className="font-title-1 color-black menu-paragraph"
                    href="#contacts"
                    title={"Контакты"}
                  ></Link>
                </div>
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
            </nav>
          </header>
        </div>
      </Anchor>
    </div>
  );
};
