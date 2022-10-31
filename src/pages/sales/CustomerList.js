import { useEffect, useRef } from "react";

import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';
import Page from "../../components/Page";
import { CustomerColumns } from "../../utils/SalesGridColumns";

export default function CustomerList() {

    useEffect(() => {

    }, [])
    return (
        <Page title="Customer List" className={'h-full'}>
            <div className="flex flex-col gap-1 h-full justify-between w-full p-2" >
                <div>
                    <h4><b>Sales / Customer List</b></h4>
                </div>

                <div className="flex-1">
                    <JqxGrid columns={CustomerColumns} sortable={true} width={'100%'} columnsresize={true}>
                    </JqxGrid>
                </div>


                <div className="flex gap-2 p-2 justify-between flex-wrap">
                    <label>Find:</label>
                    <JqxInput width={'250'} placeHolder={''} className={'flex-1'} />
                    
                    <JqxButton className={'flex-1'}>New</JqxButton>
                    <JqxButton className={'flex-1'}>Edit</JqxButton>
                    <JqxButton className={'flex-1'}>View</JqxButton>
                    <JqxButton className={'flex-1'}>Search</JqxButton>
                    <JqxButton className={'flex-1'}>Activity</JqxButton>
                    <JqxButton className={'flex-1'}>Prices</JqxButton>
                    <JqxButton className={'flex-1'}>Quit</JqxButton>
                </div>
            </div>
        </Page>
    )
}