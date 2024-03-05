import { CCard, CCardHeader, CForm, CFormInput, CCardBody, CButton, CFormSelect } from '@coreui/react';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

const Dashboard = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  // Get the current date in the format YYYY-MM-DD
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://api.vaahansafety.org/api/transportations', data);
      console.log('Response:', response.data);
      // Handle response data as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <CForm onSubmit={handleSubmit(onSubmit)}>
      <CCard className="mb-4">
        <CCardHeader>
          <h3>Common</h3>
        </CCardHeader>
        <CCardBody>
          <div className='row'>
            <div className='col-sm-6 mb-3'>
              <Controller
                name="date"
                control={control}
                defaultValue={getCurrentDate()}
                rules={{ required: 'Date is required', pattern: { value: /^\d{4}-\d{2}-\d{2}$/, message: 'Invalid date format (YYYY-MM-DD)' } }}
                render={({ field }) => (
                  <CFormInput
                    {...field}
                    type="date"
                    placeholder="Date"
                  />
                )}
              />
              {errors.date && <div className="text-danger">{errors.date.message}</div>}
            </div>
            <div className='col-sm-6 mb-3'>
              <Controller
                name="material"
                control={control}
                defaultValue="MSand"
                render={({ field }) => (
                  <CFormSelect
                    {...field}
                    aria-label="Material"
                  >
                    <option>MSand</option>
                    <option value="1">YSand</option>
                    <option value="2">Cleay</option>
                    <option value="3">Red sand</option>
                  </CFormSelect>
                )}
              />
              {errors.material && <div className="text-danger">{errors.material.message}</div>}
            </div>
            <div className='col-sm-6 mb-3'>
              <Controller
                name="location"
                control={control}
                rules={{ required: 'Location is required' }}
                defaultValue=""
                render={({ field }) => (
                  <CFormInput
                    {...field}
                    type="text"
                    placeholder="Location"
                  />
                )}
              />
              {errors.location && <div className="text-danger">{errors.location.message}</div>}
            </div>
            <div className='col-sm-6 mb-3'>
              <Controller
                name="vehicle_number"
                control={control}
                rules={{ required: 'Vehicle number is required' }}
                defaultValue=""
                render={({ field }) => (
                  <CFormInput
                    {...field}
                    type="text"
                    placeholder="Vehicle Number"
                  />
                )}
              />
              {errors.vehicle_number && <div className="text-danger">{errors.vehicle_number.message}</div>}
            </div>
          </div>
          {/* Additional form fields */}
          <div className='row'>
            <div className='col-sm-6'>
              <div className='col-sm-12 mb-3'>
                <Controller
                  name="from_company_name"
                  rules={{ required: 'From Company Name is required' }}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <CFormInput
                      {...field}
                      type="text"
                      placeholder="From Company Name"
                    />
                  )}
                />
                {errors.from_company_name && <div className="text-danger">{errors.from_company_name.message}</div>}
              </div>
              <div className='col-sm-12 mb-3'>
                <Controller
                  name="from_total_amount"
                  control={control}
                  rules={{
                    required: 'From total amount is required',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter a valid number'
                    }
                  }}
                  render={({ field }) => (
                    <CFormInput
                      {...field}
                      type="text"
                      placeholder="From Total Amount"
                    />
                  )}
                />
                {errors.from_total_amount && <div className="text-danger">{errors.from_total_amount.message}</div>}
              </div>
              <div className='col-sm-12 mb-3'>
                <Controller
                  name="from_phone_no"
                  rules={{
                    required: 'From phone number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Please enter a valid  phone number'
                    }
                  }}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <CFormInput
                      {...field}
                      type="text"
                      placeholder="From Phone Number"
                    />
                  )}
                />
                {errors.from_phone_no && <div className="text-danger">{errors.from_phone_no.message}</div>}
              </div>
            </div>

            <div className='col-sm-6'>

              <div className='col-sm-12 mb-3'>
                <Controller
                  name="to_company_name"
                  rules={{ required: 'To Company Name is required' }}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <CFormInput
                      {...field}
                      type="text"
                      placeholder="To Company Name"
                    />
                  )}
                />
                {errors.to_company_name && <div className="text-danger">{errors.to_company_name.message}</div>}
              </div>
              <div className='col-sm-12 mb-3'>
                <Controller
                  name="to_total_amount"
                  rules={{
                    required: 'To total amount is required',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter a valid number'
                    }
                  }}
                  control={control}
                  render={({ field }) => (
                    <CFormInput
                      {...field}
                      type="text"
                      placeholder="To Total Amount"
                    />
                  )}
                />
                {errors.to_total_amount && <div className="text-danger">{errors.to_total_amount.message}</div>}
              </div>
              <div className='col-sm-12 mb-3'>
                <Controller
                  name="to_phone_number"
                  control={control}
                  rules={{
                    required: 'To phone number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Please enter a valid  phone number'
                    }
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <CFormInput
                      {...field}
                      type="text"
                      placeholder="To Phone Number"
                    />
                  )}
                />
                {errors.to_phone_number && <div className="text-danger">{errors.to_phone_number.message}</div>}
              </div>
              <div className='col-sm-12 mb-3'>
                <Controller
                  name="paid_amount"
                  rules={{
                    required: 'To Paid amount is required',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter a Paid Amount'
                    }
                  }}
                  control={control}
                  render={({ field }) => (
                    <CFormInput
                      {...field}
                      type="text"
                      placeholder="Paid Amount"
                    />
                  )}
                />
                {errors.paid_amount && <div className="text-danger">{errors.paid_amount.message}</div>}
              </div>
            </div>
          </div>
        </CCardBody>
        <div className='col-sm-12 text-center mb-4'>
          <CButton variant="outline" type="submit">
            Submit
          </CButton>
        </div>
      </CCard>
    </CForm>
  );
}

export default Dashboard;
