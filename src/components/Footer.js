import { BackTop } from 'antd';


const Footer = () => {

  const style = {
          height: 40,
          width: 40,
          lineHeight: '40px',
          borderRadius: 4,
          color: '#fff',
          textAlign: 'center',
          fontSize: 14,
          };
    return (
        <div>
        <footer className="container pb-3">
        <hr/>
            <div className="float-end social-icons">
            <a target="_blank" rel="noreferrer"
              href="https://mobile.twitter.com/Bluehut_Eng">
              <img className="px-2 " alt="icon" src="https://img.icons8.com/ios/24/000000/twitter--v1.png"/>
            </a>

            <a target="_blank" rel="noreferrer" href="instagram">
              <img className="px-2" alt="icon" src="https://img.icons8.com/ios/24/000000/instagram.png"/>
            </a>

            <a target="_blank" rel="noreferrer" href="facebook">
              <img className="px-2" alt="icon" src="https://img.icons8.com/ios/24/000000/facebook-circled--v1.png"/>
            </a>

            </div>
            <p className="footer-text mt-2">© 2021 - 2022 BlueHut, Inc.</p>
          </footer>
          <BackTop>
            <div style={style} className='items-center'><img src="https://img.icons8.com/fluency/38/000000/up.png" alt='Up'/></div>
          </BackTop>
        </div>
    )
}

export default Footer
