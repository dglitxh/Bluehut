import { Card, Row, Col } from 'antd';
import cardimg from './utils/svgs/thoughts.svg'
import cardimg2 from './utils/svgs/town.svg'
import cardimg3 from './utils/svgs/rename.svg'
import cardimg4 from './utils/svgs/upgrade.svg'
import { HomeTwoTone } from '@ant-design/icons'
import { motion } from 'framer-motion'


const { Meta } = Card;

const About = () => {

    return (
        <div className="Services container mt-20 mb-10">
        <h1 className="t"> Our Services Include</h1>
      <Row >
      <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
      <div className="info-card">
        <h2><HomeTwoTone/></h2>
       <h5> Customer Support </h5>
         <p class="card-text">Some quick example text
         to build on the card title
          and make up the bulk of the card's content.
        </p>

      </div>
      </Col>
      <Col xs={{span:24}} sm={{span:12}} md={{span:8}} lg={{span:8}} >
      <div  className="info-card">
      <h2><HomeTwoTone/></h2>
      <h5> Customer Support </h5>
        <p class="card-text">Some quick example text
        to build on the card title
         and make up the bulk of the card's content.
       </p>
      </div>

      </Col>
      <Col xs={{span:24}} sm={{span:12}} md={{span:8}} lg={{span:8}} >
      <div  className="info-card">
      <h2><HomeTwoTone/></h2>
      <h5> Customer Support </h5>
        <p class="card-text">Some quick example text
        to build on the card title
         and make up the bulk of the card's content.
       </p>
      </div>
      </Col>

      <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
      <div className="info-card">
        <h2><HomeTwoTone/></h2>
       <h5> Customer Support </h5>
         <p class="card-text">Some quick example text
         to build on the card title
          and make up the bulk of the card's content.
        </p>

      </div>
      </Col>
      <Col xs={{span:24}} sm={{span:12}} md={{span:8}} lg={{span:8}} >
      <div  className="info-card">
      <h2><HomeTwoTone/></h2>
      <h5> Customer Support </h5>
        <p class="card-text">Some quick example text
        to build on the card title
         and make up the bulk of the card's content.
       </p>
      </div>

      </Col>

      <Col xs={{span:24}} sm={{span:12}} md={{span:8}} lg={{span:8}} >
      <div className="info-card">
      <h2><HomeTwoTone/></h2>
      <h5> Customer Support </h5>
        <p class="card-text">Some quick example text
        to build on the card title
         and make up the bulk of the card's content.
       </p>
      </div>
      </Col>
      </Row>
</div>
    )
}


export default About
