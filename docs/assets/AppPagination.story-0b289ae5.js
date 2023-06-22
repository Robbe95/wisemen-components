import { u as usePagination, d as data, _ as __unplugin_components_2 } from "./usePagination-c6298da1.js";
import { as as defineComponent, aF as ref, aw as resolveComponent, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode } from "./vendor-4fc3986a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./generateUuid-c290b5d9.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppPagination.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const tableData = ref(data);
    const { currentPage, paginationOptions, setPage } = usePagination(tableData.value, {
      rowsPerPage: 10
    });
    const __returned__ = { tableData, currentPage, paginationOptions, setPage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppPagination = __unplugin_components_2;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Pagination/AppPagination" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_AppPagination, {
            class: "mt-1",
            "current-option": $setup.currentPage,
            options: $setup.paginationOptions,
            "onPage:set": $setup.setPage
          }, null, 8, ["current-option", "options", "onPage:set"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/app/pagination/AppPagination.story.vue";
const AppPagination_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/pagination/AppPagination.story.vue"]]);
export {
  AppPagination_story as default
};
