import { lazy, Suspense } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import AuthGuard from '../guards/AuthGuard';
import GuestGuard from '../guards/GuestGuard';
import { ApplicationLayout } from '../layout';

export default function Router() {
    return useRoutes([

        {
            path:'auth',
            children: [
                { element: <GuestGuard><Login /></GuestGuard>, index: true },
                { element: <GuestGuard><Login /></GuestGuard>, path: 'login' },
                { element: <AuthGuard><Logout /></AuthGuard>, path: 'logout' },
            ],
        },
        {
            path: 'application',
            element: (<AuthGuard><ApplicationLayout /></AuthGuard>),
            children: [
                {
                    path:'pages',
                    element:<PageIndex />
                },
                {
                    path: 'stock',
                    children: [
                        { path: 'inventory-list', element: <InventoryList /> },
                        { path: 'name-list', element: <StockNameList /> },
                        { path: 'inventory-collection-list', element: <InventoryCollectionList /> },
                        { path: 'inventory-composites', element: <InventoryComposites /> },
                        { path: 'stock-updates', element: <StockUpdates /> },
                    ]
                },
                {
                    path: 'sales',
                    children: [
                        { path: 'customer-list', element: <Customers /> },
                        { path: 'order-list', element: <SalesOrders /> },

                    ]
                },
                {
                    path: 'invoice',
                    children: [

                        { path: 'plant-list', element: <PlantInvoiceList /> },

                    ]
                },
                {
                    path: 'purchase',
                    children: [
                        { path: 'goods-received-notes', element: <GoodsReceivedNotes /> },
                        { path: 'order-list', element: <PurchaseOrders /> },
                        { path: 'invoice-list', element: <PurchaseInvoices /> }
                    ]
                },

            ]
        },
        {
            path: '/',
            children: [
                { element: <AuthGuard><Navigate to={'/application/pages'} replace /></AuthGuard>, index: true },

            ],
        },
    ])
}
const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </Suspense>
    )
}
const PageIndex = Loadable(lazy(() => import('../pages/Index')));

// auth routes
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Logout = Loadable(lazy(() => import('../pages/auth/Logout')));

// stock routes
const StockNameList = Loadable(lazy(() => import('../pages/stock/name/NameList')));
const InventoryList = Loadable(lazy(() => import('../pages/stock/inventory/InventoryList')));
const InventoryCollectionList = Loadable(lazy(() => import('../pages/stock/inventory/InventoryCollectionList')));
const InventoryComposites = Loadable(lazy(() => import('../pages/stock/inventory/InventoryComposites')));
const StockUpdates = Loadable(lazy(() => import('../pages/stock/stock/StockUpdateList')));

// order routes
const SalesOrders = Loadable(lazy(() => import('../pages/sales/OrderList')));
const Customers = Loadable(lazy(() => import('../pages/sales/CustomerList')));

// purchase routes
const PurchaseOrders = Loadable(lazy(() => import('../pages/purchase/OrderList')));
const GoodsReceivedNotes = Loadable(lazy(() => import('../pages/purchase/GoodsReceivedNoteList')));
const PurchaseInvoices = Loadable(lazy(() => import('../pages/purchase/PurchaseInvoices')));

// invoice routes
const PlantInvoiceList = Loadable(lazy(() => import('../pages/invoice/InvoiceList')));