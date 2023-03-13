import { Button, Typography, Col, Divider, Image, Layout, Row } from 'antd';
import Brand from './Brand';
import Branding from '../components/Branding';
import Nav from './Nav';
import styles from './layout.module.scss';
import Card from '../../components/utils/Card';
import { breakpoints } from './grid';
import Footer from './Footer';
import Menu from '../../components/Menu';
import ButtonLink from '../../components/utils/ButtonLink';
import { useState } from 'react';
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
        <Brand klass={styles.brand} />
        <Nav klass={styles.menu} />
      </Header>
      <Content className={styles.content}>
        <Image className={styles.content_cover} preview={false} />
        <Content className={styles.content_items}>
          <Branding klass={styles.hass_title} content={'Hass Filandia'} />
          <ButtonLink klass={styles.button_link} />
        </Content>
        <Content>
        <Typography.Title level={3} className={styles.content_title}>
          Historias destacadas
        </Typography.Title>
          <Menu id="#menu" />
        </Content>
      </Content>
      <Footer />
    </Layout>
  );
};
