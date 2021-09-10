import React from "react";
import { InputBase, InputContainer, InputLabel } from "./styles";

interface InputProps {
  name: string;
  onChange: (value: any, name: string) => void;
  type?: string;
  error?: boolean;
  accept?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  onChange,
  type,
  error,
  accept,
}) => {
  return (
    <InputContainer>
      <InputLabel>{name}</InputLabel>
      <InputBase
        name={name}
        onChange={(e) =>
          onChange(
            type && type === "file" && e.target.files
              ? URL.createObjectURL(e.target.files[0])
              : e.target.value,
            name
          )
        }
        type={type || "text"}
        error={error}
        placeholder={name}
        accept={accept}
      />
    </InputContainer>
  );
};

export default Input;
