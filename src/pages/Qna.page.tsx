import React from "react";

import { useRecoilValueLoadable } from "recoil";
import { asyncGetQnaData } from "lib/store/qna";

import "./QnaPage.scss";
import { Logo } from "../components/atom/Logo";

export type QnaPageProps = {
  cx?: string;
};

//따로 묶을 필요 없어서 걍 여기로 통함합

const useQna = () => {
  const { state, contents } = useRecoilValueLoadable(asyncGetQnaData);

  return {
    state,
    contents:
      state !== "hasValue"
        ? {}
        : contents.reduce((a: any, c: { no: string; 분야: string }) => {
            const cate = c.분야;
            if (a.hasOwnProperty(cate)) {
              a[cate] = [...a[cate], c];
            } else {
              a[cate] = [c];
            }
            return a;
          }, {}),
  };
};

export const QnaPage: React.FC<QnaPageProps> = ({ cx = "" }) => {
  const { contents } = useQna();

  return (
    <main className={`QnaPage ${cx}`}>
      <section className="Logo">
        <Logo />
      </section>
      <div className="title">
        <h1>QnA</h1>
        <h6 className="desc">
          모든 질문은 총괄계  <a href="https://twitter.com/archofuniverse">@archofuniverse</a> DM으로 받으며, <br/> 본 페이지에서 공개하는것을
          기본으로 합니다. <br /><br/>
          캐릭터 비밀설정등의 이유로 공개를 원치 않으신다면<br/> DM질문시 비공개
          요청을 해주시기 바랍니다.
        </h6>
      </div>
      {Object.keys(contents).map((i) => (
        <div className={"qna-wrapper"} key={i}>
          <div className="qna-title">{i}</div>
          <ul>
            {contents[i].map((j: any, jdx: number) => (
              <li key={i+jdx}>
                <div className="question">
                  Q{jdx + 1}. {j.질문}
                </div><br/>
                <div className="answer">
                  A{jdx + 1}. {j.답변}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
};
