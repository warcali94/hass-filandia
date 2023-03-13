import { Tooltip, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { SocialIcon } from 'react-social-icons';
import Branding from '../../components/Branding';
import './footer.scss';
export default () => (
  <>
    <Content className="footer_container">
      <Content className="footer_branding">
        <Branding content={'Hass Filandia'} klass={'hass_title'} />
      </Content>
      <Content className="footer_info">
        <Content className="info">
          <Typography.Text className="text"><a href="">Visión</a></Typography.Text>
          <Typography.Text className="text"><a href="">Misión</a></Typography.Text>
          <Typography.Text className="text"><a href="">Proyectos</a></Typography.Text>
        </Content>
        <Content className="contact">
          <Typography.Text className="text">
            <Tooltip title="Gmail">
              <SocialIcon
                bgColor="transparent"
                fgColor="white"
                url={`https://www.gmail.com`}
              />
            </Tooltip>
            <span className='span_social'>Gmail</span>
          </Typography.Text>
          <Typography.Text className="text">
            <Tooltip title="Whatsapp">
              <SocialIcon
                bgColor="transparent"
                fgColor="white"
                url={`https://www.whatsapp.com`}
              />
            </Tooltip>
            <span className='span_social'>Whatsapp</span>
          </Typography.Text>
          <Typography.Text className="text">
            <Tooltip title="Facebook">
              <SocialIcon
                bgColor="transparent"
                fgColor="white"
                url={`https://www.facebook.com`}
              />
            </Tooltip>
            <span className='span_social'>Ubicación</span>
          </Typography.Text>
        </Content>
      </Content>
      <Content className="footer_icons">
        <Typography.Title level={5} style={{ color: 'white' }}>
         <span className='span_social'> Siguenos</span>
        </Typography.Title>
        <div>
          <Tooltip title="Facebook">
            <SocialIcon
              className='social-icon'
              bgColor="transparent"
              fgColor="white"
              url={`https://www.facebook.com`}
            />
          </Tooltip>
          <Tooltip title="Youtube">
            <SocialIcon
              bgColor="transparent"
              fgColor="white"
              url={`https://www.youtube.com/@asociaciondeproductoresdea6594`}
            />
          </Tooltip>
          <Tooltip title="Instagram">
            <SocialIcon
              bgColor="transparent"
              fgColor="white"
              url={`https://www.instagram.com/hassfilandia/`}
            />
          </Tooltip>
        </div>
      </Content>
    </Content>
    <Typography.Text className="footer_rights">
      &copy;Todos los derechos reservados
    </Typography.Text>
  </>
);
