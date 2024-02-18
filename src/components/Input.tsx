import { useState } from "react";
import {
  VALIDATION_CONDITIONS,
  INITIAL_STATE,
  VALID_STATE,
} from "../constants";
import { IInput, Validation } from "../interfaces";

interface InputProps {
  onChange: (name: string, value: IInput) => void;
  name: string;
  type: string;
  placeholder: string;
  validationType: Validation;
}

const Input = ({
  onChange,
  name,
  type,
  placeholder,
  validationType,
}: InputProps) => {
  const validations = VALIDATION_CONDITIONS?.[validationType];
  const [input, setInput] = useState<IInput>({
    ...INITIAL_STATE,
    error: validations.errorMsg,
  });

  const validateInput = (value: string) => {
    if (validations.isInvalid(value)) {
      const invalidState = {
        isValid: false,
        error: validations.errorMsg,
        value,
        isTouched: true,
      };
      setInput(invalidState);
      onChange(name, invalidState);

      return false;
    }

    return true;
  };

  const handleInputChange = (value: string) => {
    const isValid = validateInput(value);

    if (!isValid) {
      return;
    }

    const validState = { ...VALID_STATE, value };
    setInput(validState);
    onChange(name, validState);
  };

  return (
    <div className="my-3">
      <label className="label capitalize" htmlFor={name}>
        * {name}
      </label>
      <input
        className="input focus:outline-none focuse:shadow-outline"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={input.value}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => {
          if (!input.isTouched) {
            setInput((prevState) => ({ ...prevState, isTouched: true }));
          }
        }}
      />
      {input?.error && input?.isTouched && (
        <p className="error text-xs">{input.error}</p>
      )}
    </div>
  );
};

export default Input;
