import { atom } from "recoil";

export const updateAll = atom({
  key: "update/all",
  default: new Date(),
});

export const currentMenu = atom({
  key: "menu/current",
  default: 0,
});

export const showModal = atom({
  key: "Modal",
  default: {
    date: false,
  },
});
