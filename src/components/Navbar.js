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
     <nav class="container navbar">
     <a class="navbar-brand " href="#"> BlueHut Eng</a>
    <Button onClick={showDrawer} class=" menu-button " type="button">
      <MenuOutlined />
    </Button>

      <Drawer title="Main Menu" placement="right" onClose={onClose} visible={visible}>
      <div className="drawer-items">
        <div className='menu-items'>
          <a><h3>Home</h3></a>
          <a><h3>About</h3></a>
          <a><h3>Contact</h3></a>
          <Button type='danger' onClick={onClose}>Close</Button>

        </div>
      </div>
      </Drawer>
      </nav>
    )
}


export default Navbar
