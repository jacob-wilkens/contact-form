import { Path, RegisterOptions, useFormContext } from "react-hook-form";
import { MyFormData } from "../../App";
import "./input.css";

type Props = JSX.IntrinsicElements["input"] & {
  label: Path<MyFormData>;
  formLabel: string;
  formOptions?: RegisterOptions;
};

export const Input = ({ formLabel, label, formOptions, ...rest }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<MyFormData>();

  return (
    <div className="input-container">
      <label htmlFor={label}>{formLabel}</label>
      <input {...register(label, formOptions)} {...rest} id={label} />
      <div className="error">{errors[label] && <>This field is required </>}</div>
    </div>
  );
};
