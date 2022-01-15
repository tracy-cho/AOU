import React from 'react';

import './CharacterGuide.scss'

export type CharacterGuideProps = {
    cx?: string
}

export const CharacterGuide: React.FC<CharacterGuideProps> = ({cx = ""}) => {
    return (
        <div className={`CharacterGuide ${cx}`}>
            
        </div>
    );
};