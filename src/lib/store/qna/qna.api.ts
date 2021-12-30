import {_get} from "lib/rest";
import v from "json/variable.json";


export const getQna = async () => await _get(`/${v.sheetData.qna.id}/${v.sheetData.qna.name}`)