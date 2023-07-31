import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
export default function ReportBird(props) {
  const [englishName, setEnglishName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [fourCode, setFourCode] = useState('');
  const [sixCode, setSixCode] = useState('');

  
  return (
    <div>
      {props.showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal Title</h5>
                <button type="button" className="close" onClick={props.handleCloseModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                  <Form action="https://formspree.io/f/mleazwnd" method="post" className='needs-validation' noValidate>
                  <div className="mb-3" style={{ marginTop: '20px' }}>
                    <Form.Label htmlFor="englishName">English Name</Form.Label>
                    <Form.Control type="text" name ='English Name' value={englishName} onChange={(e) => setEnglishName(e.target.value)} id="englishName" required/>
                    <Form.Label htmlFor="scientificName">Scientific Name</Form.Label>
                    <Form.Control type="text" name ='Scientific Name' value={scientificName} onChange={(e) => setScientificName(e.target.value)} id="scientificName" />
                    <Form.Label htmlFor="fourCode">Four Letter Code</Form.Label>
                    <Form.Control type="text" name ='Four Code' value={fourCode} onChange={(e) => setFourCode(e.target.value)} id="fourCode" />
                    <Form.Label htmlFor="sixCode">Six Letter Code</Form.Label>
                    <Form.Control type="text" name ='Six Code' value={sixCode} onChange={(e) => setSixCode(e.target.value)} id="sixCode" />
                  </div>
                  <button type="submit" className="mb-3 btn btn-primary" >Submit</button>
                  </Form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={props.handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}