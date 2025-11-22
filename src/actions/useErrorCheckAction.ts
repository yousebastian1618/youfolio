'use client'

import {InputItem} from "@/types/types";

export function useErrorCheckAction() {
  const checkError = (input: InputItem) => {
    const errors = input.checkErrors;
    for (const key in errors) {
      if (key === 'NOT_EMPTY') {
        if (!checkNotEmpty(input.value)) {
          return errors[key].message;
        }
      }
      if (key === 'FORMAT') {
        if (!checkFormat(errors[key].criteria, input.value)) {
          return errors[key].message;
        }
      }
      if (key === 'MAX_LENGTH') {
        if (!checkMaxLength(errors[key].criteria, input.value)) {
          return errors[key].message;
        }
      }
    }
    return '';
  }
  const checkNotEmpty = (value: string) => {
    return !(value === undefined || value === '' || value === null);
  }
  const checkFormat = (criteria: string, value: string) => {
    if (criteria === 'EMAIL') {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(value);
    }
    return true;
  }
  const checkMaxLength = (criteria: string, value: string) => {
    return value.length >= parseInt(criteria);
  }
  return { checkError };
}
