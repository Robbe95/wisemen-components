import { as as defineComponent, aY as computed, ax as openBlock, ay as createBlock, az as withCtx, aB as createBaseVNode, aD as normalizeClass, aC as renderSlot, aI as resolveDynamicComponent } from "./vendor-f004de5e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppIconButton",
  props: {
    isButton: { type: Boolean, required: false, default: true },
    size: { type: String, required: false, default: "md" }
  },
  emits: ["component:click"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const component = computed(() => {
      if (props.isButton)
        return "button";
      return "div";
    });
    const __returned__ = { props, emit, component };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($setup.component), {
    class: normalizeClass([{
      "h-7 w-7": $setup.props.size === "sm",
      "h-8 w-8": $setup.props.size === "md",
      "h-9 w-9": $setup.props.size === "lg"
    }, "grid place-items-center rounded-full"]),
    onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("component:click"))
  }, {
    default: withCtx(() => [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(
            {
              "h-[0.875rem] w-[0.875rem]": $setup.props.size === "sm",
              "h-[1.25rem] w-[1.25rem]": $setup.props.size === "md",
              "h-[1.5rem] w-[1.5rem]": $setup.props.size === "lg"
            }
          )
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
_sfc_main.__file = "src/modules/ui/components/app/buttons/app-icon-button/AppIconButton.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/buttons/app-icon-button/AppIconButton.vue"]]);
export {
  __unplugin_components_1 as _
};
