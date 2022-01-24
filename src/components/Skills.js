import { Carousel } from 'antd';


const Skills = () => {
  const contentStyle = {
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: "blue"

    };
    return (
      <div className="container slide">
      <h1 className="text-center mt-8"> What We Do </h1>
      <Carousel autoplay>
          <div>
          <div class="row align-items-md-stretch">
                  <div class="col-md-6">
                    <div class="h-100 p-5 text-white bg-dark rounded-3">
                      <h2>Change the background</h2>
                      <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                      <button class="btn btn-outline-light" type="button">Example button</button>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="h-100 p-5 bg-light border rounded-3">
                      <h2>Add borders</h2>
                      <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                      <button class="btn btn-outline-secondary" type="button">Example button</button>
                    </div>
                  </div>
                </div>
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


export default Skills
