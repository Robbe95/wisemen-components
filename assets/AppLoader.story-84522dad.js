import { ax as openBlock, aJ as createElementBlock, aH as createCommentVNode, aK as pushScopeId, aL as popScopeId, aB as createBaseVNode, aw as resolveComponent, ay as createBlock, az as withCtx, aA as createVNode } from "./vendor-0d4e1342.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const AppLoader_vue_vue_type_style_index_0_scoped_89d74cea_lang = "";
const _sfc_main$1 = {};
const _withScopeId = (n) => (pushScopeId("data-v-89d74cea"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "flex items-center justify-center" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "loader h-full w-full flex-1 rounded-full border-4 border-primary-500 border-b-secondary-500" },
  null,
  -1
  /* HOISTED */
));
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createCommentVNode(" eslint-disable-next-line tailwindcss/no-custom-classname "),
    _hoisted_2
  ]);
}
_sfc_main$1.__file = "src/modules/ui/components/app/loaders/AppLoader.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-89d74cea"], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/loaders/AppLoader.vue"]]);
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
