import { Icon } from '@iconify/react';
import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';
import { Link } from 'react-router-dom';

export default function MainToolbar() {
    return (
        <JqxMenu
            width={'100%'} height={32} autoSizeMainItems={true}>
            <ul>
                <li><Link to={'/application/file'}><Icon color='red' width={20} icon="dashicons:database-import" /></Link></li>
                <li><Link to={'/application/stock/name-list'}><Icon color='red' width={20} icon="wpf:name" /></Link></li>
                <li><Link to={'/application/stock/inventory-list'}><Icon color='red'  width={20} icon="fluent-mdl2:document-set" /></Link></li>

                <li><Link to={'/application/sales/order-list'}><Icon color='red'  width={20} icon="icon-park-outline:order" /></Link></li>
            </ul>
        </JqxMenu >
    )
}