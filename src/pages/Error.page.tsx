import React from 'react';

import './ErrorPage.scss'

export type ErrorPageProps = {
    cx? : string
}

export const ErrorPage: React.FC < ErrorPageProps > = ({cx = ""}) => {
    return (
        <main className={`ErrorPage ${cx}`}>
            <div className="wrapper">
                <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt=""/>
                <br/>
                <br/>
                <p>추후 공개됩니다.</p>
            </div>
        </main>
    );
};