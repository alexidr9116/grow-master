import { useEffect, useRef } from "react";
import Page from "../../../components/Page";
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxSplitter from "jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter";
import { StockColumns, StockUpdateDetailColumns } from "../../../utils/StockGridColumns";



export default function StockUpdateList() {

    useEffect(() => {

    }, [])
    return (
        <Page title="Names and Inventory Listing" className={'h-full'}>
            <div className="flex flex-col gap-1 h-full justify-between w-full p-2" >
                <div>
                    <h4><b>Stock / Update list</b></h4>
                </div>
                <div className="flex-1">
                    <JqxSplitter orientation="horizontal" width={'100%'} height={'100%'} >
                        <div>
                            <JqxGrid columns={StockColumns} sortable={true} width={'100%'} columnsresize={true}>
                            </JqxGrid>
                        </div>

                        <div>
                            <JqxGrid columns={StockUpdateDetailColumns} sortable={true} width={'100%'} columnsresize={true}>
                            </JqxGrid>
                        </div>
                    </JqxSplitter>
                </div>

                <div className="flex gap-2 p-2 justify-between">
                    <label>Find Sys.Batch:</label>
                    <JqxInput width={'250'} placeHolder={'Search Key'} className={'flex-1'} />
                    <JqxButton className={'flex-1'}>Update</JqxButton>
                    <JqxButton className={'flex-1'}>Move</JqxButton>
                    <JqxButton className={'flex-1'}>Change</JqxButton>
                    <JqxButton className={'flex-1'}>Grow</JqxButton>
                    <JqxButton className={'flex-1'}>Allocate</JqxButton>
                    <JqxButton className={'flex-1'}>Reports</JqxButton>
                    <JqxButton className={'flex-1'}>Quit</JqxButton>
                </div>

            </div>
        </Page>
    )
}