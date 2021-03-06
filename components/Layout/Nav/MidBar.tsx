import { Row, Col } from 'antd';
import Image from 'next/image';
import router from 'next/router';
import logo from '../../../public/logomain_smaller.png';
import Cart from './Cart';
import classes from './MidBar.module.scss';

const MidBar = () => {
  return (
    <>
      <Row justify="space-between">
        <Col span={16}>
          <Row justify="start">
            <Col>
              <Image src={logo} alt={'Logo'} quality={100} onClick={() => router.push('/')} className={classes.image} />
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row justify="end">
            <Col>
              <Cart />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default MidBar;
