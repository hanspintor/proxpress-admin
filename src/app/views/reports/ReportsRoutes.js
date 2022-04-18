import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const AppReports = Loadable(lazy(() => import('./AppReports')))

const reportsRoutes = [
    {
        path: '/reports',
        element: <AppReports />,
        auth: authRoles.admin,
    },
]

export default reportsRoutes
