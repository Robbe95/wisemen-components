import { as as defineComponent, aR as useSlots, aS as computed, bm as ke, bn as we, ax as openBlock, aP as createElementBlock, aA as createVNode, az as withCtx, aB as createBaseVNode, aT as toDisplayString, aH as createCommentVNode, aC as renderSlot, bo as Ee, ay as createBlock, aD as normalizeClass, aF as ref, aw as resolveComponent, aE as createTextVNode } from "./vendor-8f547009.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormRadioGroup",
  props: {
    label: { type: String, required: false },
    modelValue: { type: null, required: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const slots = useSlots();
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const __returned__ = { props, emit, slots, model, get RadioGroup() {
      return ke;
    }, get RadioGroupLabel() {
      return we;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "mb-2" };
const _hoisted_2$1 = {
  key: 0,
  class: "text-black"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createVNode($setup["RadioGroup"], {
      modelValue: $setup.model,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event)
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode($setup["RadioGroupLabel"], null, {
            default: withCtx(() => [
              !$setup.slots.label && $props.label ? (openBlock(), createElementBlock(
                "span",
                _hoisted_2$1,
                toDisplayString($props.label),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "label")
            ]),
            _: 3
            /* FORWARDED */
          })
        ]),
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["modelValue"])
  ]);
}
_sfc_main$2.__file = "src/modules/ui/components/forms/radio/FormRadioGroup.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/radio/FormRadioGroup.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormRadioOption",
  props: {
    label: { type: String, required: false },
    value: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const slots = useSlots();
    const __returned__ = { slots, get RadioGroupOption() {
      return Ee;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex h-6 w-6 flex-none items-center justify-center rounded-full border border-primary-500 bg-white" };
const _hoisted_2 = { for: "radio" };
const _hoisted_3 = {
  key: 0,
  class: "text-black"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["RadioGroupOption"], {
    id: "radio",
    value: $props.value,
    class: "flex items-center gap-2"
  }, {
    default: withCtx(({ checked }) => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(["h-2 w-2 rounded-full bg-primary-500 transition duration-300", [checked ? "scale-100" : "scale-0"]])
          },
          null,
          2
          /* CLASS */
        )
      ]),
      createBaseVNode("label", _hoisted_2, [
        !$setup.slots.default && $props.label ? (openBlock(), createElementBlock(
          "span",
          _hoisted_3,
          toDisplayString($props.label),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["value"]);
}
_sfc_main$1.__file = "src/modules/ui/components/forms/radio/FormRadioOption.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/radio/FormRadioOption.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormRadio.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const model1 = ref();
    const __returned__ = { model1 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormRadioOption = __unplugin_components_0;
  const _component_FormRadioGroup = __unplugin_components_1;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Forms/Input/FormRadio" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_FormRadioGroup, {
            modelValue: $setup.model1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model1 = $event),
            class: "flex flex-col gap-1"
          }, {
            default: withCtx(() => [
              createVNode(_component_FormRadioOption, { value: "value1" }),
              createVNode(_component_FormRadioOption, { value: "value2" }),
              createVNode(_component_FormRadioOption, { value: "value3" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With title" }, {
        default: withCtx(() => [
          createVNode(_component_FormRadioGroup, {
            modelValue: $setup.model1,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.model1 = $event),
            class: "flex flex-col gap-1",
            label: "Title"
          }, {
            default: withCtx(() => [
              createVNode(_component_FormRadioOption, { value: "value1" }),
              createVNode(_component_FormRadioOption, { value: "value2" }),
              createVNode(_component_FormRadioOption, { value: "value3" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With label" }, {
        default: withCtx(() => [
          createVNode(_component_FormRadioGroup, {
            modelValue: $setup.model1,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.model1 = $event),
            class: "flex flex-col gap-1"
          }, {
            default: withCtx(() => [
              createVNode(_component_FormRadioOption, {
                value: "value1",
                label: "label1"
              }),
              createVNode(_component_FormRadioOption, {
                value: "value2",
                label: "label2"
              }),
              createVNode(_component_FormRadioOption, {
                value: "value3",
                label: "label3"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With slot" }, {
        default: withCtx(() => [
          createVNode(_component_FormRadioGroup, {
            modelValue: $setup.model1,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.model1 = $event),
            class: "flex flex-col gap-1"
          }, {
            default: withCtx(() => [
              createVNode(_component_FormRadioOption, { value: "value1" }, {
                default: withCtx(() => [
                  createTextVNode(" Slot 1 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_FormRadioOption, { value: "value2" }, {
                default: withCtx(() => [
                  createTextVNode(" Slot 2 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_FormRadioOption, { value: "value3" }, {
                default: withCtx(() => [
                  createTextVNode(" Slot 3 ")
                ]),
                _: 1
                /* STABLE */
              })
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
_sfc_main.__file = "src/modules/ui/components/forms/radio/FormRadio.story.vue";
const FormRadio_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/radio/FormRadio.story.vue"]]);
export {
  FormRadio_story as default
};
