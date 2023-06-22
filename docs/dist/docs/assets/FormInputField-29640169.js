import { _ as __unplugin_components_1$1 } from "./TransitionExpand-235cdcb0.js";
import { as as defineComponent, ax as openBlock, aP as createElementBlock, aC as renderSlot, aE as createTextVNode, aT as toDisplayString, a_ as useI18n, aB as createBaseVNode, aG as mergeProps, aH as createCommentVNode, aS as computed, aF as ref, b0 as watch, b4 as onMounted, bx as onUnmounted, bJ as mergeModels, bK as useModel, aR as useSlots, aA as createVNode, az as withCtx, aD as normalizeClass, bL as withDirectives, bM as vModelDynamic, aV as Fragment } from "./vendor-a88772a8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { g as generateUuid } from "./generateUuid-c290b5d9.js";
import { u as useFormInputGroupContext } from "./useFormInputGroupContext-74e5a7b6.js";
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
const _hoisted_1$2 = { class: "text-danger-500 text-sm" };
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
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/error/FormError.vue"]]);
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
    hasSuccess: { type: Boolean, required: false, default: false },
    isReadOnly: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false, default: false },
    isTouched: { type: Boolean, required: false, default: false },
    isDirty: { type: Boolean, required: false, default: false },
    placeholder: { type: String, required: false },
    unit: { type: String, required: false },
    type: { type: null, required: false, default: "text" },
    label: { type: String, required: false },
    errors: { type: Object, required: false, default: () => ({ _errors: [] }) }
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
    const borderColor = computed(() => {
      if (errorShown.value)
        return "border-danger-500";
      if (__props.hasSuccess)
        return "border-success-500";
      if (__props.isReadOnly)
        return "border-gray-300";
      return "border-primary-500";
    });
    if (__props.type === "number")
      useFormInputGroup({ model, element, uuid, isDisabled: computed(() => __props.isDisabled) });
    const __returned__ = { emits, model, uuid, element, slots, errorShown, borderColor };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { ref: "element" };
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = ["id", "disabled", "type", "placeholder", "readonly"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormLabel = __unplugin_components_0$1;
  const _component_FormError = __unplugin_components_1;
  const _component_TransitionExpand = __unplugin_components_1$1;
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" eslint-disable vue/no-extra-parens "),
      createBaseVNode(
        "div",
        _hoisted_1,
        [
          createCommentVNode(" Label "),
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
          createBaseVNode("div", _hoisted_2, [
            createCommentVNode(" Content before the input "),
            $setup.slots["front-content"] ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass(["flex rounded rounded-r-none border bg-gray-200 px-4", $setup.borderColor])
              },
              [
                renderSlot(_ctx.$slots, "front-content")
              ],
              2
              /* CLASS */
            )) : createCommentVNode("v-if", true),
            createCommentVNode(" Input "),
            createBaseVNode(
              "div",
              {
                class: normalizeClass(["flex h-full rounded border", [
                  $setup.borderColor,
                  {
                    "rounded-l-none border-l-0": $setup.slots["front-content"],
                    "rounded-r-none border-r-0": $setup.slots["back-content"]
                  }
                ]])
              },
              [
                withDirectives(createBaseVNode("input", {
                  id: $setup.uuid,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
                  disabled: $props.isDisabled,
                  type: $props.type,
                  min: "0",
                  class: "relative w-full rounded px-4 py-2 placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0",
                  placeholder: $props.placeholder,
                  readonly: $props.isReadOnly,
                  onBlur: _cache[1] || (_cache[1] = ($event) => $setup.emits("blur"))
                }, null, 40, _hoisted_3), [
                  [vModelDynamic, $setup.model]
                ]),
                $props.unit ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: normalizeClass([[$setup.borderColor, {
                      "rounded-r-none border-r-0": $setup.slots["back-content"]
                    }], "flex min-w-max items-center rounded rounded-l-none border-l bg-white px-3 text-primary-500"])
                  },
                  toDisplayString($props.unit),
                  3
                  /* TEXT, CLASS */
                )) : createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            ),
            createCommentVNode(" Content after the input "),
            $setup.slots["back-content"] ? (openBlock(), createElementBlock(
              "div",
              {
                key: 1,
                class: normalizeClass(["flex rounded rounded-l-none border bg-gray-200 px-4", $setup.borderColor])
              },
              [
                renderSlot(_ctx.$slots, "back-content")
              ],
              2
              /* CLASS */
            )) : createCommentVNode("v-if", true)
          ]),
          createCommentVNode(" Error "),
          createVNode(_component_TransitionExpand, { duration: 0.2 }, {
            default: withCtx(() => [
              createVNode(_component_FormError, {
                "error-message": $props.errors._errors[0]
              }, null, 8, ["error-message"])
            ]),
            _: 1
            /* STABLE */
          })
        ],
        512
        /* NEED_PATCH */
      )
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main.__file = "src/modules/ui/components/forms/field/FormInputField.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/field/FormInputField.vue"]]);
export {
  __unplugin_components_0 as _
};
