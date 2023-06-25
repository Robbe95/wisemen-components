import { _ as __unplugin_components_0$1 } from "./AppDivider-a2d0676c.js";
import { as as defineComponent, aF as ref, b2 as useMouseInElement, aw as resolveComponent, ax as openBlock, aJ as createElementBlock, aB as createBaseVNode, aD as normalizeClass, aA as createVNode, aH as createCommentVNode, aC as renderSlot, aE as createTextVNode, ay as createBlock, b3 as RouterLink, az as withCtx, aI as resolveDynamicComponent } from "./vendor-0d4e1342.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as __unplugin_components_1$1 } from "./TransitionExpand-50512321.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppSidebar",
  props: {
    hasMinified: { type: Boolean, required: false, default: false },
    hasHidden: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const minified = ref(false);
    const hidden = ref(false);
    const handleIconClicked = () => {
      if (props.hasHidden)
        hidden.value = !hidden.value;
      else if (props.hasMinified)
        minified.value = !minified.value;
    };
    const hiddenHoverElement = ref();
    const { isOutside } = useMouseInElement(hiddenHoverElement);
    const __returned__ = { props, minified, hidden, handleIconClicked, hiddenHoverElement, isOutside };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "relative" };
const _hoisted_2$3 = {
  ref: "hiddenHoverElement",
  class: "absolute left-0 z-20 h-screen w-4"
};
const _hoisted_3$2 = { class: "flex items-center justify-between gap-4 p-4" };
const _hoisted_4$1 = { class: "text-xl font-bold" };
const _hoisted_5 = { class: "flex h-full flex-col gap-2 p-4" };
const _hoisted_6 = { class: "p-4" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  const _component_CloseIcon = resolveComponent("CloseIcon");
  const _component_AppDivider = __unplugin_components_0$1;
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode(
      "div",
      _hoisted_2$3,
      null,
      512
      /* NEED_PATCH */
    ),
    $setup.hidden ? (openBlock(), createElementBlock(
      "button",
      {
        key: 0,
        class: normalizeClass(["absolute top-0 z-50 flex h-screen flex-col items-center justify-center overflow-hidden bg-primary-500 text-white transition-all duration-500", {
          "w-8": !$setup.isOutside,
          "w-0": $setup.isOutside
        }]),
        onClick: $setup.handleIconClicked
      },
      [
        createVNode(_component_ChevronRightIcon, { class: "w-3" })
      ],
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true),
    createBaseVNode(
      "div",
      {
        class: normalizeClass(["sticky top-0 flex h-screen w-full flex-col justify-between overflow-auto bg-primary-500 text-white transition-all duration-500", {
          "w-80": !$setup.minified,
          "w-32": $setup.minified,
          "w-0 overflow-hidden": $setup.hidden
        }])
      },
      [
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("h2", _hoisted_4$1, [
              renderSlot(_ctx.$slots, "title"),
              createTextVNode(" Title ")
            ]),
            createBaseVNode("button", { onClick: $setup.handleIconClicked }, [
              $props.hasMinified ? (openBlock(), createBlock(_component_ChevronRightIcon, {
                key: 0,
                class: normalizeClass(["w-3", {
                  "rotate-180 transition-transform": $setup.minified
                }])
              }, null, 8, ["class"])) : createCommentVNode("v-if", true),
              $props.hasHidden ? (openBlock(), createBlock(_component_CloseIcon, {
                key: 1,
                class: "w-3"
              })) : createCommentVNode("v-if", true)
            ])
          ]),
          createVNode(_component_AppDivider),
          createBaseVNode("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "default")
          ])
        ]),
        createBaseVNode("div", null, [
          createVNode(_component_AppDivider),
          createBaseVNode("div", _hoisted_6, [
            renderSlot(_ctx.$slots, "footer"),
            createTextVNode(" Footer ")
          ])
        ])
      ],
      2
      /* CLASS */
    )
  ]);
}
_sfc_main$3.__file = "src/modules/ui/components/app/sidebar/AppSidebar.vue";
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/sidebar/AppSidebar.vue"]]);
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "flex flex-col gap-2" };
const _hoisted_2$2 = { class: "text-lg font-medium" };
const _hoisted_3$1 = { class: "mb-2 flex flex-col gap-1" };
function _sfc_render$2(_ctx, _cache) {
  const _component_AppDivider = __unplugin_components_0$1;
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("p", _hoisted_2$2, [
      renderSlot(_ctx.$slots, "title")
    ]),
    createBaseVNode("div", _hoisted_3$1, [
      renderSlot(_ctx.$slots, "content")
    ]),
    createVNode(_component_AppDivider)
  ]);
}
_sfc_main$2.__file = "src/modules/ui/components/app/sidebar/AppSidebarCategory.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/sidebar/AppSidebarCategory.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppSidebarItem",
  props: {
    to: { type: String, required: false },
    hasChildren: { type: Boolean, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const childrenOpen = ref(false);
    const __returned__ = { childrenOpen, get RouterLink() {
      return RouterLink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "rounded-md bg-primary-600"
};
const _hoisted_2$1 = { class: "flex flex-col gap-1 p-2" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");
  const _component_TransitionExpand = __unplugin_components_1$1;
  return openBlock(), createElementBlock("div", null, [
    (openBlock(), createBlock(resolveDynamicComponent($props.to ? $setup.RouterLink : "button"), {
      class: "flex w-full items-center justify-between gap-2 rounded-md bg-primary-300 px-2 py-1 transition hover:bg-primary-200",
      to: $props.to,
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.childrenOpen = !$setup.childrenOpen)
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default"),
        !$props.hasChildren ? (openBlock(), createBlock(_component_ChevronRightIcon, {
          key: 0,
          class: "w-2 flex-none"
        })) : (openBlock(), createBlock(_component_ChevronDownIcon, {
          key: 1,
          class: normalizeClass(["h-4 flex-none transition-transform duration-500", {
            "rotate-180": $setup.childrenOpen
          }])
        }, null, 8, ["class"]))
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["to"])),
    createVNode(_component_TransitionExpand, null, {
      default: withCtx(() => [
        $props.hasChildren && $setup.childrenOpen ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            renderSlot(_ctx.$slots, "children")
          ])
        ])) : createCommentVNode("v-if", true)
      ]),
      _: 3
      /* FORWARDED */
    })
  ]);
}
_sfc_main$1.__file = "src/modules/ui/components/app/sidebar/AppSidebarItem.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/sidebar/AppSidebarItem.vue"]]);
const _sfc_main = {};
const _hoisted_1 = { class: "grid grid-cols-sidebar" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "transition-all duration-500" },
  " Content here ",
  -1
  /* HOISTED */
);
const _hoisted_3 = { class: "grid grid-cols-sidebar" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "transition-all duration-500" },
  " Content here ",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_AppSidebarItem = __unplugin_components_0;
  const _component_AppSidebarCategory = __unplugin_components_1;
  const _component_AppSidebar = __unplugin_components_2;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Sidebar/AppSidebar" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_AppSidebar, { "has-hidden": "" }, {
              default: withCtx(() => [
                createVNode(_component_AppSidebarCategory, null, {
                  title: withCtx(() => [
                    createTextVNode(" Category 1 ")
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_AppSidebarItem, { to: "/home" }, {
                      default: withCtx(() => [
                        createTextVNode(" Home ")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_AppSidebarItem, { "has-children": "" }, {
                      children: withCtx(() => [
                        createVNode(_component_AppSidebarItem, { to: "/home" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item 1 ")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_AppSidebarItem, { "has-children": "" }, {
                          children: withCtx(() => [
                            createVNode(_component_AppSidebarItem, { to: "/home" }, {
                              default: withCtx(() => [
                                createTextVNode(" Item 1 ")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_AppSidebarItem, { to: "/home" }, {
                              default: withCtx(() => [
                                createTextVNode(" Item 2 ")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_AppSidebarItem, { to: "/home" }, {
                              default: withCtx(() => [
                                createTextVNode(" Item 3 ")
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Item 2 ")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_AppSidebarItem, { to: "/home" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item 3 ")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Dropdown ")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_AppSidebarCategory, null, {
                  title: withCtx(() => [
                    createTextVNode(" Category 2 ")
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_AppSidebarItem, { to: "/home" }, {
                      default: withCtx(() => [
                        createTextVNode(" Item 1 ")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_AppSidebarItem, { to: "/home" }, {
                      default: withCtx(() => [
                        createTextVNode(" Item 2 ")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_AppSidebarItem, { to: "/home" }, {
                      default: withCtx(() => [
                        createTextVNode(" Item 3 ")
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
            _hoisted_2
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Minified" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_AppSidebar, { "has-minified": "" }, {
              default: withCtx(() => [
                createVNode(_component_AppSidebarCategory, null, {
                  title: withCtx(() => [
                    createTextVNode(" Category 1 ")
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_AppSidebarItem, { to: "/home" }, {
                      default: withCtx(() => [
                        createTextVNode(" Home ")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_AppSidebarItem, { "has-children": "" }, {
                      children: withCtx(() => [
                        createVNode(_component_AppSidebarItem, { to: "/home" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item 1 ")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_AppSidebarItem, { "has-children": "" }, {
                          children: withCtx(() => [
                            createVNode(_component_AppSidebarItem, { to: "/home" }, {
                              default: withCtx(() => [
                                createTextVNode(" Item 1 ")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_AppSidebarItem, { to: "/home" }, {
                              default: withCtx(() => [
                                createTextVNode(" Item 2 ")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_AppSidebarItem, { to: "/home" }, {
                              default: withCtx(() => [
                                createTextVNode(" Item 3 ")
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" Item 2 ")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_AppSidebarItem, { to: "/home" }, {
                          default: withCtx(() => [
                            createTextVNode(" Item 3 ")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Dropdown ")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_AppSidebarCategory, null, {
                  title: withCtx(() => [
                    createTextVNode(" Category 2 ")
                  ]),
                  content: withCtx(() => [
                    createVNode(_component_AppSidebarItem, { to: "/home" }, {
                      default: withCtx(() => [
                        createTextVNode(" Item 1 ")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_AppSidebarItem, { to: "/home" }, {
                      default: withCtx(() => [
                        createTextVNode(" Item 2 ")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_AppSidebarItem, { to: "/home" }, {
                      default: withCtx(() => [
                        createTextVNode(" Item 3 ")
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
            _hoisted_4
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
_sfc_main.__file = "src/modules/ui/components/app/sidebar/AppSidebar.story.vue";
const AppSidebar_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/sidebar/AppSidebar.story.vue"]]);
export {
  AppSidebar_story as default
};
