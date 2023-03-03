import React from "react";

import { BrowserRouter,  Routes, Route } from "react-router-dom";
import PagesContainer from "./PagesContainer";

export enum RouteList {
    Home = './',
    SinglePost = '/blog/:id',
    Search = '/blog/search',
    SingIn = '/sing-in',
    SingUp = '/sing-up',
    Confirm = '/sing-up/confirm',
    Success = 'sing-up/success',
}

const Router = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path={RouteList.Home} element={PagesContainer}>
                <Route path={RouteList.SinglePost} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
};

export default Router;