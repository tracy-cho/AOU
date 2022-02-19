import {_get, _post} from "lib/rest";
import v from "json/variable.json";

export const getItems = async () =>
    await _get(
        `/${v.sheetData.shop.id}/gviz/tq?tqx=out:json&tq&gid=${v.sheetData.shop}`,
        {},
        {
            header: {
                "X-DataSource-Auth": true,
            },
        }
    );

export const buyItem = async (data:any) => await _post(`https://aou-shop.herokuapp.com/aou-shop`,data)