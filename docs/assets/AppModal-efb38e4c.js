import { _ as __unplugin_components_0$1 } from "./AppIcon-46bae80a.js";
import { A as AppText } from "./AppText-c148c24a.js";
import { _ as __unplugin_components_0 } from "./AppButton-9be0740f.js";
import { aM as cva, as as defineComponent, aN as mergeModels, aO as useModel, aP as Ue, aQ as Ge, aR as Ve, aS as he, aT as Se, aU as twMerge, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode, aB as createBaseVNode, aD as normalizeClass, aC as renderSlot, aH as createCommentVNode, aE as createTextVNode, aL as toDisplayString } from "./vendor-34b4069a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const sizeOptions = {
  default: "w-[80ch] ",
  sm: "w-[60ch]",
  full: "w-full",
  lg: "w-[120ch]"
};
const modalVariants = cva(
  "flex flex-col gap-4 rounded-lg bg-white p-6 text-left",
  {
    variants: {
      size: sizeOptions
    },
    defaultVariants: {
      size: "default"
    }
  }
);
const modalSizeOptions = Object.keys(sizeOptions);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppModal",
  props: mergeModels({
    hasNoCloseButton: { type: Boolean, required: false, default: false },
    hasNoCloseOutside: { type: Boolean, required: false, default: false },
    size: { type: null, required: false, default: "default" },
    title: { type: String, required: false },
    icon: { type: null, required: false }
  }, {
    "isOpen": { type: Boolean, ...{
      required: true
    } }
  }),
  emits: ["update:isOpen"],
  setup(__props, { expose: __expose }) {
    __expose();
    const isOpen = useModel(__props, "isOpen");
    const handleClickOutside = () => {
      if (!__props.hasNoCloseOutside)
        isOpen.value = false;
    };
    const handleClickCloseButton = () => {
      if (!__props.hasNoCloseButton)
        isOpen.value = false;
    };
    const __returned__ = { isOpen, handleClickOutside, handleClickCloseButton, get Dialog() {
      return Ue;
    }, get DialogPanel() {
      return Ge;
    }, get DialogTitle() {
      return Ve;
    }, get TransitionChild() {
      return he;
    }, get TransitionRoot() {
      return Se;
    }, get twMerge() {
      return twMerge;
    }, get modalVariants() {
      return modalVariants;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "fixed inset-0 bg-black/25" },
  null,
  -1
  /* HOISTED */
);
const _hoisted_2 = { class: "fixed inset-0 flex min-h-full items-center justify-center overflow-y-auto p-4" };
const _hoisted_3 = { class: "flex justify-between gap-4" };
const _hoisted_4 = { class: "flex" };
const _hoisted_5 = { class: "mt-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = __unplugin_components_0;
  const _component_AppText = AppText;
  const _component_AppIcon = __unplugin_components_0$1;
  return openBlock(), createBlock($setup["TransitionRoot"], {
    appear: "",
    show: $setup.isOpen,
    as: "template"
  }, {
    default: withCtx(() => [
      createVNode($setup["Dialog"], {
        as: "div",
        class: "relative z-[999]",
        onClose: $setup.handleClickOutside
      }, {
        default: withCtx(() => [
          createVNode($setup["TransitionChild"], {
            as: "template",
            class: "ease-[cubic-bezier(.8,_.16,_0,_1.3)]",
            enter: "duration-300 ease-out ",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "duration-200 ease-in",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
            /* STABLE */
          }),
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["TransitionChild"], {
              as: "template",
              class: "ease-[cubic-bezier(.8,_.16,_0,_1.3)]",
              enter: "duration-300 ease-out ",
              "enter-from": "opacity-0 scale-0",
              "enter-to": "opacity-100 scale-100",
              leave: "duration-200 ease-in",
              "leave-from": "opacity-100 scale-100",
              "leave-to": "opacity-0 scale-0"
            }, {
              default: withCtx(() => [
                createVNode($setup["DialogPanel"], {
                  class: normalizeClass($setup.twMerge($setup.modalVariants({ size: $props.size })))
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3, [
                      createVNode($setup["DialogTitle"], { class: "flex flex-col items-start justify-start gap-8" }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "icon", {}, () => [
                            $props.icon ? (openBlock(), createBlock(_component_AppButton, {
                              key: 0,
                              "front-icon": $props.icon,
                              size: "icon",
                              variant: "outline",
                              "is-rounded": ""
                            }, null, 8, ["front-icon"])) : createCommentVNode("v-if", true)
                          ]),
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createVNode(_component_AppText, { variant: "large" }, {
                              default: withCtx(() => [
                                createTextVNode(
                                  toDisplayString($props.title),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ])
                        ]),
                        _: 3
                        /* FORWARDED */
                      }),
                      createBaseVNode("button", _hoisted_4, [
                        !$props.hasNoCloseButton ? (openBlock(), createBlock(_component_AppIcon, {
                          key: 0,
                          icon: "close",
                          onClick: $setup.handleClickCloseButton
                        })) : createCommentVNode("v-if", true)
                      ])
                    ]),
                    createBaseVNode("div", null, [
                      renderSlot(_ctx.$slots, "content")
                    ]),
                    createBaseVNode("div", _hoisted_5, [
                      renderSlot(_ctx.$slots, "footer")
                    ])
                  ]),
                  _: 3
                  /* FORWARDED */
                }, 8, ["class"])
              ]),
              _: 3
              /* FORWARDED */
            })
          ])
        ]),
        _: 3
        /* FORWARDED */
      })
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show"]);
}
_sfc_main.__file = "src/modules/ui/components/app/modal/AppModal.vue";
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/modal/AppModal.vue"]]);
export {
  __unplugin_components_3 as _,
  modalSizeOptions as m
};
