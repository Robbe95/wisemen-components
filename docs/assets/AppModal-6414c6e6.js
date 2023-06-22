import { _ as __unplugin_components_1$1 } from "./AppIconButton-5000e70d.js";
import { as as defineComponent, aJ as Ue, aK as Ge, aL as Ve, aM as he, aN as Se, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode, aB as createBaseVNode, aD as normalizeClass, aC as renderSlot, aH as createCommentVNode } from "./vendor-4fc3986a.js";
import { C as CloseIcon } from "./CloseIcon-2ec8a57d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppModal",
  props: {
    isOpen: { type: Boolean, required: true },
    noStyling: { type: Boolean, required: false, default: false }
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const __returned__ = { emit, get Dialog() {
      return Ue;
    }, get DialogPanel() {
      return Ge;
    }, get DialogTitle() {
      return Ve;
    }, get TransitionChild() {
      return he;
    }, get TransitionRoot() {
      return Se;
    }, CloseIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "fixed inset-0 bg-black bg-opacity-25" },
  null,
  -1
  /* HOISTED */
);
const _hoisted_2 = { class: "fixed inset-0 overflow-y-auto" };
const _hoisted_3 = { class: "flex min-h-full items-center justify-center p-4 text-center" };
const _hoisted_4 = { class: "mt-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppIconButton = __unplugin_components_1$1;
  return openBlock(), createBlock($setup["TransitionRoot"], {
    appear: "",
    show: $props.isOpen,
    as: "template"
  }, {
    default: withCtx(() => [
      createVNode($setup["Dialog"], {
        as: "div",
        class: "relative z-[999]",
        onClose: _cache[1] || (_cache[1] = ($event) => $setup.emit("close"))
      }, {
        default: withCtx(() => [
          createVNode($setup["TransitionChild"], {
            as: "template",
            enter: "duration-300 ease-out",
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
            createBaseVNode("div", _hoisted_3, [
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
                    class: normalizeClass({
                      "shadow-main relative rounded bg-white p-8 text-left lg:px-24": !$props.noStyling
                    })
                  }, {
                    default: withCtx(() => [
                      createVNode($setup["DialogTitle"], {
                        as: "h3",
                        class: "text-3xl font-bold"
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "title")
                        ]),
                        _: 3
                        /* FORWARDED */
                      }),
                      createBaseVNode(
                        "div",
                        {
                          class: normalizeClass({
                            "mt-2": !$props.noStyling
                          })
                        },
                        [
                          renderSlot(_ctx.$slots, "content")
                        ],
                        2
                        /* CLASS */
                      ),
                      createBaseVNode("div", _hoisted_4, [
                        renderSlot(_ctx.$slots, "footer")
                      ]),
                      !$props.noStyling ? (openBlock(), createBlock(_component_AppIconButton, {
                        key: 0,
                        class: "bg-danger-100 text-danger-500 absolute right-4 top-4",
                        onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("close"))
                      }, {
                        default: withCtx(() => [
                          createVNode($setup["CloseIcon"])
                        ]),
                        _: 1
                        /* STABLE */
                      })) : createCommentVNode("v-if", true)
                    ]),
                    _: 3
                    /* FORWARDED */
                  }, 8, ["class"])
                ]),
                _: 3
                /* FORWARDED */
              })
            ])
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
_sfc_main.__file = "src/modules/ui/components/app/modals/AppModal.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/modals/AppModal.vue"]]);
export {
  __unplugin_components_1 as _
};
