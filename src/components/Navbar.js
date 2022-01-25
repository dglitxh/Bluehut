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
      <nav class="navbar-dark bg-primary navbar navbar-expand-lg">
        <div class="container">
          <a href="#pablo" class="navbar-brand">BlueHut Eng.</a>

                    <div class="collapse-close col-6">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
                          </div>
                          <div className="navbar-collapse collapse">
                          <ul class="ml-lg-auto navbar-nav">
                            <li class="nav-item"><a href="#pablo" class="nav-link">Discover <span class="sr-only">(current)</span></a></li>
                            <li class="nav-item"><a href="#pablo" class="nav-link">Profile</a></li>
                            <li class="dropdown nav-item"><a aria-haspopup="true" href="#" class="nav-link" aria-expanded="false">Settings</a>
                            <div tabindex="-1" role="menu" aria-labelledby="navbar-primary_dropdown_1" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><a href="#pablo" tabindex="0" role="menuitem" class="dropdown-item">Action</a>
                            <a href="#pablo" tabindex="0" role="menuitem" class="dropdown-item">Another action</a>
                            <div tabindex="-1" class="dropdown-divider"></div>
                            <a href="#pablo" tabindex="0" role="menuitem" class="dropdown-item">Something else here</a>
                            </div></li>
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
