import React , {useState, useEffect} from 'react';
import { Container, Col, Row, Form } from 'react-bootstrap';
export default function Footer() {
  const [email, setEmail] = useState('');
  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  }
  const [year, setYear] = useState(null);
  useEffect(() => {
    getYear();
  }, []);
  const getYear = () => {
    setYear(new Date().getFullYear()); 

  };
  return (
    <footer id="footer" className="bg-secondary text-black position-relative">
      <Container className="container position-relative z-index-1">
        <Row className="row grid-separator align-items-stretch">
          <Col className="col-md-7 col-lg-4 pe-md-6 py-lg-11 py-9">
            <div className="d-flex flex-column h-100">
              <h6 className="mb-4 opacity-50">Join our mail list</h6>
              <p className="mb-4 small">Stay in the Know- join our mailing list</p>
              <Form className='needs-validation' method="POST" action="https://formspree.io/f/mgeqdwvr">
                <div className="mb-3">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control type="email" name="email" value={email} required placeholder="Your Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="email" onChange={(e) => setEmailHandler(e)} />
                  <span className="invalid-feedback">This field is required</span>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary" type="submit">
                    Sign me up
                  </button>
                </div>
              </Form >
            </div>
          </Col>
          <Col className="col-md-5 col-lg-4 pe-md-6 py-lg-11 py-9 ps-md-6 py-lg-11 py-9">
            <h6 className="mb-4 opacity-50">Explore</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="/about" className="nav-link text-decoration-none text-reset">About</a>
              </li>
              <li className="nav-item">
                <a href="/support" className="nav-link text-decoration-none text-reset">Support</a>
              </li>
              <li className="nav-item">
                <a href="https://www.birdpop.org/" className="nav-link text-decoration-none text-reset">Institute for Bird Populations</a>
              </li>
              <li className="nav-item">
                <a href="https://www.audubon.org/" className="nav-link text-decoration-none text-reset">National Aubdon Society</a>
              </li>
            </ul>
          </Col>
          <Col className="col-md-12 col-lg-4 ps-md-6 py-lg-11 py-9">
            <div className="d-flex flex-column flex-sm-row">
              <div className="mb-4 mb-sm-0 pe-sm-3">
                <div>
                  <h6 className="mb-4 opacity-50">Birdr</h6>
                  {/* <p className="mb-3">
                    1845 N MLK JR Blvd #38382 <br /> Tallahassee<br /> FL 32303
                  </p> */}
                </div>
              </div>
              <div className="ps-sm-3">
                <strong className="d-block text-muted small mb-2">Email:</strong>
                <a href="mailto:supportBirdApp@proton.me" className="fw-semibold link-underline text-decoration-none text-reset">supportBirdApp@proton.me</a>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="my-0" />
        <div>
           <div className="row py-5">
             <div className="col-sm-7 col-md-6 mb-3 mb-sm-0"></div>
          </div>
           <div className="col-sm-5 col-md-6 small text-sm-end">
             <span className="d-block lh-sm small text-muted">© Copyright  {year}. Birdr</span>
           </div>
        </div>
      </Container>
    </footer>
  );
}