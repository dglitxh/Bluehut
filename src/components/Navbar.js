import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons'

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

    return (
     <nav class=" navbar navbar-dark text-dark">
     <a class="navbar-brand" href="#">Fixed top</a>
    <button onClick={showDrawer} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
     
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
      <div className="drawer-items">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
      </Drawer>
      </nav>
    )
}


export default Navbar 