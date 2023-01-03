import { DISPLAY } from "./types";

export const changeDisplay = (value) => {
  return {
    type: DISPLAY,
    payload: value,
  };
};
