import React, { useEffect, useState } from "react";
import Cards from "../base/cards/Cards";
import { DocsExample } from "src/components";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";
import { CButton, CCardImage } from "@coreui/react";
import axios from "axios";

const CardsPage = () => {
  const [transportations, setTransportations] = useState([]);
  const [totransportations, setToTransportations] = useState([]);

  const fetchTransportations = async () => {
    try {
      const response = await axios.get(
        "https://api.vaahansafety.org/api/transportations"
      );
      getCompanyDetails(response.data.data.data);
      getToCompanyDetails(response.data.data.data);
    } catch (error) {
      console.error("Error fetching transportations:", error);
    }
  };

  const getCompanyDetails = (data) => {
    const groupedTransportations = {};
    data.forEach((transportation) => {
      const { from_company_name, from_total_amount, paid_amount } =
        transportation;
      if (!groupedTransportations[from_company_name]) {
        groupedTransportations[from_company_name] = {
          totalAmount: parseFloat(from_total_amount),
          pendingAmount:
            parseFloat(from_total_amount) - parseFloat(paid_amount),
          count: 1, // Initialize count to 1 for the first occurrence of a company
        };
      } else {
        groupedTransportations[from_company_name].totalAmount +=
          parseFloat(from_total_amount);
        groupedTransportations[from_company_name].pendingAmount +=
          parseFloat(from_total_amount) - parseFloat(paid_amount);
        groupedTransportations[from_company_name].count++; // Increment count for subsequent occurrences
      }
    });
    setTransportations(groupedTransportations);
  };

  const getToCompanyDetails = (data) => {
    const groupedTransportations = {};
    data.forEach((transportation) => {
      const { to_company_name, to_total_amount, paid_amount } = transportation;
      if (!groupedTransportations[to_company_name]) {
        groupedTransportations[to_company_name] = {
          totalAmount: parseFloat(to_total_amount),
          pendingAmount: parseFloat(to_total_amount) - parseFloat(paid_amount),
          count: 1, // Initialize count to 1 for the first occurrence of a company
        };
      } else {
        groupedTransportations[to_company_name].totalAmount +=
          parseFloat(to_total_amount);
        groupedTransportations[to_company_name].pendingAmount +=
          parseFloat(to_total_amount) - parseFloat(paid_amount);
        groupedTransportations[to_company_name].count++; // Increment count for subsequent occurrences
      }
    });
    setToTransportations(groupedTransportations);
  };

  useEffect(() => {
    fetchTransportations();
  }, []);

  console.log(transportations, "api data", totransportations);

  return (
    <Row>
      <Col xs={12}>
        <Card className="mb-4">
          <CardHeader>
            <strong>From Company </strong> <small>Details</small>
          </CardHeader>
          <CardBody>
            <Row>
              {Object.keys(transportations).map((companyName, index) => (
                <Col xs={4}>
                  <Card>
                    <CCardImage orientation="top" src={""} />
                    <CardBody>
                      <CardTitle className="border-bottom pb-2">
                        {companyName}
                      </CardTitle>
                      <div className="d-flex justify-content-between">
                        <div className="DeailsAmoutn">
                          <p>Total Amount</p>
                          <span class="badge text-bg-primary">
                            {transportations?.[
                              companyName
                            ]?.totalAmount?.toFixed(2)}
                          </span>
                        </div>

                        <div className="DeailsAmoutn">
                          <p>Total Trip</p>
                          <span class="badge text-bg-success">
                            {transportations?.[companyName]?.count}
                          </span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xs={12}>
        <Card className="mb-4">
          <CardHeader>
            <strong>To Company </strong> <small>Details</small>
          </CardHeader>
          <CardBody>
            <Row>
              {Object.keys(totransportations).map((companyName, index) => (
                <Col xs={4}>
                  <Card>
                    <CCardImage orientation="top" src={""} />
                    <CardBody>
                      <CardTitle className="border-bottom pb-2">
                        {companyName}
                      </CardTitle>
                      <div className="d-flex justify-content-between">
                        <div className="DeailsAmoutn">
                          <p>Total Amount</p>
                          <span class="badge text-bg-primary">
                            {totransportations?.[
                              companyName
                            ]?.totalAmount?.toFixed(2)}
                          </span>
                        </div>
                        <div className="DeailsAmoutn">
                          <p>Pending Amount</p>
                          <span class="badge text-bg-danger">
                            {totransportations?.[
                              companyName
                            ]?.pendingAmount?.toFixed(2)}
                          </span>
                        </div>
                        <div className="DeailsAmoutn">
                          <p>Total Trip</p>
                          <span class="badge text-bg-success">
                            {totransportations?.[companyName]?.count}
                          </span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default CardsPage;
