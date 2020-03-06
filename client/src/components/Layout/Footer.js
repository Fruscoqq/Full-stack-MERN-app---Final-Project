import React from 'react';
import logo from '../../images/logo.svg'

const Footer = () => {
  return (
    <div className="" id="footer" style={{ backgroundColor: '#c3c3c' }}>
      <div className="footerWrapper">
        <div className="container">
          <div className="row py-5">
            <div className="col-12 text-center">
              <img src={logo} alt="footer logo" style={{ width: '90px' }} />
            </div>
            <div className="col-12 text-center py-3 text-light font-weight-bold">
              <p>Built with <i class="fas fa-heart text-danger"></i> by Arvydas</p>
              <p>© 2020-2026 Arvydas Kelmanas All Rights Rserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
