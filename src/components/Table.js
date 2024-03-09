import React, { useState } from "react";
import { CSmartTable} from "@coreui/react-pro";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  CButton,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import Dashboard from "src/views/dashboard/Dashboard";

const Table = ({ data, columns }) => {
  const [visible, setVisible] = useState(false);
  const [updatedata, setUpdatedata] = useState(null);
  const navigate = useNavigate();

  console.log(updatedata, "updatedata");

  const getPendingAmount = (item) => {
    const pendingAmount = Math.max(
      0,
      parseFloat(item.to_total_amount) - parseFloat(item.paid_amount)
    );
    return pendingAmount;
  };
  
  const UpdateFunc = (item) => {
    setUpdatedata(item);
    setVisible(true);
  };
  const onDeleteFun = async (item) => {
    try {
      if (item?.id) {
        const response = await axios.delete(`https://api.vaahansafety.org/api/transportations/${item.id}`);
        console.log('Response:', response.data);
        // Reload the page after the deletion operation is completed
        window.location.reload();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="">
      <CSmartTable
        activePage={2}
        columns={columns}
        columnFilter
        columnSorter
        items={data}
        itemsPerPageSelect
        itemsPerPage={50}
        pagination
        tableProps={{
          className: "add-this-class width-max",
          responsive: true,
          striped: true,
          hover: true,
        }}
        tableBodyProps={{
          className: "align-middle",
        }}
        scopedColumns={{
          pending_amount: (item) => {
            console.log(item, "data");

            return (
              <td>
                {getPendingAmount(item) === 0 ? (
                  <p
                    style={{
                      color: "white",
                      backgroundColor: "green",
                      padding: "5px",
                    }}
                  >
                    {getPendingAmount(item)}
                  </p>
                ) : (
                  <p
                    style={{
                      color: "white",
                      backgroundColor: "red",
                      padding: "5px",
                    }}
                  >
                    {getPendingAmount(item)}
                  </p>
                )}
              </td>
            );
          },
          action: (item) => {
            return (
              <td className="text-center">
                <CButton color={"danger"} className="me-3 text-white" onClick={() => onDeleteFun(item)}>
                  Delete
                </CButton>
                <CButton color={"secondary"} onClick={() => UpdateFunc(item)}>
                  Update
                </CButton>
              </td>
            );
          },
        }}
      />
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="VerticallyCenteredExample"
        size="xl"
      >
        <CModalHeader>
          <CModalTitle id="VerticallyCenteredExample">Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <Dashboard formData={updatedata}/>
        </CModalBody>
        
      </CModal>
    </div>
  );
};

export default Table;
