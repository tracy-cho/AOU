import React from 'react';
import {Link} from 'react-router-dom';

import './Header.scss'

export type HeaderProps = {
    cx?: string
}

export const Header: React.FC<HeaderProps> = ({cx = ""}) => {
    return (
        <div className={`Header ${cx}`}>
            <Link to={'/qna'}>qna</Link> ||
            <Link to={'/notice'}>notice</Link> ||
            <Link to={'/member'}>member</Link> ||
            <Link to={'/system'}>system</Link> ||
            <Link to={'/world'}>world</Link> ||
            <Link to={'/'}>home</Link>
        </div>
    );
};