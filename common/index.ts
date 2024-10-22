export const initialPageParam = {
  pageNo: 1,
  pageSize: 10,
};

export interface PageResponseType<T> {
  data: T[];
  pageNo?: number;
  pageSize?: number;
  totalRecords?: number;
  totalPages?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

export type TableParams = {
  skip?: number;
  take?: number;
  order?: string;
  search?: string;
  sort?: string;
  [key: string]: number | boolean | string | string[] | undefined;
};

export interface ParamsType {
  [key: string]: number | boolean | string | string[] | undefined;
}

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
