import { b4 as inject, as as defineComponent, b3 as computed, bd as provide, ax as openBlock, aJ as createElementBlock, aC as renderSlot, b2 as useSlots, bu as ue, ay as createBlock, az as withCtx, aB as createBaseVNode, aD as normalizeClass, aA as createVNode, aL as toDisplayString, aH as createCommentVNode, aF as ref, aw as resolveComponent, b6 as renderList, b5 as Fragment } from "./vendor-72f13f2a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { C as CheckmarkIcon } from "./CheckmarkIcon-ef85db79.js";
const CheckboxGroupContext = Symbol("CheckboxGroupContext");
const useCheckboxContext = () => {
  const context = inject(CheckboxGroupContext, null);
  return context;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormCheckboxGroup",
  props: {
    modelValue: { type: null, required: true },
    isDisabled: { type: Boolean, required: false, default: false },
    displayFunction: { type: Function, required: false, default: (value) => value },
    keyValue: { type: String, required: false },
    hasLabels: { type: Boolean, required: false, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const model = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => emit("update:modelValue", value)
    });
    const compareFunction = (a, b) => {
      if (props.keyValue)
        return a[props.keyValue] === b[props.keyValue];
      else
        return a === b;
    };
    const removeValue = (value) => {
      model.value = model.value.filter((singleValue) => !compareFunction(singleValue, value));
    };
    const defaultDisplayFunction = (value) => value;
    const setupApi = {
      selectedValue: model,
      compareFunction,
      hasLabels: props.hasLabels,
      handleItemClicked: (value) => {
        if (model.value.some((singleValue) => compareFunction(singleValue, value)))
          removeValue(value);
        else
          model.value.push(value);
      },
      keyValue: computed(() => props.keyValue),
      displayFunction: computed(() => props.displayFunction ?? defaultDisplayFunction),
      isDisabled: computed(() => props.isDisabled)
    };
    provide(CheckboxGroupContext, setupApi);
    const __returned__ = { props, emit, model, compareFunction, removeValue, defaultDisplayFunction, setupApi };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
_sfc_main$2.__file = "src/modules/ui/components/forms/checkbox/FormCheckboxGroup.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/checkbox/FormCheckboxGroup.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormCheckbox",
  props: {
    modelValue: { type: Boolean, required: false, default: false },
    value: { type: null, required: false, default: null },
    isDisabled: { type: Boolean, required: false, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const slots = useSlots();
    const context = useCheckboxContext();
    const model = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const isSelected = computed(() => {
      var _a;
      if (!context)
        return model.value;
      else
        return !!((_a = context.selectedValue.value) == null ? void 0 : _a.some((singleValue) => context.compareFunction(singleValue, props.value)));
    });
    const handleClick = () => {
      if (context)
        context.handleItemClicked(props.value);
    };
    const __returned__ = { props, emit, slots, context, model, isSelected, handleClick, get Switch() {
      return ue;
    }, CheckmarkIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { for: "switch" };
const _hoisted_2 = {
  key: 0,
  class: "text-black"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Switch"], {
    id: "switch",
    modelValue: $setup.model,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
    value: $props.value,
    class: "flex items-center gap-2",
    onClick: $setup.handleClick
  }, {
    default: withCtx(() => {
      var _a;
      return [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(["border-primary-500 rounded border p-2 transition-colors", {
              "bg-white": $setup.isSelected,
              "bg-primary-100": !$setup.isSelected
            }])
          },
          [
            createVNode($setup["CheckmarkIcon"], {
              class: normalizeClass(["h-3 w-3 transition-opacity", {
                "text-primary-500": $setup.isSelected,
                "opacity-0": !$setup.isSelected
              }])
            }, null, 8, ["class"])
          ],
          2
          /* CLASS */
        ),
        createBaseVNode("label", _hoisted_1, [
          !$setup.slots.default && $setup.context && $setup.context.hasLabels ? (openBlock(), createElementBlock(
            "span",
            _hoisted_2,
            toDisplayString((_a = $setup.context) == null ? void 0 : _a.displayFunction.value($props.value)),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "default")
        ])
      ];
    }),
    _: 3
    /* FORWARDED */
  }, 8, ["modelValue", "value"]);
}
_sfc_main$1.__file = "src/modules/ui/components/forms/checkbox/FormCheckbox.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/checkbox/FormCheckbox.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormCheckbox.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const model1 = ref(false);
    const model2 = ref([]);
    const model3 = ref([]);
    const options = [
      { value: "value1", label: "Value 1" },
      { value: "value2", label: "Value 2" },
      { value: "value3", label: "Value 3" }
    ];
    const displayFunction = (value) => {
      return value.label;
    };
    const __returned__ = { model1, model2, model3, options, displayFunction };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormCheckbox = __unplugin_components_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_FormCheckboxGroup = __unplugin_components_1;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Forms/Input/FormCheckbox" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_FormCheckbox, {
            modelValue: $setup.model1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model1 = $event)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Group" }, {
        default: withCtx(() => [
          createVNode(_component_FormCheckboxGroup, {
            modelValue: $setup.model2,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.model2 = $event),
            class: "flex flex-col gap-1"
          }, {
            default: withCtx(() => [
              createVNode(_component_FormCheckbox, { value: "value1" }),
              createVNode(_component_FormCheckbox, { value: "value2" }),
              createVNode(_component_FormCheckbox, { value: "value3" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Group with labels" }, {
        default: withCtx(() => [
          createVNode(_component_FormCheckboxGroup, {
            modelValue: $setup.model2,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.model2 = $event),
            class: "flex flex-col gap-1",
            "has-labels": ""
          }, {
            default: withCtx(() => [
              createVNode(_component_FormCheckbox, { value: "value1" }),
              createVNode(_component_FormCheckbox, { value: "value2" }),
              createVNode(_component_FormCheckbox, { value: "value3" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Group with objects" }, {
        default: withCtx(() => [
          createVNode(_component_FormCheckboxGroup, {
            modelValue: $setup.model3,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.model3 = $event),
            class: "flex flex-col gap-1",
            "has-labels": "",
            "display-function": $setup.displayFunction,
            "key-value": "value"
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList($setup.options, (option) => {
                  return createVNode(_component_FormCheckbox, {
                    key: option.value,
                    value: option
                  }, null, 8, ["value"]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/forms/checkbox/FormCheckbox.story.vue";
const FormCheckbox_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/checkbox/FormCheckbox.story.vue"]]);
export {
  FormCheckbox_story as default
};
