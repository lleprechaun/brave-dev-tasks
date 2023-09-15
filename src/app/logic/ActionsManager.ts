export const SUCCESS_MESSAGE = "Оплата прошла";
export const ERROR_MESSAGE = "Оплата не прошла";

interface SuccessMessageAction {
  type: typeof SUCCESS_MESSAGE;
  payload: boolean;
}

interface ErrorMessageAction {
  type: typeof ERROR_MESSAGE;
  payload: boolean;
}

export type ChatActionTypes = SuccessMessageAction | ErrorMessageAction;