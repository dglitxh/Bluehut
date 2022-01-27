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
      <nav class="  navbar navbar-expand-lg">
        <div class="container">

          <a href="#pablo" class="navbar-brand">BlueHut Eng.</a>

                <div class="collapse-close ">
                  <button onClick={showDrawer} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="https://img.icons8.com/windows/32/000000/menu--v3.png"/>
                  </button>
                          </div>
                        <div className="navbar-collapse collapse">
                          <ul class="navbar-nav ms-auto mb-1 mb-lg-0 navbar-nav">
                            <li class="nav-item"><a href="#pablo" class="nav-link">Home</a></li>
                            <li class="nav-item"><a href="#pablo" class="nav-link">About</a></li>
                            <li class="nav-item"><a href="#pablo" class="nav-link">Services</a></li>
                            <li class="nav-item"><a href="#pablo" class="nav-link">Contact</a></li>

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
