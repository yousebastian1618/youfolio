import type { InputItem } from "@/types/types";

export type FormAction =
  { type: 'set_value'; name: string; value: string } |
  { type: 'set_error'; name: string; error: boolean; errorMessage: string } |
  { type: 'replace_all'; replaced: InputItem[] } |
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
    // case 'check_error':
    //   return state.map((input) => {
    //     let error: boolean;
    //     let errorMessage: string;
    //     console.log(checkError({ ...input, error: false, errorMessage: "" }));
    //     errorMessage = checkError({ ...input, error: false, errorMessage: "" });
    //     error = errorMessage !== "";
    //
    //     return {
    //       ...input,
    //       error,
    //       errorMessage
    //     }
    //   });
    case 'replace_all':
      return action.replaced;
    case 'reset':
      return action.initial.map((i: InputItem) => ({ ...i, value: '', error: false, errorMessage: '' }));
    default:
      return state
  }
}