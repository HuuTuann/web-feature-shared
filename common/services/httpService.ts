import axios from "axios";
import { getAdminCookie } from "@/modules/web-feature-shared";
import { isEmpty } from "lodash";
import { removeAdminCookie } from "@/modules/web-feature-shared";

const publicPaths = ["/login"];

export const httpService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WEB_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.request.use(
  (config) => {
    const token = getAdminCookie();

    const isPublicPath = publicPaths.some((path) => config.url?.includes(path));

    if (!isPublicPath && isEmpty(token)) {
      window.location.href = "/login";
      return Promise.reject("Unauthorized");
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

httpService.interceptors.response.use(
  (response) => response?.data,
  (error) => {
    if (error?.response?.status === 401) {
      removeAdminCookie();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
