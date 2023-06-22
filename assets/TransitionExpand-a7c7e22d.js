import { as as defineComponent, bL as useCssVars, aY as computed, b7 as unref, ax as openBlock, ay as createBlock, az as withCtx, aC as renderSlot, bj as Transition } from "./vendor-34b4069a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const TransitionExpand_vue_vue_type_style_index_0_scoped_9c8b6ebc_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TransitionExpand",
  props: {
    duration: { type: Number, required: false, default: 0.5 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    useCssVars((_ctx) => ({
      "9c8b6ebc-durationString": unref(durationString)
    }));
    const durationString = computed(() => `${props.duration}s`);
    const enter = (element) => {
      const htmlElement = element;
      const width = getComputedStyle(htmlElement).width;
      htmlElement.style.width = width;
      htmlElement.style.position = "absolute";
      htmlElement.style.visibility = "hidden";
      htmlElement.style.height = "auto";
      const height = getComputedStyle(htmlElement).height;
      htmlElement.style.width = "";
      htmlElement.style.position = "";
      htmlElement.style.visibility = "";
      htmlElement.style.height = "";
      getComputedStyle(htmlElement);
      requestAnimationFrame(() => {
        htmlElement.style.height = height;
      });
    };
    const afterEnter = (element) => {
      const htmlElement = element;
      htmlElement.style.height = "auto";
    };
    const leave = (element) => {
      const htmlElement = element;
      const height = getComputedStyle(htmlElement).height;
      htmlElement.style.height = height;
      getComputedStyle(htmlElement);
      requestAnimationFrame(() => {
        htmlElement.style.height = "0";
      });
    };
    const __returned__ = { props, durationString, enter, afterEnter, leave };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "expand",
    onAfterEnter: $setup.afterEnter,
    onEnter: $setup.enter,
    onLeave: $setup.leave
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main.__file = "src/modules/ui/components/transitions/TransitionExpand.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9c8b6ebc"], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/transitions/TransitionExpand.vue"]]);
export {
  __unplugin_components_1 as _
};
