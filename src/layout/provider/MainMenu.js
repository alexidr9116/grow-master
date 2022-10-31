import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';
import { Link } from 'react-router-dom';

export default function MainMenu() {
    return (
        <JqxMenu

            style={{ background: 'white' }}
            width={'100%'} height={32} autoSizeMainItems={true}>
            <ul>
                <li><Link to={'/application/file'}>File</Link></li>
                <li>
                    <Link to={'/application/stock'}>Stock</Link>
                    <ul style={{ width: '250px' }}>
                        <li><Link to={'/application/stock/name'}>Name</Link></li>
                        <li><Link to={'/application/stock/name-list'}>Name Listing</Link></li>
                        <li type='separator' />
                        <li><Link to={'/application/stock/inventory'}>Invetory</Link></li>
                        <li><Link to={'/application/stock/inventory-list'}>Inventory Listing</Link></li>
                        <li><Link to={'/application/stock/inventory-collection-list'}>Inventory Collections</Link></li>
                        <li><Link to={'/application/stock/inventory-composites'}>Inventory Composites</Link></li>
                        <li type='separator' />
                        <li><Link to={'/application/stock/stock-updates'}>Stock Updates</Link></li>


                    </ul>
                </li>
                <li>
                    <Link to={'/application/sales'}>Sales</Link>
                    <ul style={{ width: '250px' }}>
                        <li><Link to={'/application/sales/customer-list'}>Customers</Link></li>
                        <li type='separator' />
                        <li><Link to={'/application/sales/order-list'}>Orders</Link></li>
                        <li type='separator' />

                    </ul>
                </li>
                <li>
                    <Link to={'/application/sales'}>Invoices</Link>
                    <ul style={{ width: '250px' }}>
                        <li><Link to={'/application/invoice/plant-list'}>Plant Invoice</Link></li>
                        <li><Link to={'/application/invoice/plant-list'}>Text Invoice</Link></li>
                        <li type='separator' />
                         

                    </ul>
                </li>
                <li>
                    <Link to={'/application/sales'}>Purchase</Link>
                    <ul style={{ width: '250px' }}>
                        <li><Link to={'/application/purchase/order-list'}>Orders</Link></li>
                        <li type='separator' />
                        <li><Link to={'/application/purchase/goods-received-notes'}>Goods Received Notes</Link></li>
                        <li type='separator' />
                        <li><Link to={'/application/purchase/invoice-list'}>Purchase Invoices</Link></li>

                    </ul>
                </li>
            </ul>
        </JqxMenu>
    )
}