import menu from './menu.json';
import { Menu } from 'antd';

const renderItems = menu.map((key) => ({
  key,
  label: key.name,
}));

export default () => (
  <Menu theme="dark" mode="horizontal" forceSubMenuRender items={renderItems} />
);
