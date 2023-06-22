import { as as defineComponent, aS as computed, ax as openBlock, aP as createElementBlock, aH as createCommentVNode, ay as createBlock, az as withCtx, aC as renderSlot, aD as normalizeClass, aI as resolveDynamicComponent, aV as Fragment, aw as resolveComponent, aA as createVNode, aE as createTextVNode } from "./vendor-4fc3986a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppText",
  props: {
    variant: { type: String, required: true },
    numberOfLines: { type: Number, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const htmlElement = computed(() => {
      switch (props.variant) {
        case "title":
          return "h1";
        case "subtitle":
          return "h2";
        case "text":
          return "p";
        case "label":
          return "p";
        case "link":
          return "a";
      }
    });
    const textStyles = computed(() => {
      switch (props.variant) {
        case "title":
          return "text-2xl font-bold";
        case "subtitle":
          return "text-xl font-bold";
        case "text":
          return "text-base";
        case "label":
          return "text-sm text-neutral-300";
        case "link":
          return "text-sm text-primary-500 underline";
      }
    });
    const truncate = computed(() => {
      if (props == null ? void 0 : props.numberOfLines)
        return `line-clamp-${props == null ? void 0 : props.numberOfLines}`;
    });
    const __returned__ = { props, htmlElement, textStyles, truncate };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" truncate text based on number of lines prop "),
      (openBlock(), createBlock(resolveDynamicComponent($setup.htmlElement), {
        class: normalizeClass([$setup.textStyles, $setup.truncate])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["class"]))
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main$1.__file = "src/modules/ui/components/app/text/AppText.vue";
const AppText = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/text/AppText.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppText.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { AppText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Text/AppText" }, {
    default: withCtx(() => [
      createVNode($setup["AppText"], { variant: "title" }, {
        default: withCtx(() => [
          createTextVNode(" Title ")
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode($setup["AppText"], { variant: "subtitle" }, {
        default: withCtx(() => [
          createTextVNode(" Subtitle ")
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode($setup["AppText"], { variant: "text" }, {
        default: withCtx(() => [
          createTextVNode(" Text ")
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode($setup["AppText"], { variant: "label" }, {
        default: withCtx(() => [
          createTextVNode(" Label ")
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode($setup["AppText"], { variant: "link" }, {
        default: withCtx(() => [
          createTextVNode(" Link ")
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode($setup["AppText"], {
        variant: "text",
        class: "w-80",
        "number-of-lines": 2
      }, {
        default: withCtx(() => [
          createTextVNode(" 2 lines of text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi, iure eos omnis aliquid incidunt optio placeat ipsam, ad praesentium assumenda, odit veritatis fugit id beatae quam dolorem consequuntur aut. ")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/app/text/AppText.story.vue";
const AppText_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/text/AppText.story.vue"]]);
export {
  AppText_story as default
};
