import React from 'react';

import './NoticePage.scss'

export type NoticePageProps = {
    cx? : string
}

export const NoticePage: React.FC < NoticePageProps > = ({cx = ""}) => {
    return (
        <div className={`NoticePage ${cx}`}>
            공지
        </div>
    );
};