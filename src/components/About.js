import { Card, Row, Col } from 'antd';
import cardimg from './utils/svgs/thoughts.svg'
import cardimg2 from './utils/svgs/town.svg'
import cardimg3 from './utils/svgs/rename.svg'
import cardimg4 from './utils/svgs/upgrade.svg'


const { Meta } = Card;

const About = () => {

    return (
        <div className="Services mt-20">
        <h1 className="text-center"> Our Services Include</h1>
    <div className='container mt-6 desc-cards'>
    
    <div class="row">
  <div class="col-sm-6 col-lg-3 col-md-4">
    <div class="card p-3" >
  <img class="card-img-top" src={cardimg} alt="Card image cap" width='100'/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  </div>
  <div class="col-sm-6 col-lg-3 col-md-4">
        <div class="card p-3" >
            <img class="card-img-top" src={cardimg2} alt="Card image cap" width='100'/>
            <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  </div>

  <div class="col-sm-6 col-lg-3 col-md-4">
    <div class="card p-3" >
      <img class="card-img-top" src={cardimg3} alt="Card image cap" width='100'/>
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3 col-md-4">
    <div class="card p-3" >
  <img class="card-img-top" src={cardimg4} alt="Card image cap" width='100'/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  </div>
</div>
</div>
</div>
    )
}


export default About