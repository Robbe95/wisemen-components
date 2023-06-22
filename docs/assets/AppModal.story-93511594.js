import { m as modalSizeOptions, _ as __unplugin_components_3 } from "./AppModal-efb38e4c.js";
import { as as defineComponent, ax as openBlock, aJ as createElementBlock, aC as renderSlot, aK as reactive, aw as resolveComponent, ay as createBlock, az as withCtx, aA as createVNode, aE as createTextVNode, aG as mergeProps, aL as toDisplayString } from "./vendor-34b4069a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { A as AppText } from "./AppText-c148c24a.js";
import { _ as __unplugin_components_0 } from "./AppButton-9be0740f.js";
import { i as iconNames } from "./AppIcon-46bae80a.js";
import "./CheckmarkIcon-c32bcc37.js";
import "./fade.transition-ff73e3ee.js";
const childClasses = "flex-1";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppButtonGroup",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { childClasses };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex w-full flex-row gap-2" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default", {
      bindings: { class: $setup.childClasses }
    })
  ]);
}
_sfc_main$1.__file = "src/modules/ui/components/app/buttons/app-button-group/AppButtonGroup.vue";
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/buttons/app-button-group/AppButtonGroup.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppModal.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({
      isOpen: false,
      hasNoCloseButton: false,
      hasNoCloseOutside: false,
      title: "Modal title",
      icon: void 0,
      content: "Content here Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus nulla ab eius enim similique atque officia? Porro consectetur, ea iusto perspiciatis ullam nisi minus, inventore iste quisquam placeat nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem ullam ipsam minima, vitae commodi expedita corporis aliquid illum quis laudantium adipisci laboriosam est maxime quae enim aliquam sed ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iste, adipisci sapiente odit beatae architecto aspernatur perferendis quis. Esse dicta, minima non aperiam sunt ad veniam ab velit officiis magni."
    });
    const handleClick = () => {
      state.isOpen = true;
    };
    const __returned__ = { state, handleClick, get modalSizeOptions() {
      return modalSizeOptions;
    }, get iconNames() {
      return iconNames;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstTextarea = resolveComponent("HstTextarea");
  const _component_AppButton = __unplugin_components_0;
  const _component_AppText = AppText;
  const _component_AppButtonGroup = __unplugin_components_2;
  const _component_AppModal = __unplugin_components_3;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Modals/AppModal" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isOpen,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.isOpen = $event),
            title: "Open"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasNoCloseButton,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.hasNoCloseButton = $event),
            title: "No close button"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasNoCloseOutside,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.hasNoCloseOutside = $event),
            title: "No close outside"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.icon,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.icon = $event),
            title: "Icon",
            options: ["none", ...$setup.iconNames]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.size,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.size = $event),
            title: "Size",
            options: $setup.modalSizeOptions
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.title,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.title = $event),
            title: "Title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstTextarea, {
            modelValue: $setup.state.content,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state.content = $event),
            title: "Content"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(_component_AppButton, { "onComponent:click": $setup.handleClick }, {
            default: withCtx(() => [
              createTextVNode(" Click me ")
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_AppModal, mergeProps($setup.state, {
            "is-open": $setup.state.isOpen,
            "onUpdate:isOpen": _cache[7] || (_cache[7] = ($event) => $setup.state.isOpen = $event)
          }), {
            content: withCtx(() => [
              createVNode(_component_AppText, { variant: "small" }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString($setup.state.content),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            footer: withCtx(() => [
              createVNode(_component_AppButtonGroup, null, {
                default: withCtx(({ bindings }) => [
                  createVNode(
                    _component_AppButton,
                    mergeProps({ variant: "outline" }, bindings, { "onComponent:click": $setup.handleClick }),
                    {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1040
                    /* FULL_PROPS, DYNAMIC_SLOTS */
                  ),
                  createVNode(
                    _component_AppButton,
                    mergeProps(bindings, { "onComponent:click": $setup.handleClick }),
                    {
                      default: withCtx(() => [
                        createTextVNode(" Confirm ")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1040
                    /* FULL_PROPS, DYNAMIC_SLOTS */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 16, ["is-open"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/app/modal/AppModal.story.vue";
const AppModal_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/modal/AppModal.story.vue"]]);
export {
  AppModal_story as default
};
