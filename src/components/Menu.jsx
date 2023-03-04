import { Button, Row,Col, Divider,  } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { breakpoints } from '../helpers/layouts/grid';
import styles from './menu.module.scss';
import Card from '../../src/components/utils/Card/index';

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

export default () => {
  return (
    <Content className={styles.cards_container}>
      <Row gutter={{ ...breakpoints } } className={styles.row}>
         {/* <Content className={styles.cards_container}> */}
         {cardsItems.map(({ title, image, description }, index) => (
        <Col span={{ ...breakpoints }}>
            <Card
              key={index}
              image={image}
              title={title}
            >
              <Divider>
                <Button type="primary">Detalles</Button>
                <p>{description}</p>
              </Divider>
            </Card>
          </Col>
          ))}
         {/* </Content> */}
      </Row>
    </Content>
  );
};
