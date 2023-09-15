
import { SUCCESS_MESSAGE, ERROR_MESSAGE, ChatActionTypes } from './ActionsManager'

export function successMessage(newMessage: boolean): ChatActionTypes {
  return {
    type: SUCCESS_MESSAGE,
	payload: newMessage
  }
}

export function errorMessage(newMessage: boolean): ChatActionTypes {
  return {
    type: ERROR_MESSAGE,
    payload: newMessage
  }
}

export async function pay(phone: string, price: number) {
	const randomBool = await Math.random() > 0.5 ? true : false;
	if (randomBool) {
		return successMessage(randomBool);
	} else{
		return errorMessage(randomBool);
	}
}