import React from "react";

import "./Calendar.scss";
import { Modal } from "../Modal";
import { useSetRecoilState } from "recoil";
import { showModal } from "../../../lib/store/common";
import { Calendar as CC } from "components/atom/Calendar";

export type CalendarProps = {
  cx?: string;
};

export const Calendar: React.FC<CalendarProps> = ({ cx = "" }) => {
  const setShowModal = useSetRecoilState(showModal);
  return (
    <Modal
      cx={`CalendarModal ${cx}`}
      close={() =>
        setShowModal((_) => ({
          ..._,
          date: false,
        }))
      }
    >
      <CC />
    </Modal>
  );
};
