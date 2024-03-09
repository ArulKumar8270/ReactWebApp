import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const AddCompany = React.lazy(() => import('./views/dashboard/AddCompany'))
const Report = React.lazy(() => import('./views/dashboard/Report'))
const PaymentReport = React.lazy(() => import('./views/dashboard/PaymentReport'))

const routes = [
  
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  // { path: '/companyAdd', name: 'Company', element: AddCompany }, 
  { path: '/report', name: 'Report', element: Report },
  { path: '/paymentReport', name: 'PaymentReport', element: PaymentReport },

]

export default routes
