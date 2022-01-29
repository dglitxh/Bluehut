import { Row, Col } from 'antd'


const Projects = ( ) => {

    return (
      <div className="container info">
        <h2> Reach Us </h2>
      <div data-aos="zoom-out-up " data-aos-duration="2000" className="map">

      <div className="container">
      <div className="mapouter">
      <div className="gmap_canvas embed-responsive embed-responsive-1by1"><iframe className="embed-responsive-item" id="gmap_canvas"
      src="https://maps.google.com/maps?q=asofoatse%20street%20East%20legon&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      <br/><style>
      </style>
      </div>
      </div>
      </div>

      </div>


      <div class="contact-form" id="contact">
          <div class="container">
      <form>
       <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12">
          <h1>Get in Touch</h1>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 right ">
           <div class="form-group mb-3">
             <input type="text" class="form-control form-control-lg" placeholder="Your Name" name=""/>
           </div>
           <div class="form-group mb-3">
             <input type="email" class="form-control form-control-lg" placeholder="YourEmail@email.com" name="email"/>
           </div>
           <div class="form-group mb-3">
             <textarea class="form-control form-control-lg" placeholder="leave a message">

             </textarea>
           </div>
           <input type="submit" class="btn btn-secondary btn-block" value="Send" name=""/>
        </div>
       </div>
      </form>
      </div>
      </div>
        </div>
    )
}

export default Projects
