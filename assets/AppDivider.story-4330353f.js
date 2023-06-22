import { _ as __unplugin_components_0 } from "./AppDivider-7a7caffb.js";
import { aw as resolveComponent, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode, aE as createTextVNode } from "./vendor-f004de5e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_AppDivider = __unplugin_components_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Divider/AppDivider" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_AppDivider)
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With content" }, {
        default: withCtx(() => [
          createVNode(_component_AppDivider, null, {
            default: withCtx(() => [
              createTextVNode(" Content ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With content middle" }, {
        default: withCtx(() => [
          createVNode(_component_AppDivider, { "info-position": "middle" }, {
            default: withCtx(() => [
              createTextVNode(" Content ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With content end" }, {
        default: withCtx(() => [
          createVNode(_component_AppDivider, { "info-position": "end" }, {
            default: withCtx(() => [
              createTextVNode(" Content ")
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
_sfc_main.__file = "src/modules/ui/components/app/divider/AppDivider.story.vue";
const AppDivider_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/divider/AppDivider.story.vue"]]);
export {
  AppDivider_story as default
};
