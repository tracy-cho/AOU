import React from "react";

import { TextBox } from "components/atom/TextBox";
import { Logo } from "components/atom/Logo";

import "./NoticePage.scss";

export type NoticePageProps = {
  cx?: string;
};

export const NoticePage: React.FC<NoticePageProps> = ({ cx = "" }) => {
  return (
    <main className={`NoticePage ${cx}`}>
      <section className="Logo">
        <Logo />
      </section>
      <div className="title">
        <h1>통합공지</h1>
        <TextBox>
          
        </TextBox>
      </div>
      <div className="title">
        <h1>성장안내사항</h1>
      </div>
    </main>
  );
};
