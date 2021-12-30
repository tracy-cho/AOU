import React from 'react';

import {useRecoilValueLoadable} from "recoil";
import {asyncGetQnaData} from "lib/store/qna";

import './QnaPage.scss'

export type QnaPageProps = {
    cx?: string
}

export const QnaPage: React.FC<QnaPageProps> = ({cx = ""}) => {
    const {state, contents} = useRecoilValueLoadable(asyncGetQnaData)

    if (state !== 'hasValue') return null;
    return (
        <div className={`QnaPage ${cx}`}>
            {contents.map((i: any) => <div key={i.no}>{JSON.stringify(i)}</div>)}
        </div>
    );
};