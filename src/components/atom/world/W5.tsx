import React from 'react';

export type W5Props = {
    cx?: string
}

export const W5: React.FC<W5Props> = ({cx = ""}) => {
    return (
        <div className={`W5 ${cx}`}>

        </div>
    );
};