import { Row, Col, Modal } from 'antd';
import { useState } from 'react';
import { services } from './assets/data'
import { motion } from 'framer-motion'
import PageNav from './PageNav'

const Services = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({})

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', duration: 4 }
    },
    exit: {
      x: "-100vw",
      transition: { ease: 'easeInOut' }
    }

};

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const openModal = (id) => {
    const modalInfo = services.find((el) => id === el.id)
    setModalInfo(modalInfo)
    showModal()
  }
    return (
        <motion.div id="services" className="Services container mt-5 mb-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className="text-center"> Our Services Include</h2>
      <Row >
      {services.map((service) => {
        return(
          <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
            <div key={service.id} data-aos="zoom-out-down" className="info-card">
              <img alt="icon" src={service.icon}/>
            <h4 className='text-xl text-sky-600'> {service.heading} </h4>
              <p class="card-text">{service.text.slice(0,80)+"...."}</p>
              <button onClick={() => openModal(service.id)} className='btn btn-outline-primary'>Read more</button>
      </div>

      </Col>
        )
      })
     }

      </Row>

      <Modal
          title={<h3>{modalInfo.heading}</h3>}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={<button onClick={handleOk} className='btn btn-primary'>Ok</button>}
      >
        <p>{modalInfo.text}</p>

      </Modal>
      <PageNav loc={'/pricing'} text="Next page"/>
</motion.div>
    )
}


export default Services
