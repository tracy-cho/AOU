import React from 'react';

import './WorldPage.scss'

export type WorldPageProps = {
    cx? : string
}

export const WorldPage: React.FC < WorldPageProps > = ({cx = ""}) => {
    return (
        <div className={`WorldPage ${cx}`}>
            world
        </div>
    );
};