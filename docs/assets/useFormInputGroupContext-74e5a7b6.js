import { aU as inject } from "./vendor-a88772a8.js";
const FormInputGroupContext = Symbol("FormGroupContext");
const useFormInputGroupContext = () => {
  const context = inject(FormInputGroupContext, null);
  return context;
};
export {
  FormInputGroupContext as F,
  useFormInputGroupContext as u
};
