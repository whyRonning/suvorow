import Main from "./main";
import banket1 from "../../../Images/banket-menu-1.jpg";
import banket2 from "../../../Images/banket-menu-2.jpg";
import delivery1 from "../../../Images/delivery-menu-1.jpg";
import delivery2 from "../../../Images/delivery-menu-2.jpg";
import { Image } from "antd";

export const MainContainer = () => {
  const tabItems = [
    {
      key: 1,
      label: "Ресторанное меню",
      children: (
        <Image.PreviewGroup>
          <div className="menu-images align-center">
            <Image className="menu-image" src={banket1} />
            <Image className="menu-image" src={banket2} />
          </div>
        </Image.PreviewGroup>
      ),
    },
    {
      key: 2,
      label: "Меню караоке",
      children: (
        <Image.PreviewGroup>
          <div className="menu-images align-center">
            <Image className="menu-image" src={delivery1} />
            <Image className="menu-image" src={delivery2} />
          </div>
        </Image.PreviewGroup>
      ),
    },
  ];
  return <Main tabItems={tabItems}></Main>;
};
