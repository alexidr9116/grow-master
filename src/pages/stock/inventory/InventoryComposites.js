import { useEffect, useRef } from "react";
import Page from "../../../components/Page";
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import { CollectionColumns, InventoryColumns, NameColumns } from "../../../utils/StockGridColumns";
import JqxSplitter from "jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter";

export default function InventoryComposites() {

    useEffect(() => {

    }, [])
    return (
        <Page title="Names and Inventory Listing" className={'h-full'}>
            <div className="flex flex-col gap-1 h-full justify-between w-full p-2" >
                <h4><b>Stock / Inventory Composites</b></h4>
                <JqxSplitter orientation="horizontal" width={'100%'} height={'100%'} className={'flex-1'}>
                    <div>
                        <JqxGrid columns={InventoryColumns} sortable={true} width={'100%'} columnsresize={true}>
                        </JqxGrid>
                    </div>
                    <div>
                        <JqxGrid columns={CollectionColumns} sortable={true} width={'100%'} columnsresize={true}>
                        </JqxGrid>
                    </div>
                </JqxSplitter>
                <div className="flex gap-2 p-2 justify-center">
                    <label>Find Key:</label>
                    <JqxInput width={'250'} placeHolder={'Search Key'} className={'flex-1'} />
                    <JqxButton className={'flex-1'}>Add Child</JqxButton>
                    <JqxButton className={'flex-1'}>Remove Child</JqxButton>
                    <JqxButton className={'flex-1'}>Change Quantity</JqxButton>
                    <JqxButton className={'flex-1'}>Report</JqxButton>
                    <JqxButton className={'flex-1'}>Quit</JqxButton>

                </div>

            </div>
        </Page>
    )
}