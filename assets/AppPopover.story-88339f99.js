import { as as defineComponent, aV as ge, aW as je, aX as We, aY as Ie, aZ as Qe, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode, aC as renderSlot, aJ as createElementBlock, aH as createCommentVNode, aB as createBaseVNode, aw as resolveComponent, aE as createTextVNode } from "./vendor-80f665be.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as __unplugin_components_0 } from "./AppButton-82ece885.js";
import "./fade.transition-ff73e3ee.js";
import "./AppIcon-8d8e2317.js";
import "./CheckmarkIcon-cab57e26.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppPopover",
  props: {
    placement: { type: null, required: false, default: "bottom-start" },
    transitionName: { type: String, required: false, default: "float" },
    offset: { type: [Number, Object, Function], required: false },
    arrow: { type: [Boolean, Number], required: false, default: true },
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
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "absolute -z-10 h-full w-full rounded bg-card shadow-modal"
};
const _hoisted_2 = { class: "z-50 flex flex-col gap-2 rounded bg-card p-4 shadow-modal" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Popover"], null, {
    default: withCtx(() => [
      createVNode($setup["Float"], {
        flip: $props.flip,
        shift: $props.shift,
        placement: $props.placement,
        "transition-name": $props.transitionName,
        arrow: $props.arrow,
        offset: $props.offset ?? $props.arrow ? 15 : 4
      }, {
        default: withCtx(() => [
          createVNode($setup["PopoverButton"], null, {
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
      }, 8, ["flip", "shift", "placement", "transition-name", "arrow", "offset"])
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
    const list = [
      {
        value: "1",
        label: "Item 1"
      },
      {
        value: "2",
        label: "Item 2"
      },
      {
        value: "3",
        label: "Item 3"
      }
    ];
    const __returned__ = { list };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = __unplugin_components_0;
  const _component_AppPopover = __unplugin_components_1;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Popover/AppPopover" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_AppPopover, null, {
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
_sfc_main.__file = "src/modules/ui/components/app/popover/AppPopover.story.vue";
const AppPopover_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/popover/AppPopover.story.vue"]]);
export {
  AppPopover_story as default
};
