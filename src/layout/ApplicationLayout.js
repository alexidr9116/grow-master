import { useEffect, useRef } from "react"
import { Outlet,Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import MainMenu from "./provider/MainMenu";
import MainToolbar from "./provider/MainToolbar";


export default function ApplicationLayout() {

    return (
        <div id="app-layout" className="h-screen flex flex-col  overflow-x-hidden">
            <div className="w-full flex justify-between">
                <label>

                </label>
                <Link className="flex justify-center h-20 " to = "/application/pages">
                    
                    <img src='/assets/grow-master-logo.png' alt=''></img>
                </Link>
                <label>

                </label>
            </div>

            <div className="w-full">
                <MainMenu />
            </div>
            <div className="w-full">
                <MainToolbar />
            </div>
            <div id="app-container" className="h-full overflow-y-auto">
                <Outlet />
            </div>

        </div>
    )
}