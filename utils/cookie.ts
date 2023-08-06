import Cookies from "js-cookie";

// Function to set a cookie
export const setCookie = (name: string, value: any, options?: any) => {
  Cookies.set(name, JSON.stringify(value), options);
};

// Function to retrieve a cookie
export const getCookie = (name: string) => {
  const cookieValue = Cookies.get(name);
  return cookieValue ? JSON.parse(cookieValue) : null;
};

// Function to remove a cookie
export const removeCookie = (name: string, options?: any) => {
  Cookies.remove(name, options);
};
