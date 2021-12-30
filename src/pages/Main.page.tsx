import React from 'react';

import './MainPage.scss'

export type MainPageProps = {
    cx? : string
}

export const MainPage: React.FC < MainPageProps > = ({cx = ""}) => {
    return (
        <div className={`MainPage ${cx}`}>
            메인
        </div>
    );
};