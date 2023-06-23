import { b4 as inject } from "./vendor-72f13f2a.js";
const FormInputGroupContext = Symbol("FormGroupContext");
const useFormInputGroupContext = () => {
  const context = inject(FormInputGroupContext, null);
  return context;
};
export {
  FormInputGroupContext as F,
  useFormInputGroupContext as u
};
