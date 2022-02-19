import { selector } from "recoil";
import { getItems } from "./shop.api";

export const asyncGetShopData = selector({
  key: "shop/get",
  get: async () => {
    try {
      const data = await getItems();
      const a = data.replace(
        "/*O_o*/\ngoogle.visualization.Query.setResponse(",
        ""
      );
      return JSON.parse(a.replace(");", "")).table.rows.reduce(
        (a: any[], c: any) => [
          ...a,
          {
            name: c.c[1]?.v,
            image: c.c[2]?.v,
            effect: c.c[3]?.v,
            desc: c.c[4]?.v,
            price: c.c[5]?.v,
          },
        ],
        []
      );
    } catch (e) {
      console.log(e);
    }
  },
});