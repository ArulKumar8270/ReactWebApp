import React from 'react'

import { Form, Button } from 'react-bootstrap';
import { CCard, CCardHeader, CForm, CFormInput, CCardBody, CButton, CFormSelect } from '@coreui/react';
const AddCompany = () => {
    return (
        <div>
            <Form>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Add Company</strong>
                    </CCardHeader>
                    <CCardBody>
                        <div className='row'>
                            <div className='col-sm-6 mb-3'>
                                <CForm>
                                    <CFormInput
                                        type="text"
                                        label="Company name"
                                    />
                                </CForm>
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
                                <CFormInput
                                    type="email"
                                    label="Company email"
                                />
                            </div>
                            <div className='col-sm-6 mb-3'>
                                <CFormInput
                                    type="text"
                                    label="Company phone"
                                />
                            </div>
                            <div className='col-sm-6 mb-3'>
                                <CFormInput
                                    type="text"
                                    label="Company address"
                                />
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
                                    Add
                                </CButton>
                            </div>
                        </div>
                    </CCardBody>
                </CCard>
            </Form>
        </div>
    )
}

export default AddCompany
