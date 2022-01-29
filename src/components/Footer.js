import { BackTop } from 'antd';


const Footer = () => {

  const style = {
          height: 40,
          width: 40,
          lineHeight: '40px',
          borderRadius: 4,
          backgroundColor: 'black',
          color: '#fff',
          textAlign: 'center',
          fontSize: 14,
          };
    return (
        <div>
        <footer className="container">
        <hr/>
            <div className="float-end">
            <a href="twitter"><img alt="icon" src="https://img.icons8.com/color-glass/28/000000/facebook-new.png"/></a>
            <a href="instagram"><img alt="icon" src="https://img.icons8.com/color-glass/28/000000/instagram-new.png"/></a>
            <a href="facebook"><img alt="icon" src="https://img.icons8.com/color-glass/28/000000/twitter.png"/></a>
            </div>
            <p className="footer-text">© 2021 - 2022 BlueHut, Inc.</p>
          </footer>
          <BackTop>
            <div style={style}><img src="https://img.icons8.com/fluency/28/000000/up.png" alt='Up'/></div>
          </BackTop>
        </div>
    )
}

export default Footer
