import { ParamsType } from "@/modules/web-feature-shared";

export const stringifyParams = (params: ParamsType) => {
  let result = "";

  if (!params) return result;
  Object.keys(params).forEach((key) => {
    if (params[key]) {
      result += `${key}=${params[key]}&`;
    }
  });

  return result.slice(0, -1);
};
