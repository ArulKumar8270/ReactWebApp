import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'src/components/Table';

const PaymentReport = () => {
  const [transportations, setTransportations] = useState([]);

  useEffect(() => {
    fetchTransportations();
  }, []);

  console.log(transportations, "api data");
  const columns = [
    {
      key: 'action',
      filter: false,
      sorter: false,
    },
    {
      key: 'to_total_amount',
    },
    {
      key: 'paid_amount',
    },
    {
      key: 'pending_amount',
    },

    {
      key: 'material',
    },

    {
      key: 'to_company_name',

    },

    {
      key: 'to_phone_number',


    },
    {
      key: 'date',

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
}

export default PaymentReport






