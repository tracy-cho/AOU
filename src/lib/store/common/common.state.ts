import {atom} from "recoil";

export const updateAll = atom({
    key: 'update/all',
    default: new Date()
})