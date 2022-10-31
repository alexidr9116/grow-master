import { useEffect, useRef } from "react"
import { Outlet } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import MainMenu from "./provider/MainMenu";
import MainToolbar from "./provider/MainToolbar";


export default function ApplicationLayout() {

    return (
        <div id="app-layout" className="h-screen flex flex-col  overflow-x-hidden">
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