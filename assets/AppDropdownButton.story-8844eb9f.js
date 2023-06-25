import { as as defineComponent, aY as je, aw as resolveComponent, ax as openBlock, ay as createBlock, az as withCtx, aB as createBaseVNode, aC as renderSlot, aJ as createElementBlock, aA as createVNode, aH as createCommentVNode, aE as createTextVNode, b8 as renderList, b7 as Fragment, aN as toDisplayString } from "./vendor-0d4e1342.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as __unplugin_components_1 } from "./AppDropdownButton-8f8465bc.js";
import { _ as __unplugin_components_0 } from "./AppButton-13c53978.js";
import "./AppIcon-59dbebe4.js";
import "./CheckmarkIcon-c691b98e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppDropdownButtonItem",
  props: {
    hasArrow: { type: Boolean, required: false, default: false }
  },
  emits: ["component:click"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const __returned__ = { emit, get PopoverButton() {
      return je;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "w-2"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  return openBlock(), createBlock($setup["PopoverButton"], {
    as: "button",
    class: "flex w-full min-w-40 items-center justify-between gap-2 rounded px-2 py-1 text-primary-500 hover:bg-primary-100",
    onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("component:click"))
  }, {
    default: withCtx(() => [
      createBaseVNode("div", null, [
        renderSlot(_ctx.$slots, "default")
      ]),
      $props.hasArrow ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ChevronRightIcon)
      ])) : createCommentVNode("v-if", true)
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$1.__file = "src/modules/ui/components/app/buttons/app-dropdown-button/AppDropdownButtonItem.vue";
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/buttons/app-dropdown-button/AppDropdownButtonItem.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppDropdownButton.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const list = [
      {
        value: "1",
        label: "Item 1"
      },
      {
        value: "2",
        label: "Item 2"
      },
      {
        value: "3",
        label: "Item 3"
      }
    ];
    const __returned__ = { list };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = __unplugin_components_0;
  const _component_AppDropdownButton = __unplugin_components_1;
  const _component_Variant = resolveComponent("Variant");
  const _component_AppDropdownButtonItem = __unplugin_components_2;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Buttons/AppDropdownButton" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_AppDropdownButton, null, {
            button: withCtx(() => [
              createVNode(_component_AppButton, null, {
                default: withCtx(() => [
                  createTextVNode(" Dropdown ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            panel: withCtx(() => [
              createTextVNode(" panel ")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "List" }, {
        default: withCtx(() => [
          createVNode(_component_AppDropdownButton, null, {
            button: withCtx(() => [
              createVNode(_component_AppButton, null, {
                default: withCtx(() => [
                  createTextVNode(" Dropdown ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            panel: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList($setup.list, (item) => {
                  return createVNode(
                    _component_AppDropdownButtonItem,
                    {
                      key: item.value,
                      "has-arrow": ""
                    },
                    {
                      default: withCtx(() => [
                        createTextVNode(
                          toDisplayString(item.label),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                64
                /* STABLE_FRAGMENT */
              ))
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
_sfc_main.__file = "src/modules/ui/components/app/buttons/app-dropdown-button/AppDropdownButton.story.vue";
const AppDropdownButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/buttons/app-dropdown-button/AppDropdownButton.story.vue"]]);
export {
  AppDropdownButton_story as default
};
