import { Carousel } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"



const Slider = () => {



    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
      
    return(
        <div className="container">
            <Carousel autoplay arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
        </div>
    )
}