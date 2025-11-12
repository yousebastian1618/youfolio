import styles from './styles.module.scss';
import type {Button, InputItem} from "@/types/types";
import {useCallback, useEffect, useReducer} from "react";
import {formReducer} from "@/reducers/formReducer";
import TextInput from "@/components/Form/_components/TextInput/TextInput";
import ButtonComponent from '@/components/Button/Button';

type Props = {
  form: InputItem[],
  buttons: Button[]
}

export default function Form({ form, buttons }: Props) {

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
              <ButtonComponent button={button} />
            </div>
          )
        })}
      </div>
    </div>
  )
}