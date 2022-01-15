import React from 'react';

import './ModalWrapper.scss'
import {useRecoilValue} from "recoil";
import {showModal} from "../../lib/store/common";
import {Calendar} from "./Calendar";

export type ModalWrapperProps = {
    cx?: string
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({cx = ""}) => {
    const {date} = useRecoilValue(showModal)
    return (
        <>
            {date && <Calendar/>}
        </>
    );
};