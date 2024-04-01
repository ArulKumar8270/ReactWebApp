import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
// const AddCompany = React.lazy(() => import('./views/dashboard/AddCompany'))
const Report = React.lazy(() => import("./views/dashboard/Report"));
const PaymentReport = React.lazy(() =>
  import("./views/dashboard/PaymentReport")
);
const CardsPage = React.lazy(() => import("./views/dashboard/CardsPage"));

const routes = [
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  // { path: '/companyAdd', name: 'Company', element: AddCompany },
  { path: "/report/:id", name: "Report", element: Report },
  { path: "/CardsPage", name: "CardsPage", element: CardsPage },
  { path: "/paymentReport", name: "PaymentReport", element: PaymentReport },
];

export default routes;
