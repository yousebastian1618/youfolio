import type { InputItem } from "@/types/types";

export type FormAction =
  { type: 'set_value'; name: string; value: string } |
  { type: 'set_error'; name: string; error: boolean; errorMessage: string } |
  { type: 'reset'; initial: InputItem[] }

export function formReducer(state: InputItem[], action: FormAction) {
  switch (action.type) {
    case 'set_value':
      return state.map((input) =>
        input.name === action.name ? { ...input, value: action.value } : input
      );
    case 'set_error':
      return state.map((input) =>
        input.name === action.name ? { ...input, error: true, errorMessage: action.errorMessage } : input
      );
    case 'reset':
      return action.initial.map((i: InputItem) => ({ ...i, value: '', error: false, errorMessage: '' }));
    default:
      return state
  }
}