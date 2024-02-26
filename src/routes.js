import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AddCompany = React.lazy(() => import('./views/dashboard/AddCompany'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/companyAdd', name: 'Company', element: AddCompany },

]

export default routes
