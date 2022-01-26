import {motion} from 'framer-motion'
import { HomeTwoTone } from '@ant-design/icons'
import { Col, Row } from 'antd'
import heroSvg from './utils/svgs/blocks.svg'
import mySvg from './utils/svgs/thoughts.svg'


const Contact = () =>  {

    return (
        <div className="container info">
          <h2> How It Works </h2>
        <Row >
        <Col xs={{span:24}} sm={{span:12}} lg={{span:12}} md={{span:12}}>
        <div data-aos="zoom-out-up" data-aos-duration="2000" className=" info-item">

          <img src={heroSvg} className="img-fluid info-img" alt="" />

        </div>
        </Col>
        <Col xs={{span:24}} sm={{span:12}} md={{span:12}} lg={{span:12}} >
        <div data-aos="zoom-out-down"   className="info-item-text p-6 ">
        <h3>Super Fast Support </h3>
        <h5>the world’s most popular.</h5>
          <p>
          Quickly design and customize responsive mobile-first sites with Bootstrap,
          the world’s most popular front-end open source toolkit.
          Quickly design and customize responsive mobile-first sites with Bootstrap,
          the world’s most popular front-end open source toolkit.
          </p>
        </div>

        </Col>

        <Col xs={{span:24}} sm={{span:12}} md={{span:12}} lg={{span:12}} >
        <div data-aos="zoom-out-down" className="info-item-text p-6 ">
        <h3>Super Fast Support </h3>
        <h5>the world’s most popular.</h5>
          <p>
          Quickly design and customize responsive mobile-first sites with Bootstrap,
          the world’s most popular front-end open source toolkit.
          Quickly design and customize responsive mobile-first sites with Bootstrap,
          the world’s most popular front-end open source toolkit.
          </p>
        </div>

        </Col>
        <Col xs={{span:24}} sm={{span:12}} lg={{span:12}} md={{span:12}}>
        <div data-aos="zoom-out-up"  data-aos-duration="2000" className=" info-item">

          <img src={mySvg} className="img-fluid info-img" alt="" />

        </div>
        </Col>

        </Row>
        </div>

    )
}


export default Contact
