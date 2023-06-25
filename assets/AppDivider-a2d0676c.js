import { as as defineComponent, b4 as useSlots, ax as openBlock, aJ as createElementBlock, aB as createBaseVNode, aD as normalizeClass, aC as renderSlot } from "./vendor-0d4e1342.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppDivider",
  props: {
    infoPosition: { type: String, required: false, default: "start" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const slots = useSlots();
    const __returned__ = { slots };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["flex items-center", {
        "gap-1": $setup.slots.default
      }])
    },
    [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(["h-[1px] w-full bg-white/50", { "w-4": $props.infoPosition === "start" }])
        },
        null,
        2
        /* CLASS */
      ),
      renderSlot(_ctx.$slots, "default"),
      createBaseVNode(
        "div",
        {
          class: normalizeClass(["h-[1px] w-full bg-white/50", { "w-8": $props.infoPosition === "end" }])
        },
        null,
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
_sfc_main.__file = "src/modules/ui/components/app/divider/AppDivider.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/divider/AppDivider.vue"]]);
export {
  __unplugin_components_0 as _
};
