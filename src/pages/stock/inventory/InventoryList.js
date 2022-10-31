import { useEffect, useRef } from "react";
import Page from "../../../components/Page";
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import { InventoryColumns, LocationColumns } from "../../../utils/StockGridColumns";
import JqxSplitter from "jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter";

export default function InventoryCollectionList() {

    useEffect(() => {

    }, [])
    return (
        <Page title="Names and Inventory Listing" className={'h-full'}>
            <div className="flex flex-col gap-1 h-full justify-between w-full p-2" >
                <div>
                    <h4><b>Stock / Inventory & Locations</b></h4>
                </div>
                <JqxSplitter orientation="horizontal" width={'100%'} height={'100%'} className={'flex-1'}>
                    <div>
                        <JqxGrid columns={InventoryColumns} sortable={true} width={'100%'} columnsresize={true}>
                        </JqxGrid>
                    </div>
                    <div>
                        <JqxGrid columns={LocationColumns} sortable={true} width={'100%'} columnsresize={true}>
                        </JqxGrid>
                    </div> 
                </JqxSplitter>
                <div className="flex gap-2 p-2 justify-between flex-wrap">
                    <label>Key:</label>
                    <JqxInput width={'250'} placeHolder={'Search Key'} />
                    <JqxButton className={'flex-1'}>New Invent</JqxButton>
                    <JqxButton className={'flex-1'}>Edit Invent</JqxButton>
                    <JqxButton className={'flex-1'}>New Loc</JqxButton>
                    <JqxButton className={'flex-1'}>Edit Loc</JqxButton>
                    <JqxButton className={'flex-1'}>Prices</JqxButton>
                    <JqxButton className={'flex-1'}>Names</JqxButton>
                    <JqxButton className={'flex-1'}>Quit</JqxButton>
                </div>

            </div>
        </Page>
    )
}