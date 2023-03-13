import brandLogo from "/brand.svg";
import { Image } from "antd";
 import "./brand.scss";

export default ({klass}) => {
  return (
      <div className={klass}>
        <Image
        preview={false}
        rootClassName={"brand" }
        // height={80}
        width={160}
        src={`${brandLogo}`}
        alt="logo-hass"
      />
      </div>
  );
};
