import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const AppCashouts = Loadable(lazy(() => import('./AppCashouts')))

const cashoutsRoutes = [
    {
        path: '/cashouts',
        element: <AppCashouts />,
        auth: authRoles.admin,
    },
]

export default cashoutsRoutes
