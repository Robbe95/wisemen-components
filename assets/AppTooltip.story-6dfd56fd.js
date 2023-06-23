import { as as defineComponent, aF as ref, b0 as useMouseInElement, bg as onMounted, bn as watchDebounced, bc as watch, bf as nextTick, ax as openBlock, aJ as createElementBlock, aB as createBaseVNode, aC as renderSlot, ay as createBlock, aA as createVNode, az as withCtx, aD as normalizeClass, aH as createCommentVNode, a_ as normalizeProps, a$ as guardReactiveProps, bo as Transition, bp as Teleport, bq as offset, br as flip, bs as shift, bt as computePosition, aw as resolveComponent, aE as createTextVNode } from "./vendor-72f13f2a.js";
import { s as scaleBounceTransition } from "./scaleBounce.transition-7f0f6ada.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as __unplugin_components_0 } from "./AppButton-f3d84d8e.js";
import "./fade.transition-ff73e3ee.js";
import "./AppIcon-81b2fcde.js";
import "./CheckmarkIcon-ef85db79.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppTooltip",
  props: {
    offset: { type: Number, required: true, default: 12 },
    hasNoFlip: { type: Boolean, required: true, default: false },
    hasNoShift: { type: Boolean, required: true, default: false },
    placement: { type: String, required: true, default: "bottom" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const tooltipSlot = ref();
    const element = ref();
    const tooltip = ref();
    const tooltipWrapper = ref();
    const { isOutside: tooltipWrapperOutside } = useMouseInElement(tooltipWrapper);
    const { isOutside: tooltipOutside } = useMouseInElement(tooltip);
    const update = () => {
      if (!element.value || !tooltip.value)
        return;
      const middleware = [];
      if (props.offset)
        middleware.push(offset(props.offset));
      if (!props.hasNoFlip)
        middleware.push(flip());
      if (!props.hasNoShift)
        middleware.push(shift());
      computePosition(element.value, tooltip.value, {
        placement: props.placement,
        middleware
      }).then(({ x, y }) => {
        if (!tooltip.value)
          return;
        Object.assign(tooltip.value.style, {
          left: `${x}px`,
          top: `${y}px`
        });
      });
    };
    const tooltipShow = ref(false);
    const showTooltip = () => {
      tooltipShow.value = true;
      nextTick(() => {
        update();
      });
    };
    const hideTooltip = () => {
      if (tooltipOutside.value && tooltipWrapperOutside.value)
        tooltipShow.value = false;
    };
    onMounted(() => {
      hideTooltip();
      [
        ["focus", showTooltip],
        ["blur", hideTooltip]
      ].forEach(([event, listener]) => {
        if (!element.value)
          return;
        element.value.addEventListener(event, listener);
      });
    });
    const handleEscape = (event) => {
      if (event.key === "Escape")
        hideTooltip();
    };
    watchDebounced(() => [tooltipOutside.value, tooltipWrapperOutside.value], () => {
      hideTooltip();
    }, { debounce: 200, maxWait: 1e3 });
    watch(() => [tooltipOutside.value, tooltipWrapperOutside.value], () => {
      if (!tooltipOutside.value || !tooltipWrapperOutside.value)
        showTooltip();
    });
    const slotEvents = {
      onBlur: hideTooltip,
      onFocus: showTooltip,
      onKeydown: handleEscape
    };
    const __returned__ = { props, tooltipSlot, element, tooltip, tooltipWrapper, tooltipWrapperOutside, tooltipOutside, update, tooltipShow, showTooltip, hideTooltip, handleEscape, slotEvents, get scaleBounceTransition() {
      return scaleBounceTransition;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  ref: "tooltipWrapper",
  class: "relative max-w-max"
};
const _hoisted_2$1 = {
  ref: "element",
  class: "grid max-w-max place-items-center"
};
const _hoisted_3$1 = {
  ref: "tooltipSlot",
  class: "flex w-full max-w-[60ch] flex-col items-center justify-center"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1$1,
    [
      createBaseVNode(
        "div",
        _hoisted_2$1,
        [
          renderSlot(_ctx.$slots, "element", { events: $setup.slotEvents })
        ],
        512
        /* NEED_PATCH */
      ),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(
          Transition,
          normalizeProps(guardReactiveProps($setup.scaleBounceTransition)),
          {
            default: withCtx(() => {
              var _a;
              return [
                $setup.tooltipShow ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    id: "tooltip",
                    ref: "tooltip",
                    role: "tooltip",
                    class: normalizeClass([[((_a = $setup.tooltipSlot) == null ? void 0 : _a.childElementCount) === 0 ? "opacity-0" : "opacity-100"], "absolute z-50 flex min-w-max rounded text-black shadow-main"])
                  },
                  [
                    createBaseVNode(
                      "div",
                      _hoisted_3$1,
                      [
                        renderSlot(_ctx.$slots, "tooltip")
                      ],
                      512
                      /* NEED_PATCH */
                    )
                  ],
                  2
                  /* CLASS */
                )) : createCommentVNode("v-if", true)
              ];
            }),
            _: 3
            /* FORWARDED */
          },
          16
          /* FULL_PROPS */
        )
      ]))
    ],
    512
    /* NEED_PATCH */
  );
}
_sfc_main$1.__file = "src/modules/ui/components/app/tooltip/AppTooltip.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/tooltip/AppTooltip.vue"]]);
const _sfc_main = {};
const _hoisted_1 = { class: "flex w-full items-center justify-center gap-1" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "rounded bg-white p-2 shadow" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "text-sm text-gray-800" }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic veritatis dignissimos mollitia, recusandae, pariatur totam praesentium animi voluptatem explicabo voluptatibus inventore illum eveniet amet ex. Sapiente dignissimos quas quos aut. ")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = { class: "flex h-full w-full items-center justify-center gap-1" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "rounded bg-white p-2 shadow" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "text-sm text-gray-800" }, " Left ")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_AppButton = __unplugin_components_0;
  const _component_AppTooltip = __unplugin_components_1;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Tooltip/AppTooltip" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_AppTooltip, null, {
              element: withCtx(() => [
                createVNode(_component_AppButton, null, {
                  default: withCtx(() => [
                    createTextVNode("Bottom")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              tooltip: withCtx(() => [
                _hoisted_2
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Left" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_AppTooltip, { placement: "left" }, {
              element: withCtx(({ events }) => [
                createVNode(
                  _component_AppButton,
                  normalizeProps(guardReactiveProps(events)),
                  {
                    default: withCtx(() => [
                      createTextVNode(" Left ")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1040
                  /* FULL_PROPS, DYNAMIC_SLOTS */
                )
              ]),
              tooltip: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
              /* STABLE */
            })
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
_sfc_main.__file = "src/modules/ui/components/app/tooltip/AppTooltip.story.vue";
const AppTooltip_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/tooltip/AppTooltip.story.vue"]]);
export {
  AppTooltip_story as default
};
