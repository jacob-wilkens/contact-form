import { FormProvider, RegisterOptions, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./App.css";
import { Button, Checkbox, Input, RadioButton, TextArea } from "./components";

export type MyFormData = {
  firstName: string;
  lastName: string;
  email: string;
  query: string;
  message: string;
  consent: boolean;
};

const formOptions: RegisterOptions = {
  required: true,
};

function App() {
  const form = useForm<MyFormData>();
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data);
    success();
    reset();
  };

  const success = () => toast.success("Form submitted successfully!");

  return (
    <div className="content">
      <FormProvider {...form}>
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
          <div className="title">
            <h1>Contact Us</h1>
          </div>
          <div className="flex-col">
            <Input label="firstName" formLabel="First Name" formOptions={formOptions} aria-label="First Name" />
            <Input label="lastName" formLabel="Last Name" formOptions={formOptions} aria-label="Last Name" />
          </div>
          <div className="flex-col">
            <Input type="email" label="email" formLabel="Email Address" formOptions={formOptions} aria-label="Email Address" />
          </div>
          <div>
            <label id="query-label">Query Type</label>
            <div className="flex-col">
              <RadioButton label="query" formLabel="General" value="general" formOptions={formOptions} aria-label="General Query" />
              <RadioButton label="query" formLabel="Marketing" value="marketing" formOptions={formOptions} aria-label="Marketing Query" />
            </div>
            <div className="error">{errors.query && <>This field is required </>}</div>
          </div>
          <div className="flex-col">
            <TextArea formLabel="Message" label="message" rows={6} formOptions={formOptions} aria-label="Message" />
          </div>
          <div className="flex-col">
            <Checkbox label="consent" formOptions={formOptions} formLabel="I consent to being contacted by the team" aria-label="Consent" />
          </div>
          <div className="flex-col">
            <Button label="Submit" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
