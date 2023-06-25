import { as as defineComponent, aX as ge, aY as je, aZ as We, a_ as Ie, a$ as Qe, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode, aG as mergeProps, aC as renderSlot, aJ as createElementBlock, aH as createCommentVNode, aB as createBaseVNode, aM as reactive, aw as resolveComponent, b0 as normalizeProps, b1 as guardReactiveProps, aE as createTextVNode } from "./vendor-0d4e1342.js";
import { s as scaleBounceTransition } from "./scaleBounce.transition-7f0f6ada.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as __unplugin_components_0 } from "./AppButton-13c53978.js";
import "./AppIcon-59dbebe4.js";
import "./CheckmarkIcon-c691b98e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppPopover",
  props: {
    placement: { type: null, required: false, default: "bottom-start" },
    offset: { type: [Number, Object, Function], required: false },
    arrow: { type: [Boolean, Number], required: false, default: false },
    flip: { type: [Boolean, Number, Object], required: false, default: true },
    shift: { type: [Boolean, Number, Object], required: false, default: true }
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
    }, get scaleBounceTransition() {
      return scaleBounceTransition;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "absolute -z-10 h-full w-full rounded bg-card shadow-modal"
};
const _hoisted_2 = { class: "z-50 flex flex-col gap-2 rounded bg-card p-4" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Popover"], null, {
    default: withCtx(() => [
      createVNode($setup["Float"], mergeProps({
        flip: $props.flip,
        shift: $props.shift,
        placement: $props.placement,
        arrow: $props.arrow,
        offset: $props.offset ?? $props.arrow ? 16 : 4
      }, $setup.scaleBounceTransition), {
        default: withCtx(() => [
          createVNode($setup["PopoverButton"], { as: "template" }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "element")
            ]),
            _: 3
            /* FORWARDED */
          }),
          createVNode($setup["PopoverPanel"], null, {
            default: withCtx(({ close }) => [
              $props.arrow ? (openBlock(), createElementBlock("div", _hoisted_1)) : createCommentVNode("v-if", true),
              $props.arrow ? (openBlock(), createBlock($setup["FloatArrow"], {
                key: 1,
                class: "absolute -z-10 h-5 w-5 rotate-45 bg-card shadow-modal"
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
      }, 16, ["flip", "shift", "placement", "arrow", "offset"])
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$1.__file = "src/modules/ui/components/app/popover/AppPopover.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/popover/AppPopover.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppPopover.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const placementOptions = [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "left-start",
      "left-end",
      "right-start",
      "right-end",
      "bottom",
      "top",
      "left",
      "right"
    ];
    const state = reactive({
      arrow: 0,
      flip: 0,
      shift: 0,
      offset: 4,
      placement: "bottom-start"
    });
    const __returned__ = { placementOptions, state };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_AppButton = __unplugin_components_0;
  const _component_AppPopover = __unplugin_components_1;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Popover/AppPopover" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        controls: withCtx(() => [
          createVNode(_component_HstNumber, {
            modelValue: $setup.state.arrow,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.arrow = $event),
            title: "Arrow"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.state.flip,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.flip = $event),
            title: "Flip"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.state.shift,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.shift = $event),
            title: "Shift"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.state.offset,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.offset = $event),
            title: "Offset"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.placement,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.placement = $event),
            options: $setup.placementOptions,
            title: "Placement"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(
            _component_AppPopover,
            normalizeProps(guardReactiveProps($setup.state)),
            {
              element: withCtx(() => [
                createVNode(_component_AppButton, null, {
                  default: withCtx(() => [
                    createTextVNode(" Dropdown ")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              panel: withCtx(({ close }) => [
                createVNode(_component_AppButton, { "onComponent:click": close }, {
                  default: withCtx(() => [
                    createTextVNode(" Close panel ")
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["onComponent:click"])
              ]),
              _: 1
              /* STABLE */
            },
            16
            /* FULL_PROPS */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/app/popover/AppPopover.story.vue";
const AppPopover_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/popover/AppPopover.story.vue"]]);
export {
  AppPopover_story as default
};
