import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'src/components/Table';



const Report = () => {

  const [transportations, setTransportations] = useState([]);

  useEffect(() => {
    fetchTransportations();
  }, []);

  console.log(transportations, "api data");
  const columns = [

    {
      key: 'date',

    },
    {
      key: 'material',
    },
    {
      key: 'location',
    },
    {
      key: 'vehicle_number',
    },
    {
      key: 'from_company_name',
    },
    {
      key: 'from_total_amount',
    },
    {
      key: 'from_phone_no',
      // _style: { width: '20%' },

    },
    {
      key: 'to_company_name',
      // _style: { width: '20%' },

    },
    {
      key: 'to_total_amount',
      // _style: { width: '20%' },

    },
    {
      key: 'to_phone_number',
      // _style: { width: '20%' },

    },
    {
      key: 'paid_amount',
      // _style: { width: '20%' },

    },

  ]

  const fetchTransportations = async () => {
    try {
      const response = await axios.get('https://api.vaahansafety.org/api/transportations');
      setTransportations(response.data.data.data);

    } catch (error) {
      console.error('Error fetching transportations:', error);
    }
  };

  return (
    <div>
      <Table data={transportations} columns={columns} />
    </div>
  );
};

export default Report;
