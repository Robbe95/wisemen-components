import { _ as __unplugin_components_1$1 } from "./TransitionExpand-235cdcb0.js";
import { _ as __unplugin_components_0$1 } from "./AppLoader-19766783.js";
import { aU as inject, as as defineComponent, aS as computed, a_ as useI18n, aF as ref, b1 as provide, bo as Ie, bp as Ke, bq as qe, aw as resolveComponent, ax as openBlock, aP as createElementBlock, aH as createCommentVNode, aA as createVNode, az as withCtx, aB as createBaseVNode, aC as renderSlot, aT as toDisplayString, aV as Fragment, aW as renderList, ay as createBlock, aE as createTextVNode, aR as useSlots, br as Je, aD as normalizeClass, be as Transition, bc as normalizeProps, bd as guardReactiveProps, bs as Ue, bt as _e, aG as mergeProps } from "./vendor-a88772a8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { f as fadeTransition } from "./fade.transition-ff73e3ee.js";
const SelectGroupContext = Symbol("SelectGroupContext");
const useSelectContext = (component) => {
  const context = inject(SelectGroupContext, null);
  if (context === null) {
    const err = new Error(`<${component} /> is missing a parent <FormSelect /> component.`);
    throw err;
  }
  return context;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FormSelect",
  props: {
    modelValue: { type: null, required: true },
    hasMultiple: { type: null, required: false, default: false },
    hasSearch: { type: Boolean, required: false, default: false },
    hasPills: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false, default: false },
    isSearching: { type: Boolean, required: false, default: false },
    isEmpty: { type: Boolean, required: false, default: false },
    isLoading: { type: Boolean, required: false, default: false },
    displayFunction: { type: Function, required: false, default: (value) => {
      if (Array.isArray(value))
        return value.map((value2) => String(value2)).join(", ");
      return String(value);
    } },
    keyValue: { type: null, required: false },
    items: { type: Array, required: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const model = computed({
      get: () => __props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const { t } = useI18n();
    const compareFunction = (a, b) => {
      if (__props.keyValue)
        return a[__props.keyValue] === b[__props.keyValue];
      else
        return a === b;
    };
    const removeValue = (value) => {
      if (__props.hasMultiple && Array.isArray(model.value))
        model.value = model.value.filter((singleValue) => !compareFunction(singleValue, value));
    };
    const setupApi = {
      selectedValue: model,
      keyValue: computed(() => __props.keyValue),
      displayFunction: computed(() => __props.displayFunction),
      isDisabled: computed(() => __props.isDisabled),
      isSearching: computed(() => __props.isSearching),
      isEmpty: computed(() => __props.isEmpty),
      isLoading: computed(() => __props.isLoading),
      hasSearch: computed(() => __props.hasSearch),
      hasMultiple: computed(() => __props.hasMultiple),
      searchValue: ref("")
    };
    provide(SelectGroupContext, setupApi);
    const __returned__ = { emit, model, t, compareFunction, removeValue, setupApi, get Float() {
      return Ie;
    }, get Combobox() {
      return Ke;
    }, get ComboboxOptions() {
      return qe;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "w-full" };
const _hoisted_2$2 = { class: "flex w-auto max-w-max text-gray-700" };
const _hoisted_3$1 = { class: "min-w-min rounded border border-primary-500 bg-white" };
const _hoisted_4$1 = { class: "w-full rounded p-2" };
const _hoisted_5$1 = {
  key: 0,
  class: "flex w-full items-center justify-center"
};
const _hoisted_6$1 = {
  key: 1,
  class: "w-full whitespace-nowrap"
};
const _hoisted_7 = {
  key: 2,
  class: "flex w-full flex-col gap-1"
};
const _hoisted_8 = {
  key: 0,
  class: "mt-1 flex flex-wrap gap-1"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppLoader = __unplugin_components_0$1;
  const _component_TransitionExpand = __unplugin_components_1$1;
  const _component_AppPill = resolveComponent("AppPill");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createCommentVNode(" eslint-disable vue/valid-v-model "),
    createCommentVNode(" eslint-disable vue/no-extra-parens "),
    createVNode($setup["Combobox"], {
      modelValue: $setup.model,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
      multiple: $props.hasMultiple
    }, {
      default: withCtx(() => [
        createVNode($setup["Float"], {
          placement: "bottom-start",
          "adaptive-width": "",
          offset: 4,
          flip: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$2, [
              renderSlot(_ctx.$slots, "input", { selectedValue: $setup.model })
            ]),
            createVNode($setup["ComboboxOptions"], null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3$1, [
                  createBaseVNode("div", _hoisted_4$1, [
                    createVNode(_component_TransitionExpand, null, {
                      default: withCtx(() => [
                        $props.isLoading ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                          createVNode(_component_AppLoader, { class: "h-16 w-16" })
                        ])) : $props.isEmpty ? (openBlock(), createElementBlock(
                          "div",
                          _hoisted_6$1,
                          toDisplayString($setup.t("labels.no_results")),
                          1
                          /* TEXT */
                        )) : (openBlock(), createElementBlock("div", _hoisted_7, [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList($props.items, (item) => {
                              return renderSlot(_ctx.$slots, "item", {
                                key: $props.keyValue ? item[$props.keyValue] : item,
                                item
                              });
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ]))
                      ]),
                      _: 3
                      /* FORWARDED */
                    })
                  ])
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
    }, 8, ["modelValue", "multiple"]),
    $props.hasMultiple && $props.hasPills && Array.isArray($setup.model) ? (openBlock(), createElementBlock("div", _hoisted_8, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.model, (singleValue) => {
          return openBlock(), createElementBlock("div", {
            key: $props.keyValue ? singleValue[$props.keyValue] : singleValue
          }, [
            (openBlock(), createBlock(_component_AppPill, {
              key: singleValue,
              "is-active": "",
              class: "max-w-max",
              "has-close": "",
              "onComponent:remove": ($event) => $setup.removeValue(singleValue)
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($props.displayFunction(singleValue)),
                  1
                  /* TEXT */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["onComponent:remove"]))
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ])) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$3.__file = "src/modules/ui/components/forms/select/FormSelect.vue";
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/select/FormSelect.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormSelectOption",
  props: {
    value: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const slots = useSlots();
    const context = useSelectContext("FormSelectOptions");
    const compareFunction = (a, b) => {
      if (context.keyValue.value)
        return a[context.keyValue.value] === b[context.keyValue.value];
      else
        return a === b;
    };
    const isSelected = computed(() => {
      if (context.hasMultiple.value)
        return !!context.selectedValue.value.some((singleValue) => compareFunction(singleValue, __props.value));
      else
        return compareFunction(context.selectedValue.value, __props.value);
    });
    const isInSearchQuery = computed(() => {
      if (context.hasSearch.value && context.searchValue.value)
        return context.displayFunction.value(__props.value).toLowerCase().includes(context.searchValue.value.toLowerCase());
      else
        return true;
    });
    const __returned__ = { slots, context, compareFunction, isSelected, isInSearchQuery, get ComboboxOption() {
      return Je;
    }, get fadeTransition() {
      return fadeTransition;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "grid h-6 w-6 place-items-center rounded border border-primary-500 bg-white"
};
const _hoisted_2$1 = { key: 2 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CheckmarkIcon = resolveComponent("CheckmarkIcon");
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" eslint-disable-next-line vue/no-extra-parens "),
      $setup.isInSearchQuery ? (openBlock(), createBlock($setup["ComboboxOption"], {
        key: 0,
        value: $props.value
      }, {
        default: withCtx(({ active }) => [
          createBaseVNode(
            "button",
            {
              class: normalizeClass(["flex w-full gap-2 rounded border border-transparent bg-white px-2 py-1 text-left text-black transition-all", { "border-primary-500 bg-primary-100": active }])
            },
            [
              $setup.context.hasMultiple.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
                createVNode(
                  Transition,
                  normalizeProps(guardReactiveProps($setup.fadeTransition)),
                  {
                    default: withCtx(() => [
                      $setup.isSelected ? (openBlock(), createBlock(_component_CheckmarkIcon, {
                        key: 0,
                        class: "h-2 text-primary-500"
                      })) : createCommentVNode("v-if", true)
                    ]),
                    _: 1
                    /* STABLE */
                  },
                  16
                  /* FULL_PROPS */
                )
              ])) : createCommentVNode("v-if", true),
              $setup.slots.default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : (openBlock(), createElementBlock(
                "div",
                _hoisted_2$1,
                toDisplayString($setup.context.displayFunction.value($props.value)),
                1
                /* TEXT */
              ))
            ],
            2
            /* CLASS */
          )
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["value"])) : createCommentVNode("v-if", true)
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main$2.__file = "src/modules/ui/components/forms/select/FormSelectOption.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/select/FormSelectOption.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormSelectInput",
  props: {
    placeholder: { type: String, required: true },
    selectedValue: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const context = useSelectContext("FormSelectInput");
    const displayFunction = (value) => {
      return context.displayFunction.value(value);
    };
    const handleChangeEvent = (event) => {
      context.searchValue.value = event.target.value;
    };
    const __returned__ = { context, displayFunction, handleChangeEvent, get ComboboxButton() {
      return Ue;
    }, get ComboboxInput() {
      return _e;
    }, get fadeTransition() {
      return fadeTransition;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  for: "search",
  class: "text-sm"
};
const _hoisted_2 = {
  key: 0,
  class: "flex items-center justify-center text-black"
};
const _hoisted_3 = {
  key: 0,
  class: "flex-none p-[0.15rem]"
};
const _hoisted_4 = {
  key: 1,
  class: "h-4 flex-none"
};
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { class: "h-full" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SearchIcon = resolveComponent("SearchIcon");
  const _component_AppLoader = __unplugin_components_0$1;
  const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("label", _hoisted_1, [
      renderSlot(_ctx.$slots, "default")
    ]),
    $setup.context.hasSearch.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
      createVNode($setup["ComboboxInput"], {
        id: "search",
        placeholder: $props.placeholder,
        class: "w-full rounded rounded-r-none border border-r-0 border-primary-500 px-4 py-2",
        "display-value": $setup.displayFunction,
        onChange: $setup.handleChangeEvent
      }, null, 8, ["placeholder", "display-value"]),
      createVNode($setup["ComboboxButton"], { class: "h-auto rounded rounded-l-none border border-l-0 border-primary-500 bg-white p-2" }, {
        default: withCtx(() => [
          createVNode(
            Transition,
            mergeProps($setup.fadeTransition, { mode: "out-in" }),
            {
              default: withCtx(() => [
                !$setup.context.isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  $setup.context.hasSearch.value ? (openBlock(), createBlock(_component_SearchIcon, {
                    key: 0,
                    class: "h-4 flex-none"
                  })) : createCommentVNode("v-if", true)
                ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
                  createVNode(_component_AppLoader)
                ]))
              ]),
              _: 1
              /* STABLE */
            },
            16
            /* FULL_PROPS */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ])) : (openBlock(), createElementBlock("div", _hoisted_5, [
      createVNode($setup["ComboboxButton"], { class: "flex w-full items-center justify-between rounded border border-primary-500 bg-white px-4 py-2 text-left" }, {
        default: withCtx(() => [
          createBaseVNode(
            "div",
            null,
            toDisplayString($setup.displayFunction($props.selectedValue)),
            1
            /* TEXT */
          ),
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_ChevronDownIcon, { class: "h-4 flex-none" })
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]))
  ]);
}
_sfc_main$1.__file = "src/modules/ui/components/forms/select/FormSelectInput.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/select/FormSelectInput.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormSelect.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const options1 = ["one", "two", "three", "four", "five"];
    const selectedOption1 = ref("one");
    const selectedMultiple = ref([]);
    const options2 = [
      { label: "one", value: "one123" },
      { label: "two", value: "two12312312" },
      { label: "three", value: "thre3123e" },
      { label: "four", value: "four3123" },
      { label: "five", value: "f123123ve" }
    ];
    const displayFunction = (value) => {
      if (Array.isArray(value))
        return value.map((value2) => value2.label).join(", ");
      return value.label;
    };
    const __returned__ = { options1, selectedOption1, selectedMultiple, options2, displayFunction };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormSelectInput = __unplugin_components_0;
  const _component_FormSelectOption = __unplugin_components_1;
  const _component_FormSelect = __unplugin_components_2;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Forms/Input/Select" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_FormSelect, {
            modelValue: $setup.selectedOption1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedOption1 = $event),
            items: $setup.options1
          }, {
            input: withCtx(({ selectedValue }) => [
              createVNode(_component_FormSelectInput, {
                placeholder: "Select",
                "selected-value": selectedValue
              }, null, 8, ["selected-value"])
            ]),
            item: withCtx(({ item }) => [
              (openBlock(), createBlock(_component_FormSelectOption, {
                key: item,
                value: item
              }, null, 8, ["value"]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Loading" }, {
        default: withCtx(() => [
          createVNode(_component_FormSelect, {
            modelValue: $setup.selectedOption1,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.selectedOption1 = $event),
            "is-loading": "",
            items: $setup.options1
          }, {
            input: withCtx(({ selectedValue }) => [
              createVNode(_component_FormSelectInput, {
                placeholder: "Select",
                "selected-value": selectedValue
              }, null, 8, ["selected-value"])
            ]),
            item: withCtx(({ item }) => [
              (openBlock(), createBlock(_component_FormSelectOption, {
                key: item,
                value: item
              }, null, 8, ["value"]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Empty" }, {
        default: withCtx(() => [
          createVNode(_component_FormSelect, {
            modelValue: $setup.selectedOption1,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.selectedOption1 = $event),
            "is-empty": "",
            items: $setup.options1
          }, {
            input: withCtx(({ selectedValue }) => [
              createVNode(_component_FormSelectInput, {
                placeholder: "Select",
                "selected-value": selectedValue
              }, null, 8, ["selected-value"])
            ]),
            item: withCtx(({ item }) => [
              (openBlock(), createBlock(_component_FormSelectOption, {
                key: item,
                value: item
              }, null, 8, ["value"]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Multiple" }, {
        default: withCtx(() => [
          createVNode(_component_FormSelect, {
            modelValue: $setup.selectedMultiple,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.selectedMultiple = $event),
            "has-multiple": "",
            items: $setup.options1
          }, {
            input: withCtx(({ selectedValue }) => [
              createVNode(_component_FormSelectInput, {
                placeholder: "Select",
                "selected-value": selectedValue
              }, null, 8, ["selected-value"])
            ]),
            item: withCtx(({ item }) => [
              (openBlock(), createBlock(_component_FormSelectOption, {
                key: item,
                value: item
              }, null, 8, ["value"]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Search" }, {
        default: withCtx(() => [
          createVNode(_component_FormSelect, {
            modelValue: $setup.selectedMultiple,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.selectedMultiple = $event),
            "has-search": "",
            items: $setup.options1
          }, {
            input: withCtx(({ selectedValue }) => [
              createVNode(_component_FormSelectInput, {
                placeholder: "Select",
                "selected-value": selectedValue
              }, null, 8, ["selected-value"])
            ]),
            item: withCtx(({ item }) => [
              (openBlock(), createBlock(_component_FormSelectOption, {
                key: item,
                value: item
              }, null, 8, ["value"]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Search with objects" }, {
        default: withCtx(() => [
          createVNode(_component_FormSelect, {
            modelValue: $setup.selectedMultiple,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.selectedMultiple = $event),
            "has-search": "",
            "has-multiple": true,
            "display-function": $setup.displayFunction,
            "key-value": "value",
            items: $setup.options2
          }, {
            input: withCtx(({ selectedValue }) => [
              createVNode(_component_FormSelectInput, {
                placeholder: "Select",
                "selected-value": selectedValue
              }, null, 8, ["selected-value"])
            ]),
            item: withCtx(({ item }) => [
              (openBlock(), createBlock(_component_FormSelectOption, {
                key: item.value,
                value: item
              }, null, 8, ["value"]))
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
_sfc_main.__file = "src/modules/ui/components/forms/select/FormSelect.story.vue";
const FormSelect_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/select/FormSelect.story.vue"]]);
export {
  FormSelect_story as default
};
