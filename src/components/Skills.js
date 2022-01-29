
import React from 'react';


const Skills = () => {

    return (
<div>
<div className=" px-4 py-5" id="custom-cards">
<div className="container">
    <h2 className="pb-2 ">What We Offer</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div data-aos="zoom-out-down" className="card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg pic-card-1" >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Integrated engineering solutions for all
            aspects of projects from commencement to completion.
            </h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"></svg>
                <small>Earth</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"></svg>
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div data-aos="zoom-out-down" className="card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg pic-card-2" >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"> Best customer service and support on the market.</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"></svg>
                <small>Pakistan</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"></svg>
                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div data-aos="zoom-out-down" className="card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg pic-card-3" >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"></svg>
                <small>California</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"></svg>
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
    )
}


export default Skills
