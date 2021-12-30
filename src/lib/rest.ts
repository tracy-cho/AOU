import Axios from "axios";
import variable from "json/variable.json";

Axios.defaults.baseURL = variable.base_url;
Axios.defaults.headers.common.Accept = "application/json";

Axios.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error.response.status / 5 < 100) {
            return Promise.reject(error.response.data);
        } else {
            console.log("서버이슈");
        }
    }
);

export const _post = async (url: string, data?: object) => {
    let curData = data ?? {};
    if (!!curData) {
        curData = Object.keys(curData).reduce((accm, curr) => {
            // @ts-ignore
            if (!!data[curr]) {
                // @ts-ignore
                accm[curr] = data[curr];
            }
            return accm;
        }, {});
    }
    const stringifyCurData = JSON.stringify(curData);
    const returnVal = (await Axios.post(url, JSON.parse(stringifyCurData))).data;
    return typeof returnVal === "string" || typeof returnVal === "object"
        ? returnVal
        : JSON.parse(returnVal);
};

export const _get = async (url: string, data?: { [key: string]: any }) => {
    let param = "";
    if (!!data) {
        param = Object.keys(data)
            .reduce(
                (acc, cur) => (!!data[cur] ? `${acc}${cur}=${data[cur]}&` : acc),
                "?"
            )
            .slice(0, -1);
    }
    return (await Axios.get(`${url}${param}`)).data;
};

export const _put = async (url: string, data?: { [key: string]: any }) => {
    return (await Axios.put(url, data)).data;
};

export const _delete = async (url: string) => {
    return await Axios.delete(url);
};
