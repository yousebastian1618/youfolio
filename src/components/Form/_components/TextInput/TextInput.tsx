import styles from './styles.module.scss';
import {InputItem} from "@/types/types";
import {memo, useCallback} from "react";

type Props = {
  formInput: InputItem;
  onChange: (name: string, value: string) => void;
}

function TextInputBase({ formInput, onChange }: Props) {
  const { name, label, type, value, required, error, errorMessage } = formInput;

  const handleChange = useCallback(
    (v: string) => onChange(name, v),
    [name, onChange]
  )

  const commonProps = {
    className: styles.inputForm,
    placeholder: `${label}...`,
    type: type,
    value: value as string,
    'aria-invalid': error || undefined,
    'aria-describedby': error ? `${name}-error` : undefined,
    name: name,
  };

  return (
    <div className={styles.container}>
      <span className={styles.inputLabel}>{label}</span>
      {type === 'textarea' ?
        <textarea {...commonProps} rows={20} onChange={(e) => handleChange(e.target.value)}/> :
        <input {...commonProps} onChange={(e) => handleChange(e.target.value)}/>
      }
    </div>
  )
}

const TextInput = memo(TextInputBase, (prev, next) => {
  const a = prev.formInput;
  const b = next.formInput;
  return (
    a.name === b.name &&
    a.label === b.label &&
    a.type === b.type &&
    a.value === b.value &&
    a.error === b.error &&
    a.errorMessage === b.errorMessage
  )
});

export default TextInput;