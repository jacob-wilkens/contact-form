import { Path, RegisterOptions, useFormContext } from "react-hook-form";
import { MyFormData } from "../../App";
import "./text-area.css";

type Props = JSX.IntrinsicElements["textarea"] & {
  label: Path<MyFormData>;
  formLabel: string;
  formOptions?: RegisterOptions;
};

export const TextArea = ({ label, formLabel, formOptions, ...rest }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<MyFormData>();

  return (
    <div className="textarea-container">
      <label htmlFor={label}>{formLabel}</label>
      <textarea {...register(label, formOptions)} {...rest} id={label} />
      <div className="error">{errors[label] && <>This field is required </>}</div>
    </div>
  );
};
