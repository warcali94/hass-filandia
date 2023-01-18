import { Button } from "antd";
import "./button.scss";

export default ({ children }) => {
  return <Button className={'button'}>{children}</Button>;
};
