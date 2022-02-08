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
export const getMember = async () =>
  await _get(
    `/${v.sheetData.user.id}/gviz/tq?tqx=out:json&tq&gid=1257163176`,
    {},
    {
      header: {
        "X-DataSource-Auth": true,
      },
    }
  );
export const getRelative = async () =>
  await _get(
    `/${v.sheetData.user.id}/gviz/tq?tqx=out:json&tq&gid=107300411`,
    {},
    {
      header: {
        "X-DataSource-Auth": true,
      },
    }
  );
