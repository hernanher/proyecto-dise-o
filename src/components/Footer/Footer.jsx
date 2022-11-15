import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer>
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                  <span> </span>
                </div>
                <div>
                  <a href className="me-4 text-reset">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href className="me-4 text-reset">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href className="me-4 text-reset">
                    <i className="fab fa-google" />
                  </a>
                  <a href className="me-4 text-reset">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href className="me-4 text-reset">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href className="me-4 text-reset">
                    <i className="fab fa-github" />
                  </a>
                </div>
              </section>
              <section className>
                <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3" />Quienes Somos
                      </h6>
                      <p>
                        <img src='https://brisasdelcentro.cl/wp-content/uploads/2020/08/LOGO-PLUS-ULTRA.png' />
                      </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">
                        Recursos
                      </h6>
                      <p>
                        <a href="https://www.facebook.com/plusultralibreria/reviews" className="text-reset">Reseñas</a>
                      </p>
                      <p>
                        <a href="https://www.facebook.com/plusultralibreria/" className="text-reset">Facebook</a>
                      </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Contactanos</h6>
                      <p><i className="fas fa-home me-3" />Calle 1 Nte. 1209, Local 06, Talca, Maule</p>
                      <p>
                        <i className="fas fa-envelope me-3" />
                        plusultra.consultas@gmail.com
                      </p>
                      <p><i className="fas fa-phone me-3" /> +569 000 000 01</p>
                      <p><i className="fas fa-print me-3" /> +569 919 456 37</p>
                    </div>
                  </div>
                </div>
              </section>
              <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                © 2022 Copyright:
                <a className="text-reset fw-bold" href="https://www.instagram.com/plusultralibreria/">Plus Ultra Libreria</a>
              </div>
            </footer>
    </div>
    )
}


export default Footer;





    /* Basado en codigo en Bootstrap 5 */
