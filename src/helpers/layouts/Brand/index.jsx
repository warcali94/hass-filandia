import brandLogo from "/brand.svg";
import { Image } from "antd";
import "./brand.scss";

export default () => {
  return (
      <Image
        preview={false}
        rootClassName={"brand"}
        height={80}
        src={`${brandLogo}`}
        alt="logo-hass"
      />
  );
};
