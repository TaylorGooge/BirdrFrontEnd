import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function ContactSection2() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  
  const setNameHandler = (e) => {
    setName(e.target.value);
  }
  
  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  }
  
  const setMessageHandler = (e) => {
    setMessage(e.target.value);
  }
  
  const setSubjectHandler = (e) => {
    setSubject(e.target.value);
  }
  return (
    <section className="position-relative">
      <div className="container py-9 py-lg-11">
        <div className="row">
          <div className="col-md-8 col-lg-7 mb-7 mb-md-0 me-auto">
            <div className="position-relative">
              <h1> Contact form </h1>
              <p className="mb-3 w-lg-75">
                Use the contact form if you have questions about our Birdr. Our team will be happy to help you:
              </p>
              <div className="width-7x pt-1 bg-primary mb-5"></div>
                 <Form method="POST" role="form" action="https://formspree.io/f/mwkzyepd" className="needs-validation mb-5 mb-lg-7">
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <Form.Label htmlFor="name">Your name</Form.Label>
                    <Form.Control type="text" onChange={(e) => setNameHandler(e)} name="name" value={name} id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-sm-6 mb-3">
                    <Form.Label htmlFor="email">Your email address</Form.Label>
                    <Form.Control type="email" name="email" value ={email} id="email" placeholder="Your Email" aria-label="Your Email" onChange={(e) => setEmailHandler(e)} required />
                    <div className="invalid-feedback">Please enter a valid email address</div>
                  </div>
                  <div className="w-100"></div>
                  <div className="col-sm-12 mb-3">
                    <Form.Label htmlFor="subject">Subject</Form.Label>
                    <Form.Control type="text" name="subject" onChange={(e) => setSubjectHandler(e)} value ={subject} id="subject" placeholder="I need help with..." required />
                  </div>
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control as="textarea" onChange={(e) => setMessageHandler(e)} value={message} name="message" placeholder="Hi there...." required />
                  <div className="invalid-feedback">Please enter a message in the textarea.</div>
                </div>
                <div className="d-md-flex justify-content-between align-items-center">
                  <p className="small mb-4 text-muted mb-md-0">We'll get back to you in 1-2 business days.</p>
                  <input type="submit" name="submit" value="Submit message" id="sendBtn" className="btn btn-lg btn-primary" />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
