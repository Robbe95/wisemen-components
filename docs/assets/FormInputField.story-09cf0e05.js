import { _ as __unplugin_components_1 } from "./FormInputGroup-c3141072.js";
import { _ as __unplugin_components_0 } from "./FormInputField-29640169.js";
import { as as defineComponent, aF as ref, aw as resolveComponent, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode, aE as createTextVNode } from "./vendor-a88772a8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./useFormInputGroupContext-74e5a7b6.js";
import "./TransitionExpand-235cdcb0.js";
import "./generateUuid-c290b5d9.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormInputField.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const model = ref();
    const model2 = ref();
    const model3 = ref();
    const __returned__ = { model, model2, model3 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormInputField = __unplugin_components_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_WarningIcon = resolveComponent("WarningIcon");
  const _component_FormInputGroup = __unplugin_components_1;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Forms/Input/Field" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_FormInputField, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Label" }, {
        default: withCtx(() => [
          createVNode(_component_FormInputField, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.model = $event),
            label: "exampleLabel"
          }, null, 8, ["modelValue"]),
          createVNode(_component_FormInputField, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.model = $event)
          }, {
            label: withCtx(() => [
              createTextVNode(" Slot label ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Placeholder" }, {
        default: withCtx(() => [
          createVNode(_component_FormInputField, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.model = $event),
            placeholder: "examplePlaceholder"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Unit" }, {
        default: withCtx(() => [
          createVNode(_component_FormInputField, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.model = $event),
            unit: "m2"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Number" }, {
        default: withCtx(() => [
          createVNode(_component_FormInputField, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.model = $event),
            type: "number"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Disabled" }, {
        default: withCtx(() => [
          createVNode(_component_FormInputField, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.model = $event),
            "is-disabled": ""
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Readonly" }, {
        default: withCtx(() => [
          createVNode(_component_FormInputField, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.model = $event),
            "is-read-only": ""
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Success" }, {
        default: withCtx(() => [
          createVNode(_component_FormInputField, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.model = $event),
            "has-success": ""
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Error" }, {
        default: withCtx(() => [
          createVNode(_component_FormInputField, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.model = $event),
            errors: { _errors: ["Error test"] }
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Front content" }, {
        default: withCtx(() => [
          createVNode(_component_FormInputField, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.model = $event)
          }, {
            "front-content": withCtx(() => [
              createVNode(_component_WarningIcon, { class: "w-4" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Back content" }, {
        default: withCtx(() => [
          createVNode(_component_FormInputField, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.model = $event)
          }, {
            "back-content": withCtx(() => [
              createVNode(_component_WarningIcon, { class: "w-4" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Group" }, {
        default: withCtx(() => [
          createVNode(_component_FormInputGroup, { "total-value": 500 }, {
            default: withCtx(() => [
              createVNode(_component_FormInputField, {
                modelValue: $setup.model,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.model = $event),
                type: "number"
              }, null, 8, ["modelValue"]),
              createVNode(_component_FormInputField, {
                modelValue: $setup.model2,
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.model2 = $event),
                type: "number"
              }, null, 8, ["modelValue"]),
              createVNode(_component_FormInputField, {
                modelValue: $setup.model3,
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.model3 = $event),
                type: "number"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
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
