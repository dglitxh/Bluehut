import React, { useState } from 'react';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';


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

          <Link to={'/'} className="navbar-brand">BlueHut Engineering</Link>

                <div className="collapse-close ">
                  <button onClick={showDrawer} className="navbar-toggler" type="button" data-toggle="collapse"
                 aria-label="Toggle navigation">
                    <img alt='svg' src="https://img.icons8.com/windows/32/000000/menu--v3.png"/>
                  </button>
                          </div>
                        <div className="navbar-collapse collapse">
                          <ul className="navbar-nav ms-auto mb-1 mb-lg-0 navbar-nav">
                            <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to={'/about'} className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to={'/services'} className="nav-link">Services</Link></li>
                              <li className="nav-item"><Link to={'/pricing'} className="nav-link">Pricing</Link></li>
                            <li className="nav-item"><Link to={'/contact'} className="nav-link">Contact</Link></li>

                            </ul>
                          </div>
                        </div>
      <Drawer title="Main Menu" placement="right" onClose={onClose} visible={visible}>
      <div className="drawer-items">
        <div className=''>
        <div className="menu-items">
              <h3 className=""><Link onClick={onClose} to={'/'} className="">Home</Link></h3>
              <h3 className=""><Link onClick={onClose} to={'/about'} className="">About</Link></h3>
              <h3 className=""><Link onClick={onClose} to={'/services'} className="">Services</Link></h3>
              <h3 className=""><Link onClick={onClose} to={'/pricing'} className="">Pricing</Link></h3>
              <h3 className=""><Link onClick={onClose} to={'/contact'} className="">Contact</Link></h3>
             
          </div>


        </div>
       </div>
      </Drawer>
      </nav>
    )
}


export default Navbar
