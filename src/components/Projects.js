import { Row, Col } from 'antd'


const Projects = ( ) => {

    return (
      <div className="container info">
        <h2> How It Works </h2>
      <Row >
      <Col xs={{span:24}} sm={{span:12}} lg={{span:12}} md={{span:12}}>
      <div data-aos="zoom-out-up" data-aos-duration="2000" className=" ">

      <div className="container">
      <div class="mapouter">
      <div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas"
      src="https://maps.google.com/maps?q=Boundry%20Road%20East%20Legon&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      <br/><style>
      </style>
      </div>
      </div>
      </div>

      </div>
      </Col>
      <Col xs={{span:24}} sm={{span:12}} md={{span:12}} lg={{span:12}} >
      <div data-aos="zoom-out-down"   className=" ">
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
      </Row>


        </div>
    )
}

export default Projects
