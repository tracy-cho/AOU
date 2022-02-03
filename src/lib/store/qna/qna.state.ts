import { selector } from "recoil";
import { getMember, getQna } from "lib/store/qna";
import { updateAll } from "lib/store/common";

export  type memberType = {
  이름:string
  계통:string
  미메시스:string
  체력:string
  정신력:string
  공격력:string
  방어력:string
  통찰:string
  스킬:string[]
  한마디:string
  소속:string
  나이:string
  키:string
  미메시스이름:string
  미메시스설명:string
  외형:string
  이미지:string
  성격:string
  기타사항:string
  rp:string
  관계:string[]
  성별:string
}

export const asyncGetQnaData = selector({
  key: "qna/get",
  get: async ({ get }) => {
    try {
      get(updateAll);
      const data = await getQna();
      const a = data.replace(
        "/*O_o*/\ngoogle.visualization.Query.setResponse(",
        ""
      );
      return JSON.parse(a.replace(");", "")).table.rows.reduce(
        (a: any[], c: any) => [
          ...a,
          { 분야: c.c[1]?.v, 질문: c.c[2]?.v, 답변: c.c[3].v },
        ],
        []
      );
    } catch (e) {
      console.log(e);
    }
  },
});

export const asyncGetMemberList = selector({
  key: "member/get",
  get: async ({ get }) => {
    try {
      get(updateAll);
      const data = await getMember();
      const a = data.replace(
        "/*O_o*/\ngoogle.visualization.Query.setResponse(",
        ""
      );
      return JSON.parse(a.replace(");", "")).table.rows.reduce(
        (a: any[], c: any) => [
          ...a,
          {
            이름: c.c[0]?.v,
            계통: c.c[1]?.v,
            미메시스: c.c[2]?.v,
            체력: c.c[3]?.v,
            정신력: c.c[4]?.v,
            공격력: c.c[5]?.v,
            방어력: c.c[6]?.v,
            통찰: c.c[7]?.v,
            스킬: [c.c[8]?.v, c.c[9]?.v, c.c[10]?.v],
            한마디: c.c[11]?.v,
            소속: c.c[12]?.v,
            나이: c.c[13]?.v,
            키: c.c[14]?.v,
            미메시스이름: c.c[15]?.v,
            미메시스설명: c.c[16]?.v,
            외형: c.c[17]?.v,
            이미지: c.c[18]?.v,
            성격: c.c[19]?.v,
            기타사항: c.c[20]?.v,
            rp: c.c[21]?.v,
            성별: c.c[27]?.v,
            관계: [c.c[22]?.v, c.c[23]?.v, c.c[24]?.v, c.c[25]?.v, c.c[26]?.v],
          },
        ],
        [] as memberType[]
      );
    } catch (e) {
      console.log(e);
    }
  },
});
