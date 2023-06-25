import { as as defineComponent, aX as ge, aY as je, aZ as We, a_ as Ie, a$ as Qe, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode, aC as renderSlot, aJ as createElementBlock, aH as createCommentVNode, aB as createBaseVNode } from "./vendor-0d4e1342.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppDropdownButton",
  props: {
    placement: { type: String, required: false, default: "bottom-start" },
    transitionName: { type: String, required: false, default: "scale-bounce-transition" },
    hasArrow: { type: Boolean, required: false, default: false },
    hasFlip: { type: Boolean, required: false, default: true },
    hasShift: { type: Boolean, required: false, default: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get Popover() {
      return ge;
    }, get PopoverButton() {
      return je;
    }, get PopoverPanel() {
      return We;
    }, get Float() {
      return Ie;
    }, get FloatArrow() {
      return Qe;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "absolute -z-10 h-full w-full rounded bg-white shadow-main"
};
const _hoisted_2 = { class: "z-50 flex flex-col gap-2 rounded bg-white p-2 shadow-main" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Popover"], null, {
    default: withCtx(() => [
      createVNode($setup["Float"], {
        flip: $props.hasFlip,
        shift: $props.hasShift,
        placement: $props.placement,
        "transition-name": $props.transitionName,
        arrow: $props.hasArrow,
        offset: $props.hasArrow ? 15 : 4
      }, {
        default: withCtx(() => [
          createVNode($setup["PopoverButton"], null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "button")
            ]),
            _: 3
            /* FORWARDED */
          }),
          createVNode($setup["PopoverPanel"], null, {
            default: withCtx(({ close }) => [
              $props.hasArrow ? (openBlock(), createElementBlock("div", _hoisted_1)) : createCommentVNode("v-if", true),
              $props.hasArrow ? (openBlock(), createBlock($setup["FloatArrow"], {
                key: 1,
                class: "absolute -z-10 h-5 w-5 rotate-45 bg-white shadow-main"
              })) : createCommentVNode("v-if", true),
              createBaseVNode("div", _hoisted_2, [
                renderSlot(_ctx.$slots, "panel", { close })
              ])
            ]),
            _: 3
            /* FORWARDED */
          })
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["flip", "shift", "placement", "transition-name", "arrow", "offset"])
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main.__file = "src/modules/ui/components/app/buttons/app-dropdown-button/AppDropdownButton.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/buttons/app-dropdown-button/AppDropdownButton.vue"]]);
export {
  __unplugin_components_1 as _
};
