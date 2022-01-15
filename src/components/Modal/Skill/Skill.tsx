import React from 'react';

import './Skill.scss'

export type SkillProps = {
    cx?: string
}

export const Skill: React.FC<SkillProps> = ({cx = ""}) => {
    return (
        <div className={`Skill ${cx}`}>

        </div>
    );
};