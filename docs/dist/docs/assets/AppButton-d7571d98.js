import { bI as cva, as as defineComponent, aS as computed, ax as openBlock, aP as createElementBlock, aH as createCommentVNode, aA as createVNode, az as withCtx, aB as createBaseVNode, aV as Fragment, aW as renderList, aD as normalizeClass, bc as normalizeProps, bd as guardReactiveProps, be as Transition, aC as renderSlot, ay as createBlock } from "./vendor-a88772a8.js";
import { f as fadeTransition } from "./fade.transition-ff73e3ee.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as __unplugin_components_0$1 } from "./AppIcon-5add2816.js";
const variantOptions = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline"
};
const sizeOptions = {
  icon: "h-10 p-3 w-10",
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8"
};
const loaderVariantOptions = {
  white: "bg-white",
  primary: "bg-primary"
};
const buttonLoaderVariants = cva(
  "absolute top-[1px] h-2 w-2 rounded-full",
  {
    variants: {
      variant: loaderVariantOptions
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);
const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: variantOptions,
      size: sizeOptions
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const buttonVariantOptions = Object.keys(variantOptions);
const buttonSizeOptions = Object.keys(sizeOptions);
const AppButtonLoader_vue_vue_type_style_index_0_scoped_35d07370_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppButtonLoader",
  props: {
    isLoading: { type: Boolean, required: true },
    variant: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const loaderVariant = computed(() => {
      if (["primary", "destructive", "ghost", "secondary", "link", "outline"].includes(__props.variant))
        return "primary";
      return "white";
    });
    const __returned__ = { loaderVariant, get buttonLoaderVariants() {
      return buttonLoaderVariants;
    }, get fadeTransition() {
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
                    return createBaseVNode(
                      "div",
                      {
                        key: i,
                        class: normalizeClass(["orb", $setup.buttonLoaderVariants({ variant: $setup.loaderVariant })])
                      },
                      null,
                      2
                      /* CLASS */
                    );
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppButton",
  props: {
    isDisabled: { type: Boolean, required: false, default: false },
    isLoading: { type: Boolean, required: false, default: false },
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
    const __returned__ = { emits, handleClick, get buttonVariants() {
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
      class: normalizeClass($setup.buttonVariants({ variant: $props.variant, size: $props.size })),
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
      createVNode(_component_AppButtonLoader, {
        variant: $props.variant,
        "is-loading": $props.isLoading
      }, null, 8, ["variant", "is-loading"])
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
