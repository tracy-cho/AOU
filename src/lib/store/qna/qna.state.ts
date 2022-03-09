import { selector, selectorFamily } from "recoil";
import { getMember, getQna, getRelative } from "lib/store/qna";
import { updateAll } from "lib/store/common";

export type memberType = {
  이름: string;
  계통: string;
  미메시스: string;
  체력: string;
  정신력: string;
  공격력: string;
  방어력: string;
  통찰: string;
  스킬: string[];
  한마디: string;
  소속: string;
  나이: string;
  키: string;
  code_name: string;
  미메시스설명: string;
  외형: string;
  이미지: string;
  성격: string;
  기타사항: string;
  rp: string;
  key_name: string;
  관계: string[];
  성별: string;
};

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

export const asyncGetMemberList = selectorFamily({
  key: "member/get",
  get:
    ({ page }: { page: number }) =>
    async ({ get }) => {
      try {
        get(updateAll);
        const data = await getMember({ page });
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
              공격력: c.c[4]?.v,
              방어력: c.c[5]?.v,
              통찰: c.c[6]?.v,
              정신력: c.c[7]?.v,
              스킬: [c.c[8]?.v, c.c[9]?.v, c.c[10]?.v, c.c[22]?.v,c.c[28]?.v].filter(
                (i) => !!i
              ),
              한마디: c.c[11]?.v,
              소속: c.c[12]?.v,
              나이: c.c[13]?.v,
              키: c.c[14]?.v,
              code_name: c.c[15]?.v,
              미메시스설명: c.c[16]?.v,
              외형: c.c[17]?.v,
              이미지: c.c[18]?.v,
              성격: c.c[19]?.v,
              기타사항: c.c[20]?.v,
              rp: c.c[21]?.v,
              성별: c.c[27]?.v,
              key_name: c.c[26]?.v,
              지난: c.c[23]?.v,
              마키나: c.c[24]?.v,
              machina_image : c.c[29]?.v,
              관계: [],
            },
          ],
          [] as memberType[]
        );
      } catch (e) {
        console.log(e);
      }
    },
});

export const asyncGetRelative = selectorFamily({
  key: "relative/get",
  get:
    ({ name, page }: { name: string; page: number }) =>
    async ({ get }) => {
      if (name === "") return;
      try {
        get(updateAll);
        const data = await getRelative({ page });
        const a = data.replace(
          "/*O_o*/\ngoogle.visualization.Query.setResponse(",
          ""
        );
        const table = JSON.parse(a.replace(");", "")).table;
        return {
          nameList: table.rows[0].c,
          desc: table.rows.find((i: any) => i.c[0]?.v === name).c,
        };
      } catch (e) {
        console.log(e);
      }
    },
});
