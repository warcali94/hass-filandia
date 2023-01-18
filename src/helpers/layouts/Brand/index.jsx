import brandLogo from "/brand.svg";
import { Image } from "antd";
import "./brand.scss";

export default () => {
  return (
    <>
      <Image
        preview={false}
        rootClassName={"brand"}
        height={100}
        src={`${brandLogo}`}
        alt="logo-hass"
      />
    </>
  );
};
