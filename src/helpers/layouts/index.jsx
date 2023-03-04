import { Button, Typography, Col, Divider, Image, Layout, Row } from 'antd';
import Brand from './Brand';
import Branding from '../components/Branding';
import Nav from './Nav';
import styles from './layout.module.scss';
import Card from '../../components/utils/Card';
import { breakpoints } from './grid';
import Footer from './Footer';
import Menu from '../../components/Menu';
const { Header, Content } = Layout;

// const [map] = useState(L.map('map').setView([51.505, -0.09], 13));
export default () => {
  // useEffect(() => {
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution:
  //       'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  //   }).addTo(map);
  // });

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Brand className={styles.brand} />
        <Nav className={styles.menu} />
      </Header>
      <Content className={styles.content}>
        <Image className={styles.content_cover} preview={false} />
        <Branding klass={styles.hass_title} content={'Hass Filandia'} />
        {/* <Content >
            <Menu />
        </Content> */}
      </Content>
      <Footer />
    </Layout>
  );
};
