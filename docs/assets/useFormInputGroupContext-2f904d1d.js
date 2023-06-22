import { aU as inject } from "./vendor-8f547009.js";
const FormInputGroupContext = Symbol("FormGroupContext");
const useFormInputGroupContext = () => {
  const context = inject(FormInputGroupContext, null);
  return context;
};
export {
  FormInputGroupContext as F,
  useFormInputGroupContext as u
};
