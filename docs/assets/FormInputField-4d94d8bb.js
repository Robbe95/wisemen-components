import { _ as __unplugin_components_1 } from "./TransitionExpand-93667190.js";
import { as as defineComponent, ax as openBlock, aP as createElementBlock, aC as renderSlot, aE as createTextVNode, aT as toDisplayString, a_ as useI18n, aB as createBaseVNode, aG as mergeProps, aH as createCommentVNode, bI as cva, aS as computed, aF as ref, b0 as watch, b4 as onMounted, by as onUnmounted, bK as mergeModels, bL as useModel, aR as useSlots, bM as useClipboard, bJ as twMerge, aA as createVNode, az as withCtx, aD as normalizeClass, bN as withDirectives, bO as vModelDynamic, ay as createBlock } from "./vendor-8f547009.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as __unplugin_components_0$2 } from "./AppIcon-937c595b.js";
import { g as generateUuid } from "./generateUuid-c290b5d9.js";
import { u as useFormInputGroupContext } from "./useFormInputGroupContext-2f904d1d.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormError",
  props: {
    errorMessage: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "text-sm text-destructive" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("p", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createTextVNode(
        toDisplayString($props.errorMessage),
        1
        /* TEXT */
      )
    ])
  ]);
}
_sfc_main$2.__file = "src/modules/ui/components/forms/error/FormError.vue";
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/error/FormError.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "FormLabel",
  props: {
    isOptional: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const { t } = useI18n();
    const __returned__ = { t };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "text-xs text-gray-300"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode(
      "label",
      mergeProps({ class: "text-sm" }, _ctx.$attrs),
      [
        renderSlot(_ctx.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    ),
    $props.isOptional ? (openBlock(), createElementBlock(
      "p",
      _hoisted_1$1,
      toDisplayString($setup.t("label.optional")),
      1
      /* TEXT */
    )) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$1.__file = "src/modules/ui/components/forms/label/FormLabel.vue";
const __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/label/FormLabel.vue"]]);
const statusOptions = {
  default: "border-border",
  error: "border-destructive",
  success: "border-success",
  readonly: "bg-muted text-muted-foreground",
  disabled: "opacity-60"
};
const extraContentOptions = {
  default: "",
  back: "rounded-r-none border-r-0",
  front: "rounded-l-none border-l-0",
  both: "rounded-l-none border-l-0 rounded-r-none border-r-0"
};
const inputFieldVariants = cva(
  "relative w-full rounded border border-border bg-input px-4 py-2 placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0",
  {
    variants: {
      status: statusOptions,
      extraContent: extraContentOptions
    },
    defaultVariants: {
      status: "default",
      extraContent: "default"
    }
  }
);
const extraContentTypes = {
  back: "rounded-l-none border-l-0",
  front: "rounded-r-none border-r-0"
};
const extraContentBorderOptions = {
  true: "",
  false: ""
};
const inputFieldExtraContentVariants = cva(
  "flex items-center justify-center rounded border border-border bg-input px-4",
  {
    variants: {
      status: statusOptions,
      extraContentType: extraContentTypes,
      extraContentBorder: extraContentBorderOptions
    },
    compoundVariants: [
      {
        extraContentBorder: true,
        extraContentType: "front",
        class: "border-r"
      },
      {
        extraContentBorder: true,
        extraContentType: "back",
        class: "border-l"
      }
    ],
    defaultVariants: {
      extraContentType: "back"
    }
  }
);
const useFormInputGroup = ({ model, uuid, isDisabled, element }) => {
  const context = useFormInputGroupContext();
  const propsRef = computed(() => ({
    value: typeof model.value === "number" ? model.value : 0,
    disabled: isDisabled == null ? void 0 : isDisabled.value
  }));
  const option = ref({ id: uuid, element: element.value, propsRef: propsRef.value });
  const change = (value) => {
    if ((isDisabled == null ? void 0 : isDisabled.value) || !context)
      return;
    const newValue = context.change(option, value);
    model.value = newValue;
  };
  watch(
    () => model.value,
    (value) => {
      if (!value)
        return;
      change(value);
    }
  );
  onMounted(() => {
    if (context)
      context.registerOption(option);
  });
  onUnmounted(() => {
    if (context)
      context.unregisterOption(uuid);
  });
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormInputField",
  props: mergeModels({
    isSuccess: { type: Boolean, required: false, default: false },
    isReadOnly: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false, default: false },
    isTouched: { type: Boolean, required: false, default: false },
    isDirty: { type: Boolean, required: false, default: false },
    isCopyable: { type: Boolean, required: false, default: false },
    isOptional: { type: Boolean, required: false },
    hasExtraContentBorder: { type: Boolean, required: true },
    placeholder: { type: String, required: false },
    type: { type: null, required: false, default: "text" },
    label: { type: String, required: false },
    errors: { type: Object, required: false, default: () => ({ _errors: [] }) },
    backContent: { type: String, required: false },
    frontContent: { type: String, required: false },
    backIcon: { type: null, required: false },
    frontIcon: { type: null, required: false }
  }, {
    "modelValue": {}
  }),
  emits: mergeModels(["blur"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: emits }) {
    __expose();
    const model = useModel(__props, "modelValue");
    const uuid = generateUuid();
    const element = ref();
    const slots = useSlots();
    const errorShown = computed(() => __props.errors._errors.length > 0 && (__props.isTouched || __props.isDirty));
    const hasFrontContent = computed(() => __props.frontContent || slots["front-content"] || __props.frontIcon);
    const hasBackContent = computed(() => __props.backContent || slots["back-content"] || __props.backIcon || __props.isCopyable || __props.type === "password");
    const currentExtraContent = computed(() => {
      if (hasFrontContent.value && hasBackContent.value)
        return "both";
      if (hasFrontContent.value)
        return "front";
      if (hasBackContent.value)
        return "back";
      return "default";
    });
    const currentStatus = computed(() => {
      if (errorShown.value)
        return "error";
      if (__props.isSuccess)
        return "success";
      if (__props.isReadOnly)
        return "readonly";
      if (__props.isDisabled)
        return "disabled";
      return "default";
    });
    const copyModel = computed(() => {
      var _a;
      return ((_a = model.value) == null ? void 0 : _a.toString()) ?? "";
    });
    const { copy } = useClipboard();
    if (__props.type === "number")
      useFormInputGroup({ model, element, uuid, isDisabled: computed(() => __props.isDisabled) });
    const passwordShown = ref(false);
    const togglePasswordShown = () => {
      passwordShown.value = !passwordShown.value;
    };
    const inputType = computed(() => __props.type === "password" && passwordShown.value ? "text" : __props.type);
    const __returned__ = { emits, model, uuid, element, slots, errorShown, hasFrontContent, hasBackContent, currentExtraContent, currentStatus, copyModel, copy, passwordShown, togglePasswordShown, inputType, get twMerge() {
      return twMerge;
    }, get inputFieldExtraContentVariants() {
      return inputFieldExtraContentVariants;
    }, get inputFieldVariants() {
      return inputFieldVariants;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { ref: "element" };
const _hoisted_2 = { class: "flex items-center justify-between gap-4" };
const _hoisted_3 = {
  key: 0,
  class: "text-xs text-muted-foreground"
};
const _hoisted_4 = { class: "flex" };
const _hoisted_5 = { key: 1 };
const _hoisted_6 = ["id", "disabled", "type", "placeholder", "readonly"];
const _hoisted_7 = { key: 3 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormLabel = __unplugin_components_0$1;
  const _component_AppIcon = __unplugin_components_0$2;
  const _component_FormError = __unplugin_components_2;
  const _component_TransitionExpand = __unplugin_components_1;
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1,
    [
      createCommentVNode(" Label "),
      createBaseVNode("div", _hoisted_2, [
        createVNode(_component_FormLabel, { for: $setup.uuid }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "label", {}, () => [
              createTextVNode(
                toDisplayString($props.label),
                1
                /* TEXT */
              )
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["for"]),
        $props.isOptional ? (openBlock(), createElementBlock("p", _hoisted_3, " Optional ")) : createCommentVNode("v-if", true)
      ]),
      createBaseVNode("div", _hoisted_4, [
        createCommentVNode(" Content before the input "),
        $setup.hasFrontContent ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass(
              $setup.twMerge($setup.inputFieldExtraContentVariants(
                {
                  extraContentType: "front",
                  status: $setup.currentStatus,
                  extraContentBorder: $props.hasExtraContentBorder
                }
              ))
            )
          },
          [
            renderSlot(_ctx.$slots, "front-content", {}, () => [
              $props.frontIcon ? (openBlock(), createBlock(_component_AppIcon, {
                key: 0,
                icon: $props.frontIcon
              }, null, 8, ["icon"])) : $props.frontContent ? (openBlock(), createElementBlock(
                "div",
                _hoisted_5,
                toDisplayString($props.frontContent),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true)
            ])
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true),
        createCommentVNode(" Input "),
        withDirectives(createBaseVNode("input", {
          id: $setup.uuid,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
          disabled: $props.isDisabled,
          type: $setup.inputType,
          min: "0",
          class: normalizeClass($setup.twMerge($setup.inputFieldVariants({ status: $setup.currentStatus, extraContent: $setup.currentExtraContent }))),
          placeholder: $props.placeholder,
          readonly: $props.isReadOnly,
          onBlur: _cache[1] || (_cache[1] = ($event) => $setup.emits("blur"))
        }, null, 42, _hoisted_6), [
          [vModelDynamic, $setup.model]
        ]),
        createCommentVNode(" Content after the input "),
        $setup.hasBackContent ? (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            class: normalizeClass(
              $setup.twMerge($setup.inputFieldExtraContentVariants(
                {
                  extraContentType: "back",
                  status: $setup.currentStatus,
                  extraContentBorder: $props.hasExtraContentBorder
                }
              ))
            )
          },
          [
            renderSlot(_ctx.$slots, "back-content", {}, () => [
              $props.type === "password" ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: $setup.togglePasswordShown
              }, [
                $setup.passwordShown ? (openBlock(), createBlock(_component_AppIcon, {
                  key: 0,
                  icon: "eyeClosed"
                })) : (openBlock(), createBlock(_component_AppIcon, {
                  key: 1,
                  icon: "eyeOpen"
                }))
              ])) : $props.isCopyable ? (openBlock(), createElementBlock("button", {
                key: 1,
                onClick: _cache[2] || (_cache[2] = ($event) => $setup.copy($setup.copyModel))
              }, " Copy ")) : $props.backIcon ? (openBlock(), createBlock(_component_AppIcon, {
                key: 2,
                icon: $props.backIcon
              }, null, 8, ["icon"])) : $props.backContent ? (openBlock(), createElementBlock(
                "div",
                _hoisted_7,
                toDisplayString($props.backContent),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true)
            ])
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true)
      ]),
      createCommentVNode(" Error "),
      createVNode(_component_TransitionExpand, { duration: 0.2 }, {
        default: withCtx(() => [
          $setup.errorShown ? (openBlock(), createBlock(_component_FormError, {
            key: 0,
            "error-message": $props.errors._errors[0]
          }, null, 8, ["error-message"])) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      })
    ],
    512
    /* NEED_PATCH */
  );
}
_sfc_main.__file = "src/modules/ui/components/forms/field/FormInputField.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/field/FormInputField.vue"]]);
export {
  __unplugin_components_0 as _
};
