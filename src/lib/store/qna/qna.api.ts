import { _get } from "lib/rest";
import v from "json/variable.json";

export const getQna = async () =>
  await _get(
    `/${v.sheetData.qna.id}/gviz/tq?tqx=out:json&tq&gid=0`,
    {},
    {
      header: {
        "X-DataSource-Auth": true,
      },
    }
  );
