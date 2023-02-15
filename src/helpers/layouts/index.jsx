import { Button, Typography, Col, Divider, Image, Layout, Row } from 'antd';
import Brand from './Brand';
import Branding from '../components/Branding';
import Menu from './Menu';
import styles from './layout.module.scss';
import Card from '../../components/utils/Card';
import { breakpoints } from './grid';
import Footer from './Footer';

const { Header, Content } = Layout;
const cardsItems = [
  {
    title: 'Primera foto',
    description: 'Welcome',
    image:
      'https://zavocado.com/wp-content/uploads/2020/07/aguacate-organico-de-exportacion-zavocado-org-aguac.png',
  },
  {
    title: 'Segunda foto',
    description: 'Welcome',
    image:
      'https://www.semana.com/resizer/7SC3zH8Bu0ukO3hfu5dFhE6z8qw=/1280x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/KSGYWVKJD5EKJOZIXM2S26WXHE.jpg',
  },
  {
    title: 'Tercera foto',
    description: 'Welcome',
    image: 'https://www.ucr.ac.cr/medios/fotos/2019/dsc_70235cec3f0755c86.jpg',
  },
  {
    title: 'Cuarta foto',
    description: 'Welcome',
    image: 'https://www.ucr.ac.cr/medios/fotos/2019/dsc_70235cec3f0755c86.jpg',
  },
  {
    title: 'Quinta foto',
    description: 'Welcome',
    image:
      'https://static.wixstatic.com/media/dc8b58_c3a360409371405b92f71eb4fdf72eb7~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_80,enc_auto/dc8b58_c3a360409371405b92f71eb4fdf72eb7~mv2.jpg',
  },
  {
    title: 'Sexta foto',
    description: 'Welcome',
    image:
      'https://static.wixstatic.com/media/dc8b58_c3a360409371405b92f71eb4fdf72eb7~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_80,enc_auto/dc8b58_c3a360409371405b92f71eb4fdf72eb7~mv2.jpg',
  },
];

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
        <Menu className={styles.menu} />
      </Header>
      <Content className={styles.content}>
        <Image className={styles.content_cover} preview={false} />
        <Branding klass={styles.hass_title} content={'Hass Filandia'} />
        <Content className={styles.content_cards}>
          <Row gutter={{ ...breakpoints }} justify="space-around">
            {cardsItems.map(({ title, image, description }, index) => (
              <Col span={{ ...breakpoints }} key={index}>
                <Card image={image} title={title}>
                  <Divider>
                    <Button type="primary">Detalles</Button>
                    <p>{description}</p>
                  </Divider>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </Content>
      <Footer />
    </Layout>
  );
};
