import { b6 as inject } from "./vendor-0d4e1342.js";
const FormInputGroupContext = Symbol("FormGroupContext");
const useFormInputGroupContext = () => {
  const context = inject(FormInputGroupContext, null);
  return context;
};
export {
  FormInputGroupContext as F,
  useFormInputGroupContext as u
};
