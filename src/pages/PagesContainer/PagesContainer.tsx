import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import { RouteList } from "../Router";
import Home from "../Home";

const PagesContainer:any = () => {
    const location = useLocation();
    return <div>
        <div>HEADER</div>
        <div>{location.pathname === RouteList.Home ? <Home /> : <Outlet />}</div>
        <div>FOOTER</div>
    </div>;
}

export default PagesContainer;