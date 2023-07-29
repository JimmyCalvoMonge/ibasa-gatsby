import * as React from "react"
import "../../styles/open-iconic-bootstrap.min.css"
import "../../styles/style.css"

var base_url = process.env.REACT_APP_ROOT_URL;

const NavBarLight = () =>  {
  return (
    <div className="bg-top navbar-light">
        <div className="container">
          <div className="row no-gutters d-flex align-items-center align-items-stretch">
            <div className="col-md-4 d-flex align-items-center py-4">
              <a className="navbar-brand" href={`${base_url}`}> IBASA <span>Costa Rica</span></a>
            </div>
            <div className="col-lg-8 d-block">
              <div className="row d-flex">
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
                  <div className="text">
                    <span>Email</span>
                    <span>institutoibasa.alajuela@gmail.com</span>
                  </div>
                </div>
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
                  <div className="text">
                    <span>Teléfono</span>
                    <span>+ 506 8445 6161</span>
                  </div>
                </div>
                <div className="col-md topper d-flex align-items-center justify-content-end">
                  <p className="mb-0">
                    <a href={`${base_url}/contacto`} className="btn py-2 px-3 btn-primary d-flex align-items-center justify-content-center">
                      <span>Matriculate Ahora</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
  
export default NavBarLight;
