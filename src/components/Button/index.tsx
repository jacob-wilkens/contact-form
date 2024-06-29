import "./button.css";

type Props = JSX.IntrinsicElements["button"] & {
  label: string;
};

export const Button = ({ label, ...rest }: Props) => {
  return (
    <div className="button-container">
      <button {...rest}>{label}</button>
    </div>
  );
};
