import { Image, Card } from 'antd';

import './card.scss';
export default ({ image, title, children }) => {
  return (
    // <Card
    //   className="container-img"
    //   title={title}
    //   cover={<img className='img' src={image} alt="example" />}
    // >
    //   {children}
    // </Card>
    <Card
      cover={<Image className="img" src={image} alt={title} />}
      className="container-img"
      title={title}
      hoverable
      size="default"
    >
      {children}
    </Card>
  );
};
