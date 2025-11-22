import styles from './styles.module.scss';
import type {Button, InputItem} from "@/types/types";
import {useCallback, useEffect, useReducer, useState} from "react";
import {formReducer} from "@/reducers/formReducer";
import TextInput from "@/components/Form/_components/TextInput/TextInput";
import ButtonComponent from '@/components/Button/Button';
import {useAPIAction} from "@/actions/apiActions";
import {useErrorCheckAction} from "@/actions/useErrorCheckAction";

type Props = {
  form: InputItem[],
  buttons: Button[]
}

export default function Form({ form, buttons }: Props) {

  const { checkError } = useErrorCheckAction();

  const { apiPOST } = useAPIAction();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [state, dispatch] = useReducer(
    formReducer,
    form,
    (initial) => initial.map(i => ({
      ...i,
      value: i.value ?? "",
      error: i.error ?? false,
      errorMessage: i.errorMessage ?? ""
    }))
  );

  const setValue = useCallback((name: string, value: string) => {
    dispatch({ type: 'set_value', name, value });
  }, [])

  useEffect(() => {
    dispatch({ type: 'reset', initial: form })
  }, [form]);

  const onHandleClick = async (button: Button) => {
    let hasError = false;

    const validatedState = state.map((input) => {
      const errorMessage = checkError(input);
      const error = errorMessage !== '';

      if (error) hasError = true;
      return {
        ...input,
        error,
        errorMessage
      }
    })

    dispatch({ type: 'replace_all', replaced: validatedState });
    if (hasError) return;
    const payload = state.reduce((acc, input) => {
      acc[input.name] = input.value;
      return acc;
    }, {} as Record<string, string>);
    setSent(false);
    setLoading(true);
    await apiPOST('/inquiry', payload);
    setSent(true);
    dispatch({ type: 'reset', initial: form })
    setLoading(false);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        {state.map(( formInput: InputItem) => {
          return <TextInput key={formInput.name}
                            formInput={formInput}
                            onChange={(name, val) => setValue(name, val)}
          />
        })}
      </form>
      <div className={styles.buttons}>
        {buttons.map((button: Button) => {
          return (
            <div key={button.name} className={styles.button}>
              <ButtonComponent button={button} clickEvent={() => onHandleClick(button)} loading={loading}/>
            </div>
          )
        })}
      </div>
      {sent && (
        <div className={styles.submitMessage}>
          Thank you!
        </div>
      )}
    </div>
  )
}