import { Path, RegisterOptions, useFormContext } from "react-hook-form";
import { MyFormData } from "../../App";
import "./checkbox.css";

type CheckboxProps = Omit<JSX.IntrinsicElements["input"], "type">;

type Props = CheckboxProps & {
  label: Path<MyFormData>;
  formLabel: string;
  formOptions?: RegisterOptions;
};

export const Checkbox = ({ formLabel, label, formOptions, ...rest }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<MyFormData>();

  return (
    <>
      <div className="checkbox-container">
        <div className="checkbox">
          <input type="checkbox" {...register(label, formOptions)} {...rest} id={label} />
          <label htmlFor={label}>{formLabel}</label>
        </div>
        <div className="error">{errors[label] && <>This field is required </>}</div>
      </div>
    </>
  );
};
