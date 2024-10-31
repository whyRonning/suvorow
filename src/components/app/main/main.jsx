import React from "react";
import mainPhoto from "../../../Images/main4.jpg";
import About from "../../../Images/about.jpg";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
  faThumbsUp,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { GeoObject, Map, Placemark, YMaps } from "react-yandex-maps";
import { Image, Tabs } from "antd";
import gallery1 from "../../../Images/gallery/1.jpg";
import gallery2 from "../../../Images/gallery/2.jpg";
import gallery3 from "../../../Images/gallery/3.jpg";
import gallery4 from "../../../Images/gallery/4.jpg";
import gallery5 from "../../../Images/gallery/5.jpg";
import gallery6 from "../../../Images/gallery/6.jpg";
import gallery7 from "../../../Images/gallery/7.jpg";
import gallery8 from "../../../Images/gallery/8.jpg";
import video from "../../../video/video_2024-10-31_20-42-03.mp4";
const Main = React.memo((props) => {
  return (
    <div>
      <section
        className="width-100 main-block position-relative"
        style={{ backgroundImage: "url(" + mainPhoto + ")" }}
      >
        <div
          className="position-absolute width-100 height-100"
          style={{ zIndex: 1 }}
        >
          <div className="column gap-40 align-center justify-content-center color-white height-100">
            <h1 className="font-title-1 text-center padding-left-2 padding-right-2">
              Ресторан современной русской и европейской кухни
            </h1>
            <a href="#menu">
              <button className="button-2 font-button">Посмотреть меню</button>
            </a>
          </div>
        </div>

        <div
          className="position-absolute width-100 main-block"
          style={{ background: "black", opacity: ".5", top: 0, zIndex: 0 }}
        ></div>
      </section>
      <section className="column padding-h-10 " id="about">
        <h1
          className="font-title-3 padding-3 about-text"
          style={{ paddingTop: "70px" }}
        >
          О ресторане
        </h1>
        <div className="about-block gap-32">
          <div className="font-body-3 flex-1">
            <p className="font-about-1">
              «Зал трапезы «Суворов» - ресторан русской и европейской кухни
              высокого класса.
            </p>
            <p className={"font-about-1"}>
              «Суворов» открыл свои двери в декабре 2021 года. Это большое и
              просторное заведение, но вы чувствуете себя здесь уютно и истинно
              по-домашнему.
            </p>
            <p className={"font-about-1"}>
              В нашем ресторане сочетается стильный интерьер и лучшие традиции
              русской и европейской кухни. Зал с дизайнерской мебелью прекрасно
              подойдет для делового обеда, романтического ужина или проведения
              свадеб и других мероприятий.
            </p>
          </div>
          <div className="flex-1 row about-img" style={{ overflow: "hidden" }}>
            <img id="Main2" style={{ height: "500px" }} src={About} alt="" />
          </div>
        </div>
      </section>
      <section
        className="column padding-h-10 justify-content-center"
        id="advantage"
        style={{ paddingTop: "70px" }}
      >
        <h1 className="font-title-3 text-center">Почему мы?</h1>
        <div
          className="advan-block align-center  justify-content-center flex-wrap gap-40 padding-top-4"
          style={{ height: "fit-content" }}
        >
          <div className="flex-1 adv-wrapper text-center row justify-content-center">
            <div
              className="adv-icon-block align-center column padding-5"
              style={{ border: "1px solid black" }}
            >
              <div className="icon-advantage-block row align-center justify-content-center">
                <FontAwesomeIcon className="icon-advantage" icon={faClock} />
              </div>
              <p className="font-title-1">Cовременно</p>
              <p className="font-about-1">
                Площадка ресторана оснащена современным оборудованием для
                развлечений и дискотек
              </p>
            </div>
          </div>

          <div className="flex-1 adv-wrapper text-center row justify-content-center">
            <div
              className="adv-icon-block align-center column padding-5"
              style={{ border: "1px solid black" }}
            >
              <div className="icon-advantage-block row align-center justify-content-center">
                <FontAwesomeIcon className="icon-advantage" icon={faThumbsUp} />
              </div>
              <p className="font-title-1">Качество</p>
              <p className="font-about-1">
                Для приготовления блюд используем только свежие и качественные
                продукты
              </p>
            </div>
          </div>

          <div className="flex-1 adv-wrapper text-center row justify-content-center">
            <div
              className="adv-icon-block align-center column padding-5"
              style={{ border: "1px solid black" }}
            >
              <div className="icon-advantage-block row align-center justify-content-center">
                <FontAwesomeIcon className="icon-advantage" icon={faUtensils} />
              </div>
              <p className="font-title-1">Вкусно</p>
              <p className="font-about-1">На кухне трудятся опытные повара</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="column align-center"
        style={{ paddingTop: "70px" }}
        id="menu"
      >
        <h1 className="font-title-3">Меню</h1>
        <Tabs
          centered={true}
          size={"large"}
          tabPosition={"top"}
          items={props.tabItems}
        />
      </section>
      <section
          className="column align-center gap-24"
          style={{paddingTop: "70px"}}
          id="gallery"
      >
        <h1 className="font-title-3">Галерея</h1>
        <Image.PreviewGroup>
          <div className="justify-content-center align-center gap-16 gallery">
            <Image src={gallery1}/>
            <Image src={gallery3}/>
            <Image src={gallery5}/>
            <Image src={gallery2}/>
            <Image src={gallery4}/>
            <Image src={gallery6}/>
            <Image src={gallery7}/>
            <Image src={gallery8}/>
          </div>
        </Image.PreviewGroup>
        <video style={{'max-width': '100%'}} controls={true} src={video}></video>
      </section>
      <section
          className="column align-center gap-24"
        style={{ paddingTop: "70px" }}
        id="contacts"
      >
        <h1 className="font-title-3">Контакты</h1>
        <div className="contact-items gap-8 flex-wrap align-center justify-content-center width-100">
          <div className="flex-1 row justify-content-center gap-8 align-center">
            <FontAwesomeIcon
              className="color-second"
              icon={faPhone}
              size="xl"
            ></FontAwesomeIcon>
            <p className="font-about-1 text-center">+7 (987) 497-04-18</p>
          </div>
          <div className="flex-1 row gap-8 justify-content-center align-center">
            <FontAwesomeIcon
              className="color-second"
              icon={faEnvelope}
              size="xl"
            ></FontAwesomeIcon>
            <p className="font-about-1 text-center">suvorov_83@list.ru</p>
          </div>
          <div className="flex-1 row gap-8 justify-content-center align-center">
            <FontAwesomeIcon
              className="color-second"
              icon={faLocationDot}
              size="xl"
            ></FontAwesomeIcon>
            <p className="font-about-1">Степана Кувыкина 14/6</p>
          </div>
        </div>
      </section>
      <div style={{ marginTop: "32px" }}>
        <YMaps>
          <div className="width-100">
            <Map
              defaultState={{ center: [54.705683, 55.999104], zoom: 19 }}
              width="100%"
              height="50vh"
            >
              <Placemark geometry={[54.705775, 55.999142]}></Placemark>
              <GeoObject
                options={{
                  draggable: false,
                  strokeColor: "#d8b36b",
                  strokeWidth: 5,
                }}
                geometry={{
                  type: "LineString",
                  coordinates: [
                    [54.705828, 55.999373],
                    [54.705781, 55.999491],
                  ],
                }}
              ></GeoObject>
              <GeoObject
                options={{
                  draggable: false,
                  strokeColor: "#d8b36b",
                  strokeWidth: 5,
                }}
                geometry={{
                  type: "LineString",

                  coordinates: [
                    [54.705828, 55.999373],
                    [54.705831, 55.99962],
                  ],
                }}
              ></GeoObject>
              <GeoObject
                options={{
                  draggable: false,
                  strokeColor: "#d8b36b",
                  strokeWidth: 5,
                }}
                geometry={{
                  type: "LineString",
                  coordinates: [
                    [54.705828, 55.999373],
                    [54.705877, 55.999502],
                  ],
                }}
              ></GeoObject>
            </Map>
          </div>
        </YMaps>
      </div>
    </div>
  );
});

export default Main;
