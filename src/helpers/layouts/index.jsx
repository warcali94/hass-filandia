import { Layout } from 'antd';
import Brand from './Brand';
import Menu from './Menu';
import './layout.scss';

const { Header, Footer, Sider, Content } = Layout;

export default () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <Brand className="brand" />
        <Menu className="menu" />
      </Header>
      {/* <Content></Content> */}
      {/* <Footer></Footer> */}
    </Layout>
  );
};
