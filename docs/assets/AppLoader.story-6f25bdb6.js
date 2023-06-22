import { _ as __unplugin_components_0 } from "./AppLoader-75f7684f.js";
import { aw as resolveComponent, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode } from "./vendor-34b4069a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_AppLoader = __unplugin_components_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Loaders/AppLoader" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_AppLoader, { class: "h-16 w-16" })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/app/loaders/AppLoader.story.vue";
const AppLoader_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/loaders/AppLoader.story.vue"]]);
export {
  AppLoader_story as default
};
