import { as as defineComponent, aF as ref, aS as computed, b1 as provide, ax as openBlock, aP as createElementBlock, aC as renderSlot } from "./vendor-a88772a8.js";
import { F as FormInputGroupContext } from "./useFormInputGroupContext-74e5a7b6.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormInputGroup",
  props: {
    disabled: { type: Boolean, required: false, default: false },
    valueMeasurement: { type: String, required: false, default: "" },
    percentProgress: { type: Boolean, required: false, default: false },
    valueProgress: { type: Boolean, required: false, default: false },
    totalValue: { type: Number, required: false },
    maxLabel: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const options = ref([]);
    const setupApi = {
      options,
      maxLabel: computed(() => props.maxLabel),
      valueMeasurement: computed(() => props.valueMeasurement),
      percentProgress: computed(() => props.percentProgress),
      valueProgress: computed(() => props.valueProgress),
      maxValue: computed(() => props.totalValue),
      valueUsed: computed(() => options.value.reduce((acc, option) => {
        var _a, _b;
        return acc + (((_b = (_a = option.value) == null ? void 0 : _a.propsRef) == null ? void 0 : _b.value) ?? 0);
      }, 0)),
      disabled: computed(() => props.disabled),
      change(contextOption, newValue) {
        if (contextOption.value.propsRef.disabled)
          return null;
        if (!props.totalValue)
          return newValue;
        const maxAllowed = props.totalValue - (setupApi.valueUsed.value ?? 0) + (contextOption.value.propsRef.value ?? 0);
        const value = Math.min(newValue, maxAllowed);
        contextOption.value.propsRef.value = value;
        return value;
      },
      registerOption(action) {
        options.value.push(action);
      },
      unregisterOption(id) {
        const idx = options.value.findIndex((slider) => slider.value.id === id);
        if (idx === -1)
          return;
        options.value.splice(idx, 1);
      }
    };
    provide(FormInputGroupContext, setupApi);
    const __returned__ = { props, options, setupApi };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
_sfc_main.__file = "src/modules/ui/components/forms/group/FormInputGroup.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/group/FormInputGroup.vue"]]);
export {
  __unplugin_components_1 as _
};
