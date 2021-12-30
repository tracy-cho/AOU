import React from 'react';

import './MemberPage.scss'

export type MemberPageProps = {
    cx? : string
}

export const MemberPage: React.FC < MemberPageProps > = ({cx = ""}) => {
    return (
        <div className={`MemberPage ${cx}`}>
            멤버
        </div>
    );
};