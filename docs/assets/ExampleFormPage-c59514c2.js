import { c0 as z, as as defineComponent, c1 as useForm, ax as openBlock, aP as createElementBlock, aA as createVNode, aG as mergeProps, az as withCtx, aE as createTextVNode, aT as toDisplayString, aF as ref, aV as Fragment, aW as renderList } from "./vendor-4fc3986a.js";
import { _ as __unplugin_components_0$1 } from "./FormInputField-fd20e122.js";
import { _ as __unplugin_components_0$2 } from "./AppButton-df06b0b0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./TransitionExpand-667423fe.js";
import "./AppIcon-f4e46be7.js";
import "./CheckmarkIcon-fa624468.js";
import "./CloseIcon-2ec8a57d.js";
import "./generateUuid-c290b5d9.js";
import "./useFormInputGroupContext-39c26954.js";
import "./fade.transition-ff73e3ee.js";
const simpleForm = z.object({
  username: z.string().min(1),
  password: z.string().min(1)
});
const nestedForm = z.object({
  username: z.string().min(1),
  address: z.object({
    street: z.string().min(1),
    city: z.string().min(1)
  })
});
const conditionalForm = z.object({
  password: z.string().min(1)
}).and(z.object({
  username: z.string().min(1)
}).or(z.object({
  email: z.string().email()
})));
const conditionalArrayForm = z.object({
  addresses: z.array(
    z.object({
      street: z.string().min(1)
    }).and(z.object({
      number: z.string().min(1)
    }).or(
      z.object({
        postcode: z.string().min(1)
      })
    ))
  )
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ExampleConditionalForm",
  setup(__props, { expose: __expose }) {
    __expose();
    const submitForm = (values) => {
      console.log(values);
    };
    const { form, onSubmitForm } = useForm(conditionalForm);
    onSubmitForm((data) => {
      submitForm(data);
      return null;
    });
    const __returned__ = { submitForm, form, onSubmitForm, FormInputField: __unplugin_components_0$1, AppButton: __unplugin_components_0$2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createVNode(
      $setup["FormInputField"],
      mergeProps($setup.form.register("username"), { label: "Username" }),
      null,
      16
      /* FULL_PROPS */
    ),
    createVNode(
      $setup["FormInputField"],
      mergeProps($setup.form.register("email"), { label: "email" }),
      null,
      16
      /* FULL_PROPS */
    ),
    createVNode(
      $setup["FormInputField"],
      mergeProps($setup.form.register("password"), { label: "password" }),
      null,
      16
      /* FULL_PROPS */
    ),
    createVNode($setup["AppButton"], { "onComponent:click": $setup.onSubmitForm }, {
      default: withCtx(() => [
        createTextVNode(" Submit ")
      ]),
      _: 1
      /* STABLE */
    }, 8, ["onComponent:click"])
  ]);
}
_sfc_main$5.__file = "src/modules/example/components/ExampleConditionalForm.vue";
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/example/components/ExampleConditionalForm.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ExampleNestedForm",
  setup(__props, { expose: __expose }) {
    __expose();
    const submitForm = (values) => {
      console.log(values);
    };
    const { form, onSubmitForm } = useForm(nestedForm);
    onSubmitForm((data) => {
      submitForm(data);
      return null;
    });
    const __returned__ = { submitForm, form, onSubmitForm, FormInputField: __unplugin_components_0$1, AppButton: __unplugin_components_0$2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createVNode(
      $setup["FormInputField"],
      mergeProps($setup.form.register("username"), { label: "Username" }),
      null,
      16
      /* FULL_PROPS */
    ),
    createVNode(
      $setup["FormInputField"],
      mergeProps($setup.form.register("address.city"), { label: "Stad" }),
      null,
      16
      /* FULL_PROPS */
    ),
    createVNode(
      $setup["FormInputField"],
      mergeProps($setup.form.register("address.street"), { label: "Straat" }),
      null,
      16
      /* FULL_PROPS */
    ),
    createVNode($setup["AppButton"], {
      "onComponent:click": $setup.form.submit
    }, {
      default: withCtx(() => [
        createTextVNode(" Submit ")
      ]),
      _: 1
      /* STABLE */
    }, 8, ["onComponent:click"])
  ]);
}
_sfc_main$4.__file = "src/modules/example/components/ExampleNestedForm.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/example/components/ExampleNestedForm.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ExampleSimpleForm",
  setup(__props, { expose: __expose }) {
    __expose();
    const submitForm = (values) => {
      console.log(values);
    };
    const { form, onSubmitForm } = useForm(simpleForm);
    onSubmitForm((data) => {
      submitForm(data);
      return null;
    });
    const __returned__ = { submitForm, form, onSubmitForm, FormInputField: __unplugin_components_0$1, AppButton: __unplugin_components_0$2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createVNode(
      $setup["FormInputField"],
      mergeProps($setup.form.register("username"), { label: "Username" }),
      null,
      16
      /* FULL_PROPS */
    ),
    createVNode(
      $setup["FormInputField"],
      mergeProps($setup.form.register("password"), { label: "Wachtwoord" }),
      null,
      16
      /* FULL_PROPS */
    ),
    createVNode($setup["AppButton"], {
      "onComponent:click": $setup.form.submit
    }, {
      default: withCtx(() => [
        createTextVNode(" Submit ")
      ]),
      _: 1
      /* STABLE */
    }, 8, ["onComponent:click"])
  ]);
}
_sfc_main$3.__file = "src/modules/example/components/ExampleSimpleForm.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/example/components/ExampleSimpleForm.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ExampleArrayFormComponent",
  props: {
    index: { type: Number, required: true },
    form: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormInputField = __unplugin_components_0$1;
  return openBlock(), createElementBlock("div", null, [
    createTextVNode(
      " Address " + toDisplayString($props.index) + " ",
      1
      /* TEXT */
    ),
    createVNode(
      _component_FormInputField,
      mergeProps($setup.props.form.register(`addresses.${$props.index}.street`), { label: "street" }),
      null,
      16
      /* FULL_PROPS */
    ),
    createVNode(
      _component_FormInputField,
      mergeProps($setup.props.form.register(`addresses.${$props.index}.number`), { label: "number" }),
      null,
      16
      /* FULL_PROPS */
    ),
    createVNode(
      _component_FormInputField,
      mergeProps($setup.props.form.register(`addresses.${$props.index}.postcode`), { label: "postcode" }),
      null,
      16
      /* FULL_PROPS */
    )
  ]);
}
_sfc_main$2.__file = "src/modules/example/components/ExampleArrayFormComponent.vue";
const ExampleArrayFormComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/example/components/ExampleArrayFormComponent.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ExampleArrayForm",
  setup(__props, { expose: __expose }) {
    __expose();
    const submitForm = (values) => {
      console.log(values);
    };
    const addressesAmount = ref(1);
    const add = () => {
      addressesAmount.value += 1;
    };
    const remove = () => {
      addressesAmount.value -= 1;
    };
    const { form, onSubmitForm } = useForm(conditionalArrayForm);
    onSubmitForm((data) => {
      submitForm(data);
      return null;
    });
    const __returned__ = { submitForm, addressesAmount, add, remove, form, onSubmitForm, ExampleArrayFormComponent, AppButton: __unplugin_components_0$2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($setup.addressesAmount, (i) => {
        return openBlock(), createElementBlock("div", { key: i }, [
          createVNode($setup["ExampleArrayFormComponent"], {
            index: i - 1,
            form: $setup.form
          }, null, 8, ["index", "form"])
        ]);
      }),
      128
      /* KEYED_FRAGMENT */
    )),
    createVNode($setup["AppButton"], { "onComponent:click": $setup.add }, {
      default: withCtx(() => [
        createTextVNode(" add ")
      ]),
      _: 1
      /* STABLE */
    }),
    createVNode($setup["AppButton"], { "onComponent:click": $setup.remove }, {
      default: withCtx(() => [
        createTextVNode(" remove ")
      ]),
      _: 1
      /* STABLE */
    }),
    createVNode($setup["AppButton"], { "onComponent:click": $setup.onSubmitForm }, {
      default: withCtx(() => [
        createTextVNode(" Submit ")
      ]),
      _: 1
      /* STABLE */
    }, 8, ["onComponent:click"])
  ]);
}
_sfc_main$1.__file = "src/modules/example/components/ExampleArrayForm.vue";
const ExampleArrayForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/example/components/ExampleArrayForm.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ExampleFormPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { ExampleArrayForm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col gap-8" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ExampleSimpleForm = __unplugin_components_0;
  const _component_ExampleNestedForm = __unplugin_components_1;
  const _component_ExampleConditionalForm = __unplugin_components_2;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_ExampleSimpleForm),
    createVNode(_component_ExampleNestedForm),
    createVNode(_component_ExampleConditionalForm),
    createVNode($setup["ExampleArrayForm"])
  ]);
}
_sfc_main.__file = "src/modules/example/pages/ExampleFormPage.vue";
const ExampleFormPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/example/pages/ExampleFormPage.vue"]]);
export {
  ExampleFormPage as default
};
