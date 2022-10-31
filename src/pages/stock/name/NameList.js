import { useEffect, useRef } from "react";
import Page from "../../../components/Page";
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

import { InventoryColumns, NameColumns } from "../../../utils/StockGridColumns";


export default function NameList() {

    useEffect(() => {

    }, [])
    return (
        <Page title="Names and Inventory Listing" className={'h-full'}>
            <div className="flex flex-col gap-1 h-full justify-between w-full p-2" >
                <div>
                    <h4><b>Stock / Name & Inventories</b></h4>
                </div>
                <JqxSplitter orientation="horizontal" width={'100%'} height={'100%'} className={'flex-1'}>
                    <div>
                        <JqxGrid columns={NameColumns} sortable={true} width={'100%'} columnsresize={true}>
                        </JqxGrid>
                    </div>

                    <div>
                        <JqxGrid columns={InventoryColumns} sortable={true} width={'100%'} columnsresize={true}>
                        </JqxGrid>
                    </div>
                </JqxSplitter>
                <div className="flex gap-2 p-2 justify-between">
                    <label>Key:</label>
                    <JqxInput width={'250'} placeHolder={'Search Key'} className={'flex-1'} />
                    <JqxButton className={'flex-1'}>New Name</JqxButton>
                    <JqxButton className={'flex-1'}>Edit Name</JqxButton>
                    <JqxButton className={'flex-1'}>New Inventory</JqxButton>
                    <JqxButton className={'flex-1'}>Edit Inventory</JqxButton>
                    <JqxButton className={'flex-1'}>Quit</JqxButton>
                </div>
            </div>
        </Page>
    )
}