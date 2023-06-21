import { _ as __unplugin_components_1 } from "./TransitionExpand-235cdcb0.js";
import { as as defineComponent, at as Q, au as V, av as X, aw as resolveComponent, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode, aB as createBaseVNode, aC as renderSlot, aD as normalizeClass, aE as createTextVNode } from "./vendor-a88772a8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppCollapse",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get Disclosure() {
      return Q;
    }, get DisclosureButton() {
      return V;
    }, get DisclosurePanel() {
      return X;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");
  const _component_TransitionExpand = __unplugin_components_1;
  return openBlock(), createBlock($setup["Disclosure"], {
    as: "div",
    class: "flex flex-col gap-1"
  }, {
    default: withCtx(({ open }) => [
      createVNode(
        $setup["DisclosureButton"],
        { class: "flex w-full items-center justify-between gap-4 rounded bg-slate-200 px-4 py-1" },
        {
          default: withCtx(() => [
            createBaseVNode("span", null, [
              renderSlot(_ctx.$slots, "button")
            ]),
            createVNode(_component_ChevronDownIcon, {
              class: normalizeClass([{
                "rotate-180": open
              }, "h-5 w-5 text-primary-500 transition"])
            }, null, 8, ["class"])
          ]),
          _: 2
          /* DYNAMIC */
        },
        1024
        /* DYNAMIC_SLOTS */
      ),
      createVNode(_component_TransitionExpand, null, {
        default: withCtx(() => [
          createVNode($setup["DisclosurePanel"], { class: "rounded bg-slate-100 px-4 text-sm" }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "panel")
            ]),
            _: 3
            /* FORWARDED */
          })
        ]),
        _: 3
        /* FORWARDED */
      })
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$1.__file = "src/modules/ui/components/app/collapse/AppCollapse.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/collapse/AppCollapse.vue"]]);
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_AppCollapse = __unplugin_components_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Collapse/AppCollapse" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(_component_AppCollapse, { class: "mb-1 w-80" }, {
              button: withCtx(() => [
                createTextVNode(" Button ")
              ]),
              panel: withCtx(() => [
                createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur quam nisi dolorem commodi perspiciatis omnis est nemo ipsa iure cum, id voluptas eos quaerat doloribus excepturi ipsam voluptatum nesciunt? ")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_AppCollapse, { class: "mb-1 w-80" }, {
              button: withCtx(() => [
                createTextVNode(" Button2 ")
              ]),
              panel: withCtx(() => [
                createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur quam nisi dolorem commodi perspiciatis omnis est nemo ipsa iure cum, id voluptas eos quaerat doloribus excepturi ipsam voluptatum nesciunt? ")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_AppCollapse, { class: "mb-1 w-80" }, {
              button: withCtx(() => [
                createTextVNode(" Button3 ")
              ]),
              panel: withCtx(() => [
                createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur quam nisi dolorem commodi perspiciatis omnis est nemo ipsa iure cum, id voluptas eos quaerat doloribus excepturi ipsam voluptatum nesciunt? ")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/app/collapse/AppCollapse.story.vue";
const AppCollapse_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/collapse/AppCollapse.story.vue"]]);
export {
  AppCollapse_story as default
};
