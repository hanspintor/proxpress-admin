import AuthGuard from 'app/auth/AuthGuard'
import NotFound from 'app/views/sessions/NotFound'
import chartsRoute from 'app/views/charts/ChartsRoute'
import materialRoutes from 'app/views/material-kit/MaterialRoutes'
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes'
import sessionRoutes from 'app/views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import { Navigate } from 'react-router-dom'
import couriersRoutes from 'app/views/couriers/CourierRoutes'
import pricesRoutes from 'app/views/prices/PricesRoutes'
import reportsRoutes from 'app/views/reports/ReportsRoutes'
import cashoutsRoutes from 'app/views/cashouts/CashoutsRoutes'

export const AllPages = () => {
    const all_routes = [
        {
            element: (
                <AuthGuard>
                    <MatxLayout />
                </AuthGuard>
            ),
            children: [
                ...dashboardRoutes,
                ...couriersRoutes,
                ...pricesRoutes,
                ...reportsRoutes,
                ...cashoutsRoutes,
            ],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to="dashboard" />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]

    return all_routes
}
