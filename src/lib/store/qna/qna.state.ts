import { selector } from "recoil";
import { getQna } from "lib/store/qna";
import { updateAll } from "lib/store/common";

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
          { 분야: c.c[1].v, 질문: c.c[2].v, 답변: c.c[3].v },
        ],
        []
      );
    } catch (e) {
      console.log(e);
    }
  },
});
