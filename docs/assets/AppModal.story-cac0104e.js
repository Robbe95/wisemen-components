import { _ as __unplugin_components_1 } from "./AppModal-54f8d0be.js";
import { _ as __unplugin_components_0 } from "./AppButton-055ae77a.js";
import { as as defineComponent, aF as ref, aw as resolveComponent, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode, aE as createTextVNode } from "./vendor-8f547009.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./AppIconButton-652f2821.js";
import "./CloseIcon-d9a699b6.js";
import "./fade.transition-ff73e3ee.js";
import "./AppIcon-937c595b.js";
import "./CheckmarkIcon-c2a2d54b.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppModal.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const modalOpen1 = ref(false);
    const handleClick = () => {
      modalOpen1.value = true;
    };
    const __returned__ = { modalOpen1, handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = __unplugin_components_0;
  const _component_AppModal = __unplugin_components_1;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Modals/AppModal" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_AppButton, { "onComponent:click": $setup.handleClick }, {
            default: withCtx(() => [
              createTextVNode(" Click me ")
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_AppModal, {
            "is-open": $setup.modalOpen1,
            onClose: _cache[0] || (_cache[0] = ($event) => $setup.modalOpen1 = false)
          }, {
            title: withCtx(() => [
              createTextVNode(" Title here ")
            ]),
            content: withCtx(() => [
              createTextVNode(" Content here Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus nulla ab eius enim similique atque officia? Porro consectetur, ea iusto perspiciatis ullam nisi minus, inventore iste quisquam placeat nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem ullam ipsam minima, vitae commodi expedita corporis aliquid illum quis laudantium adipisci laboriosam est maxime quae enim aliquam sed ipsa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iste, adipisci sapiente odit beatae architecto aspernatur perferendis quis. Esse dicta, minima non aperiam sunt ad veniam ab velit officiis magni. ")
            ]),
            footer: withCtx(() => [
              createTextVNode(" Footer here ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["is-open"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/app/modals/AppModal.story.vue";
const AppModal_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/modals/AppModal.story.vue"]]);
export {
  AppModal_story as default
};
