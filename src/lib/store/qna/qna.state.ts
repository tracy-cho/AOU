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
      const ret = JSON.parse(a.replace(");", ""));
      return ret.table.rows.reduce((a: any[], c: any) => {
        const da = { 분야: c.c[1].v, 질문: c.c[2].v, 답변: c.c[3].v };
        return [...a, da];
      }, []);
    } catch (e) {
      console.log(e);
    }
  },
});
