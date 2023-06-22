import { as as defineComponent, aF as ref, aS as computed, b1 as provide, ax as openBlock, aP as createElementBlock, aC as renderSlot, bx as useMouse, b0 as watch, b4 as onMounted, by as onUnmounted, bz as useMousePressed, bA as useFocus, bB as onKeyStroke, bC as useElementBounding, aB as createBaseVNode, b5 as normalizeStyle, aT as toDisplayString, aH as createCommentVNode, aD as normalizeClass, aw as resolveComponent, ay as createBlock, az as withCtx, aA as createVNode } from "./vendor-4fc3986a.js";
import { F as FormInputGroupContext, u as useFormInputGroupContext } from "./useFormInputGroupContext-39c26954.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { g as generateUuid } from "./generateUuid-c290b5d9.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormInputGroup",
  props: {
    disabled: { type: Boolean, required: false, default: false },
    valueMeasurement: { type: String, required: false, default: "" },
    percentProgress: { type: Boolean, required: false, default: false },
    valueProgress: { type: Boolean, required: false, default: false },
    totalValue: { type: Number, required: false },
    maxLabel: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const options = ref([]);
    const setupApi = {
      options,
      maxLabel: computed(() => props.maxLabel),
      valueMeasurement: computed(() => props.valueMeasurement),
      percentProgress: computed(() => props.percentProgress),
      valueProgress: computed(() => props.valueProgress),
      maxValue: computed(() => props.totalValue),
      valueUsed: computed(() => options.value.reduce((acc, option) => {
        var _a, _b;
        return acc + (((_b = (_a = option.value) == null ? void 0 : _a.propsRef) == null ? void 0 : _b.value) ?? 0);
      }, 0)),
      disabled: computed(() => props.disabled),
      change(contextOption, newValue) {
        if (contextOption.value.propsRef.disabled)
          return null;
        if (!props.totalValue)
          return newValue;
        const maxAllowed = props.totalValue - (setupApi.valueUsed.value ?? 0) + (contextOption.value.propsRef.value ?? 0);
        const value = Math.min(newValue, maxAllowed);
        contextOption.value.propsRef.value = value;
        return value;
      },
      registerOption(action) {
        options.value.push(action);
      },
      unregisterOption(id) {
        const idx = options.value.findIndex((slider) => slider.value.id === id);
        if (idx === -1)
          return;
        options.value.splice(idx, 1);
      }
    };
    provide(FormInputGroupContext, setupApi);
    const __returned__ = { props, options, setupApi };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
_sfc_main$2.__file = "src/modules/ui/components/forms/group/FormInputGroup.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/group/FormInputGroup.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormSlider",
  props: {
    min: { type: Number, required: false, default: 0 },
    max: { type: Number, required: false, default: 100 },
    disabledValue: { type: Number, required: false },
    isDisabled: { type: Boolean, required: false, default: false },
    step: { type: Number, required: false, default: 1 },
    modelValue: { type: Number, required: true },
    percentProgress: { type: Boolean, required: false, default: false },
    valueProgress: { type: Boolean, required: false, default: false },
    valueMeasurement: { type: String, required: false, default: "" },
    maxLabel: { type: Boolean, required: false, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const { x } = useMouse();
    const uuid = generateUuid();
    const context = useFormInputGroupContext();
    const optionRef = ref();
    const sliderValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const propsRef = computed(() => ({ value: sliderValue.value, disabled: props.isDisabled }));
    const option = ref({ id: uuid, element: optionRef.value, propsRef: propsRef.value });
    const change = (value) => {
      if (props.isDisabled || !context)
        return;
      const newValue = context.change(option, value);
      if (newValue)
        sliderValue.value = newValue;
    };
    watch(
      () => sliderValue.value,
      (value) => {
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
    const totalFree = computed(() => {
      var _a;
      if (context)
        return (((_a = context == null ? void 0 : context.maxValue) == null ? void 0 : _a.value) ?? 0) - context.valueUsed.value + sliderValue.value;
      return null;
    });
    const disabledAmount = computed(() => totalFree.value ?? props.disabledValue ?? props.max);
    const maxAmount = computed(() => {
      var _a;
      return ((_a = context == null ? void 0 : context.maxValue) == null ? void 0 : _a.value) ?? props.max;
    });
    const sliderButton = ref();
    const slider = ref();
    const { pressed } = useMousePressed({ target: sliderButton });
    const { focused } = useFocus(sliderButton);
    const sliderWidth = computed(() => {
      var _a;
      return ((_a = slider.value) == null ? void 0 : _a.clientWidth) ?? 0;
    });
    const pressedMouseInitialX = ref(0);
    const pressedMouseInitialValue = ref(props.modelValue);
    const model = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const updateValue = (value) => {
      if (props.isDisabled)
        return;
      const remainder = value % props.step;
      const newValueRounded = value - remainder;
      const actualMaxValue = Math.min(maxAmount.value, disabledAmount.value);
      model.value = Math.max(props.min, Math.min(newValueRounded, actualMaxValue));
    };
    onKeyStroke("ArrowLeft", (e) => {
      e.preventDefault();
      if (focused.value) {
        const newValue = model.value - props.step;
        updateValue(newValue);
      }
    });
    onKeyStroke("ArrowRight", (e) => {
      e.preventDefault();
      if (focused.value) {
        const newValue = model.value + props.step;
        updateValue(newValue);
      }
    });
    watch(pressed, (value) => {
      if (value) {
        pressedMouseInitialX.value = x.value;
        pressedMouseInitialValue.value = model.value;
      }
    });
    const handleMouseMovement = (mouseMovement) => {
      const valueRange = maxAmount.value - props.min;
      const pixelsPerValue = sliderWidth.value / valueRange;
      const valueDelta = mouseMovement / pixelsPerValue;
      const newValue = pressedMouseInitialValue.value + valueDelta;
      updateValue(newValue);
    };
    const sliderButtonStyle = computed(() => {
      const valueRange = maxAmount.value - props.min;
      const pixelsPerValue = sliderWidth.value / valueRange;
      const valueDelta = model.value - props.min;
      const left = valueDelta * pixelsPerValue;
      return {
        left: `${left - 8}px`
      };
    });
    watch(x, (value) => {
      if (!pressed.value)
        return;
      const mouseMovement = value - pressedMouseInitialX.value;
      handleMouseMovement(mouseMovement);
    });
    const leftSliderWidth = computed(() => {
      const valueRange = maxAmount.value - props.min;
      const pixelsPerValue = sliderWidth.value / valueRange;
      const valueDelta = model.value - props.min;
      const leftWidth = valueDelta * pixelsPerValue;
      return leftWidth;
    });
    const disabledValueSliderWidth = computed(() => {
      const valueRange = maxAmount.value - props.min;
      const pixelsPerValue = sliderWidth.value / valueRange;
      const valueDelta = maxAmount.value - disabledAmount.value;
      const disabledWidth = valueDelta * pixelsPerValue;
      return Number.isNaN(disabledWidth) ? 0 : disabledWidth;
    });
    const rightSliderWidth = computed(() => {
      const valueRange = maxAmount.value - props.min;
      const pixelsPerValue = sliderWidth.value / valueRange;
      const valueDelta = maxAmount.value - model.value;
      const rightWidth = valueDelta * pixelsPerValue;
      return rightWidth;
    });
    const handleLabelClick = () => {
      var _a;
      if (props.isDisabled)
        return;
      (_a = sliderButton.value) == null ? void 0 : _a.focus();
    };
    const progressElement = ref();
    const maxLabelElement = ref();
    const { left: maxLabelLeft } = useElementBounding(maxLabelElement);
    const { right: progressRight } = useElementBounding(progressElement);
    const isProgressOverMaxLabel = computed(() => progressRight.value > maxLabelLeft.value);
    const __returned__ = { props, emit, x, uuid, context, optionRef, sliderValue, propsRef, option, change, totalFree, disabledAmount, maxAmount, sliderButton, slider, pressed, focused, sliderWidth, pressedMouseInitialX, pressedMouseInitialValue, model, updateValue, handleMouseMovement, sliderButtonStyle, leftSliderWidth, disabledValueSliderWidth, rightSliderWidth, handleLabelClick, progressElement, maxLabelElement, maxLabelLeft, progressRight, isProgressOverMaxLabel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "relative" };
const _hoisted_2 = { class: "rounded border border-primary-500 px-4 py-5" };
const _hoisted_3 = {
  ref: "slider",
  class: "relative flex flex-row items-center justify-center"
};
const _hoisted_4 = {
  key: 0,
  class: "pb-4"
};
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("label", {
      class: "text-primary-500",
      onClick: $setup.handleLabelClick
    }, [
      renderSlot(_ctx.$slots, "default")
    ]),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode(
        "div",
        _hoisted_3,
        [
          createBaseVNode(
            "div",
            {
              class: "h-1 rounded-full bg-primary-500",
              style: normalizeStyle(`width: ${$setup.leftSliderWidth}px`)
            },
            [
              createBaseVNode(
                "button",
                {
                  id: "sliderButton",
                  ref: "sliderButton",
                  class: "absolute top-1/2 z-10 h-4 w-4 -translate-y-1/2 rounded-full border-[0.25rem] border-primary-500 bg-white focus:border-primary-500",
                  style: normalizeStyle($setup.sliderButtonStyle)
                },
                null,
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          ),
          createBaseVNode(
            "div",
            {
              class: "h-1 rounded-full bg-gray-500/50",
              style: normalizeStyle(`width: ${$setup.rightSliderWidth - $setup.disabledValueSliderWidth}px`)
            },
            null,
            4
            /* STYLE */
          ),
          createBaseVNode(
            "div",
            {
              class: "border-t-[2px] border-dashed border-primary-500",
              style: normalizeStyle(`width: ${$setup.disabledValueSliderWidth}px`)
            },
            null,
            4
            /* STYLE */
          )
        ],
        512
        /* NEED_PATCH */
      )
    ]),
    $props.percentProgress || $props.valueProgress ? (openBlock(), createElementBlock("div", _hoisted_4, [
      createBaseVNode(
        "div",
        {
          ref: "progressElement",
          class: "absolute px-2 text-xs text-primary-500",
          style: normalizeStyle(`left: ${$setup.leftSliderWidth}px`)
        },
        [
          createBaseVNode("div", null, [
            $props.percentProgress ? (openBlock(), createElementBlock(
              "span",
              _hoisted_5,
              toDisplayString(Math.round($setup.model / $setup.maxAmount * 100)) + "% ",
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true),
            $props.valueProgress ? (openBlock(), createElementBlock(
              "span",
              _hoisted_6,
              toDisplayString($setup.model ?? 0) + toDisplayString($props.valueMeasurement),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
          ])
        ],
        4
        /* STYLE */
      )
    ])) : createCommentVNode("v-if", true),
    $props.maxLabel ? (openBlock(), createElementBlock(
      "div",
      {
        key: 1,
        class: normalizeClass([{
          "opacity-0": $setup.isProgressOverMaxLabel
        }, "absolute bottom-0 right-0 flex w-full justify-end text-xs transition-opacity"])
      },
      [
        createBaseVNode(
          "div",
          { ref: "maxLabelElement" },
          toDisplayString($setup.maxAmount) + toDisplayString($props.valueMeasurement),
          513
          /* TEXT, NEED_PATCH */
        )
      ],
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$1.__file = "src/modules/ui/components/forms/slider/FormSlider.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/slider/FormSlider.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormSlider.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const model = ref(0);
    const model2 = ref(0);
    const model3 = ref(0);
    const __returned__ = { model, model2, model3 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormSlider = __unplugin_components_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_FormInputGroup = __unplugin_components_1;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Forms/Input/Slider" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_FormSlider, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Disabled value" }, {
        default: withCtx(() => [
          createVNode(_component_FormSlider, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.model = $event),
            "disabled-value": 50
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Disabled" }, {
        default: withCtx(() => [
          createVNode(_component_FormSlider, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.model = $event),
            "is-disabled": ""
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Percent progress" }, {
        default: withCtx(() => [
          createVNode(_component_FormSlider, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.model = $event),
            "percent-progress": ""
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Measurement progress with max label" }, {
        default: withCtx(() => [
          createVNode(_component_FormSlider, {
            modelValue: $setup.model,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.model = $event),
            "value-progress": "",
            "value-measurement": "m2",
            "max-label": ""
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Slider groups" }, {
        default: withCtx(() => [
          createVNode(_component_FormInputGroup, { "total-value": 50 }, {
            default: withCtx(() => [
              createVNode(_component_FormSlider, {
                modelValue: $setup.model,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.model = $event),
                "value-progress": "",
                "value-measurement": "m2",
                "max-label": ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_FormSlider, {
                modelValue: $setup.model2,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.model2 = $event),
                "value-progress": "",
                "value-measurement": "m2",
                "max-label": ""
              }, null, 8, ["modelValue"]),
              createVNode(_component_FormSlider, {
                modelValue: $setup.model3,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.model3 = $event),
                "value-progress": "",
                "value-measurement": "m2",
                "max-label": ""
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
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
_sfc_main.__file = "src/modules/ui/components/forms/slider/FormSlider.story.vue";
const FormSlider_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/slider/FormSlider.story.vue"]]);
export {
  FormSlider_story as default
};
