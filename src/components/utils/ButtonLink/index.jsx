import { Button } from 'antd';
import { SlArrowDown } from 'react-icons/sl';
// import {useHistory} from 'react-router-dom';



export default ({ klass }) => {

//   const history = useHistory();
  const handleClick = () => {
    // history.push("/#menu")
  };
  return (
    <>
      <SlArrowDown onClick={handleClick} className={klass} />
    </>
  );
};
