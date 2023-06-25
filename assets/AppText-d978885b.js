import { aO as cva, as as defineComponent, b5 as computed, aW as twMerge, ax as openBlock, ay as createBlock, az as withCtx, aC as renderSlot, aD as normalizeClass, aI as resolveDynamicComponent } from "./vendor-0d4e1342.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const variantOptions = {
  p: "text-base",
  h1: "font-bold text-5xl",
  h2: "font-semibold text-3xl",
  h3: "font-semibold text-2xl",
  h4: "font-semibold text-xl",
  quote: "italic",
  large: "text-lg font-semibold",
  small: "text-sm",
  subtle: "text-sm text-muted-foreground"
};
const boldnessOptions = {
  bold: "font-bold",
  normal: "font-normal",
  light: "font-light",
  thin: "font-thin",
  extrabold: "font-extrabold",
  semibold: "font-semibold",
  none: ""
};
const truncateOptions = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6"
};
const textVariants = cva(
  "",
  {
    variants: {
      variant: variantOptions,
      boldness: boldnessOptions,
      truncate: truncateOptions
    },
    defaultVariants: {
      variant: "p",
      boldness: "none",
      truncate: void 0
    }
  }
);
const textVariantOptions = Object.keys(variantOptions);
const textBoldnessOptions = Object.keys(boldnessOptions);
const textTruncateOptions = Object.keys(truncateOptions);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppText",
  props: {
    variant: { type: null, required: true, default: "p" },
    boldness: { type: null, required: false },
    numberOfLines: { type: null, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const htmlElement = computed(() => {
      switch (__props.variant) {
        case "quote":
        case "large":
        case "small":
        case "subtle":
          return "p";
        default:
          return __props.variant ?? "p";
      }
    });
    const __returned__ = { htmlElement, get twMerge() {
      return twMerge;
    }, get textVariants() {
      return textVariants;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($setup.htmlElement), {
    class: normalizeClass($setup.twMerge($setup.textVariants({ variant: $props.variant, boldness: $props.boldness, truncate: $props.numberOfLines })))
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
_sfc_main.__file = "src/modules/ui/components/app/text/AppText.vue";
const AppText = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/text/AppText.vue"]]);
export {
  AppText as A,
  textTruncateOptions as a,
  textVariantOptions as b,
  textBoldnessOptions as t
};
