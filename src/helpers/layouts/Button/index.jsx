import { Button } from "antd";
import "./button.scss";

export default ({ items }) => {
  return <Button className={'button'}>{items}</Button>;
};
