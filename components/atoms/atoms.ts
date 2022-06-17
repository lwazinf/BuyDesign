import { atom } from "recoil";

export const walletState = atom({
  key: "walletState",
  default: false,
});

export const notificationState = atom({
  key: "notificationState",
  default: false,
});

export const sizeState = atom({
  key: "sizeState",
  default: "medium",
});

export const articleState = atom({
  key: "articleState",
  default: "hoodie",
});

export const baseState = atom({
  key: "baseState",
  default: "white",
});

export const accentState = atom({
  key: "accentState",
  default: "white",
});

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const addressState = atom({
  key: "addressState",
  default: "",
});

export const countryState = atom({
  key: "countryState",
  default: "",
});

export const colorState = atom({
  key: "colorState",
  default: {
    white:
      "invert(0%) sepia(4%) saturate(0%) hue-rotate(309deg) brightness(100%) contrast(107%)",
    brown:
      "invert(15%) sepia(95%) saturate(1549%) hue-rotate(19deg) brightness(96%) contrast(101%)",
    black:
      "invert(100%) sepia(0%) saturate(7484%) hue-rotate(238deg) brightness(110%) contrast(103%)",
    green:
      "invert(20%) sepia(37%) saturate(1578%) hue-rotate(81deg) brightness(94%) contrast(105%)",
    yellow:
      "invert(87%) sepia(39%) saturate(4180%) hue-rotate(356deg) brightness(100%) contrast(102%)",
    blue: "invert(11%) sepia(98%) saturate(5807%) hue-rotate(252deg) brightness(88%) contrast(140%)",
    lightblue:
      "invert(71%) sepia(38%) saturate(7500%) hue-rotate(163deg) brightness(101%) contrast(101%)",
    pink: "invert(34%) sepia(100%) saturate(6331%) hue-rotate(307deg) brightness(97%) contrast(117%)",
    purple:
      "invert(8%) sepia(96%) saturate(5946%) hue-rotate(273deg) brightness(43%) contrast(106%)",
  },
});
