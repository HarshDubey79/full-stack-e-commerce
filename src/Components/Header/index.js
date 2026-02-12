 import Logo from '../../assets/images/Main logo.png';

import { Link } from "react-router-dom";

  const Header =()=> {
    return (
        <>
        <div className="headerwapper">
            <div className="top-strip bg-color">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">latest offers: free shipping on orders over <b>₹100</b></p>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'}><img src={Logo} alt='Logo'/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>  
    );
  }
  export default Header;