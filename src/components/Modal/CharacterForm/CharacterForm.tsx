import React from 'react';

import './CharacterForm.scss'

export type CharacterFormProps = {
    cx?: string
}

export const CharacterForm: React.FC<CharacterFormProps> = ({cx = ""}) => {
    return (
        <div className={`CharacterForm ${cx}`}>
            
        </div>
    );
};