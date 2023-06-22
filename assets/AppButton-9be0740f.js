import { as as defineComponent, ax as openBlock, aJ as createElementBlock, aH as createCommentVNode, aA as createVNode, az as withCtx, aB as createBaseVNode, a_ as Fragment, a$ as renderList, bg as normalizeProps, bh as guardReactiveProps, bj as Transition, aM as cva, aU as twMerge, aC as renderSlot, aD as normalizeClass, ay as createBlock } from "./vendor-34b4069a.js";
import { f as fadeTransition } from "./fade.transition-ff73e3ee.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as __unplugin_components_0$1 } from "./AppIcon-46bae80a.js";
const AppButtonLoader_vue_vue_type_style_index_0_scoped_35d07370_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppButtonLoader",
  props: {
    isLoading: { type: Boolean, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get fadeTransition() {
      return fadeTransition;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
};
const _hoisted_2 = { class: "relative inline-block h-2.5 w-10" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" eslint-disable tailwindcss/no-custom-classname "),
      createVNode(
        Transition,
        normalizeProps(guardReactiveProps($setup.fadeTransition)),
        {
          default: withCtx(() => [
            $props.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList(4, (i) => {
                    return createBaseVNode("div", {
                      key: i,
                      class: "orb shadow-focus absolute top-[1px] h-2 w-2 rounded-full bg-current"
                    });
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ])) : createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        },
        16
        /* FULL_PROPS */
      )
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main$1.__file = "src/modules/ui/components/app/buttons/app-button/AppButtonLoader.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-35d07370"], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/buttons/app-button/AppButtonLoader.vue"]]);
const variantOptions = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-focus-destructive",
  outline: "border border-primary hover:bg-secondary text-secondary-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-secondary text-secondary-foreground",
  link: "text-primary underline-offset-4 hover:underline"
};
const sizeOptions = {
  icon: "h-10 p-3 w-10",
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded px-3",
  lg: "h-11 rounded px-8"
};
const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded text-sm font-medium text-destructive-foreground transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: variantOptions,
      size: sizeOptions,
      isRounded: {
        true: "rounded-full",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const buttonVariantOptions = Object.keys(variantOptions);
const buttonSizeOptions = Object.keys(sizeOptions);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppButton",
  props: {
    isDisabled: { type: Boolean, required: false, default: false },
    isLoading: { type: Boolean, required: false, default: false },
    isRounded: { type: Boolean, required: false },
    variant: { type: null, required: false, default: "default" },
    size: { type: null, required: false, default: "default" },
    frontIcon: { type: null, required: false },
    backIcon: { type: null, required: false }
  },
  emits: ["component:click"],
  setup(__props, { expose: __expose, emit: emits }) {
    __expose();
    const handleClick = () => {
      if (!__props.isDisabled && !__props.isLoading)
        emits("component:click");
    };
    const __returned__ = { emits, handleClick, get twMerge() {
      return twMerge;
    }, get buttonVariants() {
      return buttonVariants;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppIcon = __unplugin_components_0$1;
  const _component_AppButtonLoader = __unplugin_components_1;
  return openBlock(), createElementBlock(
    "button",
    {
      class: normalizeClass($setup.twMerge($setup.buttonVariants({ variant: $props.variant, size: $props.size, isRounded: $props.isRounded }))),
      onClick: $setup.handleClick
    },
    [
      createBaseVNode(
        "div",
        {
          class: normalizeClass([{ "opacity-30": $props.isLoading }, "flex items-center gap-2 whitespace-nowrap transition-opacity"])
        },
        [
          renderSlot(_ctx.$slots, "front-icon", {}, () => [
            $props.frontIcon ? (openBlock(), createBlock(_component_AppIcon, {
              key: 0,
              icon: $props.frontIcon
            }, null, 8, ["icon"])) : createCommentVNode("v-if", true)
          ]),
          renderSlot(_ctx.$slots, "default"),
          renderSlot(_ctx.$slots, "back-icon", {}, () => [
            $props.backIcon ? (openBlock(), createBlock(_component_AppIcon, {
              key: 0,
              icon: $props.backIcon
            }, null, 8, ["icon"])) : createCommentVNode("v-if", true)
          ])
        ],
        2
        /* CLASS */
      ),
      createVNode(_component_AppButtonLoader, { "is-loading": $props.isLoading }, null, 8, ["is-loading"])
    ],
    2
    /* CLASS */
  );
}
_sfc_main.__file = "src/modules/ui/components/app/buttons/app-button/AppButton.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/buttons/app-button/AppButton.vue"]]);
export {
  __unplugin_components_0 as _,
  buttonVariantOptions as a,
  buttonSizeOptions as b
};