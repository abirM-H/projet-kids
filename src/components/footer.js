import React from "react";

const Footer = () => {
  return(
  <footer className="/ font-small stylish-color-dark pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-2 mx-auto">
            <h5 className="font-weight-bold  mt-3 mb-4">Besoin d'aide?</h5>
            <p className="adress-mail">3allemni@gmail.com</p>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Suivez-nous
            </h5>
            <a href="https://www.facebook.com/allemni.kids.7" target="_blank">
              <img
                className="facebook"
                alt="Icon_facebook"
                src="https://img.icons8.com/bubbles/2x/facebook-new.png"
              />
            </a>
            <a href="https://www.facebook.com/FarFaria" target="_blank">
              <img
                className="instagram"
                alt="Icon_instragram"
                src="https://retohercules.com/images/insagram-png-16.png"
              />
            </a>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
          </div>
          
          <img
            className="img-footer"
            src="https://cdn.lingokids.com/assets/home/what_is/family-8fe6c2336ed15d62aaf403de8020c088c1b4f52942909a6eea2b4887a5505803.png"
            width="200"
            height="150"
            alt=""
            typeof="foaf:Image"
          />

        </div>
      </div>
      <div class="footer-copyright text-center py-3">© 2019 Copyright</div>
    </footer>)

};

export default Footer;
