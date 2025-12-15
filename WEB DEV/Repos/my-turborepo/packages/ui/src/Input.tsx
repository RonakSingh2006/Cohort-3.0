import { forwardRef } from "react";

type InputProps = {
  placeholder: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        style={{
          fontSize: "18px",
          width: "200px",
          outline: "none",
          padding: "5px",
        }}
      />
    );
  }
);

Input.displayName = "Input";