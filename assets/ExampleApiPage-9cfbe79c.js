import { as as defineComponent, aL as toDisplayString, b$ as useFacts } from "./vendor-80f665be.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ExampleApiPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const { data: facts } = useFacts();
    const __returned__ = { facts };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return toDisplayString($setup.facts);
}
_sfc_main.__file = "src/modules/example/pages/ExampleApiPage.vue";
const ExampleApiPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/example/pages/ExampleApiPage.vue"]]);
export {
  ExampleApiPage as default
};
