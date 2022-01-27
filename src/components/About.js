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
        <h2 className="t"> Our Services Include</h2>
      <Row >
      <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
      <div data-aos="zoom-out-down" className="info-card">
        <img src="https://img.icons8.com/color/48/000000/engineer-skin-type-5.png"/>
       <h5> Engineering Consultancy </h5>
         <p class="card-text">We provide consultancy and
         quality assurance services using well defined procedures
          and a systematic approach by quantifying risk,
          developing effective mitigation strategies,
          performing defect identification and risk assessment.
          </p>
      </div>
      </Col>
      <Col xs={{span:24}} sm={{span:12}} md={{span:8}} lg={{span:8}} >
      <div data-aos="zoom-out-down" className="info-card">
      <img src="https://img.icons8.com/color/48/000000/gears.png"/>
      <h5> Fibre Services </h5>
        <p class="card-text">One of the country's most reliable Fiber
         Internet services! We live and breathe fiber.
         Our mission is to make fiber reliable, affordable, and
        fast for everyone.
       </p>
      </div>

      </Col>
      <Col xs={{span:24}} sm={{span:12}} md={{span:8}} lg={{span:8}} >
      <div
      data-aos="zoom-out-down"
       className="info-card">
      <img src="https://img.icons8.com/color/48/000000/construction-carpenter-ruler.png"/>
      <h5> Remodelling of existing structures </h5>
        <p class="card-text">We remodel existing structures and create comfortable,
         functional, affordable and aesthetically pleasing spaces for
         our clients.
       </p>
      </div>
      </Col>

      <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
      <div data-aos="zoom-out-down" className="info-card">
        <img src="https://img.icons8.com/color/50/000000/electronics.png"/>
       <h5> Electrical wiring and design </h5>
         <p class="card-text">We are a complete solution for
         your electrical wiring and design needs.
         We offer electrical wiring and design services
         to businesses and residential customers.
        </p>

      </div>
      </Col>
      <Col xs={{span:24}} sm={{span:12}} md={{span:8}} lg={{span:8}} >
      <div data-aos="zoom-out-down" className="info-card">
      <img src="https://img.icons8.com/color/48/000000/pipelines.png"/>
      <h5> 5G services </h5>
        <p class="card-text">
        We're a group of technical experts focused on 5G services.
         We specialize in providing end-to-end 5G services
         from design and development, to support and maintenance.
       </p>
      </div>

      </Col>

      <Col xs={{span:24}} sm={{span:12}} md={{span:8}} lg={{span:8}} >
      <div data-aos="zoom-out-down" className="info-card">
    <img src="https://img.icons8.com/color/48/000000/electricity.png"/>
      <h5> Electrical Installation </h5>
        <p class="card-text">
       We do electrical installations, we are well equipped to do any kind of work in the electrical field
        and we can install any type of electrical systems.
       </p>
      </div>
      </Col>
      </Row>
</div>
    )
}


export default About
