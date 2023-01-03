import { DISPLAY } from "../Actions/types";

export default function displayReducer(state = "Chats", action) {
  const { type, payload } = action;
  if (type === DISPLAY) {
    return (state = payload);
  } else {
    return state;
  }
}
