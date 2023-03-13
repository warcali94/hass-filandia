import menu from './menu.json';
import { Menu } from 'antd';
import 'react-awesome-button/dist/styles.css';
import { useState } from 'react';

export default ({ klass, items }) => {
  const [selectedKeys, setSelectedKeys] = useState(["inicio"]);
  const handleSelect = (target) => {
    setSelectedKeys(target.key);
  };
  return (
    <Menu
      key={menu.key}
      onClick={(event) => handleSelect(event)}
      mode="horizontal"
      rootClassName={klass}
      items={menu}
      selectedKeys={selectedKeys}
      defaultSelectedKeys={selectedKeys}
    ></Menu>
  );
};
