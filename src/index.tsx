import React from "react";
import ReactDOM from "react-dom";

import {RecoilRoot} from "recoil";

import App from "App";
import reportWebVitals from "./reportWebVitals";

import "style/common.scss";


import {Star} from "components/template/Star";

const app = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <Star/>
            <App/>
        </RecoilRoot>
    </React.StrictMode>,
    app
);

reportWebVitals();
