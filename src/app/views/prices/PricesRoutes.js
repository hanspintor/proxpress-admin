import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const AppPrices = Loadable(lazy(() => import('./AppPrices')))

const pricesRoutes = [
    {
        path: '/prices',
        element: <AppPrices />,
        auth: authRoles.admin,
    },
]

export default pricesRoutes
