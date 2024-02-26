import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { CCard, CCardHeader, CForm, CFormInput, CCardBody, CButton, CFormSelect } from '@coreui/react';
import Table from 'src/components/Table';

const Dashboard = () => {



  return (
    <>
      <Form>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Update Details</strong>
          </CCardHeader>
          <CCardBody>
            <div className='row'>
              <div className='col-sm-6 mb-3'>
                <CFormSelect aria-label="Default select example" label={"From Company Name"}>
                  <option>From</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
              <div className='col-sm-6 mb-3'>
                <CFormSelect aria-label="Default select example" label={"To Company Name"}>
                  <option>To</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
              <div className='col-sm-6 mb-3'>
                <CFormSelect aria-label="Default select example" label={"Company Type"}>
                  <option>Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
              <div className='col-sm-6 mb-3'>
                <CForm>
                  <CFormInput
                    type="date"
                    label="Date"
                  />
                </CForm>
              </div>
              <div className='col-sm-6 mb-3'>
                <CForm>
                  <CFormInput
                    type="text"
                    label="Quantity"
                    placeholder = "0"
                  />
                </CForm>
              </div>
              <div className='col-sm-6 mb-3'>
                <CForm>
                  <CFormSelect aria-label="Default select example" label={"Status"}>
                    <option>Status</option>
                    <option value="1">Pending</option>
                    <option value="2">Completed</option>
                  </CFormSelect>
                </CForm>
              </div>
              <div className='col-sm-12 text-center'>
                <CButton
                  variant="outline"
                >
                  Update
                </CButton>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </Form>
      <Table />
    </>
  )
}

export default Dashboard
