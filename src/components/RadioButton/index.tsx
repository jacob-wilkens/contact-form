import { Path, RegisterOptions, useFormContext } from "react-hook-form";
import { MyFormData } from "../../App";
import "./radio-button.css";

type RadioButtonProps = Omit<JSX.IntrinsicElements["input"], "type">;

type Props = RadioButtonProps & {
  label: Path<MyFormData>;
  formLabel: string;
  formOptions?: RegisterOptions;
};

export const RadioButton = ({ formLabel, label, formOptions, ...rest }: Props) => {
  const { register } = useFormContext<MyFormData>();
  const { value } = rest;

  return (
    <div className="radio-container">
      <input {...register(label, formOptions)} type="radio" {...rest} id={value?.toString()} />
      <label htmlFor={value?.toString()}>{formLabel}</label>
    </div>
  );
};
