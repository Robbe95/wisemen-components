import { aM as cva, as as defineComponent, b3 as computed, ax as openBlock, aJ as createElementBlock, aL as toDisplayString, aD as normalizeClass, aN as mergeModels, aO as useModel, aF as ref, by as Ke, bz as Ue, bC as _e, bB as Je, bA as qe, aY as Ie, aH as createCommentVNode, aB as createBaseVNode, aA as createVNode, az as withCtx, aC as renderSlot, ay as createBlock, aE as createTextVNode, b5 as Fragment, b6 as renderList, a_ as normalizeProps, a$ as guardReactiveProps, aw as resolveComponent } from "./vendor-72f13f2a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const variantOptions = {
  default: "bg-background text-foreground hover:bg-primary/90",
  disabled: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-focus-destructive",
  active: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  selected: "text-primary underline-offset-4 underline hover:bg-secondary/80"
};
const formSelectOptionVariants = cva(
  "flex w-full gap-2 rounded border border-transparent bg-white px-2 py-1 text-left text-black transition-all",
  {
    variants: {
      variant: variantOptions
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormSelectOption2",
  props: {
    value: { type: null, required: true },
    isActive: { type: Boolean, required: false, default: false },
    isSelected: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false, default: false },
    displayFunction: { type: Function, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const optionStatus = computed(() => {
      if (__props.isDisabled)
        return "disabled";
      else if (__props.isSelected)
        return "selected";
      else if (__props.isActive)
        return "active";
      else
        return "default";
    });
    const __returned__ = { optionStatus, get formSelectOptionVariants() {
      return formSelectOptionVariants;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "button",
    {
      class: normalizeClass($setup.formSelectOptionVariants({ variant: $setup.optionStatus }))
    },
    toDisplayString($props.displayFunction($props.value)),
    3
    /* TEXT, CLASS */
  );
}
_sfc_main$2.__file = "src/modules/ui/components/forms/select/FormSelectOption2.vue";
const FormSelectOption2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/select/FormSelectOption2.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormSelect2",
  props: mergeModels({
    hasSearch: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false, default: false },
    isLoading: { type: Boolean, required: false, default: false },
    displayFunction: { type: Function, required: false, default: (value) => {
      return String(value);
    } },
    keyValue: { type: null, required: false },
    items: { type: Array, required: true }
  }, {
    "modelValue": { required: true }
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const model = useModel(__props, "modelValue");
    const isMultiple = computed(() => Array.isArray(model.value));
    const search = ref("");
    const getKeyValue = (value) => {
      if (__props.keyValue)
        return String(value[__props.keyValue]);
      else
        return String(value);
    };
    const hasValue = computed(() => {
      if (Array.isArray(model.value))
        return model.value.length > 0;
      else
        return model.value !== null;
    });
    const getDisplayValue = (value) => {
      if (value === void 0)
        return "";
      else if (Array.isArray(value))
        return value.map((value2) => __props.displayFunction(value2)).join(", ");
      else
        return __props.displayFunction(value);
    };
    const filteredItems = computed(() => {
      return __props.items.filter((item) => {
        var _a;
        return (_a = getDisplayValue(item)) == null ? void 0 : _a.toLowerCase().includes(search.value.toLowerCase());
      });
    });
    const handleSearchChange = (event) => {
      search.value = event.target.value;
    };
    const __returned__ = { model, isMultiple, search, getKeyValue, hasValue, getDisplayValue, filteredItems, handleSearchChange, get Combobox() {
      return Ke;
    }, get ComboboxButton() {
      return Ue;
    }, get ComboboxInput() {
      return _e;
    }, get ComboboxOption() {
      return Je;
    }, get ComboboxOptions() {
      return qe;
    }, get Float() {
      return Ie;
    }, FormSelectOption2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "text-left" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" eslint-disable vue/no-extra-parens "),
      createCommentVNode(" eslint-disable vue/valid-v-model "),
      createBaseVNode("div", _hoisted_1$1, [
        createVNode($setup["Combobox"], {
          modelValue: $setup.model,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
          multiple: $setup.isMultiple
        }, {
          default: withCtx(() => [
            createVNode($setup["Float"], {
              placement: "bottom-start",
              "adaptive-width": "",
              offset: 4,
              flip: ""
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "input", {
                  displayFunction: $setup.getDisplayValue,
                  placeholder: $setup.hasValue ? $setup.getDisplayValue($setup.model) : "select",
                  value: $setup.model
                }, () => [
                  $props.hasSearch ? (openBlock(), createBlock($setup["ComboboxButton"], {
                    key: 0,
                    as: "template"
                  }, {
                    default: withCtx(() => [
                      createVNode($setup["ComboboxInput"], {
                        class: "relative w-full rounded border border-border bg-input px-4 py-2 text-left placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0",
                        "display-value": (item) => $setup.getDisplayValue(item),
                        placeholder: $setup.hasValue ? $setup.getDisplayValue($setup.model) : "select",
                        onChange: $setup.handleSearchChange
                      }, null, 8, ["display-value", "placeholder"])
                    ]),
                    _: 1
                    /* STABLE */
                  })) : (openBlock(), createBlock($setup["ComboboxButton"], {
                    key: 1,
                    class: "relative w-full overflow-hidden truncate whitespace-nowrap rounded border border-border bg-input px-4 py-2 text-left placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString($setup.hasValue ? $setup.getDisplayValue($setup.model) : "select"),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }))
                ]),
                createVNode($setup["ComboboxOptions"], null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", { items: $props.items }, () => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList($setup.filteredItems, (item) => {
                          return openBlock(), createBlock($setup["ComboboxOption"], {
                            key: $setup.getKeyValue(item),
                            value: item
                          }, {
                            default: withCtx(({ active, selected, disabled }) => [
                              renderSlot(_ctx.$slots, "item", {
                                item,
                                displayFunction: $setup.getDisplayValue,
                                active,
                                selected,
                                disabled
                              }, () => [
                                createVNode(
                                  $setup["FormSelectOption2"],
                                  normalizeProps(guardReactiveProps({
                                    value: item,
                                    isActive: active,
                                    isSelected: selected,
                                    isDisabled: disabled,
                                    displayFunction: $setup.getDisplayValue
                                  })),
                                  null,
                                  16
                                  /* FULL_PROPS */
                                )
                              ])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["value"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ]),
                  _: 3
                  /* FORWARDED */
                })
              ]),
              _: 3
              /* FORWARDED */
            })
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["modelValue", "multiple"])
      ])
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main$1.__file = "src/modules/ui/components/forms/select/FormSelect2.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/select/FormSelect2.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormSelect2.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const people = [
      "Durward Reynolds",
      "Kenton Towne",
      "Therese Wunsch",
      "Benedict Kessler",
      "Katelyn Rohan"
    ];
    const selectedPerson = ref();
    const selectedPeople = ref([]);
    const __returned__ = { people, selectedPerson, selectedPeople };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col justify-start gap-20 py-20" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormSelect2 = __unplugin_components_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Forms/Input/Select2" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_FormSelect2, {
              modelValue: $setup.selectedPerson,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedPerson = $event),
              items: $setup.people,
              class: "w-80"
            }, null, 8, ["modelValue"]),
            createVNode(_component_FormSelect2, {
              modelValue: $setup.selectedPeople,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.selectedPeople = $event),
              class: "w-80",
              items: $setup.people,
              "display-function": (value) => value
            }, null, 8, ["modelValue", "display-function"])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/forms/select/FormSelect2.story.vue";
const FormSelect2_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/select/FormSelect2.story.vue"]]);
export {
  FormSelect2_story as default
};
