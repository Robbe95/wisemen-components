import { _ as __unplugin_components_3 } from "./AppModal-f4ea36f4.js";
import { as as defineComponent, aF as ref, ax as openBlock, ay as createBlock, az as withCtx, aB as createBaseVNode, aG as mergeProps, aH as createCommentVNode, aI as resolveDynamicComponent, aw as resolveComponent, aA as createVNode } from "./vendor-f004de5e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./AppIcon-2a55f03c.js";
import "./CheckmarkIcon-3247db73.js";
import "./AppText-3b5997db.js";
import "./AppButton-3695a3e4.js";
import "./fade.transition-ff73e3ee.js";
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "AppImage",
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    isPreview: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isModalOpen = ref(false);
    const openModal = () => {
      if (!props.isPreview)
        return;
      isModalOpen.value = true;
    };
    const __returned__ = { props, isModalOpen, openModal };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["src", "alt"];
const _hoisted_2 = ["src", "alt"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppModal = __unplugin_components_3;
  return openBlock(), createBlock(resolveDynamicComponent($props.isPreview ? "button" : "div"), { onClick: $setup.openModal }, {
    default: withCtx(() => [
      createBaseVNode("img", mergeProps({
        src: $props.src,
        alt: $props.alt
      }, _ctx.$attrs), null, 16, _hoisted_1),
      $props.isPreview ? (openBlock(), createBlock(_component_AppModal, {
        key: 0,
        "is-open": $setup.isModalOpen,
        "no-styling": "",
        onClose: _cache[0] || (_cache[0] = ($event) => $setup.isModalOpen = false)
      }, {
        content: withCtx(() => [
          createBaseVNode("img", {
            src: $props.src,
            alt: $props.alt,
            class: "w-[75vw]"
          }, null, 8, _hoisted_2)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["is-open"])) : createCommentVNode("v-if", true)
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main$1.__file = "src/modules/ui/components/app/image/AppImage.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/image/AppImage.vue"]]);
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_AppImage = __unplugin_components_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Image/AppImage" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_AppImage, {
            src: "https://picsum.photos/200/300",
            alt: "Image"
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Preview" }, {
        default: withCtx(() => [
          createVNode(_component_AppImage, {
            src: "https://picsum.photos/200/300",
            alt: "Image",
            "is-preview": "",
            class: "rounded-full"
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
_sfc_main.__file = "src/modules/ui/components/app/image/AppImage.story.vue";
const AppImage_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/image/AppImage.story.vue"]]);
export {
  AppImage_story as default
};
