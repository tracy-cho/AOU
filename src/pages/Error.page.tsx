import React from 'react';

import './ErrorPage.scss'

export type ErrorPageProps = {
    cx? : string
}

export const ErrorPage: React.FC < ErrorPageProps > = ({cx = ""}) => {
    return (
        <div className={`ErrorPage ${cx}`}>
            404 not founded
        </div>
    );
};