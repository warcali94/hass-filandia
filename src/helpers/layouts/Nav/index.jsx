import menu from './menu.json';
import { Menu } from 'antd';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
// import styles from"./nav.module.scss"
 const renderItems = menu.map((key, index) => ({
   key: key.name,
   label: key.name,
 }));

// const renderItems = menu.map((key, index) => (
//   <AwesomeButton key={key} size='small'>{key}</AwesomeButton>

// ));

export default ({className, items}) => (
   <Menu  rootClassName={className} items={renderItems} defaultOpenKeys={'inicio'} defaultSelectedKeys={['inicio']}>
    
</Menu>
   );
