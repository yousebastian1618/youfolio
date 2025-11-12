import {InputItem} from "@/types/types";

export const ContactForm: InputItem[] = [
  {
    name: 'email',
    label: 'EMAIL',
    type: 'email',
    value: '',
    required: true,
    error: false,
    errorMessage: '',
    checkErrors: {
      "NOT_EMPTY": {
        criteria: '',
        message: "email is required"
      },
      "FORMAT": {
        criteria: "EMAIL",
        message: "Wrong email format"
      }
    }
  },
  {
    name: "message",
    label: "MESSAGE",
    type: "textarea",
    value: "",
    required: true,
    error: false,
    errorMessage: "",
    checkErrors: {
      "NOT_EMPTY": {
        criteria: '',
        message: "Message cannot be empty"
      },
      "MAX_LENGTH": {
        criteria: '50',
        message: "Message should be at least 50 characters long."
      }
    }
  }
]