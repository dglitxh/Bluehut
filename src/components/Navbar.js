import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined, HomeTwoTone } from '@ant-design/icons'

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);

  };

    return (
      <nav className="  navbar navbar-expand-lg">
        <div className="container">

          <a href="#pablo" className="navbar-brand">BlueHut Eng.</a>

                <div className="collapse-close ">
                  <button onClick={showDrawer} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="https://img.icons8.com/windows/32/000000/menu--v3.png"/>
                  </button>
                          </div>
                        <div className="navbar-collapse collapse">
                          <ul className="navbar-nav ms-auto mb-1 mb-lg-0 navbar-nav">
                            <li className="nav-item"><a href="#pablo" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#pablo" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="#pablo" className="nav-link">Services</a></li>
                            <li className="nav-item"><a href="#pablo" className="nav-link">Contact</a></li>

                            </ul>
                          </div>
                        </div>
      <Drawer title="Main Menu" placement="right" onClose={onClose} visible={visible}>
      <div className="drawer-items">
        <div className='menu-items'>
          <a><h3>Home</h3></a>
          <a><h3>About</h3></a>
          <a><h3>Contact</h3></a>
          <Button type='danger' onClick={onClose}>Close</Button>

        </div>
       </div>
      // </Drawer>
      // </nav>
    )
}


export default Navbar
