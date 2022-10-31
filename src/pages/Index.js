import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Page from "../components/Page";

const IconLink = ({ link, icon, label }) => {
    return (
        <Link to={link}>
            <div className='flex flex-col p-4 gap-2 border rounded items-center justify-center hover:border-sky-500 min-w-[150px]'>
                <Icon icon={icon} width={60} />
                <label>{label}</label>
            </div>
        </Link>
    )
}
export default function ApplicationIndex() {
    return (
        <Page title="Page list">
            <div className="container max-w-4xl flex flex-col gap-4 p-2 md:p-4">
                <div className="flex flex-col gap-2">
                    <h4 className='text-lg font-bold'>System Management</h4>
                    <div className="flex gap-2 flex-wrap  p-2">
                        <IconLink link="/system/import" icon="dashicons:database-import" label="Import Data" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className='text-lg font-bold'>Stock Management</h4>
                    <div className="flex gap-2 flex-wrap p-2">
                        <IconLink link="/application/stock/stock-updates" icon="grommet-icons:document-update" label="Updates" />
                        <IconLink link="/application/stock/name-list" icon="wpf:name" label="Name & Inv" />
                        <IconLink link="/application/stock/inventory-list" icon="fluent-mdl2:document-set" label="Inv & Loc" />
                        <IconLink link="/application/stock/stock-updates" icon="fluent-mdl2:checkbox-composite" label="Inv Composite" />

                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className='text-lg font-bold'>Sale Management</h4>
                    <div className="flex gap-2 flex-wrap p-2">
                        <IconLink link="/application/sales/customer-list" icon="majesticons:users" label="Customers" />
                        <IconLink link="/application/stock/order-list" icon="icon-park-outline:order" label="Orders" />

                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className='text-lg font-bold'>Purchase Management</h4>
                    <div className="flex gap-2 flex-wrap p-2">
                        <IconLink link="/application/sales/customer-list" icon="arcticons:note" label="Received Note" />
                        <IconLink link="/application/purchase/order-list" icon="icon-park-outline:buy" label="Orders" />
                        <IconLink link="/application/purchase/invoice-list" icon="mingcute:receive-money-line" label="Invoice" />
                    </div>
                </div>
            </div>
        </Page>
    )
}