import {selector} from "recoil";
import {getQna} from "lib/store/qna";
import {updateAll} from "lib/store/common";

export const asyncGetQnaData = selector({
    key: "qna/get",
    get: async ({get}) => {
        get(updateAll);
        return await getQna()
    }
})