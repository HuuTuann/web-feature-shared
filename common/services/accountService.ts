import Cookies from "js-cookie";

export const setAdminCookie = (value: string, days: number) => {
  Cookies.set(process.env.NEXT_PUBLIC_ADMIN as string, value, {
    expires: days,
  });
};

export const getAdminCookie = (): string | undefined => {
  return Cookies.get(process.env.NEXT_PUBLIC_ADMIN as string);
};

export const removeAdminCookie = () => {
  Cookies.remove(process.env.NEXT_PUBLIC_ADMIN as string);
};
