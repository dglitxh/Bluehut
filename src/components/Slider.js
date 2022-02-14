import { Carousel, Image } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import PageNav from './PageNav'




const Slider = () => {



    const contentStyle = {
        color: '#fff',
        textAlign: 'center',
        background: 'black',
        height: '760px',
        width: '100vw'
      };

    return(
        <div className="container">
              <h2 className="mt-5 mb-10"> Gallery </h2>
            <Carousel effect="fade" autoplay arrows prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined/>}>
                <div>
                  <img style={contentStyle} className=' img-fluid' src={require('./utils/imgs/img1.jpg')} alt='img'   />
                </div>
                <div>
                    <img style={contentStyle} className=' img-fluid' src={require('./utils/imgs/img2.jpg')} alt='img' height='500'  />
                </div>
                <div>
                    <img style={contentStyle} className='img-fluid' src={require('./utils/imgs/img3.jpg')} alt='img' height='500'  />
                </div>
                <div>
                    <img style={contentStyle} className=' img-fluid' src={require('./utils/imgs/img4.jpg')} alt='img' height='500'  />
                </div>
              </Carousel>,
            <PageNav loc={'/about'} text="Next page"/>
        </div>
    )
}

export default Slider
