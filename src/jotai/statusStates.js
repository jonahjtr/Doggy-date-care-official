import { atomWithStorage } from "jotai/utils";

export const isLoggedInAtom = atomWithStorage("isLoggedIn", false);
export const lightMode = atomWithStorage("lightOrDark", false);
export const userObject = atomWithStorage("userInfo", {});
export const currentDogId = atomWithStorage("currentDogId", null);
export const currentDogProfile = atomWithStorage("currentDogProfile", {});
export const PageNameAtom = atomWithStorage("pageName", "Dashboard");
export const isOpenAtom = atomWithStorage("isOpen", false);
