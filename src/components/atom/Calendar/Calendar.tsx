import React, { useState } from "react";

import "./Calendar.scss";

import { useRecoilValue } from "recoil";
import { diaryContent } from "lib/store/diary.state";

type calendarType = {
  year: number;
  month: number;
  date: number;
  startDay: number;
  maxDate: number;
  isCurrent: boolean;
};
export type CalendarProps = {
  cx?: string;
  isDiary?: boolean;
};

export const Calendar: React.FC<CalendarProps> = ({
  cx = "",
  isDiary = false,
}) => {
  // mood : 🥳🥰😊😄🙂🙁😫😭😡🤬
  const diaries = useRecoilValue<any>(diaryContent);
  const getStartDay = (year: number, month: number): number =>
    new Date(`${year}-${month < 10 ? "0" : ""}${month}-01`).getDay();

  const getMonthDate = (year: number, month: number): number => {
    switch (month) {
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      case 2:
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
          ? 29
          : 28;
      default:
        return 31;
    }
  };

  const [dates, setDate] = useState<calendarType>(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    return {
      year,
      month,
      date,
      isCurrent: true,
      startDay: getStartDay(year, month),
      maxDate: getMonthDate(year, month),
    };
  });

  const prevMonth = () => {
    const m = dates.month - 1;
    const r = { ...dates };
    if (m === 0) {
      r["month"] = 12;
      r["year"] = dates.year - 1;
    } else {
      r["month"] = m;
    }
    setDate({
      ...r,
      startDay: getStartDay(r.year, r.month),
      maxDate: getMonthDate(r.year, r.month),
      isCurrent:
        new Date().getMonth() + 1 === m && new Date().getFullYear() === r.year,
    });
  };

  const nextMonth = () => {
    const m = dates.month + 1;
    const r = { ...dates };
    if (m === 13) {
      r["month"] = 1;
      r["year"] = dates.year + 1;
    } else {
      r["month"] = m;
    }
    setDate({
      ...r,
      startDay: getStartDay(r.year, r.month),
      maxDate: getMonthDate(r.year, r.month),
      isCurrent:
        new Date().getMonth() + 1 === m && new Date().getFullYear() === r.year,
    });
  };
  return (
    <div className="Calendar">
      <div className={"arrow"} onClick={() => prevMonth()}>
        &lt;
      </div>
      <div className={"month"}>
        <h4>{dates.month}</h4>
      </div>
      <div className={"arrow"} onClick={() => nextMonth()}>
        &gt;
      </div>
      <div className="day">
        <span>Mon</span>
      </div>
      <div className="day">
        <span>Tue</span>
      </div>
      <div className="day">
        <span>Wed</span>
      </div>
      <div className="day">
        <span>Thu</span>
      </div>
      <div className="day">
        <span>Fri</span>
      </div>
      <div className="day">
        <span>Sat</span>
      </div>
      <div className="day">
        <span>Sun</span>
      </div>
      {new Array(dates.startDay === 0 ? 6 : dates.startDay - 1)
        .fill(1)
        .map((i, idx) => (
          <div className="date prev" key={idx} />
        ))}

      {new Array(dates.maxDate).fill(1).map((i, idx) => {
        const d = `${dates.year}-${dates.month < 10 ? "0" : ""}${dates.month}-${
          idx + 1 < 10 ? "0" : ""
        }${idx + 1}`;

        return (
          <div
            className={`date ${dates.isCurrent && idx + 1 === dates.date}`}
            key={idx}
          >
            <span>{idx + 1}</span>
            {!!diaries[d] &&
              diaries[d].content.map((j: string, jdx: number) => (
                <div
                  className={`sm con${jdx}`}
                  style={{
                    backgroundColor: !!diaries[d].color
                      ? diaries[d].color[jdx] ?? "cyan"
                      : "rgba(magenta,0.2)",
                  }}
                >
                 <span>{j}</span>
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
