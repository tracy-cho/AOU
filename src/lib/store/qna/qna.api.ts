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
export const getMember = async ({ page = 0 }: { page: number }) =>
  await _get(
    `/${v.sheetData.user[page].id}/gviz/tq?tqx=out:json&tq&gid=${v.sheetData.user[page].gid}`,
    {},
    {
      header: {
        "X-DataSource-Auth": true,
      },
    }
  );
export const getRelative = async ({ page = 0 }: { page: number }) =>
  await _get(
    `/${v.sheetData.user[page].id}/gviz/tq?tqx=out:json&tq&gid=${v.sheetData.user[page].relative}`,
    {},
    {
      header: {
        "X-DataSource-Auth": true,
      },
    }
  );
