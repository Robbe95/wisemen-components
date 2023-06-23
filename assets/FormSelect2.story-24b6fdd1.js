import { as as defineComponent, aN as mergeModels, aO as useModel, b3 as computed, aF as ref, by as Ke, bz as Ue, bC as _e, bB as Je, bA as qe, ax as openBlock, aJ as createElementBlock, aH as createCommentVNode, aA as createVNode, az as withCtx, b5 as Fragment, b6 as renderList, ay as createBlock, aC as renderSlot, aE as createTextVNode, aL as toDisplayString, aw as resolveComponent } from "./vendor-72f13f2a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
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
      if (Array.isArray(value))
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
    const handleFocusChange = (event) => {
      search.value = "";
    };
    const __returned__ = { model, isMultiple, search, getKeyValue, hasValue, getDisplayValue, filteredItems, handleSearchChange, handleFocusChange, get Combobox() {
      return Ke;
    }, get ComboboxButton() {
      return Ue;
    }, get ComboboxInput() {
      return _e;
    }, get ComboboxOption() {
      return Je;
    }, get ComboboxOptions() {
      return qe;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" eslint-disable vue/no-extra-parens "),
      createCommentVNode(" eslint-disable vue/valid-v-model "),
      createVNode($setup["Combobox"], {
        modelValue: $setup.model,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
        multiple: $setup.isMultiple
      }, {
        default: withCtx(() => [
          createVNode($setup["ComboboxButton"], { as: "template" }, {
            default: withCtx(() => [
              createVNode($setup["ComboboxInput"], {
                class: "bg-red-500",
                "display-value": (item) => $setup.getDisplayValue(item),
                placeholder: $setup.hasValue ? $setup.getDisplayValue($setup.model) : "select",
                onChange: $setup.handleSearchChange,
                onFocus: $setup.handleFocusChange
              }, null, 8, ["display-value", "placeholder"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode($setup["ComboboxOptions"], null, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.filteredItems, (item) => {
                  return openBlock(), createBlock($setup["ComboboxOption"], {
                    key: $setup.getKeyValue(item),
                    value: item
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "item", {
                        item,
                        displayFunction: $setup.getDisplayValue
                      }, () => [
                        createTextVNode(
                          toDisplayString($setup.getDisplayValue(item)),
                          1
                          /* TEXT */
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
            ]),
            _: 3
            /* FORWARDED */
          })
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["modelValue", "multiple"])
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormSelect2 = __unplugin_components_0;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Forms/Input/Select2" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createCommentVNode(' <FormSelect2 v-model="selectedPerson" :items="people" /> '),
          createVNode(_component_FormSelect2, {
            modelValue: $setup.selectedPeople,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedPeople = $event),
            items: $setup.people,
            "display-function": (value) => value
          }, null, 8, ["modelValue", "display-function"])
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
