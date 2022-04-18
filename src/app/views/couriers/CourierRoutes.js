import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const AppCouriers = Loadable(lazy(() => import('./AppCouriers')))

const couriersRoutes = [
    {
        path: '/couriers',
        element: <AppCouriers />,
        auth: authRoles.admin,
    },
]

export default couriersRoutes
