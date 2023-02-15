import { Typography } from 'antd';
export default ({ content, klass }) => (
  <Typography.Title level={1} className={klass}>
    {content}
  </Typography.Title>
);
