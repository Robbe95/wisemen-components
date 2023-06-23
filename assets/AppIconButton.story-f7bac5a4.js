import { _ as __unplugin_components_1 } from "./AppIconButton-ab520131.js";
import { _ as __unplugin_components_0 } from "./AppIcon-81b2fcde.js";
import { aw as resolveComponent, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode } from "./vendor-72f13f2a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./CheckmarkIcon-ef85db79.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_AppIcon = __unplugin_components_0;
  const _component_AppIconButton = __unplugin_components_1;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Buttons/AppIconButton" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_AppIconButton, { class: "bg-danger-100 text-danger-500" }, {
            default: withCtx(() => [
              createVNode(_component_AppIcon, { icon: "close" })
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
_sfc_main.__file = "src/modules/ui/components/app/buttons/app-icon-button/AppIconButton.story.vue";
const AppIconButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/buttons/app-icon-button/AppIconButton.story.vue"]]);
export {
  AppIconButton_story as default
};
