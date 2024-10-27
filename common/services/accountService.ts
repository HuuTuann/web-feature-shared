import Cookies from "js-cookie";

export const setAdminCookie = (value: string, days: number) => {
  Cookies.set(process.env.ADMIN as string, value, { expires: days });
};

export const getAdminCookie = (): string | undefined => {
  return Cookies.get(process.env.ADMIN as string);
};

export const removeAdminCookie = () => {
  Cookies.remove(process.env.ADMIN as string);
};
