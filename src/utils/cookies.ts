import Cookies from "js-cookie"

export const setCookie = (name: string, value: string, days: number = 365) => {
  Cookies.set(name, value, { expires: days, sameSite: "strict" })
}

export const getCookie = (name: string) => {
  return Cookies.get(name)
}

export const removeCookie = (name: string) => {
  Cookies.remove(name)
}
