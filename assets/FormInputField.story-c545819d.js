import { _ as __unplugin_components_0 } from "./FormInputField-2e605eab.js";
import { as as defineComponent, aK as reactive, aF as ref, aw as resolveComponent, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode, aG as mergeProps } from "./vendor-f004de5e.js";
import { i as iconNames } from "./AppIcon-2a55f03c.js";
import "./CheckmarkIcon-3247db73.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./TransitionExpand-03e9147a.js";
import "./generateUuid-c290b5d9.js";
import "./useFormInputGroupContext-87d7bd38.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormInputField.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const inputTypes = ["text", "password", "email", "tel", "url", "search"];
    const state = reactive({
      isDisabled: false,
      isLoading: false,
      isDirty: false,
      isTouched: false,
      isReadOnly: false,
      isCopyable: false,
      isOptional: false,
      hasExtraContentBorder: false,
      label: "Label",
      content: "",
      errors: { _errors: [] },
      placeholder: "Placeholder",
      frontIcon: void 0,
      backIcon: void 0,
      frontContent: void 0,
      backContent: void 0,
      type: "text"
    });
    const number = ref(0);
    const __returned__ = { inputTypes, state, number, get iconNames() {
      return iconNames;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_FormInputField = __unplugin_components_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Forms/Input/Field" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.type,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.type = $event),
            title: "Input type",
            options: [...$setup.inputTypes]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isDisabled,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.isDisabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isLoading,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.isLoading = $event),
            title: "Loading"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isDirty,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.isDirty = $event),
            title: "Dirty"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isReadOnly,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.isReadOnly = $event),
            title: "Readonly"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isTouched,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.isTouched = $event),
            title: "Touched"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isCopyable,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state.isCopyable = $event),
            title: "Copyable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isOptional,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.state.isOptional = $event),
            title: "Optional"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasExtraContentBorder,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.state.hasExtraContentBorder = $event),
            title: "Extra content border"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.placeholder,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.state.placeholder = $event),
            title: "Placeholder"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.content,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.state.content = $event),
            title: "Text"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.errors._errors[0],
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.state.errors._errors[0] = $event),
            title: "Error message"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.frontIcon,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.state.frontIcon = $event),
            title: "Front Icon",
            options: ["none", ...$setup.iconNames]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.backIcon,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.state.backIcon = $event),
            title: "Back Icon",
            options: ["none", ...$setup.iconNames]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.frontContent,
            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.state.frontContent = $event),
            title: "Front Content"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.backContent,
            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.state.backContent = $event),
            title: "Back Content"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_FormInputField, mergeProps({
            modelValue: $setup.state.content,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.state.content = $event)
          }, $setup.state), null, 16, ["modelValue"]),
          createVNode(_component_FormInputField, mergeProps({
            modelValue: $setup.number,
            "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.number = $event)
          }, $setup.state, { type: "number" }), null, 16, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/forms/field/FormInputField.story.vue";
const FormInputField_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/field/FormInputField.story.vue"]]);
export {
  FormInputField_story as default
};
