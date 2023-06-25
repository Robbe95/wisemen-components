import { as as defineComponent, aF as ref, b5 as computed, bk as xe, bl as Ie, bm as Se, ax as openBlock, aJ as createElementBlock, aA as createVNode, az as withCtx, aB as createBaseVNode, bj as normalizeStyle, aD as normalizeClass, aC as renderSlot, bn as ge, ay as createBlock, bo as ye, aw as resolveComponent, aE as createTextVNode } from "./vendor-0d4e1342.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppTabs",
  props: {
    isVertical: { type: Boolean, required: true, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const tabButtons = ref();
    const selectedTab = ref(0);
    const activeTabBounding = computed(() => {
      var _a;
      return (_a = tabButtons.value) == null ? void 0 : _a.children[selectedTab.value].getBoundingClientRect();
    });
    const previousTabsWidthAndHeight = computed(() => {
      var _a;
      let width = 0;
      let height = 0;
      for (let i = 0; i < selectedTab.value; i++) {
        const bounding = (_a = tabButtons.value) == null ? void 0 : _a.children[i].getBoundingClientRect();
        width += (bounding == null ? void 0 : bounding.width) ?? 0;
        height += (bounding == null ? void 0 : bounding.height) ?? 0;
      }
      return { width, height };
    });
    function changeTab(index) {
      selectedTab.value = index;
    }
    const movingStyle = computed(() => {
      var _a, _b;
      return {
        height: `${((_a = activeTabBounding.value) == null ? void 0 : _a.height) ?? 0}px`,
        width: `${((_b = activeTabBounding.value) == null ? void 0 : _b.width) ?? 0}px`,
        transform: props.isVertical ? `translateY(${previousTabsWidthAndHeight.value.height}px)` : `translateX(${previousTabsWidthAndHeight.value.width}px)`
      };
    });
    const __returned__ = { props, tabButtons, selectedTab, activeTabBounding, previousTabsWidthAndHeight, changeTab, movingStyle, get TabGroup() {
      return xe;
    }, get TabList() {
      return Ie;
    }, get TabPanels() {
      return Se;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "" };
const _hoisted_2 = { class: "relative z-10" };
const _hoisted_3 = { class: "z-0" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["TabGroup"], {
      "selected-index": $setup.selectedTab,
      vertical: $props.isVertical,
      as: "div",
      class: normalizeClass({
        "flex flex-row gap-2": $props.isVertical
      }),
      onChange: $setup.changeTab
    }, {
      default: withCtx(() => [
        createVNode($setup["TabList"], { class: "max-w-max rounded bg-gray-100 p-1" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode(
                  "div",
                  {
                    class: "absolute top-0 z-0 rounded bg-white transition-transform",
                    style: normalizeStyle($setup.movingStyle)
                  },
                  null,
                  4
                  /* STYLE */
                )
              ]),
              createBaseVNode(
                "div",
                {
                  ref: "tabButtons",
                  class: normalizeClass(["relative z-10", { "flex flex-col": $props.isVertical }])
                },
                [
                  renderSlot(_ctx.$slots, "tabs")
                ],
                2
                /* CLASS */
              )
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        createVNode($setup["TabPanels"], { class: "mt-2" }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "panels")
          ]),
          _: 3
          /* FORWARDED */
        })
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["selected-index", "vertical", "class"])
  ]);
}
_sfc_main$3.__file = "src/modules/ui/components/app/tabs/AppTabs.vue";
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/tabs/AppTabs.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppTabPanel",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get TabPanel() {
      return ge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["TabPanel"], null, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$2.__file = "src/modules/ui/components/app/tabs/AppTabPanel.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/tabs/AppTabPanel.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppTabButton",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get Tab() {
      return ye;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Tab"], { as: "template" }, {
    default: withCtx(({ selected }) => [
      createBaseVNode(
        "button",
        {
          class: normalizeClass([
            "w-full max-w-max rounded border px-16 py-2",
            {
              "border-primary-500 bg-transparent": selected,
              "border-transparent bg-transparent": !selected
            }
          ])
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      )
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$1.__file = "src/modules/ui/components/app/tabs/AppTabButton.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/tabs/AppTabButton.vue"]]);
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_AppTabButton = __unplugin_components_0;
  const _component_AppTabPanel = __unplugin_components_1;
  const _component_AppTabs = __unplugin_components_2;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Tabs/AppTabs" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_AppTabs, null, {
            tabs: withCtx(() => [
              createVNode(_component_AppTabButton, null, {
                default: withCtx(() => [
                  createTextVNode("Tab 1")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_AppTabButton, null, {
                default: withCtx(() => [
                  createTextVNode("Tab 2")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_AppTabButton, null, {
                default: withCtx(() => [
                  createTextVNode("Tab 3")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            panels: withCtx(() => [
              createVNode(_component_AppTabPanel, { class: "bg-red-500" }, {
                default: withCtx(() => [
                  createTextVNode(" Panel 1 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_AppTabPanel, { class: "bg-green-500" }, {
                default: withCtx(() => [
                  createTextVNode(" Panel 2 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_AppTabPanel, { class: "bg-purple-500" }, {
                default: withCtx(() => [
                  createTextVNode(" Panel 3 ")
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
      }),
      createVNode(_component_Variant, { title: "Vertical" }, {
        default: withCtx(() => [
          createVNode(_component_AppTabs, { "is-vertical": "" }, {
            tabs: withCtx(() => [
              createVNode(_component_AppTabButton, null, {
                default: withCtx(() => [
                  createTextVNode("Tab 1")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_AppTabButton, null, {
                default: withCtx(() => [
                  createTextVNode("Tab 2")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_AppTabButton, null, {
                default: withCtx(() => [
                  createTextVNode("Tab 3")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            panels: withCtx(() => [
              createVNode(_component_AppTabPanel, { class: "bg-red-500" }, {
                default: withCtx(() => [
                  createTextVNode(" Panel 1 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_AppTabPanel, { class: "bg-green-500" }, {
                default: withCtx(() => [
                  createTextVNode(" Panel 2 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_AppTabPanel, { class: "bg-purple-500" }, {
                default: withCtx(() => [
                  createTextVNode(" Panel 3 ")
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
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/app/tabs/AppTabs.story.vue";
const AppTabs_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/tabs/AppTabs.story.vue"]]);
export {
  AppTabs_story as default
};
