import { lazy, Suspense } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import { ApplicationLayout } from '../layout';

export default function Router() {
    return useRoutes([
        // {
        //     path:'auth',
        //     children:[

        //     ]
        // },
        {
            path: 'application',
            element: (<ApplicationLayout />),
            children: [
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
                }
            ]
        }
    ])
}
const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </Suspense>
    )
}

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