import { useEffect, useRef } from "react";

import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';
import Page from "../../components/Page";
import { OrderColumns, OrderDetailColums } from "../../utils/PurchaseOrderColumns";

export default function PurchaseOrderList() {

    useEffect(() => {

    }, [])
    return (
        <Page title="Names and Inventory Listing" className={'h-full'}>
            <div className="flex flex-col gap-1 h-full justify-between w-full p-2" >
                <div>
                    <h4><b>Purchase / Order List</b></h4>
                </div>
                <JqxSplitter orientation="horizontal" width={'100%'} height={'100%'} className={'flex-1'}>
                    <div>
                        <JqxGrid columns={OrderColumns} sortable={true} width={'100%'} columnsresize={true}>
                        </JqxGrid>
                    </div>

                    <div>
                        <JqxGrid columns={OrderDetailColums} sortable={true} width={'100%'} columnsresize={true}>
                        </JqxGrid>
                    </div>
                </JqxSplitter>
                <div className="flex gap-2 p-2 justify-between flex-wrap">
                    <label>Find:</label>
                    <JqxInput width={'150'} placeHolder={''} className={'flex-1'} />
                    <JqxInput width={'150'} placeHolder={''} className={'flex-1'} />
                    <JqxButton className={'flex-1'}>Create</JqxButton>
                    <JqxButton className={'flex-1'}>Edit</JqxButton>
                    <JqxButton className={'flex-1'}>Cancel</JqxButton>
                    <JqxButton className={'flex-1'}>Status</JqxButton>
                    <JqxButton className={'flex-1'}>Print</JqxButton>
                    <JqxButton className={'flex-1'}>Labels</JqxButton>
                    <JqxButton className={'flex-1'}>Goods-In</JqxButton>
                    <JqxButton className={'flex-1'}>O/S Orders</JqxButton>
                    <JqxButton className={'flex-1'}>Quit</JqxButton>
                </div>
            </div>
        </Page>
    )
}