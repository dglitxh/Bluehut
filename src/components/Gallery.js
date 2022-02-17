import { Row, Col, Modal } from "antd"
import PageNav from './PageNav'
import { motion  } from 'framer-motion'
import { pictures } from './assets/data'
import { useState } from 'react'


const Gallery = () => {
  const [imageInfo, setImageInfo] = useState(0)
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleClick = (id) => {
    console.log('id = ', id)
    setImageInfo(pictures.find((el) => el.id === id))
    showModal()
  }
    const showModal = () => {
      setIsModalVisible(true);
    };

    const handleOk = () => {
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

      const containerVariants = {
        hidden: {
            opacity: 0,
            x: '100vw'
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', duration: 4  }
          },
          exit: {
            x: "-100vh",
            transition: { ease: 'easeInOut' }
          }
        };

    return(
      <motion.div id="gallery" className="container mt-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
              <h2 className="mb-10"> Gallery </h2>

              <div>
              <Row >
              {pictures.map((pic) => {
                return(
                  <Col xs={{span:24}} sm={{span:12}} lg={{span:8}} md={{span:8}}>
                    <div key={pic.id} data-aos="zoom-out-down" data-aos-duration="1500" className="info-card">
                      <motion.img
                      style= {{rotate:-20}}
                      whileHover={{
                        scale: 1.3,
                        rotate: 0,
                        transition: { duration: 1 },
                      }}
                      className='rounded-2xl'
                       onClick={()=>handleClick(pic.id)} alt="icon" src={pic.img}/>
              </div>

              </Col>
                )
              })
             }

              </Row>
         </div>

         <Modal
            bodyStyle={{padding:0}}
             title={null}
             width={'70vw'}
             visible={isModalVisible}
             onOk={handleOk}
             onCancel={handleCancel}
             footer={null}
         >
         <img className='p-0 m-0 ' src={imageInfo.img} alt="som_pic" />

         </Modal>
            <PageNav loc={'/pricing'} />
        </motion.div>
    )
}

export default Gallery
