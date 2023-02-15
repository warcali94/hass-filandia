import menu from './menu.json';
import { Menu } from 'antd';

const renderItems = menu.map((key, index) => ({
  key: key.name,
  label: key.name,
}));

export default ({className}) => (
  <Menu theme="dark" rootClassName={className} items={renderItems} defaultOpenKeys={'inicio'} defaultSelectedKeys={['inicio']} />
);
