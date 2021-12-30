import React from 'react';

import './SystemPage.scss'

export type SystemPageProps = {
    cx? : string
}

export const SystemPage: React.FC < SystemPageProps > = ({cx = ""}) => {
    return (
        <div className={`SystemPage ${cx}`}>
            sys
        </div>
    );
};