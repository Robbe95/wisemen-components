import { b2 as inject } from "./vendor-80f665be.js";
const FormInputGroupContext = Symbol("FormGroupContext");
const useFormInputGroupContext = () => {
  const context = inject(FormInputGroupContext, null);
  return context;
};
export {
  FormInputGroupContext as F,
  useFormInputGroupContext as u
};
